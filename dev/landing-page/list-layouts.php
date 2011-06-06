<?php

echo "<h3>Layouts</h3>\n";

$extensions = array
(
	'php', 'PHP'
);

// Get the files from the current directory
if (file_exists (".".DIRECTORY_SEPARATOR."templates".DIRECTORY_SEPARATOR."layouts"))
{
	if (is_dir (".".DIRECTORY_SEPARATOR."templates".DIRECTORY_SEPARATOR."layouts"))
	{
		$dh = opendir (".".DIRECTORY_SEPARATOR."templates".DIRECTORY_SEPARATOR."layouts") or die (" Directory Open failed !");
		
		// Prepare the images array
		$layouts = array();
		while ($file = readdir ($dh))
		{
			// Only get the files ending with the correct extension
			if ( in_array( substr($file, -3), $extensions ) )
			{
				array_push($layouts, $file);
			}
		}
	Closedir ($dh);
	}
	
	// Sort the array
	sort($layouts);
	
	echo "<ul>";
	
	foreach ($layouts as $layout)
	{
		// Return all images in XML format
		echo ("<li><a href=\"".$layout."\">".$layout."</a></li>");

	}
	
	echo "</ul>";
}

?>