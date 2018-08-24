/*
* @Author: Aiscry
* @Date:   2018-06-18 17:09:33
* @Last Modified by:   Aiscry
* @Last Modified time: 2018-06-18 19:44:40
*/
$(function(){
        		var num=0;
        		var timee;
                var n=0;
        		function zou(){
        			timee=setInterval(function(){
        			num=num+1;
        			if(num==5){
                        n=0;
                        $('.banner ol li').eq(n).addClass('current').siblings('').removeClass('current');
                    }
        			if(num>5)
        			{
        				num=0; 
                        $('.banner ul').css('left', -1523*num+'px'); 
                        num=1;
        			}
        			
                 $('.banner ol li').eq(num).addClass('current').siblings('').removeClass('current');
        		$('.banner ul').animate({'left':-1523*num+'px'})

        		},1500);	
        		}
        		zou();
        		
        		

        	})