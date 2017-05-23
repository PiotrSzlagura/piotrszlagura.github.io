setInterval(function(){
	$(".loading-rotate-logo").fadeTo(1500, 0.3);
	$(".loading-rotate-logo").fadeTo(1500, 1);
}, 3000);

$(window).load(function(){
	
	$(".loading-show").delay(1500).fadeOut(1000);
	$(".loading-rotate-logo").stop(true, true, true);
	var offer = true;
	var rotate = 1500;
	var obroty = 1;

	$("#box-wrapper").delay(500).animateRotate(obroty*360 + 45, rotate*2);
	$("#box-wrapper").delay(300).fadeIn((rotate * 2) - 200);
	

	$(".content-box").css("height", $(window).height());
	$(".content-box").css("width", $(window).width());

	if($(window).height() <= 636)
	{
		$("#whole-wrapper").css({
			"padding-top": 95,
			"margin-top": 0
			});
		
	}
	else
	{
		$("#whole-wrapper").css({
			"margin-top": 0,
			"padding-top": 95 + ($(window).height() - 636) / 2
			});
		
	}

	

	$(".do-flip").click(function(){
		document.title = "ConeDesign";
		if(offer && !$("#box-wrapper").hasClass("rotating"))
		{
			$("#box-wrapper").stop(true, true, true);
			$(".boxed-menu-display-2").stop(true, true, true);
			$(".box-o-firmie").stop(true, true, true);
			$(".box-ekipa").stop(true, true, true);
			$(".box-oferta").stop(true, true, true);
			$(".box-kontakt").stop(true, true, true);
			$("#box-wrapper").addClass("rotating");

			$("#box-wrapper").animateRotate(obroty*360 + 45, rotate, function(){
				$("#box-wrapper").removeClass("rotating");
			});
			$(this).children(".logo").animateRotate(- 2*obroty*360 - 45, rotate);
			$(this).children(".logo2").animateRotate(- 2*obroty*360 - 45, rotate);

			$(this).children(".logo").fadeOut(rotate / 2);
			$(this).children(".logo2").delay(rotate / 2).fadeIn(rotate / 2);

			$(".boxed-menu-display-1").removeClass("box-link");
			$(".boxed-menu-display-2").addClass("box-link");

			$(".boxed-menu-display-1").fadeTo(rotate, 0.5);
			$(".boxed-menu-display-2").fadeTo(rotate, 1);

			/*

			$(".boxed-menu-display-2").animate({
				backgroundColor: "black"
			}, {duration: rotate, queue: false});
			
			$(".box-o-firmie").animate({
				backgroundColor: "rgba(48, 141, 155, 0.3)"
			}, {duration: rotate, queue: false});
			$(".box-ekipa").animate({
				backgroundColor: "rgba(33, 72, 95, 0.3)"
			}, {duration: rotate, queue: false});
			$(".box-oferta").animate({
				backgroundColor: "rgba(53, 147, 121, 0.3)"
			}, {duration: rotate, queue: false});
			$(".box-kontakt").animate({
				backgroundColor: "rgba(0, 66, 128, 0.3)"
			}, {duration: rotate, queue: false});
		*/
			offer = false;
			$(this).children(".logo2").fadeIn(1);
		}
		else if(!offer && !$("#box-wrapper").hasClass("rotating"))
		{
			$("#box-wrapper").stop(true, true, true);
			$(".boxed-menu-display-2").stop(true, true, true);
			$(".box-o-firmie").stop(true, true, true);
			$(".box-ekipa").stop(true, true, true);
			$(".box-oferta").stop(true, true, true);
			$(".box-kontakt").stop(true, true, true);
			$("#box-wrapper").addClass("rotating");
					
			$("#box-wrapper").animateRotate(obroty*360 + 45, rotate, function(){
				$("#box-wrapper").removeClass("rotating");
			});
			$(this).children(".logo2").animateRotate(- 2*obroty*360 - 45, rotate);
			$(this).children(".logo").animateRotate(- 2*obroty*360 - 45, rotate);

			$(this).children(".logo2").fadeOut(rotate / 2);
			$(this).children(".logo").delay(rotate / 2).fadeIn(rotate / 2);

			$(".boxed-menu-display-2").removeClass("box-link");
			$(".boxed-menu-display-1").addClass("box-link");

			$(".boxed-menu-display-2").fadeTo(rotate, 0.5);
			$(".boxed-menu-display-1").fadeTo(rotate, 1);


			/*

			$(".boxed-menu-display-2").animate({
				backgroundColor: "rgba(0, 0, 0, 0.6)"
			}, {duration: rotate, queue: false});
			
			$(".box-o-firmie").animate({
				backgroundColor: "rgba(48, 141, 155, 1)"
			}, {duration: rotate, queue: false});
			$(".box-ekipa").animate({
				backgroundColor: "rgba(33, 72, 95, 1)"
			}, {duration: rotate, queue: false});
			$(".box-oferta").animate({
				backgroundColor: "rgba(53, 147, 121, 1)"
			}, {duration: rotate, queue: false});
			$(".box-kontakt").animate({
				backgroundColor: "rgba(0, 66, 128, 1)"
			}, {duration: rotate, queue: false});

			*/

			offer = true;
			$(this).children(".logo").fadeIn(1);
		}	
	});

	$(".toggle-lang").click(function(){
		if(!$("#box-wrapper").hasClass("rotating"))
		{
			$("#box-wrapper").stop(true, true, true);
			$(".boxed-menu-display-2").stop(true, true, true);
			$(".box-o-firmie").stop(true, true, true);
			$(".box-ekipa").stop(true, true, true);
			$(".box-oferta").stop(true, true, true);
			$(".box-kontakt").stop(true, true, true);
			$("#box-wrapper").addClass("rotating");

			$("#box-wrapper").animateRotate(obroty*360 + 45, rotate, function(){
				$("#box-wrapper").removeClass("rotating");
			});
		}
	});

	$(".toggle-pl").click(function(){
		$('body').removeClass("english").addClass("polish");
		setCookie("lang", "pl", 10);
	})

	$(".toggle-en").click(function(){
		$('body').removeClass("polish").addClass("english");
		setCookie("lang", "en", 10);
	})

	$(".cookie-alert").click(function(){
		$(this).fadeOut(500);
		setCookie("cookie", "1", 10);
	})


	$(".additional-offer-menu.trigger").mouseenter(function(){
		$(".additional-offer-menu.trigger").stop(true, true, true);
		var init = $(this).attr("data-init");
		switch(init)
		{
			case "ekipa":
				$(".additional-offer-menu.initial-hidden").css("background", "#21485f");
				break;
			case "o_firmie":
				$(".additional-offer-menu.initial-hidden").css("background", "#003757");
				break;
			case "kontakt":
				$(".additional-offer-menu.initial-hidden").css("background", "#024E64");
				break;
			default:
				$(".additional-offer-menu.initial-hidden").css("background", "black");
		}
		$(".additional-offer-menu.initial-hidden").animate({
			top: "60px"
		},{duration: 1, queue: true});
		$(".additional-offer-menu.initial-hidden").delay(500).slideDown(500);
	})		

	$(".additional-offer-menu.trigger").mouseleave(function(){
		$(".additional-offer-menu.initial-hidden").stop(true, true, true);
		$(".additional-offer-menu.initial-hidden").delay(5000).slideUp(500);
	})

	$(document).click(function(){
		$(".additional-offer-menu.initial-hidden").stop(true, true, true);
		$(".additional-offer-menu.initial-hidden").slideUp(500);
	})

	$("a.scroll-to").click(function(){
		$(".additional-offer-menu.initial-hidden").stop(true, true, true);
		$(".additional-offer-menu.initial-hidden").slideUp(50);
	})

	$(".content-box").scroll(function(){
		$(".additional-offer-menu.initial-hidden").stop(true, true, true);
		$(".additional-offer-menu.initial-hidden").animate({
			top: "0px"
		},{duration: 500, queue: false});
		$(".additional-offer-menu.initial-hidden").fadeOut(500);
		$(".additional-offer-menu.initial-hidden").animate({
			top: "60px"
		},{duration: 1, queue: true});
	})
})

$(window).resize(function(){
	$(".content-box").css("height", $(window).height());
	$(".content-box").css("width", $(window).width());

	if($(window).height() <= 636)
	{
		$("#whole-wrapper").css({
			"padding-top": 95,
			"margin-top": 0
			});
		
	}
	else
	{
		$("#whole-wrapper").css({
			"margin-top": 0,
			"padding-top": 95 + ($(window).height() - 636) / 2
			});
		
	}
})

$(document).on("mousedown", function(e) {
   if(e.which == 2) {
      e.preventDefault();
   }
});