$(document).ready(function(){
  $(".portfolio-grid-item").mouseenter(function(){
    if(!$(this).children(".portfolio-item-caption").hasClass("show")){
      $(this).children(".portfolio-item-caption").addClass("show");
    }
  })

  $(".portfolio-grid-item").mouseleave(function(){
    if($(this).children(".portfolio-item-caption").hasClass("show")){
      $(this).children(".portfolio-item-caption").removeClass("show");
    }
  })
})
