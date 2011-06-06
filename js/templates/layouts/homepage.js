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
 * Page Module : Homepage
 * used to manage other JavaScript Components and jQuery Plugins
 * lifecycle methods are used to handle initiation, events, display, and destruction (for memory usage and performance)
 *  
 * Page Module
 * @param $ {Object} reference to jQuery
 * @param doc {Object} document object 
 * @return nothing returned
 */

chassis.namespace("chassis.ui.Homepage"); 

chassis.ui.Homepage = (function( $, doc ) {

  var init = function() { // Note: this function self invokes - remove if not required
    /* Add jQuery components here and populate configuration options */
    
    $(function() { // executes on DOM ready
      addEvents();
      display();
      destroyOnUnload(); 
    });
    
  }(); // end init()
  
  function create() {
    
  } // end create()
  
  function enable() {
    
  } // end enable()
  
  function disable() {
    
  } // end disable()
  
  function addEvents() {
    
    /**
     *  Example:
     *
     *  $(".element").bind("click", function() {
     *    alert($(this).attr("id") + "was clicked");
     *    chassis.event.publish(chassis.event.ELEMENT_CLICKED); // Custom event example
     *  }); 
     *
     */

    
  } // end addEvents()
  
  function display() {
    /* Add presentational code here e.g. hide / show, content changes etc. */
    
  } // end display()
  
  function saveData() {
    /* persistence management */
    
  } // end saveData()
  
  function destroy() {
    /* clean up namespace for garbage collection */
    chassis.ui.Homepage = null;
  } // end destroy()
  
  function destroyOnUnload() {
    $(window).unload(function() {
      chassis.ui.Homepage.destroy();
    });
  } // destroyOnUnload()
  
  // public interface
  var contract = {
    enable : enable,
    disable : disable,
    display : display,
    destroy : destroy
  }
  
  return contract;
  

})(jQuery, document); // end chassis.ui.Homepage