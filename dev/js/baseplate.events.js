/**
 *
 * Baseplate 0.5
 *
 * Copyright 2011 
 *
 * Rozario Chivers @terraflop
 *
 * Dual licensed under the MIT or GPL Version 2 licenses 
 * http://en.wikipedia.org/wiki/MIT_License
 * http://en.wikipedia.org/wiki/GNU_General_Public_License
 *
 */

 (function($, document, undefined){
     $(function(){
        $(".tooling li a").bind("click", function(e) {
            if ($("body").hasClass($(this).attr("id"))) {
                $("body").attr("class", "");
            } else {
                $("body").attr("class", $(this).attr("id"));
            }
 	        e.preventDefault();
 	    });
     });
 }(jQuery, document));
