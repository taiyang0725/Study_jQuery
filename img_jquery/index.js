/**
 * Created by lianghao on 2016/3/23.
 */
$(document).ready(function () {
    //自定义数据源 json格式
    var imgUrl =
    {"url": [{"src": "1.jpg"}, {"src": "2.jpg"}, {"src": "3.jpg"}, {"src": "4.jpg"}, {"src": "5.jpg"}, {"src": "6.jpg"}, {"src": "7.jpg"}, {"src": "8.jpg"}, {"src": "9.jpg"}]};

    $(window).on("load", function () {
        imgLocation();
        window.onscroll = function () {
            if (isImgLoad()) {
                $.each(imgUrl.url, function (index, value) {
                    //console.log("./img/" + $(value).attr("src"));
                    var mBox = $("<div>").addClass("box").appendTo($(".container"));
                    var content = $("<div>").addClass("content").appendTo(mBox);
                    $("<img>").attr("src", "./img/" + $(value).attr("src")).appendTo(content);
                });
                imgLocation();
            }
        }
    });
});
/**
 * 判断是否加载图片
 * */
function isImgLoad() {
    var box = $(".box");//得到盒子对象
    var lastBoxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2);//最后一个盒子出现离顶部的高度
    var documentHeight = $(window).height();//窗口的高度
    var scrollHeight = $(window).scrollTop();//滑动的距离
    return (documentHeight + scrollHeight > lastBoxHeight ? true : false);

}
function imgLocation() {
    var box = $(".box");//得到盒子对象
    var boxWidth = box.eq(0).width();//得到每个盒子的宽度
    var num = Math.floor(($(window).width()) / boxWidth);//每一行能放几个盒子
    var mm = $(window).width() - boxWidth * num;
    $(".container").css({
        "width": boxWidth * num,
        "margin-left": "auto",
        "margin-right": "auto"
    });

    var boxArrayHeight = [];//定义数组，存放盒子的高度
    box.each(function (index, value) {//遍历每个盒子
        //console.log(index + "-----" + value);
        var boxHeight = box.eq(index).height();
        if (index < num) {
            boxArrayHeight[index] = boxHeight;
        } else {
            var minBoxHeight = Math.min.apply(null, boxArrayHeight);//得到高度最小的盒子
            var minBoxIndex = $.inArray(minBoxHeight, boxArrayHeight);//得到高度最小的盒子的下标
            //console.log(value)
            $(value).css({
                "position": "absolute",
                "top": minBoxHeight,
                "left": box.eq(minBoxIndex).position().left
            });
            boxArrayHeight[minBoxIndex] += box.eq(index).height();
        }
    });
}

