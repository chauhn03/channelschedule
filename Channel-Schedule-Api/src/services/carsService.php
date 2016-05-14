<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Cars
 *
 * @author chau.hoang
 */

namespace Services;

require __DIR__ . '/databaseService.php';

class Cars {

    function __construct() {        
    }

    function getCars() {
        $db = databaseServices::$db;
        foreach ($db->cars() as $car) {
            $cars[] = array(
                'id' => $car['id'],
                'year' => $car['year'],
                'make' => $car['make'],
                'model' => $car['model']
            );
        };
        
        return $cars;
    }
}
