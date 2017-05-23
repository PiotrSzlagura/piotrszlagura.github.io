$(document).ready(function(){
	/*$("a.scroll-to").click(function(){

		$('html, body').animate({
        scrollTop: $($(this).attr("data-scroll")).offset().top
    	},{
				duration: 1000,				
				queue: false	
			});
	});*/
	$(".scroll-to").click(function(){

		$('html, body').animate({
        scrollTop: $($(this).attr("data-scroll")).offset().top
    	},{
				duration: 1000,				
				queue: false,
				easing: "easeInOutQuart"
			});
	});
});