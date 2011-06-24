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

// Note: ; before parenthesis is deliberate and undefined is passed in to protect it from being redefined
// chassis.event
;(function ( container, $, doc, undefined ) { // add in more parameters for context e.g. ( container, document, jQuery, utils )

  function createModule()  { // Revealing Module Pattern with execution context passed in arguments
	
    	/**
     	 * Publish and Subscribe event model for Chassis
     	 * Namespaced events can be published and listened to
     	 * @param customEvent {String} namespace for event
     	 * @param func {Function} callback function
     	 * @param data {Object} optional, (Array): Additional data to pass as arguments 
     	 * (after the event object) to the event handler 
     	 * 
     */
     function publish(customEvent, data) {
     	$(window).trigger(customEvent, data);	
     } 

     function subscribe(customEvent, func) {
     	$(window).bind(customEvent, function(e) {
     		e.data = Array.prototype.slice.call(arguments, 1);
     		func(e);
     		}
     	);	
     }

     function unSubscribe(customEvent) {
       $(window).unbind(customEvent);	
     }

     function listEvents(elem) {
       // can be used to show which custom events are attached to a particular element
       var dEvents = $(elem).data('events');

       $.each(dEvents, function(name, handler) {
         var currElem = this;
         $.each(handler, function(i,handler){
           console.log(currElem, '\n' + i + ': [' + name + '] : ' + handler );
         });
       });
     } // end listEvents()
      
		// public methods
		var contract = {
            publish : publish,
            subscribe : subscribe,
		    unSubscribe : unSubscribe,
		    listEvents : listEvents
		};

		// Public interface (properties and methods)
		return contract;

	} // end module

	// Public API (assigns to my namespace)
	container.event = createModule();

})( this.chassis || (this.chassis = {}), jQuery, document ); // end create namespace and context
// end chassis.event

/*******************************************************
 * Custom event static constants (add constants here)
 *******************************************************/
 
chassis.event.AJAX_BEFORE = "ajax.before";
chassis.event.AJAX_SUCCESS = "ajax.success";
chassis.event.AJAX_COMPLETE = "ajax.complete";
chassis.event.AJAX_ERROR = "ajax.error";
chassis.event.PRODUCT_ADD = "productadd";
chassis.event.PRODUCT_REMOVE = "productremove";
chassis.event.MINI_BASKET_REMOVE = "minibasketremove";
chassis.event.DELIVERY_SAME_AS = "deliverysameas";
chassis.event.VIEW_PRODUCT = "viewproduct";
chassis.event.CHECKOUT_BASKET_XHR_COMPLETE = "checkoutbasketxhrcomplete"; 

/*******************************************************
 * End custom event static constants
 *******************************************************/

/**
	 * Code example from Zach Leatherman's blog, based on the YUI namespacer
	 * Returns the namespace specified and creates it if it doesn't exist
	 *
	 * Be careful when naming packages. Reserved words may work in some browsers
	 * and not others. For instance, the following will fail in Safari:
	 * <pre>
	 * YAHOO.namespace("really.long.nested.namespace");
	 * </pre>
	 * This fails because "long" is a future reserved word in ECMAScript
	 *
	 * @method namespace
	 * @static
	 * @param  {String*} arguments 1-n namespaces to create 
	 * @return {Object}  A reference to the last namespace object created
	 */
chassis.namespace = function namespace(){
	var a = arguments, o = null, i, j, d;
	for (i = 0; i < a.length; i = i + 1) {
		d = a[i].split(".");
		o = window;
		for (j = 0; j < d.length; j = j + 1) {
			o[d[j]] = o[d[j]] ||
			{};
			o = o[d[j]];
		}
	}
	return o;
}

chassis.namespace("chassis.customxhr");

// custom event XHR wrapper for jQuery

/**
 * chassis.customxhr
 * jQuery Ajax custom event wrapper
 * Generates custom events against jQuery XHR events
 *
 * @param $ {Object} JSON AJAX callback functions
 * @return nothing returned
 */

chassis.customXhr = (function (config) {
  
  var ajaxBefore = config.beforeEvent || chassis.events.AJAX_BEFORE,
      ajaxSuccess = config.successEvent || chassis.events.AJAX_SUCCESS,
      ajaxComplete = config.complete || chassis.events.AJAX_COMPELTE,
      ajaxError = config.error || chassis.events.AJAX_ERROR;

  config.before = function () {
    if (config.beforeEvent) $.publish(ajaxBefore);
  }

  config.success = function (data) {
    if (config.successEvent) $.publish(ajaxSuccess, data);
  }

  config.complete = function () {
    if (config.completeEvent) $.publish(ajaxComplete);
  }

  config.error = function (xhr, strError) {
    if (config.errorEvent) $.publish(ajaxError, strError);
  }

  return jQuery.ajax(config);
}); // end chassis.customxhr