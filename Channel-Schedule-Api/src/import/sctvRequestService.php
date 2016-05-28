<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of sctvRequestService
 *
 * @author chau.hoang
 */
class sctvRequestService implements iHttpClient {

    private function getSCTVHeader() {
        return [
            'Accept' => '*/*',
            'Accept-Encoding' => 'gzip, deflate',
            'Accept-Language' => 'en-US,en;q=0.8',
            'Cache-Control' => 'no-cache',
            'Connection' => 'keep-alive',
            'Content-Length' => 'Content-Length',
            'Content-Type' => 'application/x-www-form-urlencoded; charset=UTF-8',
            'Cookie' => '_gat=1; __atuvc=5%7C20; __atuvs=5739f2992d5057f1001; _ga=GA1.3.1540978709.1463362280',
            'Host' => 'www.sctv.com.vn',
            'Origin' => 'http://www.sctv.com.vn',
            'Referer' => 'http://www.sctv.com.vn/lich-phat-song.html',
            'User-Agent' => 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36',
            'X-MicrosoftAjax' => 'Delta=true',
            'X-Requested-With' => 'XMLHttpRequest',
        ];
    }

    function getSCTVFormParams($channelExternalId, $date) {
        return [
            'ctl00$RadScriptManager1' => 'ctl00$RadScriptManager1|ctl00$ContentPlaceHolder1$ctl00$ctl01$ddlChannel',
            'ctl00_RadScriptManager1_TSM' => ';;System.Web.Extensions, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35:en-US:50b12c66-1dd3-4ebf-87e6-55014086ad94:ea597d4b:b25378d2;Telerik.Web.UI, Version=2012.1.411.35, Culture=neutral, PublicKeyToken=121fae78165ba3d4:en-US:4cad056e-160b-4b85-8751-cc8693e9bcd0:16e4e7cd:ed16cbdc:f7645509:7c926187:8674cba1:b7778d6c:c08e9f8a:a51ee93e:59462f1',
            '__VIEWSTATE' => '/wEPDwUKMTA3MTA2NDk2OA9kFgJmD2QWBAIBD2QWAgIDDxYCHgdjb250ZW50ZGQCAw8WAh4GYWN0aW9uBRQvbGljaC1waGF0LXNvbmcuaHRtbBYCAgMPZBYCAgEPZBYCAgEPZBYGZg9kFgICAQ9kFgJmDxYCHgtfIUl0ZW1Db3VudGZkAgEPZBYCAgEPZBYIAgMPDxYCHhdFbmFibGVBamF4U2tpblJlbmRlcmluZ2hkZAIFDxAPFgYeDURhdGFUZXh0RmllbGQFB0NoYW5uZWweDkRhdGFWYWx1ZUZpZWxkBQxDaGFubmVsTWFwSUQeC18hRGF0YUJvdW5kZ2QQFSoSLS0gQ2jhu41uIGvDqm5oIC0tBVNDVFYxBlNDVFYgMg5TQ1RWIDMgLSBTRUVUVgZTQ1RWIDQGU0NUViA1BlNDVFYgNgZTQ1RWIDcGU0NUViA4BlNDVFYgOQdTQ1RWIDEwEVNDVFYgMTEgLSBUViBTVEFSB1NDVFYgMTIHU0NUViAxMwdTQ1RWIDE0B1NDVFYgMTUHU0NUViAxNhZTQ1RWIFBoaW0gVOG7lW5nIEjhu6NwElNDVFYgSEQgVGjhu4MgVGhhbwVWVEMxNAVWVEMxNgRWVEMyBFZUQzMLVlRDNS1Tb2ZhVFYEVlRDOARUSEJUBFRISEcHVEhEVGhhcARWVEMxCFRvZGF5IFRWDFRIIE5JTkggQklOSAdRUFZOIEhED1ZUQzktTEVUJ1MgVklFVAdWVFYgSFVFA0hCTwdDaW5lbWF4CUZveCBTcG9ydApTVEFSTU9WSUVTClNUQVJTUE9SVFMJU1RBUldPUkxEA0FYTgJEVxUqATABMgEzAzE3OQE1ATYBNwE4ATkCMTYCNzcCNjECNjIDMTA1AjM2AjEwAzEwMwExAzEwOQMxNTcDMTU5ATABMAMxNzEBMAI0OQEwAjM4AjYzAjU5Ajk4AzEyOAI4OQI0MAI3MAI3NgI1NwI3MQI1OAI4MgI4MQI5MRQrAypnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2cWAQIBZAIHDw8WAh4MU2VsZWN0ZWREYXRlBgBoxlnifNOIZBYEZg8UKwAIDxYMHgRTa2luBQdEZWZhdWx0HgRUZXh0BRMyMDE2LTA1LTE2LTAwLTAwLTAwHhFFbmFibGVBcmlhU3VwcG9ydGgeDUxhYmVsQ3NzQ2xhc3MFB3JpTGFiZWwfA2geEV9za2lwTU1WYWxpZGF0aW9uaGQWBh4FV2lkdGgbAAAAAAAAWUAHAAAAHghDc3NDbGFzcwURcmlUZXh0Qm94IHJpSG92ZXIeBF8hU0ICggIWBh8NGwAAAAAAAFlABwAAAB8OBRFyaVRleHRCb3ggcmlFcnJvch8PAoICFgYfDRsAAAAAAABZQAcAAAAfDgUTcmlUZXh0Qm94IHJpRm9jdXNlZB8PAoICFgYfDRsAAAAAAABZQAcAAAAfDgUTcmlUZXh0Qm94IHJpRW5hYmxlZB8PAoICFgYfDRsAAAAAAABZQAcAAAAfDgUUcmlUZXh0Qm94IHJpRGlzYWJsZWQfDwKCAhYGHw0bAAAAAAAAWUAHAAAAHw4FEXJpVGV4dEJveCByaUVtcHR5Hw8CggIWBh8NGwAAAAAAAFlABwAAAB8OBRByaVRleHRCb3ggcmlSZWFkHw8CggJkAgIPFCsADQ8WEgUPUmVuZGVySW52aXNpYmxlZwUNU2VsZWN0ZWREYXRlcw8FjwFUZWxlcmlrLldlYi5VSS5DYWxlbmRhci5Db2xsZWN0aW9ucy5EYXRlVGltZUNvbGxlY3Rpb24sIFRlbGVyaWsuV2ViLlVJLCBWZXJzaW9uPTIwMTIuMS40MTEuMzUsIEN1bHR1cmU9bmV1dHJhbCwgUHVibGljS2V5VG9rZW49MTIxZmFlNzgxNjViYTNkNBQrAAAFDUN1bHR1cmVOYW1lSUQFBXZpLVZOBQtTcGVjaWFsRGF5cw8FkgFUZWxlcmlrLldlYi5VSS5DYWxlbmRhci5Db2xsZWN0aW9ucy5DYWxlbmRhckRheUNvbGxlY3Rpb24sIFRlbGVyaWsuV2ViLlVJLCBWZXJzaW9uPTIwMTIuMS40MTEuMzUsIEN1bHR1cmU9bmV1dHJhbCwgUHVibGljS2V5VG9rZW49MTIxZmFlNzgxNjViYTNkNBQrAAAFEUVuYWJsZU11bHRpU2VsZWN0aAUETWluRAYAQFcgUwVRCAUNQ3VsdHVyZUluZm9JRCgpbVN5c3RlbS5HbG9iYWxpemF0aW9uLkN1bHR1cmVJbmZvLCBtc2NvcmxpYiwgVmVyc2lvbj00LjAuMC4wLCBDdWx0dXJlPW5ldXRyYWwsIFB1YmxpY0tleVRva2VuPWI3N2E1YzU2MTkzNGUwODkFdmktVk4FCUN1bHR1cmVJRAKqCAUQVmlld1NlbGVjdG9yVGV4dAUBeA8WBh8KaB8IBQdEZWZhdWx0HwNoZGQWBB8OBQtyY01haW5UYWJsZR8PAgIWBB8OBQxyY090aGVyTW9udGgfDwICZBYEHw4FCnJjU2VsZWN0ZWQfDwICZBYEHw4FCnJjRGlzYWJsZWQfDwICFgQfDgUMcmNPdXRPZlJhbmdlHw8CAhYEHw4FCXJjV2Vla2VuZB8PAgIWBB8OBQdyY0hvdmVyHw8CAhYEHw4FMVJhZENhbGVuZGFyTW9udGhWaWV3IFJhZENhbGVuZGFyTW9udGhWaWV3X0RlZmF1bHQfDwICFgQfDgUJcmNWaWV3U2VsHw8CAmQCCQ9kFggCAw8WAh8CAjIWZAIBD2QWAmYPFQIFMDA6MzAWVuG7iiBOR+G7jFQgVMOMTkggWcOKVWQCAg9kFgJmDxUCBTAwOjUwE1Thu6ogR0nDgyBMxq9VIExJTkhkAgMPZBYCZg8VAgUwMTozMBdT4buQTkcgVEjhu6wgLSBU4bqsUCAyOWQCBA9kFgJmDxUCBTAxOjQwEVTDjE5IIEzDg05HIE3huqBOZAIFD2QWAmYPFQIFMDI6MDUUNVMgT05MSU5FIC0gVOG6rFAgMTRkAgYPZBYCZg8VAgUwMjozMChLSU0gQ0hJIEPDgCBQSMOBTyAtIFThuqxQIDE2LDE3LDE4LDE5LDIwZAIHD2QWAmYPFQIFMDM6MTIeTeG7lkkgTkfDgFkgMSBDSFVZ4buGTiBWVUlfVDg1ZAIID2QWAmYPFQIFMDM6MzAhQuG7mCBU4buoIFLhuq5DIFLhu5BJX1AxX1ThuqxQIDE0ZAIJD2QWAmYPFQIFMDQ6MTAeTeG7lkkgTkfDgFkgMSBDSFVZ4buGTiBWVUlfVDg2ZAIKD2QWAmYPFQIFMDQ6MzArQ8av4bucSSDEkOG7giBOR+G6qk1fQ1BDTl9U4bqsUCAxOSwyMCwyMSwyMmQCCw9kFgJmDxUCBTA1OjA3H03hu5ZJIE5Hw4BZIDEgQ0hVWeG7hk4gVlVJX1QxOThkAgwPZBYCZg8VAgUwNTozMDJUUuG7kE5HIMSQw4FOSCBYVcOUSSwgS8OITiBUSOG7lEkgTkfGr+G7okNfVOG6rFAgNWQCDQ9kFgJmDxUCBTA1OjUyFUJBIMSQ4buSTkcgQuG6oEMgTsOJTmQCDg9kFgJmDxUCBTA2OjMwF0JJ4bq+VCBTQUkgVuG6qk4gUEjhuqBNZAIPD2QWAmYPFQIFMDY6NTAUSOG6vlQgVEhV4buQQyBDSOG7rkFkAhAPZBYCZg8VAgUwNzozMBdT4buQTkcgVEjhu6wgLSBU4bqsUCAzMGQCEQ9kFgJmDxUCBTA3OjM5IEjhu4xDIEzDgE0gTkfGr+G7nEkgVEjDgE5IIFBI4buQZAISD2QWAmYPFQIFMDg6MzAmQ8av4bucSSBYVVnDik4gVmnhu4ZUX1ThuqxQIDZfUEjhuqZOIDFkAhMPZBYCZg8VAgUwOTozMCZDxq/hu5xJIFhVWcOKTiBWaeG7hlRfVOG6rFAgNl9QSOG6pk4gMmQCFA9kFgJmDxUCBTEwOjA3Hk3hu5ZJIE5Hw4BZIDEgQ0hVWeG7hk4gVlVJX1Q5OGQCFQ9kFgJmDxUCBTEwOjMwGUvhurogQ+G6rlAgR+G6tlAgQsOAIEdJw4BkAhYPZBYCZg8VAgUxMTowMAlMRU8gVEhBTkdkAhcPZBYCZg8VAgUxMTozMDJUUuG7kE5HIMSQw4FOSCBYVcOUSSwgS8OITiBUSOG7lEkgTkfGr+G7okNfVOG6rFAgNmQCGA9kFgJmDxUCBTExOjUxEcOUSSBLSFVZ4bq+TiBNw4NJZAIZD2QWAmYPFQIFMTI6MzAMQ0jGr0EgTVXhu5hOZAIaD2QWAmYPFQIFMTI6NTEdVEhV4buQQyBLSMOTQyBUSFXhu5BDIEPGr+G7nElkAhsPZBYCZg8VAgUxMzoxMR5N4buWSSBOR8OAWSAxIENIVVnhu4ZOIFZVSV9UOTlkAhwPZBYCZg8VAgUxMzozMA9USEFNIFRIw4wgVEjDgk1kAh0PZBYCZg8VAgUxMzo1OQ5M4buWSSBU4bqgSSBBSWQCHg9kFgJmDxUCBTE0OjMwFlbhu6IgxJBJIEzhuqRZIENI4buSTkdkAh8PZBYCZg8VAgUxNTowMR1N4bq4IFbhu6IgTMOKTiDEkOG7nElfMl9TWDEuM2QCIA9kFgJmDxUCBTE1OjMwE0NIVU5HIE3hu5hUIFhV4buSTkdkAiEPZBYCZg8VAgUxNjowNBNTQSBMxq/hu5pJIE5I4buGTl80ZAIiD2QWAmYPFQIFMTY6MzATRMODWSBT4buQIELDjSDhuqhOIGQCIw9kFgJmDxUCBTE3OjA0Glbhu6IgxqBJLCBTQU8gS0jDlE5HIFNJTkg/ZAIkD2QWAmYPFQIFMTc6MzAyVFLhu5BORyDEkMOBTkggWFXDlEksIEvDiE4gVEjhu5RJIE5Hxq/hu6JDX1ThuqxQIDdkAiUPZBYCZg8VAgUxNzo0ORNM4buMIE7Gr+G7mkMgVEjhuqZOZAImD2QWAmYPFQIFMTg6MzAcSOG6oE5IIFBIw5pDIFRST05HIFThuqZNIFRBWWQCJw9kFgJmDxUCBTE4OjUwC1RI4bqmWSBMQU5HZAIoD2QWAmYPFQIFMTk6MTIfTeG7lkkgTkfDgFkgMSBDSFVZ4buGTiBWVUlfVDEwMWQCKQ9kFgJmDxUCBTE5OjMwFkNPTiBOw4BPIENI4bqiIEzDgCBDT05kAioPZBYCZg8VAgUxOTo1OB9N4buWSSBOR8OAWSAxIENIVVnhu4ZOIFZVSV9UMTAwZAIrD2QWAmYPFQIFMjA6MDUUNVMgT05MSU5FIC0gVOG6rFAgMTVkAiwPZBYCZg8VAgUyMDozMChLSU0gQ0hJIEPDgCBQSMOBTyAtIFThuqxQIDIxLDIyLDIzLDI0LDI1ZAItD2QWAmYPFQIFMjE6MzAhQuG7mCBU4buoIFLhuq5DIFLhu5BJX1AxX1ThuqxQIDE1ZAIuD2QWAmYPFQIFMjI6MDUjTeG7lkkgTkfDgFkgMSBDSFVZ4buGTiBWVUlfVDEwMiwxMDNkAi8PZBYCZg8VAgUyMjozMCtDxq/hu5xJIMSQ4buCIE5H4bqqTV9DUENOX1ThuqxQIDIzLDI0LDI1LDI2ZAIwD2QWAmYPFQIFMjM6MTAfTeG7lkkgTkfDgFkgMSBDSFVZ4buGTiBWVUlfVDExN2QCMQ9kFgJmDxUCBTIzOjMwMlRS4buQTkcgxJDDgU5IIFhVw5RJLCBLw4hOIFRI4buUSSBOR8av4buiQ19U4bqsUCA4ZAIyD2QWAmYPFQIFMjM6NDkVQkEgxJDhu5JORyBC4bqgQyBOw4lOZAIHDw8WAh4LTmF2aWdhdGVVcmwFSS9ob20tbmF5LXhlbS1naS9ob20tbmF5LXhlbS1naS81MTQ2L3RpZXUtcGhhbS1oYWktLS1raW0tY2hpLWNhLXBoYW8tLmh0bWxkFgJmDw8WBB4ISW1hZ2VVcmwFNC9NZWRpYS9BcnRpY2xlcy80NWRlNGNmMmIyMzQ0MmFkYjAyMGYyMGY2YjE2NTgwMy5qcGceDUFsdGVybmF0ZVRleHQFIHRpZXUgcGhhbSBoYWkgICBraW0gY2hpIGNhIHBoYW8gZGQCCQ8PFgQfCQUnVGnhu4N1IHBo4bqpbSBow6BpICIgS2ltIENoaSBjw6AgcGjDoW8iHxAFSS9ob20tbmF5LXhlbS1naS9ob20tbmF5LXhlbS1naS81MTQ2L3RpZXUtcGhhbS1oYWktLS1raW0tY2hpLWNhLXBoYW8tLmh0bWxkZAINDxYCHwICAxYGZg9kFgZmDxUBNS9ob20tbmF5LXhlbS1naS9waGltLWRhLWNoaWV1LzQ4NzcvYm8tdHUtcmFjLXJvaS5odG1sZAIBDw8WBB8RBTV+L01lZGlhL0FydGljbGVzLzEyY2YxYjg0MzY3NTQ5Njc5OTBiN2U2NzQyZmNlNzczLmpwZx8SBQ1ibyB0dSByYWMgcm9pZGQCAg8VAzUvaG9tLW5heS14ZW0tZ2kvcGhpbS1kYS1jaGlldS80ODc3L2JvLXR1LXJhYy1yb2kuaHRtbBVC4buZIHThu6kgcuG6r2MgcuG7kWkKMjAvMDQvMjAxNmQCAQ9kFgZmDxUBMi9ob20tbmF5LXhlbS1naS9waGltLWRhLWNoaWV1LzQ0NjUvbWFjLWdpYS1reS5odG1sZAIBDw8WBB8RBTV+L01lZGlhL0FydGljbGVzL2M2ZDg4YTQ3MzExMTRiMGY4ZmY0MDA5NjZkMDEzMDZhLmpwZx8SBQptYWMgZ2lhIGt5ZGQCAg8VAzIvaG9tLW5heS14ZW0tZ2kvcGhpbS1kYS1jaGlldS80NDY1L21hYy1naWEta3kuaHRtbA1N4bqhYyBHaWEgS8O9CjMxLzAzLzIwMTZkAgIPZBYGZg8VATwvaG9tLW5heS14ZW0tZ2kvcGhpbS1kYS1jaGlldS8zOTk4L3NlcmllLWhhaS0tY2h1YS1tZW8tLmh0bWxkAgEPDxYEHxEFNX4vTWVkaWEvQXJ0aWNsZXMvMjQ0NzJlYTZiODE5NDZmN2JlNmJhNjEwODI0YTU2ZGIuanBnHxIFFHNlcmllIGhhaSAgY2h1YSBtZW8gZGQCAg8VAzwvaG9tLW5heS14ZW0tZ2kvcGhpbS1kYS1jaGlldS8zOTk4L3NlcmllLWhhaS0tY2h1YS1tZW8tLmh0bWwZU2VyaWUgaMOgaSAiQ2jhu69hIG3hurlvIgowMi8wMy8yMDE2ZAICD2QWAgIBD2QWAmYPFgIfAgIHFg5mD2QWBGYPFQEAZAIBDxYCHgNzcmMFGn4vTWVkaWEvU2hvcnRDdXQvcHRuMDUuanBnZAIBD2QWBGYPFQEAZAIBDxYCHxMFGn4vTWVkaWEvU2hvcnRDdXQvcHRuMDYuanBnZAICD2QWBGYPFQEAZAIBDxYCHxMFGn4vTWVkaWEvU2hvcnRDdXQvcHRuMDcuanBnZAIDD2QWBGYPFQEAZAIBDxYCHxMFGn4vTWVkaWEvU2hvcnRDdXQvcHRuMDguanBnZAIED2QWBGYPFQEAZAIBDxYCHxMFGn4vTWVkaWEvU2hvcnRDdXQvcHRuMDkuanBnZAIFD2QWBGYPFQEAZAIBDxYCHxMFGn4vTWVkaWEvU2hvcnRDdXQvcHRuMDUuanBnZAIGD2QWBGYPFQEAZAIBDxYCHxMFGn4vTWVkaWEvU2hvcnRDdXQvcHRuMDUuanBnZBgBBR5fX0NvbnRyb2xzUmVxdWlyZVBvc3RCYWNrS2V5X18WAwUrY3RsMDAkQ29udGVudFBsYWNlSG9sZGVyMSRjdGwwMCRjdGwwMSRzRGF0ZQU0Y3RsMDAkQ29udGVudFBsYWNlSG9sZGVyMSRjdGwwMCRjdGwwMSRzRGF0ZSRjYWxlbmRhcgU0Y3RsMDAkQ29udGVudFBsYWNlSG9sZGVyMSRjdGwwMCRjdGwwMSRzRGF0ZSRjYWxlbmRhcggyh5FeKoCoR55dXxAcmgVmW5hfGmazWk/mpN3zkpri',
            '__VIEWSTATEGENERATOR' => 'CA0B0334',
            '__EVENTVALIDATION' => '/wEWLgLN25ePCALcktymCQLEs6DQDQK8j+fPBwKs4M2hCwKy4M2hCwKx4M2hCwLQwsfqAwK34M2hCwK24M2hCwK14M2hCwKk4M2hCwKr4M2hCwKz4LWiCwK14KmiCwK24IGiCwK24IWiCwKMs8XrCQKx4LWiCwKz4I2iCwLG5oG2DgKz4M2hCwLQwtvqAwLaga2BBQLQws/qAwKs4M2hCwKs4M2hCwL4mOiAAgKs4M2hCwKw4OGhCwKs4M2hCwKx4O2hCwK24LmiCwK34OGhCwKr4O2hCwLt6/HfDQKk4OGhCwKw4I2iCwK14I2iCwK14LWiCwK34KmiCwK14IGiCwK34O2hCwKk4IWiCwKk4IGiCwKr4IGiC2jN5c3n2q8PoQ5FwKEv4BtG3Wr+ZpJovbyofMF1SBBF',
            'ctl00$ContentPlaceHolder1$ctl00$ctl01$ddlChannel' => $channelExternalId,
            'ctl00$ContentPlaceHolder1$ctl00$ctl01$sDate' => $date,
            '__ASYNCPOST' => 'true',
            'RadAJAXControlID' => 'ctl00_ContentPlaceHolder1_ctl00_ctl01_RadAjaxManager1'
        ];
    }

    public function request($channelId, $date) {
        $client = new Client();
        $header = getSCTVHeader();
        $formParams = getSCTVFormParams($channelExternalId, $date);
        $response = $client->request('POST', 'http://www.sctv.com.vn/lich-phat-song.html', [
            'headers' => $header,
            'form_params' => $formParams
        ]);

        $html = $response->getBody()->getContents();
        return $this->getSchedulesFromHtml($html);
    }

    private function getSchedulesFromHtml($html) {
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

//put your code here
}
