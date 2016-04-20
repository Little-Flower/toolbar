/**
 * Created by caihong on 2016/4/20.
 */
// 定义别名
requirejs.config({
    paths:{
        jquery:'jquery-1.8.2.min'
    }
});

//验证是否成功引入模块
requirejs(['jquery','validate'],function ($,validate) {
    // $('body').css('background-color','red')
    console.log(validate.isEqual(1,1));
});
