/**
 * Created by caihong on 2016/4/20.
 */

// 定义别名
requirejs.config({
    paths:{
        jquery:'jquery-1.8.2.min'
    }
});


requirejs(['jquery'],function ($) {
    //验证是否成功引入模块
    $('body').css('background-color','red');
    //返回顶部
    $("#backtop").on('click',go);
    //判断滚动时离顶部的距离
    $(window).on('scroll',function () {
        check($(window).height());
    });

    //页面加载时也执行check函数
    check($(window).height());

    function move() {
        $('html,body').animate({
            scrollTop:0
        },800);
    }
    //一下回到顶部
    function go() {
        $('html,body').scrollTop(0);
    }
    //判断返回顶部显示与隐藏
    function check(pos) {
        if ($(window).scrollTop()>pos){
            $('#backtop').fadeIn();
        }else {
            $('#backtop').fadeOut();
        }
    }
})













