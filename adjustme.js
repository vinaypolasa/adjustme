(function ( $ ) {
$.fn.adjustme = function(settings) {
  var containerwidth = $("#container").attr('width');
	var children = $("#container #block").size();
	var childrenwidth = parseInt((containerwidth/children));
	var sqeezto = parseInt((childrenwidth)) - parseInt((childrenwidth/1.2));
	sqeezto = parseInt((childrenwidth)) - sqeezto;
	var expandto = parseInt((childrenwidth - sqeezto)*parseInt(children-1));
	expandto = parseInt(childrenwidth + expandto);
	$("#container > div[id]").each(function(){
	$(this).css('width', childrenwidth);	
	$(this).css({minHeight: 150});
	if(typeof settings != 'undefined' && settings.dynamiccolor){
	$(this).css('background-color','#'+Math.floor(Math.random()*16777215).toString(16)); 
	}
	$(this).css('float','left');
	$(this).hover(
			 function (e) {
	        	  $(this).css('cursor','pointer');
	        	 $(this).parent().children().not(this).stop(true, true).animate({
	        	        width: sqeezto
	        	    }, 300 );
	        	  $(this).stop(true, true).animate({
	        	        width: expandto
	        	    }, 300 );
			  }, 
	         function () {
	        	 $(this).parent().children().not(this).stop(true, true).animate({
	        	        width: childrenwidth
	        	    }, 300 );
	        	  $(this).stop(true, true).animate({
	        	        width: childrenwidth
	        	    }, 300 );
	         }
	     );
	});
};
}( jQuery ));
