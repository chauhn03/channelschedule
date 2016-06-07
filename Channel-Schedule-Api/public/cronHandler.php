<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

require __DIR__ . '/../vendor/autoload.php';
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

function importDaily() {
    global $db;
    $sctvRequestService = new sctvRequestService();

    $importSctv = new SCTV($db, $sctvRequestService);
    $stringFormatDate = date('Y-m-d');
    $date = date_create($stringFormatDate);

//    $importSctv->importSchedules();
    $importSctv->importSchedule(3, $date);
    echo 'import successfully';
}

importDaily();