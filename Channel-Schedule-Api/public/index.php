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

require __DIR__ . '/config.php';
require __DIR__ . '/../vendor/notorm-master/notorm-master/NotORM.php';
require __DIR__ . '/../src/api/carsService.php';
//require __DIR__ . '/../src/Client.php';
require __DIR__ . '/../src/Timer.php';
require __DIR__ . '/../src/HTMLExtract.php';

require __DIR__ . '/../src/models/channel.php';
require __DIR__ . '/../src/models/schedule.php';

require __DIR__ . '/../src/repositories/channelsService.php';
require __DIR__ . '/../src/repositories/schedulesRepository.php';

require __DIR__ . '/../src/import/iHttpClient.php';
require __DIR__ . '/../src/import/sctvRequestService.php';
require __DIR__ . '/../src/import/sctv.php';

$pdo = new PDO($dsn, $dbuser, $dbpass);
$db = new NotORM($pdo);

$app->get('/channels/{all}', function(Request $request, Response $response) {
    global $db;
//    $channelsService = new channelsService($db);
    $sctv = new SCTV($db);
    $channels = $sctv->importSchedule();
    $response->withHeader("Content-Type", "application/json");
    echo json_encode($channels, JSON_FORCE_OBJECT);
});

$app->get('/channels/get/{id}', function(Request $request, Response $response) {
    global $db;
    $id = $request->getAttribute('id');

    $channelsService = new channelsService($db);
    $channels = $channelsService->getChannel($id);
    $response->withHeader("Content-Type", "application/json");
    echo json_encode($channels, JSON_FORCE_OBJECT);
});

$app->get('/channel/insert', function(Request $request, Response $response) {
    global $db;
    $channelsService = new channelsService($db);
    $channelsService->generateChannels();
    $response->withStatus(200);
    echo $response->getStatusCode();
});

$app->get('/schedules/import', function(Request $request, Response $response) {
    global $db;
    $sctvRequestService = new sctvRequestService();

    $importSctv = new SCTV($db, $sctvRequestService);
    $stringFormatDate = date('Y-m-d');
    $date = date_create($stringFormatDate);
    
//    $importSctv->importSchedules();
    $importSctv->importSchedule(16, $date);
});

$app->get('/schedules/all', function(Request $request, Response $response) {
    global $db;
    $schedulesRepository = new schedulesRepository($db);
    $schedules = $schedulesRepository->getAll();

    $response->withHeader("Content-Type", "application/json");
    echo json_encode($schedules, JSON_FORCE_OBJECT);       
});

// Run app
$app->run();
