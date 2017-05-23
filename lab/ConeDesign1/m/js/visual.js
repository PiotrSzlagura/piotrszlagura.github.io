var arrow_toggle = true;

$(document).ready(function(){
	$(".show-menu-button").click(function(){
		if(arrow_toggle && !$(".show-menu-button").hasClass("moving"))
		{
			$(".show-menu-button").addClass("moving");

			$(this).children(".third").animateRotate(-45, 0, 500)
									  .animate({
									  	width: "50%",
									  	top: -4
									  }, 500);

			$(this).children(".second").animate({
									  	width: "84%",
									  }, 500, function(){$(".show-menu-button").removeClass("moving");});

			$(this).children(".first").animateRotate(45, 0, 500)
									  .animate({
									  	width: "50%",
									  	top: 4
									  }, 500);	

			$(".sidebar-menu-slide").animate({
				right: 0
			}, 500);	
			arrow_toggle = false;
		}
		else if(!arrow_toggle && !$(".show-menu-button").hasClass("moving"))
		{
			$(".show-menu-button").addClass("moving");

			$(this).children(".third").animateRotate(360, -45, 500)
									  .animate({
									  	width: "100%",
									  	top: 0
									  }, 500);

			$(this).children(".second").animate({
									  	width: "100%",
									  }, 500, function(){$(".show-menu-button").removeClass("moving");});	

			$(this).children(".first").animateRotate(-360, 45, 500)
									  .animate({
									  	width: "100%",
									  	top: 0
									  }, 500);	

			$(".sidebar-menu-slide").animate({
				right: "-100%"
			}, 500);

			arrow_toggle = true;	
		}				  
	})
})

