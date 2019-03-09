(function($){
	$.fn.listChange = function(parameters){
		
		//attributes
		var iniDefault	= {
			timeOut	: 1500
		}
		var target		= $(this);
		var current		= 2;
		var amount		= $(this).find("li").size();
		var vDefault	= $.extend({},iniDefault,parameters);
		var imageHeight	= $(target).find("li img").height();
		
		
		if(amount > 1){
			//adjusts LI height
			$(this).css({height : imageHeight});
			
			//hides all, except the first
			$(this).find("li:not(:first)").hide();
			$(this).find("img").show();
			
			var change = function(){
				$(target).find("li").hide();
				$(target).find("li:nth-child(" + current + ")").fadeIn();
				current = (current == amount) ? 1 : current + 1;
			}
			window.setInterval(change, vDefault.timeOut);
		}
		else{
			$(this).find("img").show();
		}
	};
})(jQuery);