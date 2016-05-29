<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of schedules
 *
 * @author chau.hoang
 */
class schedulesRepository {

    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    function getAll() {
        return $this->db->schedules();
    }

    function toArray($schedules) {
        $arraySchedules = array();
        foreach ($schedules as $data) {
            $arraySchedules[] = array(
                "ChannelId" => $data->ChannelId,
                "Date" => $data->Date,
                "Programme" => $data->Programme,
                "StartTime" => $data->StartTime
            );
        }
        
        return $arraySchedules;
    }

    function insert($schedules) {
        $arraySchedules = $this->toArray($schedules);

        try {
         $this->db->schedules()->insert_multi($arraySchedules);   
         echo 'insert completed';
//            print_r($arraySchedules);
            var_dump($arraySchedules);
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

}
