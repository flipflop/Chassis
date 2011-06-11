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
 
 /**
  * Component : Chassis.Search (Example Component)
  * 
  * Description: Prefills search field with text from title attribute
  * activates onblur and onfocus of the search field
  *  
  * @param  {Object} reference to jQuery
  * @param doc {Object} document object 
  * @return titleText {String} title text from search field
  */

// To make your own HTML5 compatible version first read: http://diveintohtml5.org/detect.html#input-types
  
;(function ( container, $, doc ) { // add in more parameters for context e.g. ( container, document, jQuery, utils )

  function createModule()  { // Revealing Module Pattern with execution context passed in arguments

       // All methods and properties (variables) are private unless within return statement
      var   searchElement = $("#search-field"),
            titleText = $("#search-field").attr("title"),
      
            init = function() { // component initialisation 
               
               // place non DOM ready code here
               
                $(function() { // Private DOM ready
                   if ($(searchElement)[0]) {
                     // only execute if search is present
                     display();
                     addEvents();
                   }
                }); 
              }();// end init()
      
      function addEvents() { // component events here e.g. click, hover, mousedown, focus
        $(searchElement).bind("focus", function() {
          $(this).attr("value", "")
          .removeClass("search-blur")
          .addClass("search-focus");
        })
        .bind("blur", function() {
          // search field empty
          if ( $(this).attr("value") == "") {
            $(this).attr("value", chassis.Search.titleText)
            .removeClass("search-focus")
            .addClass("search-blur");
          } else {
            // search field not empty
          }
        });
      } // end addEvents()

      function display() { // component display e.g. adding / removing of classes, notification of changes, sliding and hover states
        // prefill form field with title text (most accessible technique)
        $(searchElement).attr("value", titleText)
        .addClass("search-blur");
      } // end display()
    
      // public interface
      var contract = {
	      titleText: titleText
	  }

  	  // Public interface (properties and methods)
  	  return contract;

    } // end module

	// Public API (assigns to my namespace)
	container.Search = createModule();

})( this.chassis || (this.chassis = {}), jQuery, document, undefined ); // create namespace and context
// end chassis.Search