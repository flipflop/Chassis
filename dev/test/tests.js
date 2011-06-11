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

// documentation on writing tests here: http://docs.jquery.com/QUnit
// example tests: https://github.com/jquery/qunit/blob/master/test/same.js

// below are some general tests but feel free to delete them.

  var testCases = (function($, doc) {
  var pageContext = $("#container").attr("class").split(" "),
      pageName = pageContext[3];
  
  module("JavaScript");
    
  test('Page Context', function() {
    //expect(26);
    //log('Page Context tests.')
    equals( pageContext[0], "en-gb", 'locale (en-gb) present' );
    equals( pageContext[1], "chassis", 'site name (chassis) present' );
    equals( pageContext[4], "cat-1", 'category (cat-1) present' );
    equals( pageContext[5], "cat-1-2", 'sub-category (cat-1-2) present' );
    equals( pageContext[6], "cms-seasonal", 'seasonal CSS background (cms-seasonal) present' );    
  });
  
  /* --- COPY GENERATED UI Tests (from Bookmarklet) below: --- */
  
  /*  ------------------------------------------
      PAGE : BEGIN pg-home TEST CASES
      ------------------------------------------ */
  if (pageName == "pg-home") { // PAGE NAME CHECK

      module("Layouts");

      test("Page and Layout UI tests", function() {
        equals("pg-home", "pg-home", "page name (pg-home) present");
        equals($("#wrapper").attr("class"), "layout-1-column", "layout: layout-1-column present");
      });

      module("Components");

      test("Component UI tests", function() {
         ok($("*[data-component-name='skip-links']")[0],"Component: skip-links present");
         ok($("*[data-component-name='homepage-layout-module']")[0],"Component: homepage-layout-module (1) present");
         ok($("*[data-component-name='homepage-layout-module']")[1],"Component: homepage-layout-module (2) present");
         ok($("*[data-component-name='promo']")[0],"Component: promo (1) present");
         ok($("*[data-component-name='promo']")[1],"Component: promo (2) present");
         ok($("*[data-component-name='promo']")[2],"Component: promo (3) present");
         ok($("*[data-component-name='promo']")[3],"Component: promo (4) present");
         ok($("*[data-component-name='promo']")[4],"Component: promo (5) present");
         ok($("*[data-component-name='promo']")[5],"Component: promo (6) present");
         ok($("*[data-component-name='promo']")[6],"Component: promo (7) present");
         ok($("*[data-component-name='promo']")[7],"Component: promo (8) present");
         ok($("*[data-component-name='promo']")[8],"Component: promo (9) present");
         ok($("*[data-component-name='promo']")[9],"Component: promo (10) present");
         ok($("*[data-component-name='promo']")[10],"Component: promo (11) present");
         ok($("*[data-component-name='promo']")[11],"Component: promo (12) present");
         ok($("*[data-component-name='promo']")[12],"Component: promo (13) present");
         ok($("*[data-component-name='promo']")[13],"Component: promo (14) present");
         ok($("*[data-component-name='promo']")[14],"Component: promo (15) present");
         ok($("*[data-component-name='promo']")[15],"Component: promo (16) present");
         ok($("*[data-component-name='header']")[0],"Component: header present");
         ok($("*[data-component-name='search']")[0],"Component: search present");
         ok($("*[data-component-name='footer']")[0],"Component: footer present");
      });

  } // end if (pageName == "pg-home")

  /*  ------------------------------------------
      PAGE : END pg-home TEST CASES
      ------------------------------------------ */
     
}(jQuery, document)) // end testCases()