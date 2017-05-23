$(".full-page-container").css("min-height", $(window).height());
// $("#welcome-screen .container").css("padding-top", ($(window).height() / 2) - ($("#welcome-screen .container").height()));

$(".site-navigation").sticky({
    topSpacing: 0,
    getHeightFrom: '.site-navigation-wrapper',
});

$(document).ready(function(){

   // $(".full-page-container").css("min-height", $(window).height());
    $("#welcome-screen .container").css("padding-top", ($(window).height() / 2) - ($("#welcome-screen .container").height() / 2));

    $(window).resize(function(){
        $(".full-page-container").css("min-height", $(window).height());
        $("#welcome-screen .container").css("padding-top", ($(window).height() / 2) - ($("#welcome-screen .container").height() / 2));
    })

    /*var old_element = "";
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
    });*/

    $("button, a").click(function(){
    	$(this).blur();
    });

    $(".a-disabled").click(function(){
        return false;
    })

    $(".toggle-pl").click(function(){
        setCookie("lang", "pl", 100);
    });

    $(".toggle-en").click(function(){
        setCookie("lang", "en", 100);
    });

    $(".responsive-menu-toggle").click(function(){
        $(".site-links-wrapper").toggleClass("open");
        $("#portfolio-carousel").toggleClass("hidden");
    })

    $(".scroll-to").click(function(){
      $(".site-links-wrapper").removeClass("open");
      $("#portfolio-carousel").removeClass("hidden");
    })


    var val1 = Math.round(Math.random() * 10);
    var val2 = Math.round(Math.random() * 20);

    $(".val1_c").html(val1);
    $(".val2_c").html(val2);



    $("#form-send").click(function(){
        var dane = $(".contact-form input[name=imie_nazwisko]").val();
        var temat = $(".contact-form input[name=temat]").val();        
        var tresc = $(".contact-form textarea[name=tresc]").val();     
        var suma = $(".contact-form input[name=captcha]").val(); 
        var email = $(".contact-form input[name=email]").val(); 

        $.ajax({
            method: "POST",
            url: "../send_form.php",
            data: {
                val1: val1,
                val2: val2,
                suma: suma,
                dane: dane,
                email: email,
                temat: temat,
                tresc: tresc
            }
        })
        .done(function(msg){
            if(msg == "1") {
                $("p.form-result").html("Zła suma.");
                location.reload()
            }
            else if(msg == "2"){
                $("p.form-result").html("Należy wypełnić wszystkie pola.");
            }
            else {
                $("p.form-result").html("Wiadomość została wysłana");
                $(".contact-form input[name=imie_nazwisko]").val("");
                $(".contact-form input[name=temat]").val("");        
                $(".contact-form textarea[name=tresc]").val("");     
                $(".contact-form input[name=captcha]").val("");                
            }
        })
    });

});
