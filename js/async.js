$(document).ready(function(){
	$("#contact").on("click", function(e) {
		console.log("it is done");
		e.preventDefault();
		$("#main").load("partials/contact.html");
   			 var content = $("#main");
			 console.log("Injectee");
 		    	 $("#main").injector().invoke(function($compile) {
       		 	 var scope = angular.element(content).scope();
       		 $compile(content)(scope);
			  });
	});
	
	var $result;
	$("#about").on("click", function(e){
		console.log("it is done");
		e.preventDefault();
		
		$.get( "partials/about.html", function( data ) {
 			 $result = $(data);
			  console.log($result);
		}).done( function () {
					
					
 		     	var thing = $(document).injector();
				thing.invoke(function($compile) {
       		 		var scope = $result.scope();
						console.log("scope");
						console.log(scope);
						var compiler = $compile($result);
						compiler(scope);
       			 	$("#main").replaceWith($compile($result)(scope));
				});
				
		
		

			  });
			  console.log("printing the result");
			  console.log($result);
	});
	
	
	$("#events").on("click", function(e){
		console.log("it is done");
		e.preventDefault();
		$("#main").load("partials/events.html");
   			 var content = $("#main");
			 console.log("Injectee");
 		     $(document).injector().invoke(function($compile) {
       		 var scope = angular.element(content).scope();
       		 $compile(content)(scope);
	});
	});
	$("#gallery").on("click", function(e){
		console.log("it is done");
		e.preventDefault();
		$("#main").load("partials/gallery.html");
   			 var content = $("#main");
			 console.log("Injectee");
 		     $("#main").injector().invoke(function($compile) {
       		 var scope = angular.element(content).scope();
       		 $compile(content)(scope);
	});
	});
	$("#home").on("click", function(e){
		console.log("it is done");
		e.preventDefault();
		$("#main").load("partials/index.html");
   			 var content = $("#main");
			 console.log("Injectee");
 		     $("#main").injector().invoke(function($compile) {
       		 var scope = angular.element(content).scope();
       		 $compile(content)(scope);
	});
	});
	console.log("Events loaded");
});