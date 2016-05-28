<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of databaseServices
 *
 * @author chau.hoang
 */

namespace Services;

use PDO;
use NotORM;

class databaseServices {

    public static $db;

    function __construct() {
        $dbhost = 'localhost';
        $dbuser = 'root';
        $dbpass = '';
        $dbname = 'garage';
        $dbmethod = 'mysql:dbname=';

        $dsn = $dbmethod . $dbname;
        $pdo = new PDO($dsn, $dbuser, $dbpass);
        $db = new NotORM($pdo);
    }       
}
