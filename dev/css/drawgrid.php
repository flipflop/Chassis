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

if ( isset($_GET[ "baseline" ]) ) {
	$baselineValue = $_GET[ "baseline" ];
}

if ( isset($_GET[ "gutter" ]) ) {
	$gutterValue = $_GET[ "gutter" ];
}

if ( isset($_GET[ "column" ]) ) {
	$columnValue = $_GET[ "column" ];
}

// Set to image/png
header("Content-type: image/png");

// TODO: grab from Less baseline grid constants
$colWidth = $columnValue;
$gutterWidth = $gutterValue;
$baseline = $baselineValue;

$imgWidth=960;
$imgHeight=$baseline;

$totalBaselines = $imgHeight / $baseline;
$totalCols = $imgWidth / ($gutterWidth + $colWidth);

$colSpan = ($gutterWidth + $colWidth + $gutterWidth);

// Create image and define colors
$image=imagecreate($imgWidth, $imgHeight);
$colorWhite=imagecolorallocate($image, 255, 255, 255);
$colorGrey=imagecolorallocate($image, 192, 192, 192);
$colorDarkBlue=imagecolorallocate($image, 104, 157, 228);
$colorLightBlue=imagecolorallocate($image, 184, 212, 250);

// Create columns
for ($i=0; $i<$totalCols; $i++){
imageline($image,  $i*($gutterWidth + $colWidth), 0, $i*($gutterWidth + $colWidth), $imgHeight, $colorLightBlue);
imageline($image,  $gutterWidth + $i*($colWidth + $gutterWidth), 0, $gutterWidth + $i*($colWidth + $gutterWidth), $imgHeight, $colorLightBlue);
}

// create first gutter
imagefilledrectangle($image, $gutterWidth, 0, $gutterWidth, $imgHeight, $colorLightBlue);

// Create baselines
for ($i=0; $i<$totalBaselines; $i++){
//imageline($image, $i*$colWidth, 0, $i*$colWidth, $imgHeight, $colorGrey);
imageline($image, 0, $i*$baseline, $imgWidth, $i*$baseline, $colorGrey);
}

// Output grid and clear image from memory
imagepng($image);
imagedestroy($image);
?>