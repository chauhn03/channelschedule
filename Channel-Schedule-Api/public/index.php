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

$carsService = new Services\Cars();
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
$dbname = 'garage';
$dbmethod = 'mysql:dbname=';

$dsn = $dbmethod . $dbname;
$pdo = new PDO($dsn, $dbuser, $dbpass);
$db = new NotORM($pdo);
//$app->get('/hello/{name}', function (Request $request, Response $response) {
//    global $container;    
//    $name = $request->getAttribute('name');
//    $response->getBody->write("Hello, $name");     
//   return $response;
//});

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
//    $divs = extract_tags($html, "<div>");    
//    $html = "<tr><td>a</td></tr>".
//            "<tr><td>b</td></tr>".
//            "<tr><td>c</td></tr>".
//            "<tr><td>d</td></tr>".
//            "<tr><td>e</td></tr>".
//            "<tr><td>f</td></tr>";
//    $divs = getTextBetweenTags($html, "tr");
//    foreach ($divs as $div) {
//        echo "<div>". $div . "</div>";
//    }
    
});
// Run app
$app->run();
