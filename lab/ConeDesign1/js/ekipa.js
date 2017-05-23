var trans = 350;

$(document).ready(function() {
	$(".ekipa-box").mouseenter(function(){
		$(".img-filling").animate({
			backgroundColor: "rgba(255, 255, 255, 0.3)"
		}, {duration: trans, queue: false});
		$(this).children(".img-wrapper").children(".man-img").children(".img-filling").animate({
			backgroundColor: "transparent"
		}, {duration: trans, queue: false});
		$(this).children(".img-wrapper").animate({
			backgroundColor: "white"
		}, {duration: trans, queue: false});
		$(this).children(".additional").animate({
			backgroundColor: "#111"
		}, {duration: trans - 100, queue: false});
		$(this).children(".additional").children("h3").animate({
			color: "#ddd"
		}, {duration: trans, queue: false});
	})
	$(".ekipa-box").mouseleave(function(){
		$(".img-filling").animate({
			backgroundColor: "transparent"
		}, {duration: trans, queue: false});
		$(this).children(".img-wrapper").children(".man-img").children(".img-filling").animate({
			backgroundColor: "transparent"
		}, {duration: trans, queue: false});
		$(this).children(".img-wrapper").animate({
			backgroundColor: "rgba(255, 255, 255, 0.5);"
		}, {duration: trans, queue: false});
		$(this).children(".additional").animate({
			backgroundColor: "white"
		}, {duration: trans, queue: false});
		$(this).children(".additional").children("h3").animate({
			color: "#333"
		}, {duration: trans, queue: false});
	})
})