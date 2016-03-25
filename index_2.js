/**
 * Created by lianghao on 2016/3/17.
 */
$(document).ready(function () {
    $("#btn_hide").click(function () {
        $("p").hide(2000);//元素的隐藏 参数：隐藏需要的时间，动画效果
    });
    $("#btn_show").click(function () {
        $("p").show(2000);//元素的显示 参数：隐藏需要的时间，动画效果
    });
    $("#btn_toggle").click(function () {
        $("p").toggle(2000);//一个按钮控制元素的显示隐藏
    });

    /**
     * 淡入淡出
     * */
    $("#fade_in").on("click", function () {
        $("#div1").fadeIn(2000);
        $("#div2").fadeIn(2000);
        $("#div3").fadeIn(2000);
    });
    $("#fade_out").on("click", function () {
        $("#div1").fadeOut(2000);
        $("#div2").fadeOut(2000);
        $("#div3").fadeOut(2000);
    });
    $("#fade_toggle").on("click", function () {
        $("#div1").fadeToggle(2000);
        $("#div2").fadeToggle(2000);
        $("#div3").fadeToggle(2000);
    });
    $("#fade_to").on("click", function () {
        $("#div1").fadeTo(2000, 0);
        $("#div2").fadeTo(2000, 0.5);
        $("#div3").fadeTo(2000, 1);
    });

    /**
     * 修改html的内容
     * */
    $("#btn1").click(function () {
        $("#p1").text("Great Wall");
    });
    $("#btn2").click(function () {
        $("#p2").html("<a href='http://www.jikexueyuan.com'>极客学院</a>");
    });
    $("#btn3").click(function () {
        $("#input").val("hello");
    });

    $("#btn4").click(function () {
        $("#aid").attr("href", "http://www.jikexueyuan.com");
        /**
         * 修改多个属性用大括号example： $({"#aid").attr("href": "http://www.jikexueyuan.com",
         *                                             "title":"aaaaaaaa"});
         * */
    });


});