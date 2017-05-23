$(document).ready(function(){
  $(".fade-in, .fade-in-up, .fade-in-down, .fade-in-left, .fade-in-right").appear(function(){
    var animDelay = $(this).attr("data-delay");

    if(animDelay == undefined || isNaN(animDelay))
    {
      $(this).addClass("faded");
    }
    else
    {
      $(this).delay(animDelay).queue(function(){
        $(this).addClass("faded").dequeue();
      });
    }
  });

  $(".fade-in-group").appear(function(){
    var animDelay = $(this).attr("data-delay");
    var eachDelay = $(this).attr("data-each-delay");

    if(animDelay == undefined || isNaN(animDelay))
      animDelay = 0;

    if(eachDelay == undefined || isNaN(eachDelay))
      eachDelay = 150;

    function triggerFadeIn(element) {
      element.children(".fade-item").each(function(i){
        $(this).delay(eachDelay * i).queue(function(){
          $(this).addClass("faded").dequeue();
        });
      });
    }

    $(this).delay(animDelay).queue(function(){
      triggerFadeIn($(this)).dequeue();
    })
  })
})
