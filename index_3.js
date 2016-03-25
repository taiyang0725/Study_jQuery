/**
 * Created by lianghao on 2016/3/22.
 */
$(document).ready(function () {
    /**
     * jQuery向下遍历：children()，find("p")，两个方法，从父级找到子集
     * */
    //$("#div1").children().css({border: "2px solid green"});//只改变div的儿子辈，即下一层，children()参数可有可无
    //$("#div1").find("p").css({border: "2px solid green"});//以参数为准,find("p")必须有参数

    /**
     * 向上遍历,从子集找到父级,parent()：遍历一层，直接父类
     * ,parents(),遍历所有父类，
     * parentsUntil(""),区间遍历
     * */
    $("p").parentsUntil().css({border: "2px solid green"});//以参数为准,find("p")必须有参数
});
