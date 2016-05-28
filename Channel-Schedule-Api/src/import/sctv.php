<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of SCTV
 *
 * @author chau.hoang
 */
class SCTV {

//put your code here
    private $channelsService;
    private $httpClient;

    function __construct($db, iHttpClient $httpClient) {
        $this->channelsService = new channelsService($db);
        $this->httpClient = $httpClient;
    }

    function importSchedule(int $channelId, $date) {
        $html = $this->httpClient->request($channelId, $date);
        $schedules = $this->readHtml($html);
    }

    function readHtml($html) {
        $doc = new DOMDocument();
        $doc->loadHTML('<meta http-equiv="content-type" content="text/html; charset=utf-8">' . $html);
        $contentNode = $doc->getElementById('ctl00_ContentPlaceHolder1_ctl00_ctl01_RadAjaxPanel2');
        $tableScheduleNodes = getElementsByClass($contentNode, 'table', 'table');
        $tableScheduleNode = $tableScheduleNodes[0];
        $tds = $tableScheduleNode->getElementsByTagName('td');
        foreach ($tds as $td) {
            echo $td->textContent . '; ';
        }
    }

}
