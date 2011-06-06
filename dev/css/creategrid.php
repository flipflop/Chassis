<?php

/**
* Baseline Grid Creator
*
* created by Rozario Chivers
* date April 4th 2011
* Copyright 2011, Rozario Chivers
* Dual licensed under the MIT or GPL Version 2 licenses 
* http://en.wikipedia.org/wiki/MIT_License
* http://en.wikipedia.org/wiki/GNU_General_Public_License
*/

$file = file_get_contents("../less/baseplate.grid.constants.less");
$pieces = explode("@", $file);

$baselineStr = explode(":", $pieces[1]);
$columnStr = explode(":", $pieces[2]);
$gutterStr = explode(":", $pieces[3]);
$pageWidthStr = explode(":", $pieces[4]);

$baselineValue = str_replace("px;", "", $baselineStr);
$columnValue = str_replace("px;", "", $columnStr);
$gutterValue = str_replace("px;", "", $gutterStr);
$pageWidthValue = str_replace("px;", "", $pageWidthStr);

$nvps = "?baseline=".$baselineValue[1]."&column=".$columnValue[1]."&gutter=".$gutterValue[1];
$trimNvps = preg_replace("/\s+/", "", $nvps);
$gridUrl = "Location: drawgrid.php".$trimNvps;

ob_start();
header($gridUrl);
ob_flush();

?>