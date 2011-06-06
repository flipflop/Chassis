<?php

echo "<h3>Components</h3>\n";

$extensions = array
(
	'php', 'PHP'
);

// Get the files from the current directory
if (file_exists (".".DIRECTORY_SEPARATOR."templates".DIRECTORY_SEPARATOR."components"))
{
	if (is_dir (".".DIRECTORY_SEPARATOR."templates".DIRECTORY_SEPARATOR."components"))
	{
		$dh = opendir (".".DIRECTORY_SEPARATOR."templates".DIRECTORY_SEPARATOR."components") or die (" Directory Open failed !");
		
		// Prepare the images array
		$components = array();
		while ($file = readdir ($dh))
		{
			// Only get the files ending with the correct extension
			if ( in_array( substr($file, -3), $extensions ) )
			{
				array_push($components, $file);
			}
		}
	Closedir ($dh);
	}
	
	// Sort the array
	sort($components);
	
	echo "<ul>";
	
	foreach ($components as $component)
	{
		// Return all images in XML format
		echo ("<li><a href=\"".$component."\">".$component."</a></li>");

	}
	
	echo "</ul>";
}

?>