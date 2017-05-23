$(document).ready(function(){
  $("button.launch-button").click(function(){
    $(".random").fadeIn(500);
    var losowanie = setInterval(function(){
      liczba = Math.round(Math.random()*31);
      if(liczba == 31) liczba = 30;
      else if(liczba == 0) liczba = 1;
      $(".liczba").html(liczba);
    }, 50);
    var czas_losowania = Math.round(Math.random() * 4000) ;
    console.log(czas_losowania);
    setTimeout(function(){clearInterval(losowanie)}, czas_losowania);
  });
});
