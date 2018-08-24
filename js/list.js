$('.div-slide-top-list2').click(function(){
    $('html,body').animate({scrollTop: '0px'}, 800);
});
$(window).scroll(function(event){
    if($(window).scrollTop()>300){
        // $('.div-title').addClass('fix');
        $('.div-slide-top-list').css('display','block');
    }
    else{
        // $('.div-title').removeClass('fix');
        $('.div-slide-top-list').css('display','none');
    }
});

