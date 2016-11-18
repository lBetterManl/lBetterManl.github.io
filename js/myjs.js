$(function() {
    $(window).scroll(function(){
        if($(window).scrollTop() > 5){
        	$("nav").css("background","#eee");
        }
        if($(window).scrollTop() < 5){
        	$("nav").css("background","none");
        }

    });
});