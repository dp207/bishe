$(function(){
	// 顶部搜索动画
	$(".header-search input").focus(function(){
		$(this).parent().animate({width:'508px'});
		$(this).parent().prev().hide();
		$(this).parent().prev().prev().show()
	})
	$(".header-search input").blur(function(){
		$(this).parent().width("98px")
		$(this).parent().prev().prev().hide()
		$(this).parent().prev().show();
	})
  // 首页图标切换
    $(".index-pics a").on({
        mouseover: function() {
            var x = $(this).index() + 1;
            $(this).find('img').attr("src", 'images/ga' + x + '.png')
        },
        mouseout: function() {
            var x = $(this).index() + 1;
            $(this).find('img').attr("src", 'images/ga' + x + '0.png')
        }
    })

})
$(function(){
  jQuery(".fade-img a").SwitchFade({
    text:'.fade-txt a',
    prev:'.fade-left',
    next:'.fade-right',
    num:'.fade-num span',
    // className:'cur',
    playTime:2000,
    lendy:'.dy-lens',
    indy:'.dy-index'
  });
})

$(function(){
  // 公开目录鼠标移入移出
  $(".zwgk-mouse-title a").on({
    mouseover: function(){
      $(this).parent().parent().next(".zwgk-mouse-content").find(".zwgk-mouse-c-item").hide();
      $(this).parent().find("a").removeClass("active");
      $(this).addClass("active")
      $(this).parent().parent().next(".zwgk-mouse-content").find(".zwgk-mouse-c-item").eq($(this).index()).show();
    },
    mouseout: function(){
      console.log(2)
    }
  })

  // 公开目录
  $(".lefttop-rb-a").eq(1).css("margin-right",0)
  $(".lefttop-rb-a").eq(3).css("margin-right",0)

  //公开领导信息
  $(".ldx-c-bottom .ldx-man").eq(5).css("margin-right",0)
  $(".ldx-c-bottom .ldx-man").eq(11).css("margin-right",0)
  $(".ldx-c-bottom .ldx-man").eq(17).css("margin-right",0)

  //概览图片
  $(".gl-c-r-c-img .gl-img-item").eq(2).css("margin-right",0)
  $(".gl-c-r-c-img .gl-img-item").eq(5).css("margin-right",0)
  $(".gl-c-r-c-img .gl-img-item").eq(8).css("margin-right",0)

  //如果body高度小于屏幕高度，给DIV撑开
  if($(document.body).height()<$(window).height()){
    $(".judge-height").height($(window).height()-$(document.body).height())
  }
})