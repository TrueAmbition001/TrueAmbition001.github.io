
$(document).ready(function(){
	
$('.header-head').delay(400).fadeIn(500);


$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 450) {
    $("#p1").animate({
    opacity: "1"
    });
  } else {
    
  }
});

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 880) {
    $("#p2").animate({
    opacity: "1"
    });
  } else {
    
  }
});

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 1370) {
    $("#p3").animate({
    opacity: "1"
    });
  } else {
    
  }
});

$('#logo').hover(function() {
$('#logo').css({'text-decoration':'underline'});
}, function() { $('#logo').css({'text-decoration':'none'});
});

$("#menu").click(function(){
$("#slide-bar").animate({width:"100%"});
$("#menu2").delay(280).fadeIn(150);
});

$("#closebtn").click(function() {
$("#slide-bar").animate({width:"0"});
$("#menu2").fadeOut(150);
});

$("#arrow").click(function() {
$('html, body').animate({scrollTop: '+=700px'}, 800);
});

$(".header-opt").hover(function() {
$(this).animate({backgroundColor:"white", color:"black"});
}, function() {
$(this).animate({backgroundColor:"rgba(0, 0, 0, 0)", color:"white"});
});
});