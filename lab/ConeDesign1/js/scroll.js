$(document).ready(function(){

	url_to_replace = "";

	$('html, body').animate({
	    scrollTop: $("#main-page").offset().top,
	    scrollLeft: $("#main-page").offset().left
	}, 1, function(){location.href = "#main-page"});

	$("a.scroll-to").click(function(){

		url_to_replace = $(this).attr("data-scroll");

		/*$('html, body').animate({
			zoom: 0.995
		}, {duration: 500, queue: true});
		*/
		$('html, body').delay(250).animate({
        scrollTop: $($(this).attr("data-scroll")).offset().top,
        scrollLeft: $($(this).attr("data-scroll")).offset().left
    	},{
				duration: 2000,
				easing: "easeInOutQuart",
				queue: false,
				complete: function(){
					location.href = url_to_replace;
					}
				});

    	/*$('html, body').animate({
			zoom: 1
		}, {duration: 500, queue: true});
		*/


	});

	$(".menu-box").click(function(){
		if($(this).hasClass("box-link"))
		{
			/*
			$('html, body').animate({
			zoom: 0.995
			}, {duration: 500, queue: true});
			*/
			url_to_replace = $(this).attr("data-scroll");

			$('html, body').delay(250).animate({
	        scrollTop: $($(this).attr("data-scroll")).offset().top,
	        scrollLeft: $($(this).attr("data-scroll")).offset().left
	    	},{
					duration: 2000,
					easing: "easeInOutQuart",
					queue: false,
					complete: function(){
						location.href = url_to_replace;
						}
					});

			/*
	    	$('html, body').animate({
				zoom: 1
			}, {duration: 500, queue: true});
			*/

		}
	});

	$(".box-link-always-on").click(function(){
		/*
		$('html, body').animate({
		zoom: 0.995
		}, {duration: 500, queue: true});
		*/
		url_to_replace = $(this).attr("data-scroll");

		$('html, body').delay(250).animate({
	    scrollTop: $($(this).attr("data-scroll")).offset().top,
	    scrollLeft: $($(this).attr("data-scroll")).offset().left
	    },{
				duration: 2000,
				easing: "easeInOutQuart",
				queue: false,
				complete: function(){
					location.href = url_to_replace;
					}
				});

		/*
	    $('html, body').animate({
			zoom: 1
		}, {duration: 500, queue: true});
		*/

		$(this).parents(".content-box").delay(2000).animate({
	    scrollTop: 0,
	    },{duration: 1, queue: true});

	});

	scroll_block = false;

	$(window).keydown(function(e){
		if(e.which == 17)
		{
			scroll_block = true;
		}

	});


	$(window).keyup(function(e){
		if(e.which == 17)
		{
			scroll_block = false;
		}
	});

	$(window).bind('DOMMouseScroll', function(f){
		if(scroll_block == true) return false;
		else return true;
	 })

	 //IE, Opera, Safari
	 $(window).bind('mousewheel', function(f){
	   	if(scroll_block == true) return false;
		else return true;
	});

	$(window).keydown(function(g){
		if(g.which == 107 || g.which == 109 || g.which == 187 || g.which == 189)
		{
			if(scroll_block == true) return false;
			else return true;
		}
	});
});
