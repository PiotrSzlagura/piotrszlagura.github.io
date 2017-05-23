$(document).ready(function() {
	$(".offer-box").mouseenter(function(){
		$(".offer-filling").animate({
			backgroundColor: "rgba(255, 255, 255, 0.75)"
			
		}, {duration: 500, queue: false});

		$(this).children(".offer-bg").children(".offer-filling").animate({
			backgroundColor: "rgba(255, 255, 255, 0.25)"
			
		}, {duration: 500, queue: false});

		$(this).children(".offer-bg").children(".offer-filling").children("p").children("span").animate({
			backgroundColor: "rgba(255, 255, 255, 0.5)"
			
		}, {duration: 500, queue: false});
	})
	$(".offer-box").mouseleave(function(){
		$(".offer-filling").animate({
			backgroundColor: "rgba(255, 255, 255, 0.5)"
			
		}, {duration: 500, queue: false});

		$(this).children(".offer-bg").children(".offer-filling").animate({
			backgroundColor: "rgba(255, 255, 255, 0.5)"

		}, {duration: 500, queue: false});

		$("span").animate({
			backgroundColor: "transparent"
			
		}, {duration: 500, queue: false});
	})
})