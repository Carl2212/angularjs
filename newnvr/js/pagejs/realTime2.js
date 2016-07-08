/**
 * Created by wxh on 2016/6/24.
 * module realTime
 */

/****************************************
 * 参数
 ****************************************/
var PresetNum = 250;//初始化预置点个数
var defaultLang = 'cn'; //默认语言
var PresetPathNum = 50; //初始化巡航路径个数









/****************************************
 * 初始化页面
 * 页面动态交互js
 *
 ****************************************/
function InitrealTime(){
    //初始化预置点
    InitPrePoint();
    InitPathSelected();
    //预置点tab
    var tab = $(".nav-tabs li");
    tab.on("click",function(){
        $(this).addClass('active').siblings().each(function(){if($(this).hasClass('active')) $(this).removeClass('active');});
        $(".ptz-main[data-id="+$(this).attr("data-id")+"]").removeClass('hide').siblings().each(function(){
            if(!$(this).hasClass('hide')) $(this).addClass('hide');
        });
    });
    //ptz 滑动条
    sliderPtzSpd = new neverModules.modules.slider({
        targetId : "slider",
        sliderCss : "speedslider",
        barCss : "moveblock",
        bBox : true,
        min : 1,
        max : 7,
        hints : "",
        boxCss : "speed-value"
    });
    sliderPtzSpd.create();

    /*speed 滑动事件*/
    sliderPtzSpd.onchange = function(){
        console.log(sliderPtzSpd.getValue());
    };


    var video_plugin = $(".realTime");
    var ptz = $(".ptzlist");
    var channel = $(".left-channel");
    var ExtraW = ptz.width() + channel.width() + 100;
    var H = $(window).height() - 50;

    //ptz收起 展开
    var shrink = $(".shrink-tab");
    shrink.on("click",function(){
        if(ptz.hasClass('hide')){
            ptz.removeClass('hide');
            video_plugin.width($(window).width() - ExtraW);
            $(this).switchClass('left','right').children().switchClass("glyphicon-chevron-left","glyphicon-chevron-right");
        }else{
            ptz.addClass('hide');
            video_plugin.width($(window).width() - ptz.width() - 50);
            $(this).switchClass('right','left').children().switchClass("glyphicon-chevron-right","glyphicon-chevron-left");
        }
    });
    //插件大小，窗口大小减去ptz大小
    video_plugin.width($(window).width() - ExtraW).height($(window).height() - 50);
    ptz.height(H);
    $(".ptz-main").height(H-250);

    //窗口改变触发事件
    window.onresize　= function(){
        //插件大小，窗口大小减去ptz大小
        video_plugin.width($(window).width() - ExtraW).height(H);
        ptz.height(H);
        $(".ptz-main").height(H-250);
    }

    //video比例切换

    //左侧通道

}
/****************************************
 Function:
 Description:	语言显示
 Input:
 Output:
 return:
 ****************************************/
function InitLang(){
    console.log('realtime2',lang.optionptzset);
    $("#optionptzset").text(lang.optionptzset);
    $("#childStream").text(lang.childStream);
    $("#allplay").text(lang.allplay);
    $("#allrec").text(lang.allrec);
    $("#ptzpreset").text(lang.ptzpreset);
    $("#ptzstay").text(lang.ptzstay);
    $("#ptzspeed").text(lang.ptzspeed);
    $("#save").text(lang.save);
}





/****************************************
 Function:
 Description:	方位移动
 Input:
 Output:
 return:
 ****************************************/
function leftupdown(){

}

/*************************************************
 Function:
 Description:	云台自动
 Input:
 Output:
 return:
 *************************************************/

/*************************************************
 Function:
 Description:	变倍+-
 Input:
 Output:
 return:
 *************************************************/
/*************************************************
 Function:
 Description:	聚焦+-
 Input:
 Output:
 return:
 *************************************************/
/*************************************************
 Function:
 Description:	光圈+-
 Input:
 Output:
 return:
 *************************************************/
/*************************************************
 Function:
 Description:	速度+-
 Input:
 Output:
 return:
 *************************************************/
/*************************************************
 Function:
 Description:	预置点初始化
 Input:
 Output:
 return:
 *************************************************/
function InitPrePoint() {
    //获取预置点数量参数
    var iLen = PresetNum;
    var szName = lang.ptzpresetdot;
    for(var i = 0 ; i < iLen ; i++) {
        $('<tr><td class="title">'+ szName+' '+(i+1) +'</td><td class="glyphicon glyphicon-share-alt"></td><td class="glyphicon glyphicon-cog"></td></tr>').appendTo('#point-ptzpreset');
    }
}
/*************************************************
 Function:
 Description:	预置点移入/调用
 Input:
 Output:
 return:
 *************************************************/
function PresetIn(){

}

/*************************************************
 Function:
 Description:	预置点移除
 Input:
 Output:
 return:
 *************************************************/
function PresetOut(){

}

/*************************************************
 Function:
 Description:	路径保存，播放，暂停，删除
 Input:
 Output:
 return:
 *************************************************/
function PathSave() {

}
function PathPlay() {

}
function PathStop() {

}
function PathDel() {

}
/*************************************************
 Function:
 Description:	路径添加预置点，
 Input:
 Output:
 return:
 *************************************************/
function PresetToPath() {

}
/*************************************************
 Function:
 Description:	巡航路径选择
 Input:
 Output:
 return:
 *************************************************/
function PathChange() {
    //清除元素下面的数据
    $(".point-list").children().remove();
    //请求当前巡航路径的预置点
    var pathid = $(this).attr("data-id");
    var ptzpreset = [{id: 1, ptzcurisedt: '2s', ptzcuisesp: 30}, {id: 2, ptzcurisedt: '2s', ptzcuisesp: 30}, {id: 3,ptzcurisedt: '2s',ptzcuisesp: 30}];

    //写入页面
    var txt = '';
    var del_icon_txt = '<a href="javascript:void(0);" class="left-action "><span class="glyphicon glyphicon-remove-circle"　 title="' + lang.del + '"></span></a>';//删除按钮
    var edit_icon_txt = '<a href="javascript:void(0);" class="edit_point right-action point-item"><span class="glyphicon glyphicon-pencil" title="' + lang.ptzset + '"></span></a>';//编辑按钮
    for (var i = 0; i < ptzpreset.length; i++) {
        txt += '<li>';
        if (i == ptzpreset.length - 1) {//最后一个元素
            txt += del_icon_txt;
        }
        txt += '<span class="point-item title" title="' + lang.ptzpreset + '">' + lang.ptzpresetdot + (i + 1) + '</span>' +
            '<span class="point-item ptztime"　 title="' + lang.ptzcurisedt + '">' + ptzpreset[i].ptzcurisedt + '</span>' +
            ' <span class="point-item ptzspeed"　 title="' + lang.ptcuisesp + '">' + ptzpreset[i].ptzcuisesp + '</span></li>';
    }
    txt += '<li class="preset_plus_items"><a href="javascript:void(0);" class="left-action"><span class="glyphicon glyphicon-plus-sign " title="' + lang.logaddcruise + '"></span></a></li>';

    $(txt).appendTo(".point-list")
        .hover(function () {
            if(!$(this).hasClass("preset_plus_items")) {
                $(this).addClass("hover").siblings().each(function () {
                    if ($(this).hasClass("hover")) {
                        $(this).removeClass("hover");
                    }
                });
            }
        })
        .on("click",function () {
            if(!$(this).hasClass("preset_plus_items")) {
                if(!$(this).hasClass('selected')) {
                    $(this).toggleClass('selected').append(edit_icon_txt).siblings('.selected').toggleClass("selected").find(".edit_point").remove();
                }else{
                    $(this).toggleClass('selected').find(".edit_point").remove();
                }
            }
        })
        .on("click",".glyphicon-trash",function () {
            //删除
            var parent = $(this).parents("li");
            parent.prev().prepend(del_icon_txt);
            parent.remove();
        })
        .on("click",".glyphicon-plus-sign",function(){
            //添加的编辑框
            EditBox();
        })
        .on("click",".glyphicon-pencil",function(){
            //编辑编辑框
            params = {preset:1,speed:30,time:2};
            EditBox(params);
        });
}
function EditBox(params) {
    //编辑框选择器
    var edit_bx = $(".edit-bx");


    //假设params 存在 表示 为是编辑窗口。根据参数写入 否则为添加窗口。默认参数写入
    var default_speed = 30;
    var default_time = 2;
    var default_preset = 1;
    if(params) {
        default_preset = params.preset;
        default_speed = params.speed;
        default_time = params.time;
    }
    //获取预置点数量参数
    var iLen = PresetNum;
    var szName = lang.ptzpresetdot;
    var items_array = {};
    for(var i = 0 ; i < iLen ; i++) {
        items_array[i+1] = szName+' '+(i+1);
    }
    DropdownSelected(items_array,default_preset,"#preset-list","#preset-selected-txt",false);
    $("#preset-selected-txt").val(szName+' '+default_preset);
    $("#edit-time").val(default_time);
    $("#edit-speed").val(default_speed);
    edit_bx.removeClass("hide");

    //编辑框按钮事件
    $(".glyphicon-remove-circle").on("click",function(){
        edit_bx.addClass("hide");

    });
    $(".save-preset").on("click",function(){
        edit_bx.addClass("hide");
        //写入保存参数
    });
}
/*************************************************
 Function:
 Description:	巡航路径下拉框初始化
 Input:
 Output:
 return:
 *************************************************/
function InitPathSelected() {
    var pathNum = PresetPathNum;
    var szName = lang.ptzpath;
    var items_array = {};
    for(var i = 0 ; i< pathNum; i ++) {
        items_array[i+1] = szName+' '+(i+1);
    }
    DropdownSelected(items_array,false,"#ptzPath","#pathTxt",PathChange);

}
function DropdownSelected(list_elem,default_preset,root_elem,select_elem,callback) {
    if(!default_preset) {
        default_preset = 1;
    }
    var i;
    for(i in list_elem) {
        var class_txt = '';
        if (default_preset && default_preset == i) {//初始化的值显示
            class_txt = 'class="active"';
            $(select_elem).text(list_elem[i]).attr("data-id",i);
            if(callback) {
                callback(default_preset);
            }
        }
        $('<li data-id="'+i+'" '+class_txt+'><a href="javascript:void(0);">'+list_elem[i]+'</a></li>').appendTo(root_elem).on("click",function(){//选项更改时的值显示
            $(this).addClass("active").siblings(".active").removeClass("active");
            var j = $(this).attr('data-id');
            var selected_item = $(this).children("a").text();
            $(select_elem).text(selected_item).attr("data-id",j);
            if(callback) {
                callback(j);
            }
        });
    }
}
/*************************************************
 Function:
 Description:	通道 播放，暂停，录像，抓图
 Input:
 Output:
 return:
 *************************************************/
/*************************************************
 Function:
 Description:	窗口数 1，4，9，16
 Input:
 Output:
 return:
 *************************************************/
