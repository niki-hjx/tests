    	$('.label-search').click(function(event){
            if($('.input-search').val()==''){
                alert('请先输入搜索关键字');
            }
        });
   		//搜索输入
   		$('.label-search1').click(function(event){
   			$('.div-search1').css('width','250px');
   			$('.input-search1').css('width','200px');
   		});
   		
   		
   		 $('.div-search1').mouseleave(function(event){
   			$('.div-search1').css('width','30px');
   			$('.input-search1').css('width','0px');
   		});
   		
// 		/*$('.label-search1').click(function(event){
// 			$('.div-search1').css('width','30px');
//			$('.input-search1').css('width','0px');
//		});
//*/
        //导航栏
        $('.ul_title>li').mouseenter(function(){
    		$(this).children('.p-select').css('background','#e32f2f');
    		$(this).children('.uls').stop().fadeIn();
    		/*$(this).children().children().css('background','#fff');*/
    	})
    	$('.ul_title>li').mouseleave(function(){
    		$(this).children('.p-select').css('background','#f84e4e')
    		$(this).children('.uls').stop().fadeOut();

    	})//android下载
    	$('.div-download-android').mouseenter(function(){
    		$('.div-download').stop().fadeIn();
    	})
    	$('.div-download-android').mouseleave(function(){
    		$('.div-download').stop().fadeOut();
    	})
        //导航栏固定
 		$('.div-slide-top').click(function(){$('html,body').animate({scrollTop: '0px'}, 800);});
 		$(window).scroll(function(event){
 			if($(window).scrollTop()>222){
 				$('.div-title').addClass('fix');
                $('.div-slide-top').css('display','block');
 			}
 			else{
 				$('.div-title').removeClass('fix');
                 $('.div-slide-top').css('display','none');
 			}
 		})
        //轮播
        $(function () {
            var timer;
            var num=0;
            function play(){
                clearInterval(timer)
                timer=setInterval(function(){

                    if(num>4){
                        num=0;
                    }
                    $("ul.scroll li").removeClass("show");
                    $('ul.scroll li:eq('+num+')').addClass("show")
                    // $('ol li').eq(num).addClass('current').siblings().removeClass('current');
                    num++;
                },1000)
            }
            //自动播放
            play();
        })
//登陆弹出框
$('.btn-login').click(function(event){
    $('.up-drop').css('display','block');
});
$('.up-close').click(function(event) {
   $('.up-drop').css('display','none');
});




