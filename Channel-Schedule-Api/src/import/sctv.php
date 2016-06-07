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
    private $schedulesRepository;
    private $httpClient;

    function __construct($db, iHttpClient $httpClient) {
        $this->channelsService = new channelsService($db);
        $this->schedulesRepository = new schedulesRepository($db);
        $this->httpClient = $httpClient;
    }

    function importSchedules() {
       $channels = $this->channelsService->getChannels();
       foreach ($channels as $channel) {
           echo $channel['Name'];
           echo '-';
           echo $channel['ExternalId'];
           echo "<br/>\n";
       }
    }
    
    function importSchedule($channelId, $date) {
        $html = $this->httpClient->request($channelId, $date);
        $schedules = $this->readHtml($html, $channelId, $date);
        foreach ($schedules as $schedule) {
            var_dump($schedule);
        }
        
        $this->schedulesRepository->insert($schedules);
    }

    function readHtml($html, $channelId, $date) {                
        $doc = new DOMDocument();
        $doc->loadHTML('<meta http-equiv="content-type" content="text/html; charset=utf-8">' . $html);
        $contentNode = $doc->getElementById('ctl00_ContentPlaceHolder1_ctl00_ctl01_RadAjaxPanel2');
        $tableScheduleNodes = getElementsByClass($contentNode, 'table', 'table');
        $tableScheduleNode = $tableScheduleNodes[0];
        $tds = $tableScheduleNode->getElementsByTagName('td');
        
        $result = array();
        $schedule;
        $index = 0;        
        foreach ($tds as $td) {   
            $odd = $index % 2;
            if($odd == 0){                
                $schedule = new schedule();
                $schedule->Date = $date;
                $schedule->ChannelId = $channelId;                
                $schedule->StartTime = trim($td->textContent);
            }
            else{                                
                $schedule->Programme = trim($td->textContent);
                $result[] = $schedule;
            }
            
            $index++;
        }
        
        return $result;
    }
}
