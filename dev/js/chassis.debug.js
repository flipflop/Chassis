/**
 *
 * CHASSIS 2.0
 *
 * Copyright 2011 Rozario Chivers
 *
 * Dual licensed under the MIT or GPL Version 2 licenses 
 * http://en.wikipedia.org/wiki/MIT_License
 * http://en.wikipedia.org/wiki/GNU_General_Public_License
 *
 */

;(function ( container, $, doc ) { // add in more parameters for context e.g. ( container, jQuery, document, undefined )

  function createModule()  { // Revealing Module Pattern with execution context passed in arguments
    var init = function() {
      // -------- add pass through JS here (follows execution order of page)
      
      
      // --------
      $(function() {
        // add DOM ready init code here
        addEvents();
      });
    
    }(); // self invoking
    
    function addEvents() {

    } // end addEvents()

    function display() {

    } // end display()
    
    function getComponents() {
      var componentNames = [],
      components = $("*[data-component-name]");

      $(components).each(function(i) {
        componentNames.push($(this).attr("data-component-name"));
      });
      
      return componentNames;
    } // end getComponents()
    
    function writeUITests() {
       /*
        * Use this chassis.debug.writeUITests() in Firebug to create component
        * tests when markup, and CSS is complete
        * add output to tests.js
        */
         
        var components = $("*[data-component-name]"),
            componentsLength = $(components).length,
            pageContext = $("#container").attr("class").split(" "),
            pageName = pageContext[3],
            testStartStr = '',
            testBodyStr = '',
            testEndStr =    '',
            testStr = '';
            
            testStartStr += '/*  ------------------------------------------\n';
            testStartStr += '    PAGE : BEGIN '+pageName+' TEST CASES\n';
            testStartStr += '    ------------------------------------------ */\n';
            testStartStr += 'if (pageName == "'+pageName+'") { // PAGE NAME CHECK\n';
            
            testBodyStr += '\n'; 
            testBodyStr += 'module("Layouts");';
            testBodyStr += '\n';   
            testBodyStr += writePageAndLayoutUITests()+'\n';

            testBodyStr += 'module("Components");';  
            testBodyStr += '\n';
            testBodyStr += writeComponentUITests();
            
            testEndStr += '\n';
            testEndStr += '} // end if (pageName == "'+pageName+'")\n';
            testEndStr += '\n';
            testEndStr += '/*  ------------------------------------------\n';
            testEndStr += '    PAGE : END '+pageName+' TEST CASES\n';
            testEndStr += '    ------------------------------------------ */\n';
             	
            testStr = testStartStr + testBodyStr + testEndStr;
            
            return testStr; 	
    } // end writeUITests()
    
    function writePageAndLayoutUITests() {
      
      
        
      /*
       * Use this chassis.debug.writePageAndLayoutUITests() in Firebug to create component
       * tests when markup, and CSS is complete
       * add output to tests.js
       */
      var pageContext = $("#container").attr("class").split(" "),
          layoutName = $("#wrapper").attr("class"),
          pageName = pageContext[3],
          testStartStr = '\ntest("Page and Layout UI tests", function() {\n',
          testBodyStr = '',
          testEndStr =    '});\n',
          testStr = '';
      
        testBodyStr += '  equals("'+pageName+'", "'+pageName+'", "page name ('+pageName+') present");\n';
        testBodyStr += '  equals($("#wrapper").attr("class"), "'+layoutName+'", "layout: '+layoutName+' present");\n';
      
        testStr = testStartStr + testBodyStr + testEndStr;
   
        return testStr;
    } // end writePageAndLayoutUITests
    
    function writeComponentUITests() { 
      /*
       * Use this chassis.debug.writeComponentUITests() in Firebug to create component
       * tests when markup, and CSS is complete
       * add output to tests.js
       */
      var components = $("*[data-component-name]"),
          testStartStr = '\ntest("Component UI tests", function() {\n',
          testBodyStr = '',
          testEndStr =    '});\n',
          testStr = '';
      
      $(components).each(function(i) {
        // TODO: handle duplicate components and their indexes
     
        var componentName = $(this).attr("data-component-name");
        var components = $("*[data-component-name='"+componentName  +"']");
        
        if (testBodyStr.indexOf(componentName) == -1) { // only continue if componenName is not previously found
          
          if ($(components).length > 1) {
             $(components).each(function(i) {
               // if multiple components
               testBodyStr +=   '   ok($("*[data-component-name=\''+ componentName +'\']")['+i+'],' +
                                 '"Component: '+ componentName + ' (' + (i+1) + ') present");\n';
             });
           } else {
               // if single component
               testBodyStr +=   '   ok($("*[data-component-name=\''+ componentName +'\']")[0],' +
                               '"Component: '+ componentName +' present");\n';
           } // end if ($(components).length > 1)
           
        } // end if (testBodyStr.indexOf(componentName) == -1)
                                   
      }); // $(components).each()
      
      testStr = testStartStr + testBodyStr + testEndStr;
      
      return testStr;
    } // end writeComponentUITests()
    
    function saveData() {
       /* persistence management */

    } // end saveData()

    function destroy() { // Public method
       /* clean up namespace for garbage collection */
      chassis.example = null;
    } // end destroy()

    function destroyOnUnload() { // Private method
       $(window).unload(function() {
         chassis.debug.destroy();
       });
    } // destroyOnUnload()

    var contract = { // add public methods / properties here (remove if not needed)
      addEvents : addEvents,
      getComponents : getComponents,
      writeUITests : writeUITests,
      writePageAndLayoutUITests : writePageAndLayoutUITests,
      writeComponentUITests : writeComponentUITests
    }

    // Public interface (properties and methods)
    return contract;

  } // end module

  // Public API (assigns to my namespace)
  container.debug = createModule();

})( this.chassis || (this.chassis = {}), jQuery, document, undefined ); // end chassis.debug (create namespace and context)
// end chassis.debug

// console.log(chassis.debug.writeUITests());

