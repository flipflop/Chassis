<?php

/**
 * Adapted from:
 * Building iPhone Apps with HTML, CSS, and JavaScript: Making App Store Apps Without Objective-C or Cocoa 
 * by Jonathan Stark
 *
 */

header('Content-Type: text/cache-manifest');
echo "CACHE MANIFEST\n";
$hashes = "";
$dir = new RecursiveDirectoryIterator(".");

foreach(new RecursiveIteratorIterator($dir) as $file) {
	if ($file->IsFile() &&
		$file != "./manifest.php" &&
		strrpos($file, "svn") === false &&
		strrpos($file, "tmproj") === false &&
		strrpos($file, "./build") === false &&
		strrpos($file, "./dev") === false &&
		strrpos($file, "./test") === false &&
		
		substr($file->getFilename(),0,1) != ".") {
			echo $file . "\n";
			$hashes .= md5_file($file);
	}
}

// Hash the $hashes string and output
echo "# Hash: " . md5($hashes) . "\n";

date_default_timezone_set('UTC');
$nowDate = getdate();
$uniqueDate = $nowDate['year']
		.$nowDate['mon']
		.$nowDate['wday']
		.$nowDate['hours']
		.$nowDate['minutes']
		.$nowDate['seconds'];
	
	//echo "# Date; ".$uniqueDate . "\n";
	//echo "# Hash: " . md5($hashes) . "\n";
?>