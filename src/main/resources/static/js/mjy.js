$(document).ready(function() {
    $('#fullpage').fullpage({
        scrollOverflow: true,
        scrollingSpeed: 1200,
        afterLoad: function(anchorLink, index) {
            if (index == 1) {
                $('.xhy-c').removeClass('fadeInTop animated');
                $('.xhy-atip').addClass('fadeInLeft animated');
                $('.xhy-search').addClass('fadeInRight animated');
                $('.ba0').addClass('fadeInLeft1 animated');
                $('.ba1').addClass('fadeInLeft1 animated');
                $('.ba2').addClass('fadeInOpacity animated1');
                $('.ba3').addClass('fadeInRight1 animated');
                $('.ba4').addClass('fadeInRight1 animated');
            }
        },
        onLeave: function(index, direction) {
            if (index == '1') {
                $('.xhy-atip').removeClass('fadeInLeft animated');
                $('.xhy-search').removeClass('fadeInRight animated');
                $('.ba0').removeClass('fadeInLeft1 animated');
                $('.ba1').removeClass('fadeInLeft1 animated');
                $('.ba2').removeClass('fadeInOpacity animated1');
                $('.ba3').removeClass('fadeInRight1 animated');
                $('.ba4').removeClass('fadeInRight1 animated');
                $('.xhy-c').addClass('fadeInTop animated');
            }
        }
    });
});

window.onload = function() {
    //设置动态高度 $(window).height()
    $('.xhy-c').css('marginTop', $(window).height() - 700 + 'px');
    //首页动画效果
    function toggleBox() {
        $('.index-top-btn').click(function(e) {
            e.stopPropagation();
            $('.index-menu').slideToggle();
            $(document).click(function() {
                if ($('.index-menu').css('display') === 'block') {
                    $('.index-menu').slideUp();
                }
            });
        });
        $('.index-menu .close').click(function(e) {
            $('.index-menu').slideUp();
        });

        
    }
    toggleBox();

    $('.index-float-btn').click(function(e) {
        e.stopPropagation();
        $('.index-menu').slideToggle();
        $(document).click(function() {
            if ($('.index-menu').css('display') === 'block') {
                $('.index-menu').slideUp();
            }
        });
    });

    //tab

    $('.index-tit .tit').mouseenter(function() {
        var index = $(this).parent().children('.index-tit .tit').index(this);
        $(this).parent().siblings('.index-tab').children('.index-item').eq(index).show().siblings('.index-item').hide();
        $(this).addClass('cur');
        $(this).siblings().removeClass('cur');
    });

    //首页头条轮播
    $('.index-headline-item').simpleSwitch({
        playTime: 2000,
        type: 'top'
    });

    $('.index-newspic li').simpleSwitch({
        num: '.index-picpg li',
        className: 'cur',
        text: '.index-pictt li',
        playTime: 4000
    });

    jQuery('.tab-list-bool li').tabPanelFun({
        cur: 'cur',
        tabContent: '.tab-group',
        tabItem: '.tab-item',
        pra: true,
        pradom: '.tab-parent'
    });

    jQuery('.mid_con_tab ul li').tabPanelFun({
        cur: 'cur',
        tabContent: '.mid_con_tab_con',
        tabItem: '.mid_ctc_con',
        pra: true,
        pradom: '.mid_con_tab'
    });

    jQuery('.index-zw-tit .tit').tabPanelFun({
        cur: 'cur',
        tabContent: '.index-zw-tab',
        tabItem: '.index-zw-item'
    });

    jQuery('.index-more-img').bannerRollLR({
        len: 3,
        moveTime: 3000,
        prev: '.index-more-left',
        next: '.index-more-right'
    });
};