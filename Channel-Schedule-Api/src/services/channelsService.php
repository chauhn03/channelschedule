<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of channelsService
 *
 * @author chau.hoang
 */
class channelsService {

    //put your code here
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    public function getChannels() {
        return $this->db->channels();
    }

    public function getChannel($id) {
        return $this->db->channels()->where("Id", $id);
    }

    public function insertChannel(Channel $data) {
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

    public function generateChannels() {
        $sctv7 = new Channel();
        $sctv7->Code = "SCTV7";
        $sctv7->Name = "SCTV7";
        $sctv7->ExternalId = 7;
        $sctv7->ProviderId = 1;
        $this->insertChannel($sctv7);
    }

}
