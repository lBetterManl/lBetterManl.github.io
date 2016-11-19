$(function() {

    //导航背景
    $(window).scroll(function(){
        console.log($(window).scrollTop());
        if($(window).scrollTop() <= 10){
        	$("nav").css({"background":"none","box-shadow":"none"});
            $("ul#navList>li.active").removeClass("active");
            $(".coverDiv").slideDown();
        }
        if($(window).scrollTop() > 100){
            $("nav").css({"background":"#eee","box-shadow":"0 1px 6px #777"});
            $(".coverDiv").slideUp();
        }
        if($(window).scrollTop() >= 165){
            $("ul#navList>li.active").removeClass("active");
            $("ul#navList>li").eq(1).addClass('active');
        }
    });

    $("#aBtn").click(function(){
         $("html,body").stop(true); 
         $("html,body").animate({scrollTop:$(document).height()},6000);
    });

    //导航变化
    $("ul#navList>li").click(function(){
        var obj = $(this);
        var index = $("ul#navList>li").index(this);
        $("ul#navList>li.active").removeClass("active");
        if(index == 0){
            //滚动到指定位置
            $("html,body").stop(true); 
            $("html,body").animate({scrollTop:0},800);
        }
        if(index == 1){
            //滚动到指定位置
            $("html,body").stop(true); 
            $("html,body").animate({scrollTop:210},800);
            $(".imgDiv").animate({opacity:'0.4'},"slow");
            $(".imgDiv").animate({opacity:'0.8'},"slow");
        }
        if(index == 2){
            obj.addClass('active');
        }

    });

//划过效果
    $(".imgDiv").hover(function(){
        $(this).css("opacity",1);
    },function(){
        $(this).css("opacity",0.8);
    });

    //监听关闭model
    $("#myModal1").on("hidden.bs.modal",function(){
        $("#player1").trigger('pause');
    });
    $("#myModal2").on("hidden.bs.modal",function(){
        $("#player2").trigger('pause');
    });
    $("#myModal3").on("hidden.bs.modal",function(){
        $("#player3").trigger('pause');
    });
    $("#myModal4").on("hidden.bs.modal",function(){
        $("#player4").trigger('pause');
    });


});