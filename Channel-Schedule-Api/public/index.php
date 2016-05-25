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

$carsService = new Services\Cars();
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
$dbname = 'schedulechannel';
$dbmethod = 'mysql:dbname=';

$dsn = $dbmethod . $dbname;
$pdo = new PDO($dsn, $dbuser, $dbpass);
$db = new NotORM($pdo);

$app->get('/cars/{all}', function(Request $request, Response $response) {
    global $db, $carsService;
//    $cars = $carsService->getCars();
    foreach ($db->cars() as $car) {
        $cars[] = array(
            'id' => $car['id'],
            'year' => $car['year'],
            'make' => $car['make'],
            'model' => $car['model']
        );
    }

    $response->withHeader("Content-Type", "application/json");
    echo json_encode($cars, JSON_FORCE_OBJECT);
});

$app->get('/cars/id/{id}', function(Request $request, Response $response) {
    global $db;
    $id = $request->getAttribute('id');
    $response->withHeader("Content-Type", "application/json");
    $car = $db->cars()->where('id', $id);

    if ($data = $car->fetch()) {
        echo json_encode(array(
            'id' => $data['id'],
            'year' => $data['year'],
            'make' => $data['make'],
            'model' => $data['model']
        ));
    } else {
        echo json_encode(array(
            'status' => false,
            'message' => "Car ID $id does not exist"
        ));
    }
});

function getElementsByClass(&$parentNode, $tagName, $className) {
    $nodes= array();

    $childNodeList = $parentNode->getElementsByTagName($tagName);
    for ($i = 0; $i < $childNodeList->length; $i++) {
        $temp = $childNodeList->item($i);
        if (stripos($temp->getAttribute('class'), $className) !== false) {
            $nodes[]=$temp;
        }
    }

    return $nodes;
}

function insertChannel(Channel $data){    
    global $db;
    $channels = $db->channels();
    $channel = array(
        "Code" => $data->Code,
        "Name" => $data->Name,
        "ExternalId" => $data->ExternalId,
        "ProviderId" => $data->ProviderId
    );
    
    $channels->insert($channel);
}

function insertChannels($param) {
    $sctv7 = new Channel();
    $sctv7->Code = "SCTV7";
    $sctv7->Name = "SCTV7";
    $sctv7->ExternalId = 7;
    $sctv7->ProviderId = 1;
    insertChannel($sctv7);
}

$app->get('/channel/insert', function(Request $request, Response $response) {
    insertChannels(NULL);
});

$app->get('/foo/bar', function(Request $request, Response $response) {
    $response = getSCTV();
    $html =  (string)$response->getBody()->getContents();
    
    $doc = new DOMDocument();
    $doc->loadHTML('<meta http-equiv="content-type" content="text/html; charset=utf-8">'. $html);
    $contentNode = $doc->getElementById('ctl00_ContentPlaceHolder1_ctl00_ctl01_RadAjaxPanel2');    
    $tableScheduleNodes = getElementsByClass($contentNode, 'table', 'table');   
    $tableScheduleNode = $tableScheduleNodes[0];
    $tds = $tableScheduleNode->getElementsByTagName('td');
    foreach ($tds as $td){                
        echo $td->textContent . '; ';
        
    }
});
// Run app
$app->run();
