/**
 * Created by lianghao on 2016/3/16.
 */
$(document).ready(function () {
    //alert("文档加载完毕")

    $("p").click(function () {
        $(this).hide();

    });
    $("#btn").click(function () {
        $("#pid").text("被修改了");
    });
    //$("#btn_2").click(function(){//当鼠标点击
    //$("#btn_2").dblclick(function(){//当鼠标双击
    //$("#btn_2").mouseenter(function () {//当鼠标移到按钮之上
    $("#btn_2").mouseleave(function () {//当鼠标离开
        $(this).hide();
    });

    $("#btn_bind").bind("click", onClick);//事件的绑定
    $("#btn_bind").bind("click", onClick1);//事件的绑定
    $("#btn_bind").unbind("click", onClick);//事件的解除绑定

    $("#btn_bind").on("click", onClick);//事件的绑定
    $("#btn_bind").on("click", onClick1);//事件的绑定
    $("#btn_bind").off("click", onClick);//事件的解除绑定


    /*
     * 自定义事件
     * */
    $("#btn_custom").click(function () {
        var e = jQuery.Event("myEvent");
        $("#btn_custom").trigger(e);

    });

    $("#btn_custom").bind("myEvent", onClick);

});

function onClick(e) {
    alert("onBind");
}
function onClick1(e) {
    alert("onBind1");
}
