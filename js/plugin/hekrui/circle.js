
// UI Circle

;(function($, window, document, undefined) {

  var dpr = window.devicePixelRatio || 1;

  var Circle = function(ele, config) {

    // 自调用
    if(!(this instanceof Circle)) {
      return new Circle(ele, config);
    }

    // 用户配置
    config = config || {};

    var hook = this.ele = ele;
    var $hook = this.$hook = $(ele);
    var hookWidth = this.hookWidth = $hook.width();
    var hookHeight = this.hookHeight = $hook.height();

    // 默认配置
    var defaults = {
      background: "rgba(0, 0, 0, .25)",
      color: '#13b5b1',
      width: 10,
      gutter: 10,
      beginAngle: Math.PI / 2,
      min: 0,
      max: 10,
      value: null
    };

    // 扩展配置
    var conf = this.config = $.extend({}, defaults, config);

    this._init();
  };

  // 初始化
  Circle.prototype._init = function() {
    var hookWidth = this.hookWidth;
    var hookHeight = this.hookHeight;
    var size = Math.min(hookWidth, hookHeight);
    var overflowType = hookWidth === hookHeight ? null :
      size === hookWidth ? 'height' : 
      size === hookHeight ? 'width' : null;
    var sizeAttr = this.sizeAttr = size * dpr;
    var canvas = document.createElement("canvas");
    var $canvas = $(canvas);
    $canvas.attr({ width: sizeAttr, height: sizeAttr });
    $canvas.css({ width: size, height: size });
    if(overflowType != null) {
      if(overflowType === 'width') {
        $canvas.css('margin-left', (hookWidth - hookHeight) / 2 + 'px');
      } else if(overflowType === 'height') {
        $canvas.css('margin-top', (hookHeight - hookWidth) / 2 + 'px');
      }
    }
    this.$hook.html($canvas);
    this.context = canvas.getContext( "2d" );
    this.center = Math.floor( sizeAttr / 2 );
    this._correctConfig();
    this._drawBackground();
    this._draw();
  };

  // 修正配置
  Circle.prototype._correctConfig = function() {
    var conf = this.config;
    var background = this.background = conf.background != null ? 
      conf.background.toString() : "rgba(0, 0, 0, .25)";
    var color = this.color = conf.color != null ?
      conf.color.toString() : '#13b5b1';
    var width = this.width = !isNaN(parseInt(conf.width)) ?
      parseInt(conf.width) : 10;
    var gutter = this.gutter = !isNaN(parseInt(conf.gutter)) ?
      parseInt(conf.gutter) : 10;
    var beginAngle = this.beginAngle = !isNaN(parseFloat(conf.beginAngle)) ? 
      parseFloat(conf.beginAngle) : Math.PI / 2;
    var min = this.min = !isNaN(parseFloat(conf.min)) ?
      parseFloat(conf.min) : 0;
    var max = this.max = !isNaN(parseFloat(conf.max)) ?
      parseFloat(conf.max) : 10;
    
    var circlesLength = this.circlesLength = $.isArray(conf.circles) && conf.circles.length ?
      conf.circles.length : 1;

    var value;
    if($.isArray(conf.value)) {
      value = this.value = $.map(conf.value, function(value, index) {
        value = parseFloat(value);
        return isNaN(value) ? min : value;
      }, this);
    } else {
      value = this.value = [isNaN(parseFloat(value)) ? min : parseFloat(value)];
    }
    var valueLength = value.length;
    if(valueLength < circlesLength) {
      for(var i = valueLength; i < circlesLength; i++) {
        value.push(min);
      }
    }

    var circles = this.circles = Array(circlesLength);

    if(!$.isArray(conf.circles)) {
      conf.circles = [];
    }

    var l = circlesLength;
    while( l-- ) {
      if(!$.isPlainObject(conf.circles[l])) {
        conf.circles[l] = {};
      }
      circles[l] = {};
      if (conf.circles[l].background != null) {
        circles[l].background = conf.circles[l].background.toString();
      } else {
        circles[l].background = background;
      }
      if (conf.circles[l].color != null) {
        circles[l].color = conf.circles[l].color.toString();
      } else {
        circles[l].color = color;
      }
      if (conf.circles[l].width != null) {
        circles[l].width = isNaN(parseInt(conf.circles[l].width)) ?
          width : parseInt(conf.circles[l].width);
      } else {
        circles[l].width = width;
      }
      if (conf.circles[l].gutter != null) {
        circles[l].gutter = isNaN(parseInt(conf.circles[l].gutter)) ?
          gutter : parseInt(conf.circles[l].gutter);
      } else {
        circles[l].gutter = gutter;
      }
      if (conf.circles[l].beginAngle != null) {
        circles[l].beginAngle = isNaN(parseFloat(conf.circles[l].beginAngle)) ?
          beginAngle : parseFloat(conf.circles[l].beginAngle);
      } else {
        circles[l].beginAngle = beginAngle;
      }
      if (conf.circles[l].min != null) {
        circles[l].min = isNaN(parseFloat(conf.circles[l].min)) ?
          min : parseFloat(conf.circles[l].min);
      } else {
        circles[l].min = min;
      }
      if (conf.circles[l].max != null) {
        circles[l].max = isNaN(parseFloat(conf.circles[l].max)) ?
          max : parseFloat(conf.circles[l].max);
      } else {
        circles[l].max = max;
      }
      if (conf.circles[l].value != null) {
        circles[l].value = isNaN(parseFloat(conf.circles[l].value)) ?
          value[l] : parseFloat(conf.circles[l].value);
          value[l] = circles[l].value;
      } else {
        circles[l].value = value[l];
      }
      // if(circles[l].value < min) {
      //   circles[l].value = min;
      // }
      // if(circles[l].value > max) {
      //   circles[l].value = max;
      // }
    }
  };

  // 画背景
  Circle.prototype._drawBackground = function() {
    var l = this.circlesLength;
    var context = this.context;
    var circles = this.circles;
    var avaliableSize = this.sizeAttr;
    var center = this.center;

    for(var i = 0; i < l; i++) {
      var width = circles[i].width * dpr;
      var gutter = circles[i].gutter * dpr;
      var diameter = avaliableSize - width * 2 - gutter * 2;
      var radius = diameter / 2 + width / 2;
      var background = circles[i].background;
      context.beginPath();
      context.arc(center, center, radius, 0, Math.PI * 2, false);
      context.lineWidth = width;
      context.strokeStyle = background;
      context.stroke();
      context.closePath();
      avaliableSize = diameter;
    }
  };

  // 填充圆环
  Circle.prototype._draw = function() {
    var l = this.circlesLength;
    var context = this.context;
    var circles = this.circles;
    var avaliableSize = this.sizeAttr;
    var center = this.center;
    var endAngle;

    for (var i = 0; i < l; i++) {
      var width = circles[i].width * dpr;
      var gutter = circles[i].gutter * dpr;
      var diameter = avaliableSize - width * 2 - gutter * 2;
      var radius = diameter / 2 + width / 2;
      var color = circles[i].color;
      var beginAngle = circles[i].beginAngle;
      // 计算结束角度
      endAngle = (circles[i].value - circles[i].min) / (circles[i].max - circles[i].min) * Math.PI * 2 + circles[i].beginAngle;
      this.context.beginPath();
      this.context.arc(center, center, radius, beginAngle, endAngle, false);
      this.context.lineWidth = width;
      this.context.strokeStyle = color;
      this.context.stroke();
      this.context.closePath();
      avaliableSize = diameter;
    }
  };

  // 显示
  Circle.prototype.show = function() {
    this.$hook.show();
    return this;
  };

  // 隐藏
  Circle.prototype.hide = function() {
    this.$hook.hide();
    return this;
  };

  // 获取值
  Circle.prototype.getValue = function() {
    return this.value;
  };

  // 更新
  Circle.prototype.update = function(config) {
    $.extend(this.config, config);
    this._init();
    return this;
  };

  // 添加插件
  $.fn.hekrCircle = function ( options ) {
    return this.each( function() {
      if ( !$.data( this, "hekrCircle" ) ) {
        $.data( this, "hekrCircle", new Circle( this, options ) );
      }
    });
  };

})($, window, document);