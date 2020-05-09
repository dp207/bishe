/*
 * @Author: mjy
 * @Date: 2019-11-20
 * @Last Modified by: mjy
 * @Last Modified time: 2019-11-20
 */
 $(function () {

 	// 政府公报时间滚动条
    //设置横向时间ul长度
    var timeWidth = $('.zfgb-date-list ul li').width();
    var timeNumber = $('.zfgb-date-list ul').length;
    $('.zfgb-date-list ul').width(timeWidth * timeNumber);
    //    横向时间轴--移动

    $('.zfgb-date .prev').click(function () {
        var left = $('.zfgb-date-list').scrollLeft();

        $('.zfgb-date-list').stop().animate({
            "scrollLeft": left + 134
        }, 200)
    });
    $('.zfgb-date .next').click(function () {
        var left = $('.zfgb-date-list').scrollLeft();
        $('.zfgb-date-list').stop().animate({
            "scrollLeft": left - 134
        }, 200)
    });
    //    横向时间轴--移动end
    // 政府公报tab
    $(".zfgb-date-list ul li").click(function(){
        var index=$(this).parent().children(".zfgb-date-list ul li").index(this);
        $(this).parent().parent().parent().siblings('.zfgb-tab').children('.zfgb-item').eq(index).show().siblings('.zfgb-item').hide();
        $(this).addClass('cur');
        $(this).siblings().removeClass('cur');
    });
    // 政府公报tab end
    
    // 在线访谈图片轮播
    jQuery(".zxft-item").simpleSwitch({
        playTime:6000,
        prev: '.zxft-tp-btn .prev',
        next: '.zxft-tp-btn .next',
        autoPlay: false
    });
    // 在线访谈图片轮播结束

 });

 /*
 * @Description: 申请公开
 * @Company: TRS
 * @Date: 2019-11-21 15:56:01
 * @LastEditors: taojunhao
 */
$(function(){

	//依申请公开写信内容tab切换
	jQuery(".tjh_xx_head a").tabPanelFun({
		cur:'tjh_xx_cur',
		tabContent:'.tjh_table_box',
		tabItem:'.tjh_table',
		evnets:'click'
	});
	//依申请公开_须知内容文本多行溢出
	$('.tjh_text span').overEllipsis({
    maxCount: 495
	});
		//依申请公开_须知title简介多行文本溢出
	$('.tjh_title_con p').overEllipsis({
    maxCount: 80
  });
})

/*
 * @Author: yj;
 * @Date: 2019-11-21 18:20:11;
 * @Last Modified by:   yj;
 * @Last Modified time: 2019-11-21 18:20:11;
 */

$(function(){
   //多行文字溢出处理
  
   $('.yj-ykbtt a.yj3').overEllipsis({
    maxCount: 35
  });

  //文件检索页下拉框
  $('.dropdown .tag').dropDownFun({
    tagSiblings: '.dropdown-list',
    optionItem: '.dropdown-list li',
    optionBool: true
  });
  // 检索办事指南tab切换
  $('.yj-ykb-main').tabSwitch({
    tabHead: '.yj-tab-t a',
    tabCont: '.yj-tabcont .yj-tab-m',
    cur: 'cur'
  });
})
  