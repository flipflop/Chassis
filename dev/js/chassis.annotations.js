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

/*
 * Annotation reader
 * @param scriptSrc {String} path and name of JavaScript file
 * @param annotation {String} name of annotation (default "@annotate")
 * @return nothing returned
 */

;(function ( container, $, doc ) { // add in more parameters for context e.g. ( container, jQuery, document, undefined )

    function createModule()  { // Revealing Module Pattern with execution context passed in arguments
    
        var tagTypes = "script, link",
		newXmlHttpReq = null,
		filePath = null,
		targetContent = "",
		annotationToken = "@annotate", //default
		annotationList = [],
		ASSERT_END = ")",
		BLOCK_END = "}",
		COMMENT_END = "-->",
		tokens = [];

		function getList() {
			return annotationList;
		}

		function Load (filePath, annotation) {
			if(annotation) annotationToken = annotation; 

			var XHR = $.ajax({
				url : filePath,
				contentType : "txt/html",
				dataType : "text",
				timeout: (4000), 
				success : function(data) {
					chassis.annotations.getData(data);
				}
			});		
		}

		function getTags() {
			var tags = $(chassis.annotations.tagTypes);

			return tags;
		}

		function setTagContent() {
			var tagBody = chassis.annotations.getTags().text();
			chassis.annotations.getData(tagBody);
		}

		function loadFiles() {
			var filePath = null;

			$(chassis.annotations.getTags()).each(function(i) {
				if (this.src) {
					filePath = this.src;
				} else if (this.href) {
					filePath = this.href;
				}
				
				// TODO: refactor Black List (should be config based)
				if (filePath.match(/chassis.annotations.js/i)) return;
				if (filePath.match(/jquery.js/i)) return;
				if (filePath.match(/.png/i)) return;
				if (filePath.match(/.xml/i)) return;
				chassis.annotations.Load(filePath);
			});
		}

		function getAll(tokens) {
			chassis.annotations.tokens = tokens;
			chassis.annotations.setTagContent();
			chassis.annotations.loadFiles();
			//$.publish(chassis.events.annotation.ready, {});
		}

		function getData(data) {
			chassis.annotations.targetContent = data;
			chassis.annotations.annotationList += chassis.annotations.parse();
		}
		
		function findAnnotations(startIndex, content) {
			//var content = this.jsContent;
			var dataList = [],
			    annotationToken,
			    tokens = chassis.annotations.tokens,
			    tokensLength = tokens.length,
			    annotationContent = null,
			    stdOut = "",
			    END_BLOCK = "";
			
			// iterate over annotation tokens
			for (var i = 0; i < tokensLength; i++) {
			    
				END_BLOCK = (tokens[i] == "assert") ? chassis.annotations.ASSERT_END : chassis.annotations.BLOCK_END;
				
				if (content.indexOf("-->") !== -1) {
				    END_BLOCK = chassis.annotations.COMMENT_END;
				}
				
				// locate annotations
				while (startIndex >= 0 && startIndex < content.length) {
				    
					//console.log("tokens: " + tokens[i]);
					var annotationStartIndex = content.indexOf(tokens[i], startIndex);

					if (annotationStartIndex == -1) 
						break;

					var annotationEndIndex = content.indexOf(END_BLOCK, annotationStartIndex);
					if (annotationEndIndex == -1) 
						break;

					annotationContent = content.substring(annotationStartIndex + tokens[i].length, annotationEndIndex + 1);
					dataList.push(annotationContent);
					startIndex = annotationEndIndex + 1;
					//$.publish(tokens[i], annotationContent);

					stdOut = tokens[i]+ "" + annotationContent;
					// output
					if (tokens[i] == "TODO:") {
						console.warn(stdOut);
					} 	
					else if (tokens[i] == "assert") { 	// if a test or assertion call a function
							console.log(stdOut + " " + eval(annotationContent).toString().toUpperCase());
						}
					else {
						console.info(stdOut);
					}

					//console.log(tokens[i]);
				} // end while

			} // end for (var i)
			return dataList;
		}	

		function parse() {
			return findAnnotations(0, chassis.annotations.targetContent);
		}
    
        var contract = { // add public methods / properties here (remove if not needed)
           	ASSERT_END: ASSERT_END,
    		BLOCK_END : BLOCK_END,
    		COMMENT_END : COMMENT_END,
    		tokens : tokens,
    		tagTypes : tagTypes,
    		parse : parse,
    		targetContent : targetContent,
    		annotationList : annotationList,
    		getData : getData,
			getTags : getTags,
			getAll : getAll,
    		setTagContent : setTagContent,
    		Load : Load,
    		loadFiles : loadFiles
        }

        // Public interface (properties and methods)
        return contract;

    } // end module

    // Public API (assigns to my namespace)
    container.annotations = createModule();

})( this.chassis || (this.chassis = {}), jQuery, document, undefined ); // end chassis.annotations (create namespace and context)
// end chassis.annotations

//chassis.annotations.getAll(["@annotate","@assert","@test", "TODO:"]);
chassis.annotations.getAll(["@assert","TODO:"]);
//chassis.annotations.Load("js/testscript.js");