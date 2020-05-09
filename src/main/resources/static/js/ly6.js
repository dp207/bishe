
window.onload = function () {
/***************************信息公开目录-侧边栏下拉效果****************************** */
    var xl = function (e) {
        //var e = $(this)
        var classArr = e.attr("class").split(" ")
        for (var i = 0; i < classArr.length; i++) {
            if (classArr[i] == "open") {
                e.removeClass("open")
                e.addClass("close")
            } else if (classArr[i] == "close") {
                e.removeClass("close")
                e.addClass("open")
            }
        }
        var e = e.parents(".pli").find(".child")
        var classArr = e.parents(".pli").find(".child").attr("class").split(" ")
        var myHight = (e.children().length) * 32 + "px"
        // var myHight = (e.find('.chlia').length) * 32 + "px"
        //e.outerHeight(true) + "px"
        for (var i = 0; i < classArr.length; i++) {
            if (classArr[i] == "cwx-on") {
                e.attr("style", "height:myHight")
                e.animate({
                    height: "0px",
                }, function () {
                    e.removeClass("cwx-on")
                    e.addClass("cwx-co")
                });
            } else if (classArr[i] == "cwx-co") {
                e.attr("style", "height:0px")
                e.removeClass("cwx-co")
                e.addClass("cwx-on")
                e.animate({
                    height: myHight,
                });
            }
        }
    }
    $(".plia").click(function () {
        var e = $(this).find(".plisp");
        xl(e)
    })

    var x2 = function (e) {
        var classArr = e.attr("class").split(" ")
        var height1 = (e.parents('.cwx-on').find('.chli').length + e.parents('.cwx-on').find('.chli .cwx-on').find('.gsli').length) * 32
        var height2 = (e.children().length) * 32
        var myHight =  height2 + "px"

        for (var i = 0; i < classArr.length; i++) {
            if (classArr[i] == "cwx-on") {
                e.attr("style", "height:myHight")
                e.removeClass("cwx-on")
                e.animate({
                    height: "0px",
                }, function () {
                    e.addClass("cwx-co")  
                });
                var height = (e.parents('.cwx-on').find('.chli').length + e.parents('.cwx-on').find('.cwx-on').find('.gsli').length) * 32 + 'px'
                e.parents('.cwx-on').animate({
                    height: height 
                })
            } else if (classArr[i] == "cwx-co") {
                e.attr("style", "height:0px")
                e.removeClass("cwx-co")
                e.addClass("cwx-on")
                e.animate({
                    height: myHight
                });
                e.parents('.cwx-on').animate({
                    height: height1 + height2 + 'px'
                })
            }
        }
    }

    $(".grandson .chlia").click(function () {
        var e = $(this).siblings('.son');
        x2(e)
    })

    $('.child a').click(function(){
        $('.listbox .muli').removeClass('cur');
        $('.listbox .chlia').removeClass('cur');
        if($(this).parents('.muli').eq(0).hasClass('grandson')){
            $(this).parents('.chlia').eq(0).addClass('cur');
        }else {
           $(this).parents('.muli').eq(0).addClass('cur');
        }  
    })

    $('.listbox .grandson .gsli:last-child a').addClass('li-last-child');
    $('.listbox .child .chli:last-child a').addClass('li-last-child');

    // 默认展开第一个
    var ele = $('.parent .pli').eq(0).find('.plisp');
    xl(ele);
        
    $('.cwx-table tr').each(function(i){
        if( i%2 == 0 && i!= 0 ){
            // 偶数    
            $(this).addClass('odd');
          }
    });
};
