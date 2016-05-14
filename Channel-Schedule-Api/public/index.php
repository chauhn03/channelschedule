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

require __DIR__. '/../vendor/notorm-master/notorm-master/NotORM.php';
require __DIR__. '/../src/services/carsService.php';

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

$app->get('/cars/{all}', function(Request $request, Response $response){
    global $db, $carsService;
//    $cars = $carsService->getCars();
    foreach ($db->cars() as $car) {
          $cars[]  = array(
            'id' => $car['id'],
            'year' => $car['year'],
            'make' => $car['make'],
            'model' => $car['model']
        );
    }
    
    $response->withHeader("Content-Type", "application/json");
    echo json_encode($cars, JSON_FORCE_OBJECT);
});

$app->get('/cars/id/{id}', function(Request $request, Response $response){
    global  $db;    
    $id = $request->getAttribute('id');
    $response->withHeader("Content-Type", "application/json");
    $car = $db->cars()->where('id', $id);
    
     if($data = $car->fetch()){
        echo json_encode(array(
            'id' => $data['id'],
            'year' => $data['year'],
            'make' => $data['make'],
            'model' => $data['model']
        ));
    }
    else{
        echo json_encode(array(
            'status' => false,
            'message' => "Car ID $id does not exist"
        ));
    }
});

// Run app
$app->run();
