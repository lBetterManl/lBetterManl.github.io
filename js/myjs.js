$(function() {

    //导航背景
    $(window).scroll(function(){
        if($(window).scrollTop() > 10){
        	$("nav").css("background","#eee");
        }
        if($(window).scrollTop() < 10){
        	$("nav").css("background","none");
        }

    });

    //导航变化
    $("ul#navList>li").click(function(){
        var index = $("ul#navList>li").index(this);
        $("ul#navList>li.active").removeClass("active");
        if(index!=0){
            $(this).addClass('active');
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