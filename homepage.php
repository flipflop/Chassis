<!doctype html>
<!--[if IEMobile]> <html class="no-js ie-mobile" lang="en"> <![endif]-->
<!--[if (lt IE 7)&!(IEMobile) ]> <html class="no-js ie6" lang="en"> <![endif]-->
<!--[if (IE 7)&!(IEMobile) ]> <html class="no-js ie7" lang="en"> <![endif]-->
<!--[if (IE 8)&!(IEMobile) ]> <html class="no-js ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
	<title>CHASSIS 2.0</title>
	
	<?php include("includes/head.php"); ?>
	
	<!-- development QA only (remove), not for production use -->
	<link rel="stylesheet" href="dev/css/debug.css" />

    <?php
		/* Less PHP docs : http://leafo.net/lessphp/ */
		require 'dev/less/lessc.inc.php';
		$less1 = new lessc('dev/less/templates/layouts/layouts.less');
		file_put_contents('css/templates/layouts/layouts.css', $less1->parse());
		
		$less2 = new lessc('dev/less/templates/components/components.less');
		file_put_contents('css/templates/components/components.css', $less2->parse());
		
		$less3 = new lessc('dev/less/templates/pages/pages.less');
		file_put_contents('css/templates/pages/pages.css', $less3->parse());
	?>
	
	<!-- Compiled Less CSS -->
	<link rel="stylesheet" type="text/css" href="css/templates/layouts/layouts.css" /> 
	<link rel="stylesheet" type="text/css" href="css/templates/components/components.css" />
    <link rel="stylesheet" type="text/css" href="css/templates/pages/pages.css" />
    
</head>

<body class="cms-bg-1 debug-grid">
		
	<?php include("templates/components/skip-links.php"); ?>
	
	<!-- layout -->
	<?php include("templates/layouts/homepage.php"); ?>
	<!--
	/** 
	 * Notes:
	 * scripts at bottom - yahoo performance guideline
	 * use short namespaces to reduce lookup resolution
	 * locally scoped variables are more performant than globals
	 *
	 * TODO: minify and use Closure Compiler to reduce size and speed up execution
	 */
	-->
	<?php include("includes/scripts.php"); ?>

	<script>
	  var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']]; // Change UA-XXXXX-X to be your site's ID
	  (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];g.async=1;
	  g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
	  s.parentNode.insertBefore(g,s)}(document,'script'));
	</script>
	
	<!-- JavaScript for page specific components -->
	<script src="js/templates/layouts/homepage.js"></script>
	
	<!-- begin Development QA only - not for production -->
	<?php include("dev/test/chassis-qunit.php"); ?>
	<!-- end Development QA only - not for production -->
</body>
</html>