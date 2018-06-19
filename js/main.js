/*---------------------------------------------------------------------------------------------*
 * 重用脚本，从代码为iot的项目复制过来
 */
var workMode = 0,//设备工作方式，0.JSON透传、1.JSON主控
appTid = "APP_"+ Math.random().toString(36).substr(2),
devTid = window.devTid = getUrlParam("devTid") ,
ctrlKey = window.ctrlKey = getUrlParam("ctrlKey"),
msgId = window.msgId  = 0,
frameNum = 0,
heartbeat = {"msgId":msgId, "action": "heartbeat"},
appSendMsgTpl={
    msgId: msgId,
    action: "appSend",
    params: {
        devTid: devTid,
        ctrlKey: ctrlKey,
        appTid: appTid,
        data: {}
    }
},
protocolTemplete,
deviceList=[],
accessToken;

var header = {};//ajax头
function getMsgId(){
    if(msgId==65535){
        msgId=0;
    }else{
        msgId++;
    }
    return msgId
}

/*发送帧*/
function sendCMD(data,cmdId){
    appSendMsgTpl.params.data.raw = UARTDATA2.encode(data,protocolTemplete,cmdId,getMsgId());
    console.log(appSendMsgTpl)
    Hekr.send(appSendMsgTpl,devTid,function(respond,error){
        console.log(respond, error)
        if (error) {
            console.log("error:" + JSON.stringify(error));
            return;
        }
        if (Number(respond.code) === 1400018) {
            $.hekrToast("设备离线,请稍后重试");
            return;
        }
        if (!respond.params.data.raw) {
            console.error("colors error resp:", respData)
            console.log("错误response");
            return;
        }
        $.hekrToast(false);
        setState(respond.params.data.raw);
    })
}

document.addEventListener('HekrSDKReady', function() {
    Hekr.currentUser(function(user){
      accessToken = user.access_token;
      $.ajax({
          type:"GET",
          url:"https://console-openapi.hekr.me/external/device/protocolTemplate",
          headers: {
              "Authorization" : "Bearer " + accessToken,
              "Accept" : "application/json",
              "X-Hekr-ProdPubKey" : getUrlParam("ppk")
          },
          success:function(msg){
              protocolTemplete=msg;
              sendCMD({},0);
              //console.log(msg);
          }
      })
      header = {//ajax头
          'Authorization' : 'Bearer '+accessToken,
          'Content-Type' : 'application/json',
          'Accept' : 'application/json'
      }
      getListTimer();
      var inquire = setInterval(function(){
        sendCMD({},0);
      },30000);
    })

    if(typeof(Hekr)!=="undefined"){
        var filter = {
            "action" : "devSend",
            "params" : {
                "devTid" : devTid
            }
        };
        /*被动接收*/
        Hekr.recv(filter,function(msg){//暂不过滤
            console.log(msg)
            setState(msg.params.data.raw);
        });
    }else{
        alert("注册监听炸了");
    }
}, false);


/*获取链接参数*/
function getUrlParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}
/*
 * 重用脚本结束
 *---------------------------------------------------------------------------------------------*/

/*退出*/
$(".hekr-header-back").on("touchend", function() {
    window.close();
});

/*底部导航栏*/
var evtArr = [
    function() {
        $(".page").hide();
        $("#page1").show();
    },
    function() {
        $(".page").hide();
        $("#page2").show();
        getListTimer();
    }
];
$.hekrNav(evtArr);

//轮播图
$("#slide-back").hekrSlide({
    delay:6000
});
var instanceSlideBack = $("#slide-back").data("hekrSlide");

//警告框轮播
$("#warn .hekr-slide").hekrSlide({
    delay:6000
});
var instanceSlideWarn = $("#warn .hekr-slide").data("hekrSlide");

//圆形状态
$("#circle").hekrCircle({
  circles: [
    {
      color: "#13b5b1",
      beginAngle: Math.PI / 2,
      min: 0,
      max: 100,
      width: 10,
      gutter: 0,
      value: 0
    },
    {
      color: "#f29876",
      beginAngle: Math.PI / 2,
      min: 0,
      max: 70,
      width: 7,
      gutter: 4,
      value: 0
    }
  ]
});
var instanceCircle = $("#circle").data("hekrCircle");
var Circle = [0,0];
//湿度滑条
$('#range1').hekrRangeSlider({
  type: "single",
  min: 10,
  max: 95,
  value: 10,
  step: 1,
  onChange: function(data) {
      range(this,data);
  },
  updateContext: this
});
var instanceRangeSlider1 = $('#range1').data("hekrRangeSlider");

/*档位*/
$("#gears").hekrSlotSelector({
  ratios: [1],
  radios: {
      number: 2,
      name: 'gears',
      ids: ["g1", "g2"],
      values: [1, 2]
    },
    labels: ["低风", "高风"],
    slider: {
      init: true,
      icon: '<i class="hekr-iconfont hekr-btn-on" style="font-size: .16rem;">&#xe852;</i> '
    },
    value: 1,
    disabled: false,
    onChange: gears
});
var instanceGears = $('#gears').data("hekrSlotSelector");
function gears(data){
    var oldValue = $("#gears").data("oldValue");
    if(oldValue != data.value) {
        $.hekrToast(true, "消息正在发送中...", 6000, true);
        switch(data.value){
        case 1:
            sendCMD({AirFlow:1},3);
            break;
        case 2:
            sendCMD({AirFlow:2},3);
            break;
        }
        // 设置超时
        // $("#gears").data("timeout", setTimeout(function() {
        //     // 返回原来的温度
        //     $("#gears").data("hekrSlotSelector").update({value: oldValue});
        //     // 提示超时
        //     $.hekrToast("响应超时~请稍后重试");
        // }, 100));
    }
}
/*滑条*/
function range(id,data){
    //console.log(data.value)
   // var value = '';
    //value = data.value == 0 ? 255 : data.value ;

    var oldValue = $(id).data("oldValue");
    if(oldValue != data.value) {
        $.hekrToast(true, "消息正在发送中...", 6000, true);
        sendCMD({HumiditySetting:data.value},5);
        // 设置超时
        // $(id).data("timeout", setTimeout(function() {
        //     // 返回原来的温度
        //     $(id).data("hekrRangeSlider").update({value: oldValue});
        //     // 提示超时
        //     $.hekrToast("响应超时~请稍后重试");
        // }, 5000));
    }
}

/*开关*/
$('#power').off('touchend').on('touchend',power);
function power(){
  var $this = $(this);
    $.hekrToast(true, "消息正在发送中...", 6000, true);
    if($this.hasClass('hekr-btn-on')){
      sendCMD({Power:0},2);
    }else{
      sendCMD({Power:1},2);
    }
    // 设置超时
    // $this.data("timeout", setTimeout(function() {
    //   // 提示超时
    //   $.hekrToast("响应超时~请稍后重试");
    // }, 5000));
}
/*滤网*/
function anion(){
    var $this = $(this);
    $.hekrToast(true, "消息正在发送中...", 6000, true);
    if($this.hasClass('hekr-btn-on')){
      sendCMD({FilterWash:0},4);
    }else{
      sendCMD({FilterWash:1},4);
    }
    // 设置超时
    // $this.data("timeout", setTimeout(function() {
    //   // 提示超时
    //   $.hekrToast("响应超时~请稍后重试");
    // }, 5000));
}

function ON(){
    $('#gears i.hekr-btn-on').css('color','#f56735');
    instanceGears.enable();
    instanceRangeSlider1.enable();
    instanceGears.update({
      slider: {
        init: true,
        icon: '<i class="hekr-iconfont hekr-btn-on" style="font-size: .16rem;">&#xe852;</i> '
      },
      value: 1
    });
    instanceRangeSlider1.update({value:10});
}
function OFF(){
    $('#anion').off('touchend').removeClass('hekr-btn-on').addClass('hekr-btn-disabled');
    instanceGears.update({
      slider: {
        init: true,
        icon: '<i class="hekr-iconfont" style="font-size: .16rem;">&#xe852;</i> '
      },
      value: 1
    });
    instanceRangeSlider1.update({value:10});
    instanceGears.disable();
    instanceRangeSlider1.disable();
    FCircle();
}
OFF();
var html = '<div class="hekr-slide-item">'+
                        '<i class="hekr-iconfont">&#xe853;</i>'+
                        '<span>{text}</span>'+
                    '</div>';
/*返回数据*/
function setState(data){
  data = UARTDATA2.decode(data,protocolTemplete);
  console.log(data);
  /*开关*/
  if(data.cmdId===1 || data.cmdId === 2){
    // clearTimeout($('#power').data("timeout"));
    if(data.Power === 1){
      $("#power").addClass('hekr-btn-on');
      $('.item-first .label span').removeClass('off');
      $(".item-first .item-text").text("已开")
      ON();
    }else if(data.Power === 0){
      $("#power").removeClass('hekr-btn-on');
      $('.item-first .label span').addClass('off');
      $(".item-first .item-text").text("已关");
      $('.present > div span,.control > div span').text('--');
      Circle = [0,0];
      OFF();
    }
  }

  /*湿度设置*/
  if(data.cmdId===1 || data.cmdId === 5){
    // clearTimeout($('#range1').data("timeout"));
    if(data.HumiditySetting == 0){}else if(data.HumiditySetting <= 10){
        instanceRangeSlider1.update({value:10});
    }else if(data.HumiditySetting >= 95){
        instanceRangeSlider1.update({value:95});
    }else{
        instanceRangeSlider1.update({value:data.HumiditySetting});
    }
  }

    /*滤网开关*/
    if(data.cmdId===1 || data.cmdId === 4){
        // clearTimeout($('#anion').data("timeout"));
        if(data.FilterWash == 1){
            $('#anion').addClass('hekr-btn-on');
            $('.cleansing span').text('已启用');
        }else if(data.FilterWash == 0){
            $('#anion').removeClass('hekr-btn-on');
            $('.cleansing span').text('待机中');
        }
    }

    /*风速*/
    if(data.cmdId===1 || data.cmdId === 3){
        // clearTimeout($("#gears").data("timeout"));
        if(data.AirFlow == 1){
            instanceGears.update({value: 1});
        }else if(data.AirFlow == 2){
            instanceGears.update({value: 2});
        }
    }

    if(data.cmdId === 1){
        /*当前温度*/
        if(data.CurrTemp <= 0){
            $('.temperature span').text('0℃');
            Circle[1] = 0;
        }else if(data.CurrTemp >= 70){
            $('.temperature span').text('70℃');
            Circle[1] = 70;
        }else{
            $('.temperature span').text(data.CurrTemp+'℃');
            Circle[1] = data.CurrTemp;
            //console.log(Circle)
        }
        /*当前湿度*/
        if(data.CurrHum <= 1){
            $('.humidity span').text('1%');
            Circle[0] = 1;
        }else if(data.CurrHum >= 100){
            $('.humidity span').text('100%');
            Circle[0] = 100;
        }else{
            $('.humidity span').text(data.CurrHum+'%');
            Circle[0] = data.CurrHum;
        }
        FCircle();
        /*盘管温度*/
        if(data.PanGTemp>10){
          $('.coiler span').text(-(10-data.PanGTemp)+'℃');
        }else if(data.PanGTemp == 0){
          $('.coiler span').text('0℃');
        }else{
          $('.coiler span').text((data.PanGTemp-10)+'℃');
        }
        /*滤网使用量*/
        $('.strainer span').text(data.FilterUsedTime+'h');
        if(data.FilterUsedTime>=2000 && data.Power == 1){
          $('#anion').off('touchend').on('touchend',anion).removeClass('hekr-btn-disabled');
        }else{
          $('#anion').off('touchend').removeClass('hekr-btn-on').addClass('hekr-btn-disabled');
        }
        /*警告窗*/
        if(data.HumidityError==1){
          $('.humidity span').text('--');
        }
        if(data.TempOverPrompt==1){
          $('.temperature span').text('--');
        }
        if(data.PanGError==1){
          $('.coiler span').text('--');
        }
        warning('湿度传感器故障，请及时维修',data.HumidityError);
        warning('高压保护',data.OverVoltagePrompt);
        warning('盘管传感器故障，请及时维修',data.PanGError);
        warning('欠压保护',data.UnVoltagePrompt);
        warning('超温保护',data.TempOverPrompt);
        warning('水满保护',data.WaterOverPrompt);
    }
}
function warning(t,data){
  var ele = $('#warn .hekr-slide-scroller > .hekr-slide-item');
  var H,spanText;
  var x = true;
  if(ele.length > 0){
    for(var i=0;i<ele.length;i++){
      spanText = $(ele).eq(i).find('span');
      if($(spanText).text() == t){
        x = false;
        if(data == 0){
          $(ele).eq(i).remove();
          instanceSlideWarn.refresh();
        }
        break;
      }
    }
    if(x){
      if(data == 1){
          $.hekrConfirm({
              message: t,
              messageColor: "white",
              buttonType: "single",
              confirmButton: "我知道了",
              confirmButtonColor: "blue",
              confirmButtonEvent: function() {
                  console.log(this);
              },
              input: false,
              context: jQuery
          });
          H = html.replace('{text}',t);
          console.log(H)
          $('#warn .hekr-slide-scroller').append(H);
          instanceSlideWarn.refresh();
      }
    }
  }else{
     if(data==1){
        console.log(3)
        $.hekrConfirm({
            message: t,
            messageColor: "white",
            buttonType: "single",
            confirmButton: "我知道了",
            confirmButtonColor: "blue",
            confirmButtonEvent: function() {
                console.log(this);
            },
            input: false,
            context: jQuery
        });
        H = html.replace('{text}',t);
        $('#warn .hekr-slide-scroller').append(H);
        instanceSlideWarn.refresh();
    }
  }

}

function FCircle(){
    instanceCircle.update({//圆形状态
      circles: [
        {
          color: "#13b5b1",
          beginAngle: Math.PI / 2,
          min: 0,
          max: 100,
          width: 10,
          gutter: 0,
          value: Circle[0]
        },
        {
          color: "#f29876",
          beginAngle: Math.PI / 2,
          min: 0,
          max: 100,
          width: 7,
          gutter: 4,
          value: Circle[1]
        }
      ]
    });
}
/*================================================================================================================================================================*/

//预约
// 预约数据缓存
var timingData = [];
var $timerID = $('#page2');
var $timeLabel1 = $('.lasttimer .item-text');
var timerOn = '4807023d020191';
var timerOff = '48070242020095';
//var del = false;

/*拉取*/
function getListTimer(){
    var url = 'https://user-openapi.hekr.me/rule/schedulerTask';
    var dataSet = {
      devTid : devTid,
      ctrlKey : ctrlKey
    }
    var type = 'GET';
    connect(type,url,dataSet,'list');
}

/*创建*/
function addTimer(index, data, instance, container, options){
    var url = 'https://user-openapi.hekr.me/rule/schedulerTask';
    var type = 'POST';
    var dataSet = JSON.stringify(dispose_dataSet(data));
    //console.log(dataSet)
    /*标签长度*/
    if(data.name.length>12){
        $.hekrConfirm({
            title: "标签长度为12个字符",
            titleColor: "red",
            messageColor: "red",
            buttonType: "single",
            confirmButton: "马上修改",
            confirmButtonColor: "white",
            confirmButtonEvent: function() {
              this.hide();
            },
            input: false,
            context: $('.hekr-confirm')
        });
    }else{
      connect(type,url,dataSet,'add');
    }
}
/*修改*/
function changeTimer(index, data, instance, container, options){
    var ruleid = timingData[index].taskId;
    var url = 'https://user-openapi.hekr.me/rule/schedulerTask?taskId='+ruleid+'&devTid='+devTid + '&ctrlKey=' + ctrlKey;
    var dataSet = JSON.stringify(dispose_dataSet(data));
    var type = 'PUT';
    /*标签长度*/
    if(data.name.length>12){
        $.hekrConfirm({
            title: "标签长度为12个字符",
            titleColor: "red",
            messageColor: "red",
            buttonType: "single",
            confirmButton: "马上修改",
            confirmButtonColor: "white",
            confirmButtonEvent: function() {
              this.hide();
            },
            input: false,
            context: $('.hekr-confirm')
        });
    }else{
      connect(type,url,dataSet,'add');
    }
}
/*删除*/
function delTimer(index, data, instance, container, options){
    var ruleid = timingData[index].taskId;
    var url = 'https://user-openapi.hekr.me/rule/schedulerTask?devTid='+devTid+'&ctrlKey='+ctrlKey+'&taskId='+ruleid;
    var type = "DELETE";
    var dataSet = {};
    connect(type,url,dataSet,'del',instance,index);
}
/*开关*/
function switchTimer(index, data, instance, container, options){
    var ruleid = timingData[index].taskId;
    var disable = timingData[index].enable == false && timingData[index].expired == false ? true : false;
    var url = 'https://user-openapi.hekr.me/rule/schedulerTask?taskId='+ruleid+'&devTid='+devTid + '&ctrlKey=' + ctrlKey;
    var dataSet = JSON.stringify({
       enable : disable
    });
    var type = 'PUT';
    connect(type,url,dataSet,'change',instance,index);
}
/*增加和编辑处理dataSet*/
function dispose_dataSet(data){
    var dataSet = {
      devTid : devTid,
      ctrlKey : ctrlKey,
      code : {
          raw : 1
      },
      enable : true,
      taskName : data.name,
      schedulerType : "GENERIC",
      taskKey : "taskKey_" + Math.random().toString(36).substr(2),
      timeZoneOffset : 480,
      cronExpr : null
    }
    // 计算 帧
    var switches = parseInt(data.main.values[0], 10);
    if(switches === 1) {
      dataSet.code.raw = timerOn;
    } else if(switches === 2) {
      dataSet.code.raw = timerOff;
    }
    var CEObj = {
      seconds: 0,
      minutes: null,
      hours: null,
      daysOfMonth: null,
      months: null,
      daysOfWeek: null,
      years: null
    };
    var time = data.time;
    var hours = parseInt(time[0], 10);
    var minutes = parseInt(time[1], 10);
    var repeats = data.repeats;
    var date = new Date();
    if(!repeats.values.length){
        // 获取现在时间
        var h = date.getHours();
        var m = date.getMinutes();
        CEObj.daysOfWeek = '?';
        // 时间没有过去
        if(hours > h || hours === h && minutes > m) {
          CEObj.daysOfMonth = date.getDate();
          CEObj.months = date.getMonth() + 1;
          CEObj.years = date.getFullYear();
        // 时间已经过去
        } else {
          $.hekrToast('您选择的时间已经流逝了，请重新选择！');
          return;
        }
        CEObj.seconds = 0;
    }else{
        CEObj.daysOfMonth = "?";
        CEObj.months = "*";
        CEObj.years = date.getFullYear();
        CEObj.daysOfWeek = "";
        for (var i = 0; i < repeats.values.length; i++) {
          switch(repeats.values[i]) {
            case 7:
              CEObj.daysOfWeek += "7,";
              break;
            case 1:
              CEObj.daysOfWeek += "1,";
              break;
            case 2:
              CEObj.daysOfWeek += "2,";
              break;
            case 3:
              CEObj.daysOfWeek += "3,";
              break;
            case 4:
              CEObj.daysOfWeek += "4,";
              break;
            case 5:
              CEObj.daysOfWeek += "5,";
              break;
            case 6:
              CEObj.daysOfWeek += "6,";
              break;
          }
        }
        CEObj.daysOfWeek = CEObj.daysOfWeek.replace(/(^,*)|(,*$)/g, '');
    }
    CEObj.hours = hours;
    CEObj.minutes = minutes;
    dataSet.cronExpr = CronExpr.encode(CEObj);
    return dataSet;
}
/*处理数据*/
function processing(data){
    //console.log(data)
    if($.isArray(data)) {
      timingData = seqencing(data);
      // 解析数据
      var analyzeData = analyzeTimingData(timingData);
      // 使用插件
      var opts = {
        limit: 10,
        limitMessage: "预约条数已达上限！",
        timingTitle: "预约总览",
        addTitle: "新增预约",
        editTitle: "预约编辑",
        emptyMessage: "暂无预约，请添加！",
        labelMessage: "未命名",
        beforeEditButtonText: "编辑",
        afterEditButtonsText: "完成",
        addButtonText: "添加",
        cancelButtonText: "取消",
        confirmButtonText: "确定",
        circleIcon: "&#xe702;",
        deleteIcon: "&#xe61f;",
        arrowIcon: "&#xe6e0;",
        chooseIcon: "&#xe671;",
        models: {
          label: {
            name: '标签'
          },
          time: {
            name: '时间'
          },
          main: {
            name: '开关',
            type: 3,
            values: [1, 2],
            maps: ['开启', '关闭'],
            required: true
          },
          repeats: {
            type: 2, // 当前页多选
            name: "重复",
            values: [ 2, 3, 4, 5, 6,7, 1],
            maps: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
            required: false
          }
        },
        data: analyzeData,
        // 增
        onCreate : addTimer,
        // 删
        onDelete : delTimer,
        // 改
        onUpdate : changeTimer,
        // 开关
        onSwitch : switchTimer
      };
      $timerID.data('hekrTiming', null);
      $timerID.hekrTiming(opts);
      //console.log(data)
      //console.log(analyzeData)
      getLastTimer();
    } else {
      $.hekrToast("操作出现错误，请稍后重试！");
    }
}
/*排序*/
function seqencing(data){
    var expired = [];
    var enable = [];
    var normal = [];
    var all = [];
    for(var di=0;di<data.length;di++){
      if(data[di].nextTriggerTime == null && data[di].expired == true){
        expired.push(data[di]);
      }else if(data[di].nextTriggerTime != null && data[di].enable == false){
        enable.push(data[di]);
      }else if(data[di].nextTriggerTime != null && data[di].enable == true){
        normal.push(data[di]);
      }
    }
    normal.sort(function(x, y){
            return x.nextTriggerTime - y.nextTriggerTime;
    });
    enable.sort(function(x, y){
            return x.nextTriggerTime - y.nextTriggerTime;
    });
    all = normal.concat(enable,expired);
  // console.log(normal)
  // console.log(expired)
  // console.log(enable)
  //console.log(normal.concat(enable,expired))
  return all;
}
/*解析数据*/
function analyzeTimingData(data){
  //console.log(data)
    var ret = [];
    var l = data.length;
    for(var i = 0; i < l; i++) {
      var tempCronObj = CronExpr.decode(data[i].cronExpr);
      var executecode = data[i].code.raw;
      var tempWeekDays;
      ret[i] = {};
      // 标签
      ret[i].name = data[i].taskName;
      // 是否为可用状态
      ret[i].on = data[i].enable == true && data[i].expired == false? true : false;
      // 时间
      ret[i].time = [tempCronObj.hours, tempCronObj.minutes];
      // 开关
      ret[i].main = {};
      if(executecode.indexOf(timerOn) > -1){
          ret[i].main.values = [1];
          ret[i].main.alias = '开';
      }else if(executecode.indexOf(timerOff) > -1){
          ret[i].main.values = [2];
          ret[i].main.alias = '关';
      }
      //周
      ret[i].repeats = {};
      // 计算重复
      // 如果有重复
      //console.log(tempCronObj)
      if (tempCronObj.daysOfWeek !== '?') {
          tempWeekDays = tempCronObj.daysOfWeek.split(",");
          ret[i].repeats.alias = "";
          ret[i].repeats.values = [];
          var
          j = 0,
          len = tempWeekDays.length;
          if (len == 7) {
              ret[i].repeats.alias = "每天";
              ret[i].repeats.values = [2,3,4,5,6,7,1]
          } else {
          for ( ; j < len; j++) {
              switch(tempWeekDays[j].toUpperCase()) {
                  case "MON":
                      case '2'://1-7: 1表示周日 2表示周一
                      ret[i].repeats.alias += "周一 ";
                      ret[i].repeats.values.push(2);
                      break;
                  case "TUES":
                      case '3':
                      ret[i].repeats.alias += "周二 ";
                      ret[i].repeats.values.push(3);
                      break;
                  case "WED":
                      case '4':
                      ret[i].repeats.alias += "周三 ";
                      ret[i].repeats.values.push(4);
                      break;
                  case "THUR":
                      case '5':
                      ret[i].repeats.alias += "周四 ";
                      ret[i].repeats.values.push(5);
                      break;
                  case "FRI":
                      case '6':
                      ret[i].repeats.alias += "周五 ";
                      ret[i].repeats.values.push(6);
                      break;
                  case "SAT":
                      case '7':
                      ret[i].repeats.alias += "周六 ";
                      ret[i].repeats.values.push(7);
                      break;
                  case "SUN":
                      case '1':
                      ret[i].repeats.alias += "周日 ";
                      ret[i].repeats.values.push(1);
                      break;
              }
          }
              // 去除空格
              ret[i].repeats.alias = ret[i].repeats.alias.replace(/(^\s*)|(\s*$)/g, "");
          }
      // 如果没有重复
      } else {
          ret[i].repeats.alias = tempCronObj.years.toString()
          + "-"
          + tempCronObj.months.toString()
          + "-"
          + tempCronObj.daysOfMonth.toString();
          ret[i].repeats.values = [];
      }
    }
    //console.log(ret)
    return ret;
}
/*获取最近的执行时间*/
function getLastTimer() {
  //console.log(timingData)
  if($.isArray(timingData) && timingData.length) {
    var executeTime1 = '';
     var executecode1 = '';
    if(timingData.length>0){
        if(timingData[0].enable === true && timingData[0].expired === false){
          executeTime1=timingData[0].nextTriggerTime;
          executecode1=timingData[0].code.raw;
        }
    }
    $timeLabel1.text(showTime(executeTime1,executecode1));
  } else {
    $timeLabel1.text('暂无执行任务');
  }
}
function showTime(executeTime,executecode){
  var switches;
  var text = '暂无执行任务';
  var now = (new Date()).getTime();
  var date = new Date();
  var nowDayOfWeek = date.getDay(); //今天本周的第几天
  nDate = new Date(Date.UTC(date.getFullYear(),date.getMonth(),date.getDate(),date.getHours(),date.getMinutes(),date.getSeconds()));
  var n = nDate.getTime()/1000 - 8*60*60;
  nowDayOfWeek = nowDayOfWeek==0?7:nowDayOfWeek;
  //console.log(date.getHours()+''+date.getMinutes())
  if(executeTime == 0){
    text = '暂无执行任务';
  }else{
    var remainingTime=parseInt((executeTime-now)/60000);
    var hours = ~~(remainingTime / 60);
    var minutes = remainingTime % 60;
    if(executecode.indexOf(timerOn) > -1){
      switches = '开';
    }else if(executecode.indexOf(timerOff) > -1){
      switches = '关';
    }
    var next = new Date(executeTime);
    var nextDayOfWeek = next.getDay(); //下周周的第几天
    nextDayOfWeek = nextDayOfWeek==0?7:nextDayOfWeek;
    if(nextDayOfWeek<=nowDayOfWeek && hours>24){
        switch(nextDayOfWeek){
          case 1:
              text = '下周一 ' + switches;
              break;
          case 2:
              text = '下周二 ' + switches;
              break;
          case 3:
              text = '下周三 ' + switches;
              break;
          case 4:
              text = '下周四 ' + switches;
              break;
          case 5:
              text = '下周五 ' + switches;
              break;
          case 6:
              text = '下周六 ' + switches;
              break;
          case 7:
              text = '下周日 ' + switches;
              break;
        }
    }else if(nextDayOfWeek>=nowDayOfWeek){
      text = '' + hours + 'h' + minutes + 'm后 ' + switches;
    }
  }
  return text;
}
/*连接服务器*/
function connect(type,url,dataSet,source,instance,index){
    $.ajax({
        type : type,
        headers : header,
        url : url,
        dataType : 'json',
        data : dataSet,
        cache:false,
        success: function(data){
            if($.isArray(data)){
                if(source == 'list'){
                    processing(data);
                }else if(source == 'del'){
                    timingData.splice(index, 1);
                    instance.delete(index);
                    getLastTimer();
                }else if(source == 'change' || source == 'add'){
                    getListTimer();
                    getLastTimer();
                }
            }else{
                  $.hekrToast("网络出误，请稍后重试！");
            }
            //console.log(data)
        },
        error:function(XMLHttpRequest, textStatus, errorThrow){
            if($timerID.is(':visible')) {
                $.hekrToast("操作出现错误，请稍后重试");
                // if (textStatus == "timeout") {
                //     $.hekrToast("响应超时，请稍后重试");
                // } else {
                //     $.hekrToast("操作出现错误，请稍后重试");
                // }
            }
        }
    });
}

// cron 表达式----------------------------------------------------------------------------------------------------------------------
CronExpr = {
  /**
   * decode
   *------------------
   * @param {string} expr 表达式字符串
   */
  decode: function(expr) {
    var
      /*
       * 返回的对象，格式如下:
       *----------------------
       * {
       *   seconds: 0,
       *   minutes: 7,
       *   hours: 7,
       *   daysOfMonth: "?",
       *   months: "*",
       *   daysOfWeek: "MON,FRI",
       *   years: 2016
       * }
       */
      ret = {};
    // 修正参数
    expr = expr.replace(/(^\s*)|(\s*$)/g, '');
    // 把表达式转换成数组
    expr = expr.split(/\s/);
    // 添加到返回的数组中
    ret.seconds = expr[0];
    ret.minutes = expr[1];
    ret.hours = expr[2];
    ret.daysOfMonth = expr[3];
    ret.months = expr[4];
    ret.daysOfWeek = expr[5];
    ret.years = (typeof expr[6] !== "undefined") ? expr[6] : null;
    return ret;
  },

  /**
   * encode
   *----------------------------------------------------------
   * @param {object} obj 数据，格式与deconde返回的数据格式一样
   */
  encode: function(obj) {
    var ret = "";
    // 修正参数
    obj = obj || {};
    // 秒
    if (typeof obj.seconds === "string" || typeof obj.seconds === "number") {
      ret += (String(obj.seconds) + " ");
    } else {
      return "";
    }
    // 分
    if (typeof obj.minutes === "string" || typeof obj.minutes === "number") {
      ret += (String(obj.minutes) + " ");
    } else {
      return "";
    }
    // 小时
    if (typeof obj.hours === "string" || typeof obj.hours === "number") {
      ret += (String(obj.hours) + " ");
    } else {
      return "";
    }
    // 日期
    if (typeof obj.daysOfMonth === "string" || typeof obj.daysOfMonth === "number") {
      ret += (String(obj.daysOfMonth) + " ");
    } else {
      return "";
    }
    // 月份
    if (typeof obj.months === "string" || typeof obj.months === "number") {
      ret += (String(obj.months) + " ");
    } else {
      return "";
    }
    // 星期
    if (typeof obj.daysOfWeek === "string" || typeof obj.daysOfWeek === "number") {
      ret += String(obj.daysOfWeek);
    } else {
      return "";
    }
    // 年
    if (typeof obj.years === "string" || typeof obj.years === "number") {
      ret += (" " + String(obj.years));
    }
    return ret;
  }
};