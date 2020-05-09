/fullpage页面换页切换函数/
$(function(){
		$("#dowebok").fullpage({
		anchors:['page1', 'page2', 'page3', 'page4','page5','page6'],
		menu:"#menu",
		'navigation': true,
		//'loopBottom':true,   //是否底部回顶部
		afterLoad:function(link,index){
			switch(index){
				case 1:
					$(".div22_bg").addClass("div22_bg_ready");
				    $(".div221").addClass("div221_on");	
				    $(".div222").addClass("div222_on");
				    $(".main_111").addClass("main_111_on");
					$(".div22_gyxzqh").addClass("div22_gyxzqh_on");
				break;				
				case 2:
				    $(".div24_bg").addClass("div24_bg_ready");
				    $(".div241").addClass("div241_on");	
				    $(".div242").addClass("div242_on");
				break;
				case 3:
				    $(".div25_bg").addClass("div25_bg_ready");
				    $(".div251").addClass("div251_on");
				    $(".div25_ul1").addClass("div25_ul1_on");
				    $(".div252").addClass("div252_on");
				    $(".div253").addClass("div253_on");
				break;
				case 4:
				    $(".div21_bg").addClass("div21_bg_ready");
					$(".div211").addClass("div211_on");	
					$(".div212").addClass("div212_on");	
				break;
				case 5:
				    $(".div26_bg").addClass("div26_bg_ready");
				    $(".div261").addClass("div261_on");
				    $(".div2621").addClass("div2621_on");
				    $(".div2622").addClass("div2622_on");
				    $(".div2623").addClass("div2623_on");
				    $(".div2624").addClass("div2624_on");
				    $(".div2625").addClass("div2625_on");
				break;
				case 6:
				    $(".div23_bg").addClass("div23_bg_ready");
				    $(".div231").addClass("div231_on");	
					$(".div232").addClass("div232_on");
				    $(".div232 div.d1").addClass("d1_on");
				    $(".div232 div.d2").addClass("d2_on");
				    $(".div232 div.d3").addClass("d3_on");
				    $(".div232 div.d4").addClass("d4_on");
				    $(".div232 div.d5").addClass("d5_on");
				    $(".div232 div.d6").addClass("d6_on");
				    $(".div232 div.d7").addClass("d7_on");
				break;
				default:
				break;
			}
		},
		onLeave:function(link,index){
			switch(index){
				case 1:
					$(".div22_bg").removeClass("div22_bg_ready");
				    $(".div221").removeClass("div221_on");	
				    $(".div222").removeClass("div222_on");
				    $(".main_111").removeClass("main_111_on");	
					$(".div22_gyxzqh").removeClass("div22_gyxzqh_on");		
				break;				
				case 2:
				    $(".div24_bg").removeClass("div24_bg_ready");
				    $(".div241").removeClass("div241_on");	
				    $(".div242").removeClass("div242_on");
				break;
				case 3:
				    $(".div25_bg").removeClass("div25_bg_ready");
				    $(".div251").removeClass("div251_on");
				    $(".div25_ul1").removeClass("div25_ul1_on");
				    $(".div252").removeClass("div252_on");
				    $(".div253").removeClass("div253_on");
				break;
				case 4:
				    $(".div21_bg").removeClass("div21_bg_ready");
					$(".div211").removeClass("div211_on");	
					$(".div212").removeClass("div212_on");
					$(".div21_bg").removeClass("div21_bg_ready");	
				break;
				case 5:
				    $(".div26_bg").removeClass("div26_bg_ready");
				    $(".div261").removeClass("div261_on");
				    $(".div2621").removeClass("div2621_on");
				    $(".div2622").removeClass("div2622_on");
				    $(".div2623").removeClass("div2623_on");
				    $(".div2624").removeClass("div2624_on");
				    $(".div2625").removeClass("div2625_on");
				break;
				case 6:
				    $(".div23_bg").removeClass("div23_bg_ready");
				    $(".div231").removeClass("div231_on");	
					$(".div232").removeClass("div232_on");
				    $(".div232 div.d1").removeClass("d1_on");
				    $(".div232 div.d2").removeClass("d2_on");
				    $(".div232 div.d3").removeClass("d3_on");
				    $(".div232 div.d4").removeClass("d4_on");
				    $(".div232 div.d5").removeClass("d5_on");
				    $(".div232 div.d6").removeClass("d6_on");
				    $(".div232 div.d7").removeClass("d7_on");
				break;
				default:
				break;
			}
		},
		afterRender:function(){
                    $(".div22_bg").addClass("div22_bg_ready");
				    $(".div221").addClass("div221_on");	
				    $(".div222").addClass("div222_on");
				    $(".main_111").addClass("main_111_on");
					$(".div22_gyxzqh").addClass("div22_gyxzqh_on");
		}
		});
     });
// 贵阳投资js动画效果 
  $(function(){
  	jQuery(".div212_main").slide({
	  	  	titCell:".div212_u2 li",
	  	  	mainCell:".div212_u1",
	  	  	effect:"fade",
	  	  	autoPlay:true,
	  	  	trigger:"mouseover",
	  	  	interTime:"2000",
	  	});		  	
  })
	 		     

// 时间轴切换函数
	$(function(){
	    $().timelinr({
			startAt:14,				
		})
	});
//贵阳概况页面 中间栏目切换效果		
   $(function(){
   	 $(".div222 .d2").mouseover(function(){
   	 	$(".div222 .d2").removeClass("d22_on");
   	 	$(this).addClass("d22_on");
   	 });
   })
//历史典故、传说故事、民间艺术
             	$(function(){
             		jQuery(".div2422").slide({
             			titCell:".div2422_ul_li",
				  	  	effect:"fade",
				  	  	autoPlay:true,
				  	  	trigger:"mouseover",
				  	  	interTime:"2000",
             		})
             	})	
//历史名人
                 $(function(){
                 	jQuery(".div2423").slide({
             			mainCell:"ul",
             			effect:"topMarquee",
             			autoPlay:true,
             			interTime:50,
		 	 	 	    vis:6,
             		})
                 })

//文章循环js
   $(function(){
	   var  n=document.getElementById("new");
  	    var p1=document.getElementById("p1");
  	   var p2=document.getElementById("p2");
  	    p2.innerHTML=p1.innerHTML;
  	   var f=function(){
  	   	n.scrollTop++;
  	   	if(n.scrollTop>=p1.offsetHeight){
  	   	
  	   		n.scrollTop=0;
  	   	}  	
  	   }
  	var i=setInterval(f,100); 

  	function tz(){
  	  clearInterval(i);	
  	}
  	var ks=function(){
  	i=setInterval(f,100);	
  	}
  	
	   })
 //行政区划切换js
  $(function(){
      $("#s_gyxzqh").hover(function(){
        $(".gyxzqh_main").show(500);
        },function(){
          $(".gyxzqh_main").hide(300);
              })
            }) 		






