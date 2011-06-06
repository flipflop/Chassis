<div id="wrapper" class="layout-1-column">
    <!-- wrapper used to provide extra stylistic hooks e.g. LHS and RHS shadows -->
    <!-- contextual CSS (Class names must remain in the correct order)
        en-gb : language (e.g. en-us)
        chassis site name (e.g. www.nouvelleniche.com)
        pg-home : page name (e.g. pg-home)
        home : section (e.g. home, registration, search, browse, checkout)
        cat-1 : category context (category name agnostic to cater for category changes - can be replaced with section e.g. sub-1)
        cat-1-2 : sub category context (category name agnostic to cater for category changes - can be replaced with sub section e.g. sub-1-2)
        cms-seasonal : seasonal skin (allows overriding of all layout components e.g. Christmas and Summer styles for Header)
    -->
    <div id="container" class="en-gb chassis home pg-home cat-1 cat-1-2 cms-seasonal">
        <!-- to allow for customised seasonal layouts -->
        <div id="main">
            <!-- components: source order important for layout, order can be changed to cater for new layout requirements -->
            <div id="content" role="main">
                <!-- main content -->
                <div class="homepage-template-2 template" data-component-name="homepage-layout-module">
                    <!-- layout class is used to alter size and position of e-spots -->
                    <!-- layout can be driven through accelerator, applying the class name above to alter layout of e-spots -->
                    <h1>Welcome to the Chassis Homepage Example</h1>
                    <ul>
                        <li class="promo-1">
                            <?php include("templates/components/homepage-promo.php"); ?>
                        </li>                                          
                        <li class="promo-2">                             
                            <?php include("templates/components/homepage-promo.php"); ?>
                        </li>                                            
                        <li class="promo-3">                           
                            <?php include("templates/components/homepage-promo.php"); ?>
                        </li>                                            
                        <li class="promo-4">                            
                            <?php include("templates/components/homepage-promo.php"); ?>
                        </li>                                            
                        <li class="promo-5">                             
                            <?php include("templates/components/homepage-promo.php"); ?>
                        </li>                                            
                        <li class="promo-6">                             
                            <?php include("templates/components/homepage-promo.php"); ?>
                        </li>
                        <li class="promo-7">                             
                            <?php include("templates/components/homepage-promo.php"); ?>
                        </li>
                        <li class="promo-8">                             
                            <?php include("templates/components/homepage-promo.php"); ?>
                        </li>
                    </ul>
                </div><!-- .homepage-template-1 -->
            </div><!-- #content -->
        </div><!-- #main -->
        <!-- coded Content First for Accessibility and SEO -->
        <?php include("templates/components/header.php"); ?><?php include("templates/components/footer.php"); ?>
    </div><!-- #container -->
</div><!-- #wrapper -->
