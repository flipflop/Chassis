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

var bodyTag =  document.getElementsByTagName('body'),
       styleTags = document.getElementsByTagName('style'),
       isUsingLess = false,
       lessLinksHTML = "",
       fragmentHTML = "",
       overlayTitle = "For compiled CSS : right click on each link and Save As",
       errorMessage = "No Less Styles found, you may be using Less PHP?";
// locate Less (via id) style tags
for (var i=0; styleTag = styleTags[i]; i++) { 
  if (styleTags[i].id.indexOf('less') != -1) {
      isUsingLess = true;
      lessLinksHTML += '<li>';
      lessLinksHTML += '<a href=\"data:text/html;charset=utf-8,'+encodeURIComponent(styleTags[i].innerHTML)+'\">'+ styleTags[i].id.split(':')[1] +'</a>';
      lessLinksHTML += '</li>';
   }   
}

if (!isUsingLess) {
    overlayTitle = errorMessage;
}

// output links
fragmentHTML =  '<div class=\"baseplate-saveas\">' +
               '<h2 style=\"margin-bottom: 18px\">'+overlayTitle+'</h2>' +
               '<ul>' +
               lessLinksHTML +
               '</ul>' +
               '<button onclick=\"jQuery(\'.baseplate-saveas\').fadeOut(function(){jQuery(this).remove();})\">Close</button>' +
               '</div>';
// create overlay
$('body').append(fragmentHTML);

$('.baseplate-saveas button').css({
    'padding' : '4px',
    '-webkit-border-radius' : '10px',
    'border-radius' : '10px',
    'float' : 'right'
});
$('.baseplate-saveas').css({
       'position' : 'absolute',
       'top' : '100px',
       'left' : '30%',
       'padding' : '18px',
       'border' : '2px solid #933',
       '-webkit-border-radius' : '10px',
       '-webkit-box-shadow' : '4px 4px 4px #666',
       'border-radius' : '10px',
       'box-shadow' : '4px 4px 4px #666',
       'backgroundColor' : '#fff'
});
