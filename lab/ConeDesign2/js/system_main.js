$(".full-page-container").css("min-height", $(window).height());
$("#welcome-screen .container").css("padding-top", ($(window).height() / 2) - ($("#welcome-screen .container").height()));
$("#welcome-screen .go-down").css("top", ($(window).height() - 100));
$(".scrollowanie").css("top", ($(window).height() / 2) - ($(".scrollowanie").height() / 2));
/*$(".portfolio-description").each(function(){
	$(this).css("padding-top", 150 - ($(this).height() / 2));
})*/

$(document).ready(function(){
    
   // $(".full-page-container").css("min-height", $(window).height());
   // $("#welcome-screen .container").css("margin-top", $(window).height() / 2 - 150)
    
    $(window).resize(function(){
        $(".full-page-container").css("min-height", $(window).height());
        $("#welcome-screen .container").css("padding-top", ($(window).height() / 2) - ($("#welcome-screen .container").height() / 2))
        $("#welcome-screen .go-down").css("top", ($(window).height() - 100));
        $(".scrollowanie").css("top", ($(window).height() / 2) - ($(".scrollowanie").height() / 2));
    })

    var old_element = "";
    var temp_element = "";

    $("button.learn-more").click(function(evt){
    	temp_element = $(this).attr("data-learn-more");

    	if(old_element == "")
    	{
    		$("."+temp_element).slideDown(500);
    		$(this).addClass("active");
            old_element = temp_element;     
    	} 

    	else if(temp_element != old_element) 
    	{
    		$(".learn-more-item").slideUp(500);
    		$("."+temp_element).delay(500).slideDown(500);
    		$(".learn-more").removeClass("active");
    		$(this).addClass("active");
            old_element = temp_element;     
    	}

    	else if(temp_element == old_element) 
    	{
    		$(".learn-more-item").slideUp(500);
    		$(".learn-more").removeClass("active");
            old_element = "";     
    	}    

    	evt.stopImmediatePropagation();
    });

    $("button, a").click(function(){
    	$(this).blur();
    });

    $(".a-disabled").click(function(){
        return false;
    })

    $(".toggle-pl").click(function(){
        setCookie("lang", "pl", 100);
    })

    $(".toggle-en").click(function(){
        setCookie("lang", "en", 100);
    })
});
