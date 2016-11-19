$(function() {

    //导航背景
    $(window).scroll(function(){
        if($(window).scrollTop() > 10){
        	$("nav").css("background","#eee");
            $(".coverDiv").slideUp();
        }
        if($(window).scrollTop() <= 10){
        	$("nav").css("background","none");
            $("ul#navList>li.active").removeClass("active");
            $(".coverDiv").slideDown();
        }

    });

    //导航变化
    $("ul#navList>li").click(function(){
        var obj = $(this);
        var index = $("ul#navList>li").index(this);
        $("ul#navList>li.active").removeClass("active");
        if(index == 1){
            obj.addClass('active');
            //滚动到指定位置
            $("html,body").stop(true); 
            $("html,body").animate({scrollTop:$("#movieLine").offset().top-80},600);
        }
        if(index == 2){
            obj.addClass('active');
        }

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