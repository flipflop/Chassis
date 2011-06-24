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

/* ensure jQuery plays nice */
jQuery.noConflict();

// Advanced Module pattern (public and private members within a namespace)
// Note: ; before parenthesis is deliberate and undefined is passed in to protect it from being redefined
// chassis.pageContext
;(function ( container, $, doc, undefined ) { // add in more parameters for context e.g. ( container, document, jQuery, utils )

	function createModule()  { // Revealing Module Pattern with execution context passed in arguments
		var BODY_CLASS = $("body").attr("class").split(" ")[0],
      	CONTAINER_ID = "#container",
    		contextClassStr = $(CONTAINER_ID).attr("class"),
    		contexts = contextClassStr.split(" "),
    		SITE_NAME = contexts[1],
    		PAGE_NAME = contexts[3],
    		LANGUAGE = contexts[0],
    		CATEGORY = contexts[4],
    		SUB_CATEGORY = contexts[5],
    		THEME = contexts[6],
    		THEME_BG = BODY_CLASS,
    		LAYOUT = $("#wrapper").attr("class").split(" ")[0],
    		HTTP_IMAGE_PATH = "",
    		HTTPS_IMAGE_PATH = "",
    		CURRENT_URL = window.location.href;
	  
	  /* class format reminder (id="container") : en-gb chassis home cat-1 cat-1-2 cms-seasonal */
	  	    
		// public properties
		var contract = {
			SITE_NAME : SITE_NAME,
    		PAGE_NAME : PAGE_NAME,
    		LANGUAGE : LANGUAGE,
    		CATEGORY : CATEGORY,
    		SUB_CATEGORY : SUB_CATEGORY,
    		THEME : THEME,
    		THEME_BG : THEME_BG,
    		LAYOUT : LAYOUT,
    		HTTP_IMAGE_PATH : HTTP_IMAGE_PATH,
    		HTTPS_IMAGE_PATH : HTTPS_IMAGE_PATH,
    		CURRENT_URL : CURRENT_URL
		};

		// Public interface (properties and methods)
		return contract;

	} // end module

	// Public API (assigns to my namespace)
	container.pageContext = createModule();

})( this.chassis || (this.chassis = {}), jQuery, document ); // create namespace and context
// end chassis.pageContext

// chassis.util
;(function ( container, $, doc, undefined ) { // add in more parameters for context e.g. ( container, document, jQuery, utils )

	function createModule()  { // Revealing Module Pattern with execution context passed in arguments
	
    var displayMode = "",
        displaySize = "",
    init = function() {
    	// set orientation classes based on orientationchange event
    	$(function() {	
    	  
    	  updateOrientation();
    	  addDisplayDimensionClass();
    	  removeNoJSClass();
    	  
    		if ( window.orientation != undefined ) {
    		     window.onorientationchange = updateOrientation;
    			if ( window.ondevicemotion ) {	 
    				 window.ondevicemotion = function(event) {
    					updateOrientation();
    				 }
    			} // end if( window.ondevicemotion )
    		} // if ( window.orientation )	
    	});
    }();
    
    /**
  	 * return orientation class name e.g. ui-flipped 
  	 */
    function getOrientation() {
      
      return displayMode;
    }
    
    /**
  	 * sets displayMode string to one of four possible orientations
  	 * defaults to orientation == 0 "ui-normal" 
  	 */
    function updateOrientation() {
      displayMode = "ui-normal";
	  	if (window.orientation !== undefined) {
  		  switch(window.orientation) {  
  	    	case 0:  
  	    	displayMode = "ui-normal"; // width 768 
  	    	break;  

  	    	case -90:  
  	    	displayMode = "ui-right";  // width 1024
  			  break;  

  	    	case 90:  
  	    	displayMode = "ui-left";  // width 1024
  	    	break;  

  	    	case 180:  
  	    	displayMode = "ui-flipped"; // width 768
  			  break;  
  		  }
  		} 
  		// TODO: performance test : this may cause a content reflow
  		$("body").removeClass("ui-normal ui-right ui-left ui-flipped")
  		.addClass(displayMode);
		} // end updateOrientation
		
		function addDisplayDimensionClass() {
		  if ((screen.width>=320) && (screen.height>=480)) {
		      // 320 x 480 (iPhone, Android Phone etc.)
		      displaySize = "ui-phone";
		  } 
		  if ((screen.width>=600) && (screen.height>=1024)) {
		      // 1024 x 768 (iPad) & 1024 x 600, 1366 x 768 (Android Tablets) etc.
		      displaySize = "ui-wide";
		  } // end if ((screen.width>=320) && (screen.height>=480)) 
		  
		  $("body").addClass(displaySize);
		}
		
	  /**
  	 * return a comma separated list of methods available on an object. 
  	 */	
  	function getMethodList(o) {
  		var info = [];
  		for (var i in o) {
  			if(typeof o[i] === "function") {
  				info.push(i);	
  			} 
  		}
  		
  		return info.toString();
  	}
  	
  	/**
   	 * does variable substitution on the string. 
  	 * It scans through the string looking for expressions enclosed in { } braces. 
  	 * If an expression is found, use it as a key on the object, 
  	 * and if the key has a string value or number value, 
  	 * it is substituted for the bracket expression and it repeats. 
  	 * This is useful for automatically fixing URLs.
  	 * 
  	 * http://javascript.crockford.com/remedial.html
  	 */
  	function supplant(o) {
  	    return this.replace(/{([^{}]*)}/g,
  	        function (a, b) {
  	            var r = o[b];
  	            return typeof r === 'string' || typeof r === 'number' ? r : a;
  	        }
  	    );
  	}
  	
  	/**
  	 * JavaScript does not provide an infallible mechanism for distinguishing arrays from objects, 
  	 * so if we want to recognize arrays that are constructed in a different frame, 
  	 * then we need to do something more complicated.
  	 * 
  	 * http://javascript.crockford.com/remedial.html
  	 */
  	function typeOf(value) {
  	  var s = typeof value;
  	    if (s === 'object') {
  	        if (value) {
  	            if (typeof value.length === 'number' &&
  	                    !(value.propertyIsEnumerable('length')) &&
  	                    typeof value.splice === 'function') {
  	                s = 'array';
  	            }
  	        } else {
  	            s = 'null';
  	        }
  	    }
  	    
  	    return s;
  	}
  	
  	function removeNoJSClass() {
  	  $("html").removeClass("no-js")
  	}
  	
  	function isBlackBerryOS() {
    	var mobileRequest = false;
    	if (navigator.userAgent.match(/BlackBerry/i) &&
    		navigator.userAgent.match(/AppleWebKit/i)) {
    		mobileRequest = true;
    	}
    	
    	return mobileRequest;	
    }
  	
  	function isIphoneOS() {
    	var mobileRequest = false;
    	if (navigator.userAgent.match(/iPhone/i) ||
    		navigator.userAgent.match(/iPod/i)) {
    		mobileRequest = true;
    	}
    	
    	return mobileRequest;	
    }
    
    function isAndroidOS() {
    	var mobileRequest = false;
    	if (navigator.userAgent.match(/Android/i)) {
    		mobileRequest = true;
    	}
    	
    	return mobileRequest;	
    }
  	
  	function isIeMobileOS() {
    	var mobileRequest = false;
    	if (navigator.userAgent.match(/IEMobile/i)) {
    		mobileRequest = true;
    	}
    	
    	return mobileRequest;	
    }
    
		// public methods
		var contract = {
        getMethodList : getMethodList,
        supplant : supplant,
        typeOf : typeOf,
        mobile : {
            isBlackBerryOS : isBlackBerryOS,
            isIphoneOS : isIphoneOS,
            isAndroidOS : isAndroidOS,
            isIeMobileOS : isIeMobileOS
            }
		};

		// Public interface (properties and methods)
		return contract;

	} // end module

	// Public API (assigns to my namespace)
	container.util = createModule();

})( this.chassis || (this.chassis = {}), jQuery, document ); // end create namespace and context
// end chassis.util

/* 
 * Query mobile device access with:
 *
 * chassis.util.mobile.isIphoneOS()
 * chassis.util.mobile.isAndroidOS() 
 * chassis.util.mobile.isIeMobileOS()
 *
*/
