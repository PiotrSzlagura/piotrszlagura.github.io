$(document).ready(function(){
	$(".width-adjust").css("width", $(window).width());
})

$(window).resize(function(){
	$(".width-adjust").css("width", $(window).width());
})