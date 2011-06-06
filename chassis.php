<!doctype html> 
<!--[if IEMobile]> <html class="no-js ie-mobile" lang="en"> <![endif]--> 
<!--[if (lt IE 7)&!(IEMobile) ]> <html class="no-js ie6" lang="en"> <![endif]--> 
<!--[if (IE 7)&!(IEMobile) ]> <html class="no-js ie7" lang="en"> <![endif]--> 
<!--[if (IE 8)&!(IEMobile) ]> <html class="no-js ie8" lang="en"> <![endif]--> 
<!--[if (gte IE 9)|!(IE)]><!--> <html class="no-js" lang="en"> <!--<![endif]--> 
<head> 
	<title>Chassis 2.0</title> 
	
	<meta charset="utf-8" /> 
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />  
    <meta name="description" content="CSS HTML And Structured Scripts In Standards" /> 
    <meta name="author" content="Rozario Chivers" /> 

    <link rel="stylesheet" href="css/site.css" /> 
    <link rel="stylesheet" href="dev/css/debug.css" /> 

    <!-- Less CSS: for development only, should not be used on production --> 
    <!--  
    <link rel="stylesheet/less" type="text/css" href="dev/less/templates/layouts/layouts.less" />
    <link rel="stylesheet/less" type="text/css" href="dev/less/templates/components/components.less" />
    <link rel="stylesheet/less" type="text/css" href="dev/less/templates/pages/pages.less" />
     
     
    <script src="dev/less/less.js"></script>
    <script> less.env = "development"; less.watch(); </script>
    --> 
    
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
 
<body> 
		
<!-- begin Component: Accessibility links --> 
<div id="skiplinks" data-component-name="skip-links"> 
	<ul> 
		<li><a href="#header">Jump to main navigation</a></li> 
		<li><a href="#main">Jump to main content</a></li> 
		<li><a href="#footer">Jump to footer</a></li> 
	</ul> 
</div> 
<!-- end Component accessibility links -->	
	<!-- layout --> 
	<div id="wrapper"><!-- wrapper used to provide extra stylistic hooks --> 
	<!-- contextual CSS (Class names must remain in the correct order)
		en-gb : language (e.g. en-us)
		chassis site name (e.g. baseplate)
		pg-home : page name (e.g. pg-home)
		home : section (e.g. home, registration, search)
		cat-1 : category context (category name agnostic to cater for category changes)
		cat-1-2 : sub category context (category name agnostic to cater for category changes)
		cms-seasonal : seasonal skin (allows overriding of all layout components e.g. Christmas and Summer styles for Header)
	--> 
	<div id="container" class="en-gb chassis home pg-chassis-home cat-1 cat-1-2 cms-seasonal"><!-- to allow for customised seasonal layouts --> 
 
		<div id="main" class="layout-3-column"><!-- components: source order important for layout, order can be changed to cater for new layout requirements --> 
			<div id="content-subnav" class="aside">
				<!-- side navigation (typically) -->
			    <a href="http://www.w3.org/html/logo/"><!-- 'extreme' baseline shift example -->
                <img src="http://www.w3.org/html/logo/badge/html5-badge-v-css3-device-semantics-storage.png" width="38" height="202" alt="HTML5 Powered with CSS3 / Styling, Device Access, Semantics, and Offline &amp; Storage" title="HTML5 Powered with CSS3 / Styling, Device Access, Semantics, and Offline &amp; Storage">
                </a>
			    
			</div><!-- id="content-subnav" -->
						
			<div id="content" role="main">
				<!-- main content -->
				<h1>Chassis 2.0</h1>
				<img src="img/chassis-logo.png" class="logo" alt="Chassis Logo" />
				<p>
				    Chassis is Web development starter kit, initially created by Rozario Chivers in 2005. It includes everything you will need for a new project, from templates, debugging tools through to process documents. All in order to work quickly and effectively.
				</p>
				<p>
				    In order to leverage a solid foundation Chassis is built on top of the <a href="http://html5boilerplate.com/">HTML5 Boilerplate</a> and <a href="baseplate.php">Baseplate</a>.
				</p>
                
                <?php include("dev/landing-page/list-pages.php"); ?>
                
                <?php include("dev/landing-page/list-layouts.php"); ?>
                
                <?php include("dev/landing-page/list-components.php"); ?>
                
			</div><!-- id="content" -->
			
			<div id="content-related" class="aside" role="complementary">	
    			<h2>Documentation</h2>
    			<p>
				    Coming soon...
				</p>
				
				<h2>Micellaneous</h2>	
				<ul class="misc">
					<li><a href="osd.xml">Open Search XML</a></li>
					<li><a href="manifest.php">HTML5 Manifest</a></li>
					<li><a href="dev/harviewer/harviewer/index.php">Harviewer</a></li>
					<li><a href="dev/css/creategrid.php">Less PHP Grid Generator</a></li>
					<li><a href="layout-maker.php">Layout Maker (Experimental)</a></li>
					<li><a href="javascript:(function(){console.log(chassis.debug.writeUITests());alert('UI Tests written to console');})()">Generate UI Tests (Bookmarklet)</a></li>
				</ul>
    			
				<h2>Debug (classes added to Body tag)</h2>
    			<ul class="tooling">
    			    <li><a href="#" id="debug">debug</a></li>
                  	<li><a href="#" id="debug-grid">debug-grid</a></li>
                  	<li><a href="#" id="debug-grid-body">debug-grid-body</a></li>
                  	<li><a href="#" id="debug-layouts">debug-layouts</a></li>
                </ul>
                <strong>Note:</strong> for browsers that do not support CSS gradients, a <a href="dev/css/creategrid.php">dynamic debug grid background</a> is available in PHP. 
		
			</div><!-- id="content-related" -->
 
		</div><!-- id="main" --> 
		
		<div id="header" role="banner"> 
				
			<blockquote>
			    <p>&quot;A reusable set of Markup, CSS and JavaScript patterns&quot;</p>
			</blockquote>
				
		</div><!-- id="header" --> 
		
		<div id="footer"> 
		    <h3>Contributors</h3> 
            <ul>
                <li>Anna Huang @nnFlip</li>
                <li>Adam Osbourne @degenerate</li>
                <li>Adam Silver @adambsilver</li>
                <li>Lawrence Carvalho @shinyloz</li>
                <li>Rozario Chivers @terraflop</li>
                <li>Tony Kabalan @tkabbs</li>
		    </ul>
		</div><!-- id="footer" -->
 
	</div><!-- id="container" --> 
	
</div><!-- id="wrapper" --> 

<?php include("includes/scripts.php"); ?>

<script src="dev/js/baseplate.events.js"></script>
</body> 
</html>