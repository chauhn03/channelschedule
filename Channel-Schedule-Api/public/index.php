<?php

if (PHP_SAPI == 'cli-server') {
    // To help the built-in PHP dev server, check if the request was actually for
    // something which should probably be served as a static file
    $file = __DIR__ . $_SERVER['REQUEST_URI'];
    if (is_file($file)) {
        return false;
    }
}

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require __DIR__ . '/../vendor/autoload.php';

session_start();

// Instantiate the app
$settings = require __DIR__ . '/../src/settings.php';

$app = new \Slim\App($settings);

// Set up dependencies
require __DIR__ . '/../src/dependencies.php';

// Register middleware
require __DIR__ . '/../src/middleware.php';

// Register routes
require __DIR__ . '/../src/routes.php';

require __DIR__ . '/../vendor/notorm-master/notorm-master/NotORM.php';
require __DIR__ . '/../src/services/carsService.php';
require __DIR__ . '/../src/Client.php';
require __DIR__ . '/../src/HTMLExtract.php';
require __DIR__ . '/../src/models/channel.php';
require __DIR__ . '/../src/services/channelsService.php';

$carsService = new Services\Cars();
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
$dbname = 'schedulechannel';
$dbmethod = 'mysql:dbname=';

$dsn = $dbmethod . $dbname;
$pdo = new PDO($dsn, $dbuser, $dbpass);
$db = new NotORM($pdo);

$app->get('/channels/{all}', function(Request $request, Response $response) {
    global $db, $carsService;
    $channelsService = new channelsService($db);
    $channels = $channelsService->getChannels();
    $response->withHeader("Content-Type", "application/json");
    echo json_encode($channels, JSON_FORCE_OBJECT);
});

$app->get('/channels/get/{id}', function(Request $request, Response $response) {
    global $db, $carsService;
    $id = $request->getAttribute('id');

    $channelsService = new channelsService($db);
    $channels = $channelsService->getChannel($id);
    $response->withHeader("Content-Type", "application/json");
    echo json_encode($channels, JSON_FORCE_OBJECT);
});

$app->get('/channel/insert', function(Request $request, Response $response) {
    global $db, $carsService;
    $channelsService = new channelsService($db);
    $channelsService->generateChannels();
    $response->withStatus(200);
    echo $response->getStatusCode();
});

function getElementsByClass(&$parentNode, $tagName, $className) {
    $nodes = array();

    $childNodeList = $parentNode->getElementsByTagName($tagName);
    for ($i = 0; $i < $childNodeList->length; $i++) {
        $temp = $childNodeList->item($i);
        if (stripos($temp->getAttribute('class'), $className) !== false) {
            $nodes[] = $temp;
        }
    }

    return $nodes;
}

$app->get('/foo/bar', function(Request $request, Response $response) {
    $response = getSCTV();
    $html = (string) $response->getBody()->getContents();

    $doc = new DOMDocument();
    $doc->loadHTML('<meta http-equiv="content-type" content="text/html; charset=utf-8">' . $html);
    $contentNode = $doc->getElementById('ctl00_ContentPlaceHolder1_ctl00_ctl01_RadAjaxPanel2');
    $tableScheduleNodes = getElementsByClass($contentNode, 'table', 'table');
    $tableScheduleNode = $tableScheduleNodes[0];
    $tds = $tableScheduleNode->getElementsByTagName('td');
    foreach ($tds as $td) {
        echo $td->textContent . '; ';
    }
});
// Run app
$app->run();
