<?php

echo "<h3>Pages</h3>\n";

$extensions = array
(
	'php', 'PHP'
);

// Get the files from the current directory
if (file_exists (".".DIRECTORY_SEPARATOR))
{
	if (is_dir (".".DIRECTORY_SEPARATOR))
	{
		$dh = opendir (".".DIRECTORY_SEPARATOR) or die (" Directory Open failed !");
		
		// Prepare the images array
		$pages = array();
		while ($file = readdir ($dh))
		{
			// Only get the files ending with the correct extension
			if ( in_array( substr($file, -3), $extensions ) )
			{
				array_push($pages, $file);
			}
		}
	Closedir ($dh);
	}
	
	// Sort the array
	sort($pages);
	
	echo "<ul class=\"view\">";
	
	foreach ($pages as $page)
	{
		// Return all images in XML format
		echo ("<li><a href=\"".$page."\">".$page."</a></li>");

	}
	
	echo "</ul>";
}

?>