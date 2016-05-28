<?php

function getElementsByClass($parentNode, $tagName, $className) {
    $nodes = array();

    $childNodeList = $parentNode->getElementsByTagName($tagName);
    for ($i = 0; $i < $childNodeList->length; $i++) {
        $temp = $childNodeList->item($i);
        if (stripos($temp->getAttribute('class'), $className) !== false) {
            $nodes[] = $temp;
        }
    }

    return $nodes;
}