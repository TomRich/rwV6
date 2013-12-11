
// This ready handler passes the jQuery alias in to avoid conflict with other libraries.

jQuery(document).ready(function($)
{

	/***********************************************/
	//	CONSTANTS
	//	Use upper case variable names to declare
	//	constants such as configuration paths, scoped to this
	//	closure and available to all methods.
	//	Separate words with underscores.
	/***********************************************/
	
	var CONSTANT_NAME = 'A constant, available to all methods of this closure.';
	

	/***********************************************/
	//	VARS
	//	Use lower case variable names to declare
	//	variables that are scoped to this
	//	closure and available to all methods.
	//	Use camel case to separate words.
	/***********************************************/
	
	var instanceVariable = 'An instance variable, available to all methods of this closure.';	
	
	
	/***********************************************/
	//	INIT
	//	This function will be called upon load, so call
	//	any initialastion functions here. 
	/***********************************************/
	
	this.init = function()
	{	
		getData();	
	}();


	/***********************************************/
	//	EXAMPLE METHODS
	/***********************************************/	
	
	// get some data
	// uncomment the lines below to test functionality
	function getData()
	{
		// define a local variable
		var localVariable = 'A local variable, scoped to this method.';
		//console.log(localVariable);

		// access some instance variables
		//console.log(CONSTANT_NAME);
		//console.log(instanceVariable);

		// call a method - maybe an ajax call?
		//onData('onData: I was called from on getData.');
	}
	
	// on data return
	function onData(data)
	{  		
		// log out some data
		console.log(data);
		
		// get the body with jQuery, do something with it.
		$('body').each(function (){
			console.log(this);
		})
	}	
		
});
jQuery(document).ready(function(){$("#header").height($(window).height());$(window).resize(function(){$("#header").height($(window).height());$("#header").css("min-height","550px")});$("#work").height($(window).height());$(window).resize(function(){$("#work").minHeight($(window).height());$(".showcase-info").css("min-height","360px")});$("#contact").height($(window).height());$(window).resize(function(){$("#contact").height($(window).height());$("#contact").css("min-height","550px")})});
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
