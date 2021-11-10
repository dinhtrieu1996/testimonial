(function () {
  var loadScript = function (url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";

    // If the browser is Internet Explorer.
    if (script.readyState) {
      script.onreadystatechange = function () {
        if (script.readyState == "loaded" || script.readyState == "complete") {
          script.onreadystatechange = null;
          callback();
        }
      };
      // For any other browser.
    } else {
      script.onload = function () {
        callback();
      };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  };

  var initTestimonialSliderLibrary = function (jQuery) {
    !function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){e.ui=e.ui||{},e.ui.version="1.12.1";var t=0,i=Array.prototype.slice;e.cleanData=function(t){return function(i){var s,n,a;for(a=0;null!=(n=i[a]);a++)try{(s=e._data(n,"events"))&&s.remove&&e(n).triggerHandler("remove")}catch(e){}t(i)}}(e.cleanData),e.widget=function(t,i,s){var n,a,o,h={},u=t.split(".")[0],r=u+"-"+(t=t.split(".")[1]);return s||(s=i,i=e.Widget),e.isArray(s)&&(s=e.extend.apply(null,[{}].concat(s))),e.expr[":"][r.toLowerCase()]=function(t){return!!e.data(t,r)},e[u]=e[u]||{},n=e[u][t],a=e[u][t]=function(e,t){return this._createWidget?void(arguments.length&&this._createWidget(e,t)):new a(e,t)},e.extend(a,n,{version:s.version,_proto:e.extend({},s),_childConstructors:[]}),(o=new i).options=e.widget.extend({},o.options),e.each(s,function(t,s){return e.isFunction(s)?void(h[t]=function(){function e(){return i.prototype[t].apply(this,arguments)}function n(e){return i.prototype[t].apply(this,e)}return function(){var t,i=this._super,a=this._superApply;return this._super=e,this._superApply=n,t=s.apply(this,arguments),this._super=i,this._superApply=a,t}}()):void(h[t]=s)}),a.prototype=e.widget.extend(o,{widgetEventPrefix:n&&o.widgetEventPrefix||t},h,{constructor:a,namespace:u,widgetName:t,widgetFullName:r}),n?(e.each(n._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,a,i._proto)}),delete n._childConstructors):i._childConstructors.push(a),e.widget.bridge(t,a),a},e.widget.extend=function(t){for(var s,n,a=i.call(arguments,1),o=0,h=a.length;h>o;o++)for(s in a[o])n=a[o][s],a[o].hasOwnProperty(s)&&void 0!==n&&(t[s]=e.isPlainObject(n)?e.isPlainObject(t[s])?e.widget.extend({},t[s],n):e.widget.extend({},n):n);return t},e.widget.bridge=function(t,s){var n=s.prototype.widgetFullName||t;e.fn[t]=function(a){var o="string"==typeof a,h=i.call(arguments,1),u=this;return o?this.length||"instance"!==a?this.each(function(){var i,s=e.data(this,n);return"instance"===a?(u=s,!1):s?e.isFunction(s[a])&&"_"!==a.charAt(0)?(i=s[a].apply(s,h))!==s&&void 0!==i?(u=i&&i.jquery?u.pushStack(i.get()):i,!1):void 0:e.error("no such method '"+a+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; attempted to call method '"+a+"'")}):u=void 0:(h.length&&(a=e.widget.extend.apply(null,[a].concat(h))),this.each(function(){var t=e.data(this,n);t?(t.option(a||{}),t._init&&t._init()):e.data(this,n,new s(a,this))})),u}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(i,s){s=e(s||this.defaultElement||this)[0],this.element=e(s),this.uuid=t++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),this.classesElementLookup={},s!==this&&(e.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===s&&this.destroy()}}),this.document=e(s.style?s.ownerDocument:s.document||s),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),i),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){var t=this;this._destroy(),e.each(this.classesElementLookup,function(e,i){t._removeClass(i,e)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:e.noop,widget:function(){return this.element},option:function(t,i){var s,n,a,o=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(o={},s=t.split("."),t=s.shift(),s.length){for(n=o[t]=e.widget.extend({},this.options[t]),a=0;s.length-1>a;a++)n[s[a]]=n[s[a]]||{},n=n[s[a]];if(t=s.pop(),1===arguments.length)return void 0===n[t]?null:n[t];n[t]=i}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];o[t]=i}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return"classes"===e&&this._setOptionClasses(t),this.options[e]=t,"disabled"===e&&this._setOptionDisabled(t),this},_setOptionClasses:function(t){var i,s,n;for(i in t)n=this.classesElementLookup[i],t[i]!==this.options.classes[i]&&n&&n.length&&(s=e(n.get()),this._removeClass(n,i),s.addClass(this._classes({element:s,keys:i,classes:t,add:!0})))},_setOptionDisabled:function(e){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!e),e&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(t){function i(i,a){var o,h;for(h=0;i.length>h;h++)o=n.classesElementLookup[i[h]]||e(),o=t.add?e(e.unique(o.get().concat(t.element.get()))):e(o.not(t.element).get()),n.classesElementLookup[i[h]]=o,s.push(i[h]),a&&t.classes[i[h]]&&s.push(t.classes[i[h]])}var s=[],n=this;return t=e.extend({element:this.element,classes:this.options.classes||{}},t),this._on(t.element,{remove:"_untrackClassesElement"}),t.keys&&i(t.keys.match(/\S+/g)||[],!0),t.extra&&i(t.extra.match(/\S+/g)||[]),s.join(" ")},_untrackClassesElement:function(t){var i=this;e.each(i.classesElementLookup,function(s,n){-1!==e.inArray(t.target,n)&&(i.classesElementLookup[s]=e(n.not(t.target).get()))})},_removeClass:function(e,t,i){return this._toggleClass(e,t,i,!1)},_addClass:function(e,t,i){return this._toggleClass(e,t,i,!0)},_toggleClass:function(e,t,i,s){s="boolean"==typeof s?s:i;var n="string"==typeof e||null===e,a={extra:n?t:i,keys:n?e:t,element:n?this.element:e,add:s};return a.element.toggleClass(this._classes(a),s),this},_on:function(t,i,s){var n,a=this;"boolean"!=typeof t&&(s=i,i=t,t=!1),s?(i=n=e(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),e.each(s,function(s,o){function h(){return t||!0!==a.options.disabled&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?a[o]:o).apply(a,arguments):void 0}"string"!=typeof o&&(h.guid=o.guid=o.guid||h.guid||e.guid++);var u=s.match(/^([\w:-]*)\s*(.*)$/),r=u[1]+a.eventNamespace,l=u[2];l?n.on(r,l,h):i.on(r,h)})},_off:function(t,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.off(i).off(i),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){var i=this;return setTimeout(function(){return("string"==typeof e?i[e]:e).apply(i,arguments)},t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){this._addClass(e(t.currentTarget),null,"ui-state-hover")},mouseleave:function(t){this._removeClass(e(t.currentTarget),null,"ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){this._addClass(e(t.currentTarget),null,"ui-state-focus")},focusout:function(t){this._removeClass(e(t.currentTarget),null,"ui-state-focus")}})},_trigger:function(t,i,s){var n,a,o=this.options[t];if(s=s||{},(i=e.Event(i)).type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(o)&&!1===o.apply(this.element[0],[i].concat(s))||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var o,h=n?!0===n||"number"==typeof n?i:n.effect||i:t;"number"==typeof(n=n||{})&&(n={duration:n}),o=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),o&&e.effects&&e.effects.effect[h]?s[t](n):h!==t&&s[h]?s[h](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}}),e.widget,e.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());var s=!1;e(document).on("mouseup",function(){s=!1}),e.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.on("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).on("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(!s){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var i=this,n=1===t.which,a=!("string"!=typeof this.options.cancel||!t.target.nodeName)&&e(t.target).closest(this.options.cancel).length;return!(n&&!a&&this._mouseCapture(t))||(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=!1!==this._mouseStart(t),!this._mouseStarted)?(t.preventDefault(),!0):(!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return i._mouseMove(e)},this._mouseUpDelegate=function(e){return i._mouseUp(e)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),s=!0,!0))}},_mouseMove:function(t){if(this._mouseMoved){if(e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button)return this._mouseUp(t);if(!t.which)if(t.originalEvent.altKey||t.originalEvent.ctrlKey||t.originalEvent.metaKey||t.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(t)}return(t.which||t.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=!1!==this._mouseStart(this._mouseDownEvent,t),this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,s=!1,t.preventDefault()},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),e.widget("ui.slider",e.ui.mouse,{version:"1.12.1",widgetEventPrefix:"slide",options:{animate:!1,classes:{"ui-slider":"ui-corner-all","ui-slider-handle":"ui-corner-all","ui-slider-range":"ui-corner-all ui-widget-header"},distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this._addClass("ui-slider ui-slider-"+this.orientation,"ui-widget ui-widget-content"),this._refresh(),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var t,i,s=this.options,n=this.element.find(".ui-slider-handle"),a=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),t=n.length;i>t;t++)a.push("<span tabindex='0'></span>");this.handles=n.add(e(a.join("")).appendTo(this.element)),this._addClass(this.handles,"ui-slider-handle","ui-state-default"),this.handle=this.handles.eq(0),this.handles.each(function(t){e(this).data("ui-slider-handle-index",t).attr("tabIndex",0)})},_createRange:function(){var t=this.options;t.range?(!0===t.range&&(t.values?t.values.length&&2!==t.values.length?t.values=[t.values[0],t.values[0]]:e.isArray(t.values)&&(t.values=t.values.slice(0)):t.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?(this._removeClass(this.range,"ui-slider-range-min ui-slider-range-max"),this.range.css({left:"",bottom:""})):(this.range=e("<div>").appendTo(this.element),this._addClass(this.range,"ui-slider-range")),("min"===t.range||"max"===t.range)&&this._addClass(this.range,"ui-slider-range-"+t.range)):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this._mouseDestroy()},_mouseCapture:function(t){var i,s,n,a,o,h,u,r=this,l=this.options;return!l.disabled&&(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:t.pageX,y:t.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var i=Math.abs(s-r.values(t));(n>i||n===i&&(t===r._lastChangedValue||r.values(t)===l.min))&&(n=i,a=e(this),o=t)}),!1!==this._start(t,o)&&(this._mouseSliding=!0,this._handleIndex=o,this._addClass(a,null,"ui-state-active"),a.trigger("focus"),h=a.offset(),u=!e(t.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=u?{left:0,top:0}:{left:t.pageX-h.left-a.width()/2,top:t.pageY-h.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,o,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(e){var t={x:e.pageX,y:e.pageY},i=this._normValueFromMouse(t);return this._slide(e,this._handleIndex,i),!1},_mouseStop:function(e){return this._removeClass(this.handles,null,"ui-state-active"),this._mouseSliding=!1,this._stop(e,this._handleIndex),this._change(e,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(e){var t,i,s,n,a;return"horizontal"===this.orientation?(t=this.elementSize.width,i=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(t=this.elementSize.height,i=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),(s=i/t)>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),a=this._valueMin()+s*n,this._trimAlignValue(a)},_uiHash:function(e,t,i){var s={handle:this.handles[e],handleIndex:e,value:void 0!==t?t:this.value()};return this._hasMultipleValues()&&(s.value=void 0!==t?t:this.values(e),s.values=i||this.values()),s},_hasMultipleValues:function(){return this.options.values&&this.options.values.length},_start:function(e,t){return this._trigger("start",e,this._uiHash(t))},_slide:function(e,t,i){var s,n=this.value(),a=this.values();this._hasMultipleValues()&&(s=this.values(t?0:1),n=this.values(t),2===this.options.values.length&&!0===this.options.range&&(i=0===t?Math.min(s,i):Math.max(s,i)),a[t]=i),i!==n&&(!1!==this._trigger("slide",e,this._uiHash(t,i,a))&&(this._hasMultipleValues()?this.values(t,i):this.value(i)))},_stop:function(e,t){this._trigger("stop",e,this._uiHash(t))},_change:function(e,t){this._keySliding||this._mouseSliding||(this._lastChangedValue=t,this._trigger("change",e,this._uiHash(t)))},value:function(e){return arguments.length?(this.options.value=this._trimAlignValue(e),this._refreshValue(),void this._change(null,0)):this._value()},values:function(t,i){var s,n,a;if(arguments.length>1)return this.options.values[t]=this._trimAlignValue(i),this._refreshValue(),void this._change(null,t);if(!arguments.length)return this._values();if(!e.isArray(arguments[0]))return this._hasMultipleValues()?this._values(t):this.value();for(s=this.options.values,n=arguments[0],a=0;s.length>a;a+=1)s[a]=this._trimAlignValue(n[a]),this._change(null,a);this._refreshValue()},_setOption:function(t,i){var s,n=0;switch("range"===t&&!0===this.options.range&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),e.isArray(this.options.values)&&(n=this.options.values.length),this._super(t,i),t){case"orientation":this._detectOrientation(),this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-"+this.orientation),this._refreshValue(),this.options.range&&this._refreshRange(i),this.handles.css("horizontal"===i?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=n-1;s>=0;s--)this._change(null,s);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_setOptionDisabled:function(e){this._super(e),this._toggleClass(null,"ui-state-disabled",!!e)},_value:function(){var e=this.options.value;return this._trimAlignValue(e)},_values:function(e){var t,i,s;if(arguments.length)return t=this.options.values[e],this._trimAlignValue(t);if(this._hasMultipleValues()){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(e){if(this._valueMin()>=e)return this._valueMin();if(e>=this._valueMax())return this._valueMax();var t=this.options.step>0?this.options.step:1,i=(e-this._valueMin())%t,s=e-i;return 2*Math.abs(i)>=t&&(s+=i>0?t:-t),parseFloat(s.toFixed(5))},_calculateNewMax:function(){var e=this.options.max,t=this._valueMin(),i=this.options.step;(e=Math.round((e-t)/i)*i+t)>this.options.max&&(e-=i),this.max=parseFloat(e.toFixed(this._precision()))},_precision:function(){var e=this._precisionOf(this.options.step);return null!==this.options.min&&(e=Math.max(e,this._precisionOf(this.options.min))),e},_precisionOf:function(e){var t=""+e,i=t.indexOf(".");return-1===i?0:t.length-i-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshRange:function(e){"vertical"===e&&this.range.css({width:"",left:""}),"horizontal"===e&&this.range.css({height:"",bottom:""})},_refreshValue:function(){var t,i,s,n,a,o=this.options.range,h=this.options,u=this,r=!this._animateOff&&h.animate,l={};this._hasMultipleValues()?this.handles.each(function(s){i=(u.values(s)-u._valueMin())/(u._valueMax()-u._valueMin())*100,l["horizontal"===u.orientation?"left":"bottom"]=i+"%",e(this).stop(1,1)[r?"animate":"css"](l,h.animate),!0===u.options.range&&("horizontal"===u.orientation?(0===s&&u.range.stop(1,1)[r?"animate":"css"]({left:i+"%"},h.animate),1===s&&u.range[r?"animate":"css"]({width:i-t+"%"},{queue:!1,duration:h.animate})):(0===s&&u.range.stop(1,1)[r?"animate":"css"]({bottom:i+"%"},h.animate),1===s&&u.range[r?"animate":"css"]({height:i-t+"%"},{queue:!1,duration:h.animate}))),t=i}):(s=this.value(),n=this._valueMin(),a=this._valueMax(),i=a!==n?(s-n)/(a-n)*100:0,l["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[r?"animate":"css"](l,h.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[r?"animate":"css"]({width:i+"%"},h.animate),"max"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[r?"animate":"css"]({width:100-i+"%"},h.animate),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[r?"animate":"css"]({height:i+"%"},h.animate),"max"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[r?"animate":"css"]({height:100-i+"%"},h.animate))},_handleEvents:{keydown:function(t){var i,s,n,a=e(t.target).data("ui-slider-handle-index");switch(t.keyCode){case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(t.preventDefault(),!this._keySliding&&(this._keySliding=!0,this._addClass(e(t.target),null,"ui-state-active"),!1===this._start(t,a)))return}switch(n=this.options.step,i=s=this._hasMultipleValues()?this.values(a):this.value(),t.keyCode){case e.ui.keyCode.HOME:s=this._valueMin();break;case e.ui.keyCode.END:s=this._valueMax();break;case e.ui.keyCode.PAGE_UP:s=this._trimAlignValue(i+(this._valueMax()-this._valueMin())/this.numPages);break;case e.ui.keyCode.PAGE_DOWN:s=this._trimAlignValue(i-(this._valueMax()-this._valueMin())/this.numPages);break;case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:if(i===this._valueMax())return;s=this._trimAlignValue(i+n);break;case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(i===this._valueMin())return;s=this._trimAlignValue(i-n)}this._slide(t,a,s)},keyup:function(t){var i=e(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,i),this._change(t,i),this._removeClass(e(t.target),null,"ui-state-active"))}}})});
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(b,c){return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.focussed=!1,e.interrupted=!1,e.hidden="hidden",e.paused=!0,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,d,f),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0)}var b=0;return c}(),b.prototype.activateADA=function(){var a=this;a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),e.options.vertical===!1?d[e.animType]="translate3d("+b+"px, 0px, 0px)":d[e.animType]="translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.getNavTarget=function(){var b=this,c=b.options.asNavFor;return c&&null!==c&&(c=a(c).not(b.$slider)),c},b.prototype.asNavFor=function(b){var c=this,d=c.getNavTarget();null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};b.options.fade===!1?c[b.transitionType]=b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:c[b.transitionType]="opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayClear(),a.slideCount>a.options.slidesToShow&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this,b=a.currentSlide+a.options.slidesToScroll;a.paused||a.interrupted||a.focussed||(a.options.infinite===!1&&(1===a.direction&&a.currentSlide+1===a.slideCount-1?a.direction=0:0===a.direction&&(b=a.currentSlide-a.options.slidesToScroll,a.currentSlide-1===0&&(a.direction=1))),a.slideHandler(b))},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(b.$slider.addClass("slick-dotted"),d=a("<ul />").addClass(b.options.dotsClass),c=0;c<=b.getDotCount();c+=1)d.append(a("<li />").append(b.options.customPaging.call(this,b,c)));b.$dots=d.appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.empty().append(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.currentTarget);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=d.slideCount%d.options.slidesToScroll!==0,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&a("li",b.$dots).off("click.slick",b.changeSlide).off("mouseenter.slick",a.proxy(b.interrupt,b,!0)).off("mouseleave.slick",a.proxy(b.interrupt,b,!1)),b.$slider.off("focus.slick blur.slick"),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.cleanUpSlideEvents(),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpSlideEvents=function(){var b=this;b.$list.off("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.empty().append(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.$slider.removeClass("slick-dotted"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.$slidesCache=b.$slides,b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.focusHandler=function(){var b=this;b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.options.pauseOnFocus&&(b.focussed=d.is(":focus"),b.autoPlay())},0)})},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else if(a.options.asNavFor)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else d=1+Math.ceil((a.slideCount-a.options.slidesToShow)/a.options.slidesToScroll);return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=b.slideWidth*b.options.slidesToShow*-1,e=d*b.options.slidesToShow*-1),b.slideCount%b.options.slidesToScroll!==0&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth*-1,e=(b.options.slidesToShow-(a-b.slideCount))*d*-1):(b.slideOffset=b.slideCount%b.options.slidesToScroll*b.slideWidth*-1,e=b.slideCount%b.options.slidesToScroll*d*-1))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?a*b.slideWidth*-1+b.slideOffset:a*d*-1+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots(),c.checkResponsive(!0),c.focusHandler()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA(),c.options.autoplay&&(c.paused=!1,c.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.off("click.slick").on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.interrupt,b,!0)).on("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.initSlideEvents=function(){var b=this;b.options.pauseOnHover&&(b.$list.on("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.interrupt,b,!1)))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.initSlideEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:b.options.rtl===!0?"next":"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:b.options.rtl===!0?"previous":"next"}}))},b.prototype.lazyLoad=function(){function g(c){a("img[data-lazy]",c).each(function(){var c=a(this),d=a(this).attr("data-lazy"),e=document.createElement("img");e.onload=function(){c.animate({opacity:0},100,function(){c.attr("src",d).animate({opacity:1},200,function(){c.removeAttr("data-lazy").removeClass("slick-loading")}),b.$slider.trigger("lazyLoaded",[b,c,d])})},e.onerror=function(){c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),b.$slider.trigger("lazyLoadError",[b,c,d])},e.src=d})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=Math.ceil(e+b.options.slidesToShow),b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.autoPlay(),a.options.autoplay=!0,a.paused=!1,a.focussed=!1,a.interrupted=!1},b.prototype.postSlide=function(a){var b=this;b.unslicked||(b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay&&b.autoPlay(),b.options.accessibility===!0&&b.initADA())},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(b){b=b||1;var e,f,g,c=this,d=a("img[data-lazy]",c.$slider);d.length?(e=d.first(),f=e.attr("data-lazy"),g=document.createElement("img"),g.onload=function(){e.attr("src",f).removeAttr("data-lazy").removeClass("slick-loading"),c.options.adaptiveHeight===!0&&c.setPosition(),c.$slider.trigger("lazyLoaded",[c,e,f]),c.progressiveLazyLoad()},g.onerror=function(){3>b?setTimeout(function(){c.progressiveLazyLoad(b+1)},500):(e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),c.$slider.trigger("lazyLoadError",[c,e,f]),c.progressiveLazyLoad())},g.src=f):c.$slider.trigger("allImagesLoaded",[c])},b.prototype.refresh=function(b){var d,e,c=this;e=c.slideCount-c.options.slidesToShow,!c.options.infinite&&c.currentSlide>e&&(c.currentSlide=e),c.slideCount<=c.options.slidesToShow&&(c.currentSlide=0),d=c.currentSlide,c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.cleanUpSlideEvents(),b.initSlideEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.setPosition(),b.focusHandler(),b.paused=!b.options.autoplay,b.autoPlay(),b.$slider.trigger("reInit",[b])},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,void d.reinit())},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=b.slideWidth*d*-1,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(){var c,d,e,f,h,b=this,g=!1;if("object"===a.type(arguments[0])?(e=arguments[0],g=arguments[1],h="multiple"):"string"===a.type(arguments[0])&&(e=arguments[0],f=arguments[1],g=arguments[2],"responsive"===arguments[0]&&"array"===a.type(arguments[1])?h="responsive":"undefined"!=typeof arguments[1]&&(h="single")),"single"===h)b.options[e]=f;else if("multiple"===h)a.each(e,function(a,c){b.options[a]=c});else if("responsive"===h)for(d in f)if("array"!==a.type(b.options.responsive))b.options.responsive=[f[d]];else{for(c=b.options.responsive.length-1;c>=0;)b.options.responsive[c].breakpoint===f[d].breakpoint&&b.options.responsive.splice(c,1),c--;b.options.responsive.push(f[d])}g&&(b.unload(),b.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=a.options.useTransform&&null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,
d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.interrupt=function(a){var b=this;a||b.autoPlay(),b.interrupted=a},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),void c.asNavFor(e)):void c.slideHandler(e)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,j,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):(i.options.autoplay&&clearInterval(i.autoPlayTimer),e=0>d?i.slideCount%i.options.slidesToScroll!==0?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?i.slideCount%i.options.slidesToScroll!==0?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.options.asNavFor&&(j=i.getNavTarget(),j=j.slick("getSlick"),j.slideCount<=j.options.slidesToShow&&j.setSlideClasses(i.currentSlide)),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)})):i.postSlide(e),void i.animateHeight()):void(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e))))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"down":"up":"vertical"},b.prototype.swipeEnd=function(a){var c,d,b=this;if(b.dragging=!1,b.interrupted=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe){switch(d=b.swipeDirection()){case"left":case"down":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.currentDirection=0;break;case"right":case"up":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.currentDirection=1}"vertical"!=d&&(b.slideHandler(c),b.touchObject={},b.$slider.trigger("swipe",[b,d]))}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.options.vertical===!1?b.swipeLeft=d+f*g:b.swipeLeft=d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):void b.setCSS(b.swipeLeft)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return b.interrupted=!0,1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,void(b.dragging=!0))},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;a.options.autoplay&&(document[a.hidden]?a.interrupted=!0:a.interrupted=!1)},a.fn.slick=function(){var f,g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length;for(f=0;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});
!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,r,a){(a=a||e||t.jQuery)&&(r.prototype.option||(r.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){return"string"==typeof t?function(t,e,n){var o,r="$()."+i+'("'+e+'")';return t.each(function(t,h){var u=a.data(h,i);if(u){var d=u[e];if(d&&"_"!=e.charAt(0)){var l=d.apply(u,n);o=void 0===o?l:o}else s(r+" is not a valid method")}else s(i+" not initialized. Cannot call methods, i.e. "+r)}),void 0!==o?o:t}(this,t,o.call(arguments,1)):(function(t,e){t.each(function(t,n){var o=a.data(n,i);o?(o.option(e),o._init()):(o=new r(n,e),a.data(n,i,o))})}(this,t),this)},n(a))}function n(t){!t||t&&t.bridget||(t.bridget=i)}var o=Array.prototype.slice,r=t.console,s=void 0===r?function(){}:function(t){r.error(t)};return n(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{};return(i[t]=i[t]||{})[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var n=this._onceEvents&&this._onceEvents[t],o=0;o<i.length;o++){var r=i[o];n&&n[r]&&(this.off(t,r),delete n[r]),r.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t);return-1==t.indexOf("%")&&!isNaN(e)&&e}function e(t){var e=getComputedStyle(t);return e||r("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e}function i(){if(!h){h=!0;var i=document.createElement("div");i.style.width="200px",i.style.padding="1px 2px 3px 4px",i.style.borderStyle="solid",i.style.borderWidth="1px 2px 3px 4px",i.style.boxSizing="border-box";var r=document.body||document.documentElement;r.appendChild(i);var s=e(i);o=200==Math.round(t(s.width)),n.isBoxSizeOuter=o,r.removeChild(i)}}function n(n){if(i(),"string"==typeof n&&(n=document.querySelector(n)),n&&"object"==typeof n&&n.nodeType){var r=e(n);if("none"==r.display)return function(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;a>e;e++)t[s[e]]=0;return t}();var h={};h.width=n.offsetWidth,h.height=n.offsetHeight;for(var u=h.isBorderBox="border-box"==r.boxSizing,d=0;a>d;d++){var l=s[d],c=r[l],f=parseFloat(c);h[l]=isNaN(f)?0:f}var m=h.paddingLeft+h.paddingRight,p=h.paddingTop+h.paddingBottom,g=h.marginLeft+h.marginRight,y=h.marginTop+h.marginBottom,v=h.borderLeftWidth+h.borderRightWidth,_=h.borderTopWidth+h.borderBottomWidth,z=u&&o,E=t(r.width);!1!==E&&(h.width=E+(z?0:m+v));var b=t(r.height);return!1!==b&&(h.height=b+(z?0:p+_)),h.innerWidth=h.width-(m+v),h.innerHeight=h.height-(p+_),h.outerWidth=h.width+g,h.outerHeight=h.height+y,h}}var o,r="undefined"==typeof console?function(){}:function(t){console.error(t)},s=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],a=s.length,h=!1;return n}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i]+"MatchesSelector";if(t[n])return n}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={extend:function(t,e){for(var i in e)t[i]=e[i];return t},modulo:function(t,e){return(t%e+e)%e}},n=Array.prototype.slice;i.makeArray=function(t){return Array.isArray(t)?t:null==t?[]:"object"==typeof t&&"number"==typeof t.length?n.call(t):[t]},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var o=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!n)return void o.push(t);e(t,n)&&o.push(t);for(var i=t.querySelectorAll(n),r=0;r<i.length;r++)o.push(i[r])}}),o},i.debounceMethod=function(t,e,i){i=i||100;var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];clearTimeout(t);var e=arguments,r=this;this[o]=setTimeout(function(){n.apply(r,e),delete r[o]},i)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var o=t.console;return i.htmlInit=function(e,n){i.docReady(function(){var r=i.toDashed(n),s="data-"+r,a=document.querySelectorAll("["+s+"]"),h=document.querySelectorAll(".js-"+r),u=i.makeArray(a).concat(i.makeArray(h)),d=s+"-options",l=t.jQuery;u.forEach(function(t){var i,r=t.getAttribute(s)||t.getAttribute(d);try{i=r&&JSON.parse(r)}catch(e){return void(o&&o.error("Error parsing "+s+" on "+t.className+": "+e))}var a=new e(t,i);l&&l.data(t,n,a)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var n=document.documentElement.style,o="string"==typeof n.transition?"transition":"WebkitTransition",r="string"==typeof n.transform?"transform":"WebkitTransform",s={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[o],a={transform:r,transition:o,transitionDuration:o+"Duration",transitionProperty:o+"Property",transitionDelay:o+"Delay"},h=i.prototype=Object.create(t.prototype);h.constructor=i,h._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},h.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},h.getSize=function(){this.size=e(this.element)},h.css=function(t){var e=this.element.style;for(var i in t){e[a[i]||i]=t[i]}},h.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),n=t[e?"left":"right"],o=t[i?"top":"bottom"],r=parseFloat(n),s=parseFloat(o),a=this.layout.size;-1!=n.indexOf("%")&&(r=r/100*a.width),-1!=o.indexOf("%")&&(s=s/100*a.height),r=isNaN(r)?0:r,s=isNaN(s)?0:s,r-=e?a.paddingLeft:a.paddingRight,s-=i?a.paddingTop:a.paddingBottom,this.position.x=r,this.position.y=s},h.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=i?"paddingLeft":"paddingRight",r=i?"left":"right",s=i?"right":"left",a=this.position.x+t[o];e[r]=this.getXValue(a),e[s]="";var h=n?"paddingTop":"paddingBottom",u=n?"top":"bottom",d=n?"bottom":"top",l=this.position.y+t[h];e[u]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},h.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},h.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},h._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=t==this.position.x&&e==this.position.y;if(this.setPosition(t,e),!o||this.isTransitioning){var r=t-i,s=e-n,a={};a.transform=this.getTranslate(r,s),this.transition({to:a,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})}else this.layoutPosition()},h.getTranslate=function(t,e){return"translate3d("+(t=this.layout._getOption("originLeft")?t:-t)+"px, "+(e=this.layout._getOption("originTop")?e:-e)+"px, 0)"},h.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},h.moveTo=h._transitionTo,h.setPosition=function(t,e){this.position.x=parseFloat(t),this.position.y=parseFloat(e)},h._nonTransition=function(t){for(var e in this.css(t.to),t.isCleaning&&this._removeStyles(t.to),t.onTransitionEnd)t.onTransitionEnd[e].call(this)},h.transition=function(t){if(parseFloat(this.layout.options.transitionDuration)){var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);this.element.offsetHeight;null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0}else this._nonTransition(t)};var u="opacity,"+function(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}(r);h.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:u,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(s,this,!1)}},h.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},h.onotransitionend=function(t){this.ontransitionend(t)};var d={"-webkit-transform":"transform"};h.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,i=d[t.propertyName]||t.propertyName;if(delete e.ingProperties[i],function(t){for(var e in t)return!1;return!0}(e.ingProperties)&&this.disableTransition(),i in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[i]),i in e.onEnd)e.onEnd[i].call(this),delete e.onEnd[i];this.emitEvent("transitionEnd",[this])}},h.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(s,this,!1),this.isTransitioning=!1},h._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var l={transitionProperty:"",transitionDuration:"",transitionDelay:""};return h.removeTransitionStyles=function(){this.css(l)},h.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},h.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},h.remove=function(){return o&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},h.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={};e[this.getHideRevealTransitionEndProperty("visibleStyle")]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},h.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},h.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},h.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={};e[this.getHideRevealTransitionEndProperty("hiddenStyle")]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},h.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},h.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},i}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,n,o,r){return e(t,i,n,o,r)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,n,o){"use strict";function r(t,e){var i=n.getQueryElement(t);if(i){this.element=i,h&&(this.$element=h(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var o=++d;this.element.outlayerGUID=o,l[o]=this,this._create(),this._getOption("initLayout")&&this.layout()}else a&&a.error("Bad element for "+this.constructor.namespace+": "+(i||t))}function s(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}var a=t.console,h=t.jQuery,u=function(){},d=0,l={};r.namespace="outlayer",r.Item=o,r.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var c=r.prototype;n.extend(c,e.prototype),c.option=function(t){n.extend(this.options,t)},c._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},r.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},c._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle),this._getOption("resize")&&this.bindResize()},c.reloadItems=function(){this.items=this._itemize(this.element.children)},c._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0;o<e.length;o++){var r=new i(e[o],this);n.push(r)}return n},c._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},c.getItemElements=function(){return this.items.map(function(t){return t.element})},c.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},c._init=c.layout,c._resetLayout=function(){this.getSize()},c.getSize=function(){this.size=i(this.element)},c._getMeasurement=function(t,e){var n,o=this.options[t];o?("string"==typeof o?n=this.element.querySelector(o):o instanceof HTMLElement&&(n=o),this[t]=n?i(n)[e]:o):this[t]=0},c.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},c._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},c._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=e||t.isLayoutInstant,i.push(n)},this),this._processLayoutQueue(i)}},c._getItemLayoutPosition=function(){return{x:0,y:0}},c._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},c.updateStagger=function(){var t=this.options.stagger;return null==t?void(this.stagger=0):(this.stagger=function(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],n=e&&e[2];return i.length?(i=parseFloat(i))*(f[n]||1):0}(t),this.stagger)},c._positionItem=function(t,e,i,n,o){n?t.goTo(e,i):(t.stagger(o*this.stagger),t.moveTo(e,i))},c._postLayout=function(){this.resizeContainer()},c.resizeContainer=function(){if(this._getOption("resizeContainer")){var t=this._getContainerSize();t&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))}},c._getContainerSize=u,c._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},c._emitCompleteOnItems=function(t,e){function i(){o.dispatchEvent(t+"Complete",null,[e])}function n(){++s==r&&i()}var o=this,r=e.length;if(e&&r){var s=0;e.forEach(function(e){e.once(t,n)})}else i()},c.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),h)if(this.$element=this.$element||h(this.element),e){var o=h.Event(e);o.type=t,this.$element.trigger(o,i)}else this.$element.trigger(t,i)},c.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},c.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},c.stamp=function(t){(t=this._find(t))&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},c.unstamp=function(t){(t=this._find(t))&&t.forEach(function(t){n.removeFrom(this.stamps,t),this.unignore(t)},this)},c._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n.makeArray(t)):void 0},c._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},c._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},c._manageStamp=u,c._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,o=i(t);return{left:e.left-n.left-o.marginLeft,top:e.top-n.top-o.marginTop,right:n.right-e.right-o.marginRight,bottom:n.bottom-e.bottom-o.marginBottom}},c.handleEvent=n.handleEvent,c.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},c.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},c.onresize=function(){this.resize()},n.debounceMethod(r,"onresize",100),c.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},c.needsResizeLayout=function(){var t=i(this.element);return this.size&&t&&t.innerWidth!==this.size.innerWidth},c.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},c.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},c.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},c.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},c.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},c.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},c.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},c.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},c.getItems=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},c.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),n.removeFrom(this.items,t)},this)},c.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete l[e],delete this.element.outlayerGUID,h&&h.removeData(this.element,this.constructor.namespace)},r.data=function(t){var e=(t=n.getQueryElement(t))&&t.outlayerGUID;return e&&l[e]},r.create=function(t,e){var i=s(r);return i.defaults=n.extend({},r.defaults),n.extend(i.defaults,e),i.compatOptions=n.extend({},r.compatOptions),i.namespace=t,i.data=r.data,i.Item=s(o),n.htmlInit(i,t),h&&h.bridget&&h.bridget(t,i),i};var f={ms:1,s:1e3};return r.Item=o,r}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");i.compatOptions.fitWidth="isFitWidth";var n=i.prototype;return n._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},n.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var n=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,r=o/n,s=n-o%n;r=Math[s&&1>s?"round":"floor"](r),this.cols=Math.max(r,1)},n.getContainerWidth=function(){var t=this._getOption("fitWidth")?this.element.parentNode:this.element,i=e(t);this.containerWidth=i&&i.innerWidth},n._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=Math[e&&1>e?"round":"ceil"](t.size.outerWidth/this.columnWidth);i=Math.min(i,this.cols);for(var n=this[this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition"](i,t),o={x:this.columnWidth*n.col,y:n.y},r=n.y+t.size.outerHeight,s=i+n.col,a=n.col;s>a;a++)this.colYs[a]=r;return o},n._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},n._getTopColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;i>n;n++)e[n]=this._getColGroupY(n,t);return e},n._getColGroupY=function(t,e){if(2>e)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},n._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols;i=t>1&&i+t>this.cols?0:i;var n=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=n?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},n._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this._getOption("originLeft")?n.left:n.right,r=o+i.outerWidth,s=Math.floor(o/this.columnWidth);s=Math.max(0,s);var a=Math.floor(r/this.columnWidth);a-=r%this.columnWidth?0:1,a=Math.min(this.cols-1,a);for(var h=(this._getOption("originTop")?n.top:n.bottom)+i.outerHeight,u=s;a>=u;u++)this.colYs[u]=Math.max(h,this.colYs[u])},n._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},n._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},n.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i});
        !function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});
          (function(a,b,c){"use strict";var d=a.document,e=a.Modernizr,f=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},g="Moz Webkit O Ms".split(" "),h=function(a){var b=d.documentElement.style,c;if(typeof b[a]=="string")return a;a=f(a);for(var e=0,h=g.length;e<h;e++){c=g[e]+a;if(typeof b[c]=="string")return c}},i=h("transform"),j=h("transitionProperty"),k={csstransforms:function(){return!!i},csstransforms3d:function(){var a=!!h("perspective");if(a){var c=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),d="@media ("+c.join("transform-3d),(")+"modernizr)",e=b("<style>"+d+"{#modernizr{height:3px}}"+"</style>").appendTo("head"),f=b('<div id="modernizr" />').appendTo("html");a=f.height()===3,f.remove(),e.remove()}return a},csstransitions:function(){return!!j}},l;if(e)for(l in k)e.hasOwnProperty(l)||e.addTest(l,k[l]);else{e=a.Modernizr={_version:"1.6ish: miniModernizr for Isotope"};var m=" ",n;for(l in k)n=k[l](),e[l]=n,m+=" "+(n?"":"no-")+l;b("html").addClass(m)}if(e.csstransforms){var o=e.csstransforms3d?{translate:function(a){return"translate3d("+a[0]+"px, "+a[1]+"px, 0) "},scale:function(a){return"scale3d("+a+", "+a+", 1) "}}:{translate:function(a){return"translate("+a[0]+"px, "+a[1]+"px) "},scale:function(a){return"scale("+a+") "}},p=function(a,c,d){var e=b.data(a,"isoTransform")||{},f={},g,h={},j;f[c]=d,b.extend(e,f);for(g in e)j=e[g],h[g]=o[g](j);var k=h.translate||"",l=h.scale||"",m=k+l;b.data(a,"isoTransform",e),a.style[i]=m};b.cssNumber.scale=!0,b.cssHooks.scale={set:function(a,b){p(a,"scale",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.scale?d.scale:1}},b.fx.step.scale=function(a){b.cssHooks.scale.set(a.elem,a.now+a.unit)},b.cssNumber.translate=!0,b.cssHooks.translate={set:function(a,b){p(a,"translate",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.translate?d.translate:[0,0]}}}var q,r;e.csstransitions&&(q={WebkitTransitionProperty:"webkitTransitionEnd",MozTransitionProperty:"transitionend",OTransitionProperty:"oTransitionEnd otransitionend",transitionProperty:"transitionend"}[j],r=h("transitionDuration"));var s=b.event,t=b.event.handle?"handle":"dispatch",u;s.special.smartresize={setup:function(){b(this).bind("resize",s.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",s.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",u&&clearTimeout(u),u=setTimeout(function(){s[t].apply(c,d)},b==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Isotope=function(a,c,d){this.element=b(c),this._create(a),this._init(d)};var v=["width","height"],w=b(a);b.Isotope.settings={resizable:!0,layoutMode:"masonry",containerClass:"isotope",itemClass:"isotope-item",hiddenClass:"isotope-hidden",hiddenStyle:{opacity:0,scale:.001},visibleStyle:{opacity:1,scale:1},containerStyle:{position:"relative",overflow:"hidden"},animationEngine:"best-available",animationOptions:{queue:!1,duration:800},sortBy:"original-order",sortAscending:!0,resizesContainer:!0,transformsEnabled:!0,itemPositionDataEnabled:!1},b.Isotope.prototype={_create:function(a){this.options=b.extend({},b.Isotope.settings,a),this.styleQueue=[],this.elemCount=0;var c=this.element[0].style;this.originalStyle={};var d=v.slice(0);for(var e in this.options.containerStyle)d.push(e);for(var f=0,g=d.length;f<g;f++)e=d[f],this.originalStyle[e]=c[e]||"";this.element.css(this.options.containerStyle),this._updateAnimationEngine(),this._updateUsingTransforms();var h={"original-order":function(a,b){return b.elemCount++,b.elemCount},random:function(){return Math.random()}};this.options.getSortData=b.extend(this.options.getSortData,h),this.reloadItems(),this.offset={left:parseInt(this.element.css("padding-left")||0,10),top:parseInt(this.element.css("padding-top")||0,10)};var i=this;setTimeout(function(){i.element.addClass(i.options.containerClass)},0),this.options.resizable&&w.bind("smartresize.isotope",function(){i.resize()}),this.element.delegate("."+this.options.hiddenClass,"click",function(){return!1})},_getAtoms:function(a){var b=this.options.itemSelector,c=b?a.filter(b).add(a.find(b)):a,d={position:"absolute"};return c=c.filter(function(a,b){return b.nodeType===1}),this.usingTransforms&&(d.left=0,d.top=0),c.css(d).addClass(this.options.itemClass),this.updateSortData(c,!0),c},_init:function(a){this.$filteredAtoms=this._filter(this.$allAtoms),this._sort(),this.reLayout(a)},option:function(a){if(b.isPlainObject(a)){this.options=b.extend(!0,this.options,a);var c;for(var d in a)c="_update"+f(d),this[c]&&this[c]()}},_updateAnimationEngine:function(){var a=this.options.animationEngine.toLowerCase().replace(/[ _\-]/g,""),b;switch(a){case"css":case"none":b=!1;break;case"jquery":b=!0;break;default:b=!e.csstransitions}this.isUsingJQueryAnimation=b,this._updateUsingTransforms()},_updateTransformsEnabled:function(){this._updateUsingTransforms()},_updateUsingTransforms:function(){var a=this.usingTransforms=this.options.transformsEnabled&&e.csstransforms&&e.csstransitions&&!this.isUsingJQueryAnimation;a||(delete this.options.hiddenStyle.scale,delete this.options.visibleStyle.scale),this.getPositionStyles=a?this._translate:this._positionAbs},_filter:function(a){var b=this.options.filter===""?"*":this.options.filter;if(!b)return a;var c=this.options.hiddenClass,d="."+c,e=a.filter(d),f=e;if(b!=="*"){f=e.filter(b);var g=a.not(d).not(b).addClass(c);this.styleQueue.push({$el:g,style:this.options.hiddenStyle})}return this.styleQueue.push({$el:f,style:this.options.visibleStyle}),f.removeClass(c),a.filter(b)},updateSortData:function(a,c){var d=this,e=this.options.getSortData,f,g;a.each(function(){f=b(this),g={};for(var a in e)!c&&a==="original-order"?g[a]=b.data(this,"isotope-sort-data")[a]:g[a]=e[a](f,d);b.data(this,"isotope-sort-data",g)})},_sort:function(){var a=this.options.sortBy,b=this._getSorter,c=this.options.sortAscending?1:-1,d=function(d,e){var f=b(d,a),g=b(e,a);return f===g&&a!=="original-order"&&(f=b(d,"original-order"),g=b(e,"original-order")),(f>g?1:f<g?-1:0)*c};this.$filteredAtoms.sort(d)},_getSorter:function(a,c){return b.data(a,"isotope-sort-data")[c]},_translate:function(a,b){return{translate:[a,b]}},_positionAbs:function(a,b){return{left:a,top:b}},_pushPosition:function(a,b,c){b=Math.round(b+this.offset.left),c=Math.round(c+this.offset.top);var d=this.getPositionStyles(b,c);this.styleQueue.push({$el:a,style:d}),this.options.itemPositionDataEnabled&&a.data("isotope-item-position",{x:b,y:c})},layout:function(a,b){var c=this.options.layoutMode;this["_"+c+"Layout"](a);if(this.options.resizesContainer){var d=this["_"+c+"GetContainerSize"]();this.styleQueue.push({$el:this.element,style:d})}this._processStyleQueue(a,b),this.isLaidOut=!0},_processStyleQueue:function(a,c){var d=this.isLaidOut?this.isUsingJQueryAnimation?"animate":"css":"css",f=this.options.animationOptions,g=this.options.onLayout,h,i,j,k;i=function(a,b){b.$el[d](b.style,f)};if(this._isInserting&&this.isUsingJQueryAnimation)i=function(a,b){h=b.$el.hasClass("no-transition")?"css":d,b.$el[h](b.style,f)};else if(c||g||f.complete){var l=!1,m=[c,g,f.complete],n=this;j=!0,k=function(){if(l)return;var b;for(var c=0,d=m.length;c<d;c++)b=m[c],typeof b=="function"&&b.call(n.element,a,n);l=!0};if(this.isUsingJQueryAnimation&&d==="animate")f.complete=k,j=!1;else if(e.csstransitions){var o=0,p=this.styleQueue[0],s=p&&p.$el,t;while(!s||!s.length){t=this.styleQueue[o++];if(!t)return;s=t.$el}var u=parseFloat(getComputedStyle(s[0])[r]);u>0&&(i=function(a,b){b.$el[d](b.style,f).one(q,k)},j=!1)}}b.each(this.styleQueue,i),j&&k(),this.styleQueue=[]},resize:function(){this["_"+this.options.layoutMode+"ResizeChanged"]()&&this.reLayout()},reLayout:function(a){this["_"+this.options.layoutMode+"Reset"](),this.layout(this.$filteredAtoms,a)},addItems:function(a,b){var c=this._getAtoms(a);this.$allAtoms=this.$allAtoms.add(c),b&&b(c)},insert:function(a,b){this.element.append(a);var c=this;this.addItems(a,function(a){var d=c._filter(a);c._addHideAppended(d),c._sort(),c.reLayout(),c._revealAppended(d,b)})},appended:function(a,b){var c=this;this.addItems(a,function(a){c._addHideAppended(a),c.layout(a),c._revealAppended(a,b)})},_addHideAppended:function(a){this.$filteredAtoms=this.$filteredAtoms.add(a),a.addClass("no-transition"),this._isInserting=!0,this.styleQueue.push({$el:a,style:this.options.hiddenStyle})},_revealAppended:function(a,b){var c=this;setTimeout(function(){a.removeClass("no-transition"),c.styleQueue.push({$el:a,style:c.options.visibleStyle}),c._isInserting=!1,c._processStyleQueue(a,b)},10)},reloadItems:function(){this.$allAtoms=this._getAtoms(this.element.children())},remove:function(a,b){this.$allAtoms=this.$allAtoms.not(a),this.$filteredAtoms=this.$filteredAtoms.not(a);var c=this,d=function(){a.remove(),b&&b.call(c.element)};a.filter(":not(."+this.options.hiddenClass+")").length?(this.styleQueue.push({$el:a,style:this.options.hiddenStyle}),this._sort(),this.reLayout(d)):d()},shuffle:function(a){this.updateSortData(this.$allAtoms),this.options.sortBy="random",this._sort(),this.reLayout(a)},destroy:function(){var a=this.usingTransforms,b=this.options;this.$allAtoms.removeClass(b.hiddenClass+" "+b.itemClass).each(function(){var b=this.style;b.position="",b.top="",b.left="",b.opacity="",a&&(b[i]="")});var c=this.element[0].style;for(var d in this.originalStyle)c[d]=this.originalStyle[d];this.element.unbind(".isotope").undelegate("."+b.hiddenClass,"click").removeClass(b.containerClass).removeData("isotope"),w.unbind(".isotope")},_getSegments:function(a){var b=this.options.layoutMode,c=a?"rowHeight":"columnWidth",d=a?"height":"width",e=a?"rows":"cols",g=this.element[d](),h,i=this.options[b]&&this.options[b][c]||this.$filteredAtoms["outer"+f(d)](!0)||g;h=Math.floor(g/i),h=Math.max(h,1),this[b][e]=h,this[b][c]=i},_checkIfSegmentsChanged:function(a){var b=this.options.layoutMode,c=a?"rows":"cols",d=this[b][c];return this._getSegments(a),this[b][c]!==d},_masonryReset:function(){this.masonry={},this._getSegments();var a=this.masonry.cols;this.masonry.colYs=[];while(a--)this.masonry.colYs.push(0)},_masonryLayout:function(a){var c=this,d=c.masonry;a.each(function(){var a=b(this),e=Math.ceil(a.outerWidth(!0)/d.columnWidth);e=Math.min(e,d.cols);if(e===1)c._masonryPlaceBrick(a,d.colYs);else{var f=d.cols+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.colYs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryPlaceBrick(a,g)}})},_masonryPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=this.masonry.columnWidth*d,h=c;this._pushPosition(a,g,h);var i=c+a.outerHeight(!0),j=this.masonry.cols+1-f;for(e=0;e<j;e++)this.masonry.colYs[d+e]=i},_masonryGetContainerSize:function(){var a=Math.max.apply(Math,this.masonry.colYs);return{height:a}},_masonryResizeChanged:function(){return this._checkIfSegmentsChanged()},_fitRowsReset:function(){this.fitRows={x:0,y:0,height:0}},_fitRowsLayout:function(a){var c=this,d=this.element.width(),e=this.fitRows;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.x!==0&&f+e.x>d&&(e.x=0,e.y=e.height),c._pushPosition(a,e.x,e.y),e.height=Math.max(e.y+g,e.height),e.x+=f})},_fitRowsGetContainerSize:function(){return{height:this.fitRows.height}},_fitRowsResizeChanged:function(){return!0},_cellsByRowReset:function(){this.cellsByRow={index:0},this._getSegments(),this._getSegments(!0)},_cellsByRowLayout:function(a){var c=this,d=this.cellsByRow;a.each(function(){var a=b(this),e=d.index%d.cols,f=Math.floor(d.index/d.cols),g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByRowGetContainerSize:function(){return{height:Math.ceil(this.$filteredAtoms.length/this.cellsByRow.cols)*this.cellsByRow.rowHeight+this.offset.top}},_cellsByRowResizeChanged:function(){return this._checkIfSegmentsChanged()},_straightDownReset:function(){this.straightDown={y:0}},_straightDownLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,0,c.straightDown.y),c.straightDown.y+=d.outerHeight(!0)})},_straightDownGetContainerSize:function(){return{height:this.straightDown.y}},_straightDownResizeChanged:function(){return!0},_masonryHorizontalReset:function(){this.masonryHorizontal={},this._getSegments(!0);var a=this.masonryHorizontal.rows;this.masonryHorizontal.rowXs=[];while(a--)this.masonryHorizontal.rowXs.push(0)},_masonryHorizontalLayout:function(a){var c=this,d=c.masonryHorizontal;a.each(function(){var a=b(this),e=Math.ceil(a.outerHeight(!0)/d.rowHeight);e=Math.min(e,d.rows);if(e===1)c._masonryHorizontalPlaceBrick(a,d.rowXs);else{var f=d.rows+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.rowXs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryHorizontalPlaceBrick(a,g)}})},_masonryHorizontalPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=c,h=this.masonryHorizontal.rowHeight*d;this._pushPosition(a,g,h);var i=c+a.outerWidth(!0),j=this.masonryHorizontal.rows+1-f;for(e=0;e<j;e++)this.masonryHorizontal.rowXs[d+e]=i},_masonryHorizontalGetContainerSize:function(){var a=Math.max.apply(Math,this.masonryHorizontal.rowXs);return{width:a}},_masonryHorizontalResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_fitColumnsReset:function(){this.fitColumns={x:0,y:0,width:0}},_fitColumnsLayout:function(a){var c=this,d=this.element.height(),e=this.fitColumns;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.y!==0&&g+e.y>d&&(e.x=e.width,e.y=0),c._pushPosition(a,e.x,e.y),e.width=Math.max(e.x+f,e.width),e.y+=g})},_fitColumnsGetContainerSize:function(){return{width:this.fitColumns.width}},_fitColumnsResizeChanged:function(){return!0},_cellsByColumnReset:function(){this.cellsByColumn={index:0},this._getSegments(),this._getSegments(!0)},_cellsByColumnLayout:function(a){var c=this,d=this.cellsByColumn;a.each(function(){var a=b(this),e=Math.floor(d.index/d.rows),f=d.index%d.rows,g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByColumnGetContainerSize:function(){return{width:Math.ceil(this.$filteredAtoms.length/this.cellsByColumn.rows)*this.cellsByColumn.columnWidth}},_cellsByColumnResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_straightAcrossReset:function(){this.straightAcross={x:0}},_straightAcrossLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,c.straightAcross.x,0),c.straightAcross.x+=d.outerWidth(!0)})},_straightAcrossGetContainerSize:function(){return{width:this.straightAcross.x}},_straightAcrossResizeChanged:function(){return!0}},b.fn.imagesLoaded=function(a){function h(){a.call(c,d)}function i(a){var c=a.target;c.src!==f&&b.inArray(c,g)===-1&&(g.push(c),--e<=0&&(setTimeout(h),d.unbind(".imagesLoaded",i)))}var c=this,d=c.find("img").add(c.filter("img")),e=d.length,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",g=[];return e||h(),d.bind("load.imagesLoaded error.imagesLoaded",i).each(function(){var a=this.src;this.src=f,this.src=a}),c};var x=function(b){a.console&&a.console.error(b)};b.fn.isotope=function(a,c){if(typeof a=="string"){var d=Array.prototype.slice.call(arguments,1);this.each(function(){var c=b.data(this,"isotope");if(!c){x("cannot call methods on isotope prior to initialization; attempted to call method '"+a+"'");return}if(!b.isFunction(c[a])||a.charAt(0)==="_"){x("no such method '"+a+"' for isotope instance");return}c[a].apply(c,d)})}else this.each(function(){var d=b.data(this,"isotope");d?(d.option(a),d._init(c)):b.data(this,"isotope",new b.Isotope(a,this,c))});return this}})(window,jQuery);
    var css_library = `
.slick-slider{box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent}.slick-list,.slick-slider{position:relative;display:block}.slick-list{overflow:hidden;margin:0;padding:0}.slick-list:focus{outline:0}.slick-list.dragging{cursor:pointer;cursor:hand}.slick-slider .slick-list,.slick-slider .slick-track{transform:translateZ(0)}.slick-track{position:relative;top:0;left:0;display:block;margin-left:auto;margin-right:auto}.slick-track:after,.slick-track:before{display:table;content:""}.slick-track:after{clear:both}.slick-loading .slick-track{visibility:hidden}.slick-slide{display:none;float:left;height:100%;min-height:1px}[dir=rtl] .slick-slide{float:right}.slick-slide img{display:block}.slick-slide.slick-loading img{display:none}.slick-slide.dragging img{pointer-events:none}.slick-initialized .slick-slide{display:block}.slick-loading .slick-slide{visibility:hidden}.slick-vertical .slick-slide{display:block;height:auto;border:1px solid transparent}.slick-arrow.slick-hidden{display:none}
.mfp-bg{top:0;left:0;width:100%;height:100%;z-index:1042;overflow:hidden;position:fixed;background:#0b0b0b;opacity:.8}.mfp-wrap{top:0;left:0;width:100%;height:100%;z-index:1043;position:fixed;outline:0!important;-webkit-backface-visibility:hidden}.mfp-container{text-align:center;position:absolute;width:100%;height:100%;left:0;top:0;padding:0 8px;box-sizing:border-box}.mfp-container:before{content:'';display:inline-block;height:100%;vertical-align:middle}.mfp-align-top .mfp-container:before{display:none}.mfp-content{position:relative;display:inline-block;vertical-align:middle;margin:0 auto;text-align:left;z-index:1045}.mfp-ajax-holder .mfp-content,.mfp-inline-holder .mfp-content{width:100%;cursor:auto}.mfp-ajax-cur{cursor:progress}.mfp-zoom-out-cur,.mfp-zoom-out-cur .mfp-image-holder .mfp-close{cursor:-moz-zoom-out;cursor:-webkit-zoom-out;cursor:zoom-out}.mfp-zoom{cursor:pointer;cursor:-webkit-zoom-in;cursor:-moz-zoom-in;cursor:zoom-in}.mfp-auto-cursor .mfp-content{cursor:auto}.mfp-arrow,.mfp-close,.mfp-counter,.mfp-preloader{-webkit-user-select:none;-moz-user-select:none;user-select:none}.mfp-loading.mfp-figure{display:none}.mfp-hide{display:none!important}.mfp-preloader{color:#ccc;position:absolute;top:50%;width:auto;text-align:center;margin-top:-.8em;left:8px;right:8px;z-index:1044}.mfp-preloader a{color:#ccc}.mfp-preloader a:hover{color:#fff}.mfp-s-ready .mfp-preloader{display:none}.mfp-s-error .mfp-content{display:none}button.mfp-arrow,button.mfp-close{overflow:visible;cursor:pointer;background:0 0;border:0;-webkit-appearance:none;display:block;outline:0;padding:0;z-index:1046;box-shadow:none;touch-action:manipulation}button::-moz-focus-inner{padding:0;border:0}.mfp-close{width:44px;height:44px;line-height:44px;position:absolute;right:0;top:0;text-decoration:none;text-align:center;opacity:.65;padding:0 0 18px 10px;color:#fff;font-style:normal;font-size:28px;font-family:Arial,Baskerville,monospace}.mfp-close:focus,.mfp-close:hover{opacity:1}.mfp-close:active{top:1px}.mfp-close-btn-in .mfp-close{color:#333}.mfp-iframe-holder .mfp-close,.mfp-image-holder .mfp-close{color:#fff;right:-6px;text-align:right;padding-right:6px;width:100%}.mfp-counter{position:absolute;top:0;right:0;color:#ccc;font-size:12px;line-height:18px;white-space:nowrap}.mfp-arrow{position:absolute;opacity:.65;margin:0;top:50%;margin-top:-55px;padding:0;width:90px;height:110px;-webkit-tap-highlight-color:transparent}.mfp-arrow:active{margin-top:-54px}.mfp-arrow:focus,.mfp-arrow:hover{opacity:1}.mfp-arrow:after,.mfp-arrow:before{content:'';display:block;width:0;height:0;position:absolute;left:0;top:0;margin-top:35px;margin-left:35px;border:medium inset transparent}.mfp-arrow:after{border-top-width:13px;border-bottom-width:13px;top:8px}.mfp-arrow:before{border-top-width:21px;border-bottom-width:21px;opacity:.7}.mfp-arrow-left{left:0}.mfp-arrow-left:after{border-right:17px solid #fff;margin-left:31px}.mfp-arrow-left:before{margin-left:25px;border-right:27px solid #3f3f3f}.mfp-arrow-right{right:0}.mfp-arrow-right:after{border-left:17px solid #fff;margin-left:39px}.mfp-arrow-right:before{border-left:27px solid #3f3f3f}.mfp-iframe-holder{padding-top:40px;padding-bottom:40px}.mfp-iframe-holder .mfp-content{line-height:0;width:100%;max-width:900px}.mfp-iframe-holder .mfp-close{background:0 0;top:-40px}.mfp-iframe-scaler{width:100%;height:0;overflow:hidden;padding-top:56.25%}.mfp-iframe-scaler iframe{position:absolute;display:block;top:0;left:0;width:100%;height:100%;box-shadow:0 0 8px rgba(0,0,0,.6);background:#000}img.mfp-img{width:auto;max-width:100%;height:auto;display:block;line-height:0;box-sizing:border-box;padding:40px 0 40px;margin:0 auto}.mfp-figure{line-height:0}.mfp-figure:after{content:'';position:absolute;left:0;top:40px;bottom:40px;display:block;right:0;width:auto;height:auto;z-index:-1;box-shadow:0 0 8px rgba(0,0,0,.6);background:#444}.mfp-figure small{color:#bdbdbd;display:block;font-size:12px;line-height:14px}.mfp-figure figure{margin:0}.mfp-bottom-bar{margin-top:-36px;position:absolute;top:100%;left:0;width:100%;cursor:auto}.mfp-title{text-align:left;line-height:18px;color:#f3f3f3;word-wrap:break-word;padding-right:36px}.mfp-image-holder .mfp-content{max-width:100%}.mfp-gallery .mfp-image-holder .mfp-figure{cursor:pointer}@media screen and (max-width:800px) and (orientation:landscape),screen and (max-height:300px){.mfp-img-mobile .mfp-image-holder{padding-left:0;padding-right:0}.mfp-img-mobile img.mfp-img{padding:0}.mfp-img-mobile .mfp-figure:after{top:0;bottom:0}.mfp-img-mobile .mfp-figure small{display:inline;margin-left:5px}.mfp-img-mobile .mfp-bottom-bar{background:rgba(0,0,0,.6);bottom:0;margin:0;top:auto;padding:3px 5px;position:fixed;box-sizing:border-box}.mfp-img-mobile .mfp-bottom-bar:empty{padding:0}.mfp-img-mobile .mfp-counter{right:5px;top:3px}.mfp-img-mobile .mfp-close{top:0;right:0;width:35px;height:35px;line-height:35px;background:rgba(0,0,0,.6);position:fixed;text-align:center;padding:0}}@media all and (max-width:900px){.mfp-arrow{-webkit-transform:scale(.75);transform:scale(.75)}.mfp-arrow-left{-webkit-transform-origin:0;transform-origin:0}.mfp-arrow-right{-webkit-transform-origin:100%;transform-origin:100%}.mfp-container{padding-left:6px;padding-right:6px}}
`;
    $('head').append('<style>'+css_library+'</style>')
  };

                           /* This is my app's JavaScript */
                           var initTestimonialSlider = function ($) {

                             var cssLink = $("<link />", {
                               rel: "stylesheet",
                               type: "text/css",
                               href: "https://cdn.shopify.com/s/files/1/0610/3502/0528/t/1/assets/testimonial-main.css",
                             });
                             $("head").append($("<link />", {
                               rel: "stylesheet",
                               type: "text/css",
                               href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
                             }));
                             $("head").append(cssLink);
                             var config = {
                               // General
                               layout_preset : 'slider',
                               filter_style : 'even',
                               theme_style : 'theme-one',
                               display_testimonials_from : 'latest',
                               specific_testimonial : '',
                               exclude_testimonial : '',
                               category_operator : 'IN',
                               total_testimonials : '10',
                               columns_large_desktop: '1',
                               columns_desktop: '1',
                               columns_laptop: '1',
                               columns_large_tablet: '1',
                               columns_large_mobile: '1',
                               random_order : '',
                               tpro_order_by : 'menu_order',
                               order_by : this.random_order ? 'rand' : this.tpro_order_by,
                               preloader : '',

                               // Theme Layout
                               testimonial_border : {all:'1',style:'solid',color:'#e3e3e3'},
                               testimonial_bg : '#ffffff',
                               testimonial_inner_padding: {top:'22',right:'22',bottom:'22',left:'22'},
                               testimonial_info_border : {all:'1',style:'solid',color:'#e3e3e3'},
                               testimonial_info_bg : '#f1e9e0',
                               testimonial_info_inner_padding :{top:'22',right:'22',bottom:'22',left:'22'},
                               testimonial_shadow_color : '#dddddd',
                               testimonial_top_bg : '#ff8a00',
                               testimonial_border_radius : '10',

                               // Display settings
                               section_title : 'true',
                               // Testimonial Content
                               testimonial_margin : '20',
                               testimonial_title : 'true',
                               tag_title : 'h3',
                               testimonial_content : 'true',
                               testimonial_content_type : 'content_with_limit',
                               testimonial_content_limit : '100',
                               testimonial_content_ellipsis : '...',
                               testimonial_readmore : 'true',
                               testimonial_readmore_link_action : 'expand',
                               testimonial_readmore_text : 'Read More',
                               testimonial_readless_text : 'Read Less',
                               testimonial_readmore_color : '#1595CE',
                               testimonial_readmore_color_hover : '#2684a6',

                               //Reviewer Information
                               client_name : 'true',
                               client_name_tag : 'h4',
                               testimonial_client_rating : 'true',
                               star_icon : 'fa fa-star',
                               testimonial_client_rating_color : '#ffb900',
                               testimonial_client_rating_alignment : 'center',
                               testimonial_client_rating_margin : {top:'0',right:'0',bottom:'6',left:'0'},
                               client_designation : 'true',
                               client_company_name : 'true',
                               testimonial_client_location : 'true',
                               testimonial_client_phone : 'true',
                               testimonial_client_email : 'true',
                               testimonial_client_date : 'true',
                               testimonial_client_date_format : 'M j, Y',
                               testimonial_client_website : 'true',
                               identity_linking_website : 'true',
                               website_link_target : '_blank',

                               //Social Media 
                               social_profile : 'true',
                               social_profile_position : 'center',
                               social_profile_margin : {top:'15',right:'0',bottom:'6',left:'0'},
                               social_icon_custom_color : 'true',
                               social_icon_color : {color:'#aaaaaa',hover_color:'#ffffff',background:'transparent',hover_background:'#1595CE'},
                               social_icon_border : {all:'1',style:'solid',color:'#dddddd',hover_color:'#1595CE'},
                               social_icon_border_radius : '50',
                               social_icon_border_unit : '%',

                               //Slider Controls
                               slider_mode : 'standard',
                               slider_autoplay : 'true',
                               slider_autoplay_speed : '3000',
                               slider_scroll_speed : '600',
                               slide_to_scroll_large_desktop : '1',
                               slide_to_scroll_desktop : '1',
                               slide_to_scroll_laptop : '1',
                               slide_to_scroll_tablet : '1',
                               slide_to_scroll_mobile : '1',
                               slide_row_large_desktop : '1',
                               slide_row_desktop : '1',
                               slide_row_laptop : '1',
                               slide_row_tablet : '1',
                               slide_row_mobile : '1',
                               slide_pause_on_hover : 'true',
                               slide_infinite : 'true',
                               slide_animation : 'slide',
                               slider_direction : 'ltr',

                               //Navigation
                               navigation : 'true',
                               navigation_position: 'vertical_center',
                               navigation_icon : 'angle',
                               navigation_size : '20',
                               navigation_color : {color:'#777777',hover_color:'#ffffff',background:'transparent',hover_background:'#1595CE'},
                               navigation_border : {all:'1',style:'solid',color:'#777777',hover_color:'#1595CE'},
                               nav_border_border_radius :'50',
                               nav_border_border_unit : '%',
                               //Pagination
                               pagination : 'true',
                               pagination_margin : {top:'21',right:'0',bottom:'0',left:'0'},
                               pagination_color: {color:'#cccccc',active_color:'#1595CE'},

                               //Miscellaneous
                               adaptive_height : 'true',
                               slider_swipe : 'true',
                               slider_draggable : 'true',
                               swipe_to_slide : 'true',

                               //Image
                               testimonial_image : 'true',
                               thumbnail_slider : 'true',
                               testimonial_image_margin : {top:'0',right:'0',bottom:'22',left:'0'},
                               testimonial_image_position : 'center',
                               testimonial_image_shape : 'three',
                               testimonial_image_border_shadow: 'border',
                               testimonial_image_border : {all:'1',style:'solid',color:'#dddddd'},
                               testimonial_image_shadow : '#888888',
                               testimonial_image_bg : '#fff',
                               testimonial_image_pd : '0',
                               image_sizes : 'large',
                               image_sizes_custom : {height:'120',width:'120'},
                               image_sizes_custom_crop : 'soft-crop',
                               image_mode : 'normal',
                               video_icon : 'true',
                               video_icon_color: '#e2e2e2',
                               video_icon_color_overlay : 'rgba(51, 51, 51, 0.4)',


                               //
                               section_title_font_load : 'true',
                               section_title_typography : {font_family:'Open Sans',font_weight:'400',subnet:'',text_align:'center',text_transform:'none',font_size:'22',line_height:'22',letter_spacing:'0',margin_bottom:'23',color:'#444444'},
                               testimonial_title_font_load : 'true',
                               testimonial_title_typography : {font_family:'Open Sans',font_weight:'600',subnet:'',text_align:'center',text_transform:'none',font_size:'20',line_height:'30',letter_spacing:'0',margin_top:'0',margin_right:'0',margin_bottom:'18',margin_left:'0',color:'#333333'},
                               testimonial_content_font_load : 'true',
                               testimonial_content_typography : {font_family:'Open Sans',font_weight:'400',subnet:'',text_align:'center',text_transform:'none',font_size:'16',line_height:'26',letter_spacing:'0',margin_top:'0',margin_right:'0',margin_bottom:'20',margin_left:'0',color:'#333333'},
                               fullname_font_load : 'true',
                               fullname_typography : {font_family:'Open Sans',font_weight:'700',subnet:'',text_align:'center',text_transform:'none',font_size:'16',line_height:'24',letter_spacing:'0',margin_top:'0',margin_right:'0',margin_bottom:'8',margin_left:'0',color:'#333333'},
                               company_font_load : 'true',
                               company_typography : {font_family:'Open Sans',font_weight:'400',subnet:'',text_align:'center',text_transform:'none',font_size:'16',line_height:'24',letter_spacing:'0',margin_top:'0',margin_right:'0',margin_bottom:'8',margin_left:'0',color:'#444444'},
                               location_font_load : 'true',
                               location_typography : {font_family:'Open Sans',font_weight:'400',subnet:'',text_align:'center',text_transform:'none',font_size:'15',line_height:'20',letter_spacing:'0',margin_top:'0',margin_right:'0',margin_bottom:'5',margin_left:'0',color:'#444444'},
                               phone_font_load : 'true',
                               phone_typography : {font_family:'Open Sans',font_weight:'400',subnet:'',text_align:'center',text_transform:'none',font_size:'15',line_height:'20',letter_spacing:'0',margin_top:'0',margin_right:'0',margin_bottom:'3',margin_left:'0',color:'#444444'},
                               email_font_load : 'true',
                               email_typography : {font_family:'Open Sans',font_weight:'400',subnet:'',text_align:'center',text_transform:'none',font_size:'15',line_height:'20',letter_spacing:'0',margin_top:'0',margin_right:'0',margin_bottom:'5',margin_left:'0',color:'#444444'},
                               date_font_load : 'true',
                               date_typography : {font_family:'Open Sans',font_weight:'400',subnet:'',text_align:'center',text_transform:'none',font_size:'15',line_height:'20',letter_spacing:'0',margin_top:'0',margin_right:'0',margin_bottom:'6',margin_left:'0',color:'#444444'},
                               website_font_load : 'true',
                               website_typography : {font_family:'Open Sans',font_weight:'400',subnet:'',text_align:'center',text_transform:'none',font_size:'15',line_height:'20',letter_spacing:'0',margin_top:'0',margin_right:'0',margin_bottom:'6',margin_left:'0',color:'#444444'},
                             };
                             var testimonial_list = [
                               {
                                 "id": 1,
                                 "title": "Great Service",
                                 "content": "Testimonial Content",
                                 "name": "Justin Nguyen",
                                 "email": "tien@gmail.com",
                                 "designation": "CEO",
                                 "company_name": "Simesy",
                                 "location": "Hanoi, Vietnam",
                                 "phone": "0912345678",
                                 "website": "simesy.com",
                                 "video_url": "youtube.com",
                                 "image_url": "https://demo.shapedplugin.com/testimonial/wp-content/uploads/2018/03/Robert-Smith.jpg",
                                 "rating": "five_star", // one_star, two_star, three_star, four_star, five_star
                                 "social_profiles": [
                                   {
                                     "social_name": "facebook",
                                     "social_url": "facebook.com"
                                   },
                                   {
                                     "social_name": "twitter",
                                     "social_url": "twitter.com"
                                   }
                                 ]
                               },
                               {
                                 "id": 2,
                                 "title": "Great Service",
                                 "content": "Testimonial Content",
                                 "name": "Justin Nguyen",
                                 "email": "tien@gmail.com",
                                 "designation": "CEO",
                                 "company_name": "Simesy",
                                 "location": "Hanoi, Vietnam",
                                 "phone": "0912345678",
                                 "website": "simesy.com",
                                 "video_url": "youtube.com",
                                 "image_url": "https://demo.shapedplugin.com/testimonial/wp-content/uploads/2018/03/Robert-Smith.jpg",
                                 "rating": "five_star", // one_star, two_star, three_star, four_star, five_star
                                 "social_profiles": [
                                   {
                                     "social_name": "facebook",
                                     "social_url": "facebook.com"
                                   },
                                   {
                                     "social_name": "twitter",
                                     "social_url": "twitter.com"
                                   }
                                 ]
                               }
                             ]
                             $("body").find(".simesy-slider-section").each(function (i, v) {
                               var id = $(this).data("slider-id");
                               /*var shop = window.Shopify.shop;
      $.ajax({
        url: "http://product-slider.simesy.com/api/get_slider",
        type: "post",
        dataType: "JSON",
        async: false,
        data: { id: id, shop: shop },
        success: function (response) {
          var config = response.data.slider.config;
          var list_products = response.data.slider.products;
          get_slider(config, id, list_products);
        },
      });*/

                             });
                             $("#simesy-testimonial-pro-wrapper-110 .simesy-testimonial-pro-section").slick({
                               prevArrow: '<div class="slick-prev"><i class="fa fa-' + $("#simesy-testimonial-pro-wrapper-110 .simesy-testimonial-pro-section").data("arrowicon") + '-left"></i></div>',
                               nextArrow: '<div class="slick-next"><i class="fa fa-' + $("#simesy-testimonial-pro-wrapper-110 .simesy-testimonial-pro-section").data("arrowicon") + '-right"></i></div>',
                             })
                             get_slider(config,'110',testimonial_list);
                             console.log(config);
                           };

                           var moneyCurrency = window.Shopify.currency.active ? window.Shopify.currency.active : "USD";
                           var moneyFormats = {
                             USD: {
                               money_format: "${{amount}}",
                               money_with_currency_format: "${{amount}} USD",
                             },
                             EUR: {
                               money_format: "&euro;{{amount_with_comma_separator}}",
                               money_with_currency_format:
                               "&euro;{{amount_with_comma_separator}} EUR",
                             },
                             GBP: {
                               money_format: "&pound;{{amount}}",
                               money_with_currency_format: "&pound;{{amount}} GBP",
                             },
                             CAD: {
                               money_format: "${{amount}}",
                               money_with_currency_format: "${{amount}} CAD",
                             },
                             ALL: {
                               money_format: "Lek {{amount}}",
                               money_with_currency_format: "Lek {{amount}} ALL",
                             },
                             DZD: {
                               money_format: "DA {{amount}}",
                               money_with_currency_format: "DA {{amount}} DZD",
                             },
                             AOA: {
                               money_format: "Kz{{amount}}",
                               money_with_currency_format: "Kz{{amount}} AOA",
                             },
                             ARS: {
                               money_format: "${{amount_with_comma_separator}}",
                               money_with_currency_format: "${{amount_with_comma_separator}} ARS",
                             },
                             AMD: {
                               money_format: "{{amount}} AMD",
                               money_with_currency_format: "{{amount}} AMD",
                             },
                             AWG: {
                               money_format: "Afl{{amount}}",
                               money_with_currency_format: "Afl{{amount}} AWG",
                             },
                             AUD: {
                               money_format: "${{amount}}",
                               money_with_currency_format: "${{amount}} AUD",
                             },
                             BBD: {
                               money_format: "${{amount}}",
                               money_with_currency_format: "${{amount}} Bds",
                             },
                             AZN: {
                               money_format: "m.{{amount}}",
                               money_with_currency_format: "m.{{amount}} AZN",
                             },
                             BDT: {
                               money_format: "Tk {{amount}}",
                               money_with_currency_format: "Tk {{amount}} BDT",
                             },
                             BSD: {
                               money_format: "BS${{amount}}",
                               money_with_currency_format: "BS${{amount}} BSD",
                             },
                             BHD: {
                               money_format: "{{amount}}0 BD",
                               money_with_currency_format: "{{amount}}0 BHD",
                             },
                             BYR: {
                               money_format: "Br {{amount}}",
                               money_with_currency_format: "Br {{amount}} BYR",
                             },
                             BZD: {
                               money_format: "BZ${{amount}}",
                               money_with_currency_format: "BZ${{amount}} BZD",
                             },
                             BTN: {
                               money_format: "Nu {{amount}}",
                               money_with_currency_format: "Nu {{amount}} BTN",
                             },
                             BAM: {
                               money_format: "KM {{amount_with_comma_separator}}",
                               money_with_currency_format: "KM {{amount_with_comma_separator}} BAM",
                             },
                             BRL: {
                               money_format: "R$ {{amount_with_comma_separator}}",
                               money_with_currency_format: "R$ {{amount_with_comma_separator}} BRL",
                             },
                             BOB: {
                               money_format: "Bs{{amount_with_comma_separator}}",
                               money_with_currency_format: "Bs{{amount_with_comma_separator}} BOB",
                             },
                             BWP: {
                               money_format: "P{{amount}}",
                               money_with_currency_format: "P{{amount}} BWP",
                             },
                             BND: {
                               money_format: "${{amount}}",
                               money_with_currency_format: "${{amount}} BND",
                             },
                             BGN: {
                               money_format: "{{amount}} Ð»Ð²",
                               money_with_currency_format: "{{amount}} Ð»Ð² BGN",
                             },
                             MMK: {
                               money_format: "K{{amount}}",
                               money_with_currency_format: "K{{amount}} MMK",
                             },
                             KHR: {
                               money_format: "KHR{{amount}}",
                               money_with_currency_format: "KHR{{amount}}",
                             },
                             KYD: {
                               money_format: "${{amount}}",
                               money_with_currency_format: "${{amount}} KYD",
                             },
                             XAF: {
                               money_format: "FCFA{{amount}}",
                               money_with_currency_format: "FCFA{{amount}} XAF",
                             },
                             CLP: {
                               money_format: "${{amount_no_decimals}}",
                               money_with_currency_format: "${{amount_no_decimals}} CLP",
                             },
                             CNY: {
                               money_format: "&#165;{{amount}}",
                               money_with_currency_format: "&#165;{{amount}} CNY",
                             },
                             COP: {
                               money_format: "${{amount_with_comma_separator}}",
                               money_with_currency_format: "${{amount_with_comma_separator}} COP",
                             },
                             CRC: {
                               money_format: "&#8353; {{amount_with_comma_separator}}",
                               money_with_currency_format:
                               "&#8353; {{amount_with_comma_separator}} CRC",
                             },
                             HRK: {
                               money_format: "{{amount_with_comma_separator}} kn",
                               money_with_currency_format: "{{amount_with_comma_separator}} kn HRK",
                             },
                             CZK: {
                               money_format: "{{amount_with_comma_separator}} K&#269;",
                               money_with_currency_format: "{{amount_with_comma_separator}} K&#269;",
                             },
                             DKK: {
                               money_format: "{{amount_with_comma_separator}}",
                               money_with_currency_format: "kr.{{amount_with_comma_separator}}",
                             },
                             DOP: {
                               money_format: "RD$ {{amount}}",
                               money_with_currency_format: "RD$ {{amount}}",
                             },
                             XCD: {
                               money_format: "${{amount}}",
                               money_with_currency_format: "EC${{amount}}",
                             },
                             EGP: {
                               money_format: "LE {{amount}}",
                               money_with_currency_format: "LE {{amount}} EGP",
                             },
                             ETB: {
                               money_format: "Br{{amount}}",
                               money_with_currency_format: "Br{{amount}} ETB",
                             },
                             XPF: {
                               money_format: "{{amount_no_decimals_with_comma_separator}} XPF",
                               money_with_currency_format:
                               "{{amount_no_decimals_with_comma_separator}} XPF",
                             },
                             FJD: {
                               money_format: "${{amount}}",
                               money_with_currency_format: "FJ${{amount}}",
                             },
                             GMD: {
                               money_format: "D {{amount}}",
                               money_with_currency_format: "D {{amount}} GMD",
                             },
                             GHS: {
                               money_format: "GH&#8373;{{amount}}",
                               money_with_currency_format: "GH&#8373;{{amount}}",
                             },
                             GTQ: {
                               money_format: "Q{{amount}}",
                               money_with_currency_format: "{{amount}} GTQ",
                             },
                             GYD: {
                               money_format: "G${{amount}}",
                               money_with_currency_format: "${{amount}} GYD",
                             },
                             GEL: {
                               money_format: "{{amount}} GEL",
                               money_with_currency_format: "{{amount}} GEL",
                             },
                             HNL: {
                               money_format: "L {{amount}}",
                               money_with_currency_format: "L {{amount}} HNL",
                             },
                             HKD: {
                               money_format: "${{amount}}",
                               money_with_currency_format: "HK${{amount}}",
                             },
                             HUF: {
                               money_format: "{{amount_no_decimals_with_comma_separator}}",
                               money_with_currency_format:
                               "{{amount_no_decimals_with_comma_separator}} Ft",
                             },
                             ISK: {
                               money_format: "{{amount_no_decimals}} kr",
                               money_with_currency_format: "{{amount_no_decimals}} kr ISK",
                             },
                             INR: {
                               money_format: "Rs. {{amount}}",
                               money_with_currency_format: "Rs. {{amount}}",
                             },
                             IDR: {
                               money_format: "{{amount_with_comma_separator}}",
                               money_with_currency_format: "Rp {{amount_with_comma_separator}}",
                             },
                             ILS: {
                               money_format: "{{amount}} NIS",
                               money_with_currency_format: "{{amount}} NIS",
                             },
                             JMD: {
                               money_format: "${{amount}}",
                               money_with_currency_format: "${{amount}} JMD",
                             },
                             JPY: {
                               money_format: "&#165;{{amount_no_decimals}}",
                               money_with_currency_format: "&#165;{{amount_no_decimals}} JPY",
                             },
                             JEP: {
                               money_format: "&pound;{{amount}}",
                               money_with_currency_format: "&pound;{{amount}} JEP",
                             },
                             JOD: {
                               money_format: "{{amount}}0 JD",
                               money_with_currency_format: "{{amount}}0 JOD",
                             },
                             KZT: {
                               money_format: "{{amount}} KZT",
                               money_with_currency_format: "{{amount}} KZT",
                             },
                             KES: {
                               money_format: "KSh{{amount}}",
                               money_with_currency_format: "KSh{{amount}}",
                             },
                             KWD: {
                               money_format: "{{amount}}0 KD",
                               money_with_currency_format: "{{amount}}0 KWD",
                             },
                             KGS: {
                               money_format: "Ð»Ð²{{amount}}",
                               money_with_currency_format: "Ð»Ð²{{amount}}",
                             },
                             LVL: {
                               money_format: "Ls {{amount}}",
                               money_with_currency_format: "Ls {{amount}} LVL",
                             },
                             LBP: {
                               money_format: "L&pound;{{amount}}",
                               money_with_currency_format: "L&pound;{{amount}} LBP",
                             },
                             LTL: {
                               money_format: "{{amount}} Lt",
                               money_with_currency_format: "{{amount}} Lt",
                             },
                             MGA: {
                               money_format: "Ar {{amount}}",
                               money_with_currency_format: "Ar {{amount}} MGA",
                             },
                             MKD: {
                               money_format: "Ð´ÐµÐ½ {{amount}}",
                               money_with_currency_format: "Ð´ÐµÐ½ {{amount}} MKD",
                             },
                             MOP: {
                               money_format: "MOP${{amount}}",
                               money_with_currency_format: "MOP${{amount}}",
                             },
                             MVR: {
                               money_format: "Rf{{amount}}",
                               money_with_currency_format: "Rf{{amount}} MRf",
                             },
                             MXN: {
                               money_format: "$ {{amount}}",
                               money_with_currency_format: "$ {{amount}} MXN",
                             },
                             MYR: {
                               money_format: "RM{{amount}} MYR",
                               money_with_currency_format: "RM{{amount}} MYR",
                             },
                             MUR: {
                               money_format: "Rs {{amount}}",
                               money_with_currency_format: "Rs {{amount}} MUR",
                             },
                             MDL: {
                               money_format: "{{amount}} MDL",
                               money_with_currency_format: "{{amount}} MDL",
                             },
                             MAD: {
                               money_format: "{{amount}} dh",
                               money_with_currency_format: "Dh {{amount}} MAD",
                             },
                             MNT: {
                               money_format: "{{amount_no_decimals}} &#8366",
                               money_with_currency_format: "{{amount_no_decimals}} MNT",
                             },
                             MZN: {
                               money_format: "{{amount}} Mt",
                               money_with_currency_format: "Mt {{amount}} MZN",
                             },
                             NAD: {
                               money_format: "N${{amount}}",
                               money_with_currency_format: "N${{amount}} NAD",
                             },
                             NPR: {
                               money_format: "Rs{{amount}}",
                               money_with_currency_format: "Rs{{amount}} NPR",
                             },
                             ANG: {
                               money_format: "&fnof;{{amount}}",
                               money_with_currency_format: "{{amount}} NA&fnof;",
                             },
                             NZD: {
                               money_format: "${{amount}}",
                               money_with_currency_format: "${{amount}} NZD",
                             },
                             NIO: {
                               money_format: "C${{amount}}",
                               money_with_currency_format: "C${{amount}} NIO",
                             },
                             NGN: {
                               money_format: "&#8358;{{amount}}",
                               money_with_currency_format: "&#8358;{{amount}} NGN",
                             },
                             NOK: {
                               money_format: "kr {{amount_with_comma_separator}}",
                               money_with_currency_format: "kr {{amount_with_comma_separator}} NOK",
                             },
                             OMR: {
                               money_format: "{{amount_with_comma_separator}} OMR",
                               money_with_currency_format: "{{amount_with_comma_separator}} OMR",
                             },
                             PKR: {
                               money_format: "Rs.{{amount}}",
                               money_with_currency_format: "Rs.{{amount}} PKR",
                             },
                             PGK: {
                               money_format: "K {{amount}}",
                               money_with_currency_format: "K {{amount}} PGK",
                             },
                             PYG: {
                               money_format: "Gs. {{amount_no_decimals_with_comma_separator}}",
                               money_with_currency_format:
                               "Gs. {{amount_no_decimals_with_comma_separator}} PYG",
                             },
                             PEN: {
                               money_format: "S/. {{amount}}",
                               money_with_currency_format: "S/. {{amount}} PEN",
                             },
                             PHP: {
                               money_format: "&#8369;{{amount}}",
                               money_with_currency_format: "&#8369;{{amount}} PHP",
                             },
                             PLN: {
                               money_format: "{{amount_with_comma_separator}} zl",
                               money_with_currency_format: "{{amount_with_comma_separator}} zl PLN",
                             },
                             QAR: {
                               money_format: "QAR {{amount_with_comma_separator}}",
                               money_with_currency_format: "QAR {{amount_with_comma_separator}}",
                             },
                             RON: {
                               money_format: "{{amount_with_comma_separator}} lei",
                               money_with_currency_format: "{{amount_with_comma_separator}} lei RON",
                             },
                             RUB: {
                               money_format: "&#1088;&#1091;&#1073;{{amount_with_comma_separator}}",
                               money_with_currency_format:
                               "&#1088;&#1091;&#1073;{{amount_with_comma_separator}} RUB",
                             },
                             RWF: {
                               money_format: "{{amount_no_decimals}} RF",
                               money_with_currency_format: "{{amount_no_decimals}} RWF",
                             },
                             WST: {
                               money_format: "WS$ {{amount}}",
                               money_with_currency_format: "WS$ {{amount}} WST",
                             },
                             SAR: {
                               money_format: "{{amount}} SR",
                               money_with_currency_format: "{{amount}} SAR",
                             },
                             STD: {
                               money_format: "Db {{amount}}",
                               money_with_currency_format: "Db {{amount}} STD",
                             },
                             RSD: {
                               money_format: "{{amount}} RSD",
                               money_with_currency_format: "{{amount}} RSD",
                             },
                             SCR: {
                               money_format: "Rs {{amount}}",
                               money_with_currency_format: "Rs {{amount}} SCR",
                             },
                             SGD: {
                               money_format: "${{amount}}",
                               money_with_currency_format: "${{amount}} SGD",
                             },
                             SYP: {
                               money_format: "S&pound;{{amount}}",
                               money_with_currency_format: "S&pound;{{amount}} SYP",
                             },
                             ZAR: {
                               money_format: "R {{amount}}",
                               money_with_currency_format: "R {{amount}} ZAR",
                             },
                             KRW: {
                               money_format: "&#8361;{{amount_no_decimals}}",
                               money_with_currency_format: "&#8361;{{amount_no_decimals}} KRW",
                             },
                             LKR: {
                               money_format: "Rs {{amount}}",
                               money_with_currency_format: "Rs {{amount}} LKR",
                             },
                             SEK: {
                               money_format: "{{amount_no_decimals}} kr",
                               money_with_currency_format: "{{amount_no_decimals}} kr SEK",
                             },
                             CHF: {
                               money_format: "SFr. {{amount}}",
                               money_with_currency_format: "SFr. {{amount}} CHF",
                             },
                             TWD: {
                               money_format: "${{amount}}",
                               money_with_currency_format: "${{amount}} TWD",
                             },
                             THB: {
                               money_format: "{{amount}} &#xe3f;",
                               money_with_currency_format: "{{amount}} &#xe3f; THB",
                             },
                             TZS: {
                               money_format: "{{amount}} TZS",
                               money_with_currency_format: "{{amount}} TZS",
                             },
                             TTD: {
                               money_format: "${{amount}}",
                               money_with_currency_format: "${{amount}} TTD",
                             },
                             TND: {
                               money_format: "{{amount}}",
                               money_with_currency_format: "{{amount}} DT",
                             },
                             TRY: {
                               money_format: "{{amount}}TL",
                               money_with_currency_format: "{{amount}}TL",
                             },
                             UGX: {
                               money_format: "Ush {{amount_no_decimals}}",
                               money_with_currency_format: "Ush {{amount_no_decimals}} UGX",
                             },
                             UAH: {
                               money_format: "â‚´{{amount}}",
                               money_with_currency_format: "â‚´{{amount}} UAH",
                             },
                             AED: {
                               money_format: "Dhs. {{amount}}",
                               money_with_currency_format: "Dhs. {{amount}} AED",
                             },
                             UYU: {
                               money_format: "${{amount_with_comma_separator}}",
                               money_with_currency_format: "${{amount_with_comma_separator}} UYU",
                             },
                             VUV: {
                               money_format: "${{amount}}",
                               money_with_currency_format: "${{amount}}VT",
                             },
                             VEF: {
                               money_format: "Bs. {{amount_with_comma_separator}}",
                               money_with_currency_format: "Bs. {{amount_with_comma_separator}} VEF",
                             },
                             VND: {
                               money_format: "{{amount_no_decimals_with_comma_separator}}&#8363;",
                               money_with_currency_format:
                               "{{amount_no_decimals_with_comma_separator}} VND",
                             },
                             XBT: {
                               money_format: "{{amount_no_decimals}} BTC",
                               money_with_currency_format: "{{amount_no_decimals}} BTC",
                             },
                             XOF: {
                               money_format: "CFA{{amount}}",
                               money_with_currency_format: "CFA{{amount}} XOF",
                             },
                             ZMW: {
                               money_format: "K{{amount_no_decimals_with_comma_separator}}",
                               money_with_currency_format:
                               "ZMW{{amount_no_decimals_with_comma_separator}}",
                             },
                           };
                           var moneyFormat = moneyFormats.hasOwnProperty(moneyCurrency) ? moneyFormats[moneyCurrency].money_format : "${{amount}}";
                           var formatMoney = function(cents){
                             if (typeof cents === "string") {
                               cents = cents.replace(".", "");
                             }
                             var value = "";
                             var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
                             var formatString = moneyFormat;

                             function formatWithDelimiters(number, precision, thousands, decimal) {
                               thousands = thousands || ",";
                               decimal = decimal || ".";

                               if (isNaN(number) || number === null) {
                                 return 0;
                               }

                               number = (number / 100.0).toFixed(precision);

                               var parts = number.split(".");
                               var dollarsAmount = parts[0].replace(
                                 /(\d)(?=(\d\d\d)+(?!\d))/g,
                                 "$1" + thousands
                               );
                               var centsAmount = parts[1] ? decimal + parts[1] : "";

                               return dollarsAmount + centsAmount;
                             }

                             switch (formatString.match(placeholderRegex)[1]) {
                               case "amount":
                                 value = formatWithDelimiters(cents, 2);
                                 break;
                               case "amount_no_decimals":
                                 value = formatWithDelimiters(cents, 0);
                                 break;
                               case "amount_with_comma_separator":
                                 value = formatWithDelimiters(cents, 2, ".", ",");
                                 break;
                               case "amount_no_decimals_with_comma_separator":
                                 value = formatWithDelimiters(cents, 0, ".", ",");
                                 break;
                               case "amount_no_decimals_with_space_separator":
                                 value = formatWithDelimiters(cents, 0, " ");
                                 break;
                               case "amount_with_apostrophe_separator":
                                 value = formatWithDelimiters(cents, 2, "'");
                                 break;
                             }
                             return formatString.replace(placeholderRegex, value);
                           }
                           var get_slider = function (config, id, testimonial_list) {
                             $('.simesy-slider-section[data-slider-id="' + id + '"]').addClass("simesy-slider-section-" + id + "");
                             /* App code */
                             // General Settings
                             var layout_present = config.layout_preset[0],
                                 theme_style = config.theme_style,
                                 pre_loader = config.preloader,
                                 columns_large_desktop = config.columns_large_desktop,
                                 columns_desktop = config.columns_desktop,
                                 columns_laptop = config.columns_laptop,
                                 columns_tablet = config.columns_tablet,
                                 columns_mobile = config.columns_mobile;
                             // Theme Layout

                             // Slider Controls
                             var carousel_ticker_mode = config.slider_mode,
                                 navigation_arrow = config.navigation,
                                 navigation_arrow_type = config.navigation_icon,
                                 navigation_position = config.navigation_position,
                                 pagination = config.pagination;
                             // Display Option

                             var section_title = config.section_title,
                                 testimonial_margin = config.testimonial_margin != "" ? config.testimonial_margin : "20",
                                 testimonial_title = config.testimonial_title,
                                 testimonial_title_tag = config.tag_title,
                                 testimonial_content = config.testimonial_content,
                                 testimonial_content_limit = config.testimonial_content_limit,
                                 testimonial_content_limit_ellipse = config.testimonial_content_ellipsis != "" ? config.testimonial_content_ellipsis : "...",
                                 testimonial_content_type = config.testimonial_content_type,
                                 testimonial_content_readmore = config.testimonial_readmore,
                                 testimonial_content_readmore_color = config.testimonial_readmore_color,
                                 testimonial_content_readmore_hover = config.testimonial_readmore_color_hover,
                                 testimonial_fullname = config.client_name,
                                 testimonial_fullname_tag = config.client_name_tag,
                                 testimonial_client_rating = config.testimonial_client_rating,
                                 testimonial_star_icon = config.star_icon,

                                 client_designation = config.client_designation,
                                 client_company_name = config.client_company_name,
                                 testimonial_client_location = config.testimonial_client_location,
                                 testimonial_client_phone = config.testimonial_client_phone,
                                 testimonial_client_email = config.testimonial_client_email,
                                 testimonial_client_date = config.testimonial_client_date,
                                 testimonial_client_date_format = config.testimonial_client_date_format,
                                 testimonial_client_website = config.testimonial_client_website,
                                 identity_linking_website = config.identity_linking_website,
                                 website_link_target = config.website_link_target,
                                 // Social
                                 social_profile = config.social_profile;

                             // Image settings
                             var testimonial_image = config.testimonial_image,
                                 testimonial_image_shape = config.testimonial_image_shape,
                                 testimonial_image_position = config.testimonial_image_position,
                                 testimonial_image_margin_top = config.testimonial_image_margin.top,
                                 testimonial_image_margin_right = config.testimonial_image_margin.right,
                                 testimonial_image_margin_bottom = config.testimonial_image_margin.bottom,
                                 testimonial_image_margin_left = config.testimonial_image_margin.left,
                                 testimonial_image_border_shadow = config.testimonial_image_border_shadow,
                                 testimonial_image_border_all = config.testimonial_image_border.all,
                                 testimonial_image_border_style = config.testimonial_image_border.style,
                                 testimonial_image_border_color = config.testimonial_image_border.color,
                                 testimonial_image_bg = config.testimonial_image_bg,
                                 testimonial_image_pd = config.testimonial_image_pd,
                                 image_sizes = config.image_sizes,
                                 image_sizes_custom_height = config.image_sizes_custom.height,
                                 image_sizes_custom_width = config.image_sizes_custom.width,
                                 video_icon = config.video_icon,
                                 video_icon_color = config.video_icon_color,
                                 video_icon_color_overlay = config.video_icon_color_overlay;

                             // Miscellaneous
                             var adaptive_height = config.adaptive_height,
                                 slider_swipe = config.slider_swipe,
                                 slider_draggable = config.slider_draggable,
                                 swipe_to_slide = config.swipe_to_slide;

                             // Typography
                             var section_title_font_load = config.section_title_font_load,
                                 testimonial_title_font_load = config.testimonial_title_font_load,
                                 testimonial_content_font_load = config.testimonial_content_font_load,
                                 fullname_font_load = config.fullname_font_load,
                                 company_font_load = config.compnay_font_load,
                                 location_font_load = config.location_font_load,
                                 phone_font_load = config.phone_font_load,
                                 email_font_load = config.email_font_load,
                                 date_font_load = config.date_font_load,
                                 website_font_load = config.website_font_load;
                             var testimonial_simesy_font = [],
                                 testimonial_simesy_typography = [];
                             if (section_title_font_load) {
                               testimonial_simesy_typography.push(config.section_title_typography);
                             }
                             if (testimonial_title_font_load) {
                               testimonial_simesy_typography.push(config.testimonial_title_typography);
                             }
                             if (testimonial_content_font_load) {
                               testimonial_simesy_typography.push(config.testimonial_content_typography);
                             }
                             if (fullname_font_load) {
                               testimonial_simesy_typography.push(config.fullname_typography);
                             }
                             if (company_font_load) {
                               testimonial_simesy_typography.push(config.company_typography);
                             }
                             if (location_font_load) {
                               testimonial_simesy_typography.push(config.location_typography);
                             }
                             if (phone_font_load) {
                               testimonial_simesy_typography.push(config.phone_typography);
                             }
                             if (email_font_load) {
                               testimonial_simesy_typography.push(config.email_typography);
                             }
                             if (date_font_load) {
                               testimonial_simesy_typography.push(config.date_typography);
                             }
                             if (website_font_load) {
                               testimonial_simesy_typography.push(config.website_typography);
                             }
                             for (var i = 0; i < testimonial_simesy_typography.length; i++) {
                               var font_weight = testimonial_simesy_typography[i].font_weight != "normal" ? ":" + testimonial_simesy_typography[i].font_weight : "";
                               testimonial_simesy_font.push(testimonial_simesy_typography[i].font_family + font_weight);
                             }
                             if (testimonial_simesy_font != "") {
                               var encode_link = encodeURIComponent(testimonial_simesy_font.filter((font) => font).join("|"));
                               var link = $("<link />", {
                                 rel: "stylesheet",
                                 type: "text/css",
                                 href: "//fonts.googleapis.com/css?family=" + encode_link,
                               });
                               $("body").append(link);
                             }
                             // Show/Hide navigation slick
                             switch (navigation_arrow) {
                               case "true":
                                 var nav_desktop = "true";
                                 var nav_mobile = "true";
                                 break;
                               case "hide_on_mobile":
                                 var nav_desktop = "true";
                                 var nav_mobile = "false";
                                 break;
                               default:
                                 var nav_desktop = "false";
                                 var nav_mobile = "false";
                             }
                             // Show/Hide pagination slick
                             switch (pagination) {
                               case "true":
                                 var pagi_desktop = "true";
                                 var pagi_mobile = "true";
                                 break;
                               case "hide_on_mobile":
                                 var pagi_desktop = "true";
                                 var pagi_mobile = "false";
                                 break;
                               default:
                                 var pagi_desktop = "false";
                                 var pagi_mobile = "false";
                             }
                             // Render HTML
                             let data_all = [];
                             // Render CSS
                             var css = "";

                             // Slider Title
                             if(section_title){
                               var section_title_type_color = config.section_title_typography.color,
                                   section_title_type_font_size = config.section_title_typography.font_size,
                                   section_title_type_line_height = config.section_title_typography.line_height,
                                   section_title_type_text_transform = config.section_title_typography.text_transform,
                                   section_title_type_letter_spacing = config.section_title_typography.letter_spacing,
                                   section_title_type_text_align = config.section_title_typography.text_align,
                                   section_title_type_mb = config.section_title_typography.margin_bottom,
                                   section_title_type_font_weight = config.section_title_typography.font_weight;
                               var font_weight = section_title_type_font_weight && section_title_type_font_weight !== "italic" && section_title_type_font_weight !== "normal" ? section_title_type_font_weight.replace("italic", "") : font_normal;
                               var font_style = section_title_type_font_weight && section_title_type_font_weight.substr(-6) === "italic" ? "italic" : "";
                               var font_normal = section_title_type_font_weight && section_title_type_font_weight !== "italic" && section_title_type_font_weight === "normal" ? "normal" : "";
                               css += `
#simesy-testimonial-pro-wrapper-${id} .simesy-testimonial-pro-section-title{
margin: 0;
padding: 0;
margin-bottom:${section_title_type_mb}px;
color:${section_title_type_color};
font-size:${section_title_type_font_size}px;
line-height:${section_title_type_line_height}px;
text-transform:${section_title_type_text_transform};
letter-spacing:${section_title_type_letter_spacing};
text-align:${section_title_type_text_align};
font-weight:${font_weight};
font-style:${font_style}
}`;
                               if (section_title_font_load) {
                                 var section_title_type_font_family = config.section_title_typography.font_family;
                                 css += `
#simesy-testimonial-pro-wrapper-${id} .simesy-testimonial-pro-section-title{
font-family:${section_title_type_font_weight};
}`;
                               }
                             }
                             css += `
#simesy-testimonial-pro-wrapper-${id} .simesy-testimonial-pro-section {
display: none;
}
#simesy-testimonial-pro-wrapper-${id} .simesy-testimonial-pro-section.slick-initialized {
display: block;
}
#simesy-testimonial-pro-${id}.simesy-testimonial-pro-section .simesy-testimonial-pro-item{
padding-right:${testimonial_margin}px; 
}
#simesy-testimonial-pro-${id}.simesy-testimonial-pro-section .sp-tpro-items{
margin-right:-${testimonial_margin}px; }`
                             if(testimonial_image){
                               css += `
#simesy-testimonial-pro-${id}.simesy-testimonial-pro-section .tpro-client-image .sp-tpro-video i.fa{
color: ${video_icon_color};
}
#simesy-testimonial-pro-${id}.simesy-testimonial-pro-section .tpro-client-image .sp-tpro-video:before{
background: ${video_icon_color_overlay};
}
#simesy-testimonial-pro-${id}.simesy-testimonial-pro-section .tpro-client-image{
margin: ${testimonial_image_margin_top}px ${testimonial_image_margin_right}px ${testimonial_image_margin_bottom}px ${testimonial_image_margin_left}px;
text-align: ${testimonial_image_position};
}
#simesy-testimonial-pro-${id}.simesy-testimonial-pro-section .tpro-client-image img,
.sp-tpro-modal-testimonial-${id} .tpro-client-image img{
background: ${testimonial_image_bg};
border: ${testimonial_image_border_all}px ${testimonial_image_border_style} ${testimonial_image_border_color};
padding: ${testimonial_image_pd}px;
}
`
                             }
                             // Testimonial Title
                             if(testimonial_title){
                               var testimonial_title_type_color = config.testimonial_title_typography.color,
                                   testimonial_title_type_color_hover = config.testimonial_title_typography.hover_color,
                                   testimonial_title_type_font_size = config.testimonial_title_typography.font_size,
                                   testimonial_title_type_line_height = config.testimonial_title_typography.line_height,
                                   testimonial_title_type_text_transform = config.testimonial_title_typography.text_transform,
                                   testimonial_title_type_letter_spacing = config.testimonial_title_typography.letter_spacing,
                                   testimonial_title_type_text_align = config.testimonial_title_typography.text_align,
                                   testimonial_title_type_mt = config.testimonial_title_typography.margin_top,
                                   testimonial_title_type_mr = config.testimonial_title_typography.margin_right,
                                   testimonial_title_type_mb = config.testimonial_title_typography.margin_bottom,
                                   testimonial_title_type_ml = config.testimonial_title_typography.margin_left,
                                   testimonial_title_type_font_weight = config.testimonial_title_typography.font_weight;
                               var font_normal = testimonial_title_type_font_weight && testimonial_title_type_font_weight !== "italic" && testimonial_title_type_font_weight === "normal" ? "normal" : "";
                               var font_weight = testimonial_title_type_font_weight && testimonial_title_type_font_weight !== "italic" && testimonial_title_type_font_weight !== "normal" ? testimonial_title_type_font_weight.replace("italic", "") : font_normal;
                               var font_style = testimonial_title_type_font_weight && testimonial_title_type_font_weight.substr(-6) === "italic" ? "italic" : "";
                               css += `
#simesy-testimonial-pro-${id}.simesy-testimonial-pro-section .tpro-testimonial-title{
margin: ${testimonial_title_type_mt}px ${testimonial_title_type_mr}px ${testimonial_title_type_mb}px ${testimonial_title_type_ml}px;
}
#simesy-testimonial-pro-${id}.simesy-testimonial-pro-section .tpro-testimonial-title .sp-tpro-testimonial-title{
color: ${testimonial_title_type_color};
font-size: ${testimonial_title_type_font_size}px;
line-height: ${testimonial_title_type_line_height}px;
text-transform: ${testimonial_title_type_text_transform};
letter-spacing: ${testimonial_title_type_letter_spacing}px;
text-align: ${testimonial_title_type_text_align};
font-style: ${font_style};
font-weight: ${font_weight};
padding: 0;
margin: ${testimonial_title_type_mt}px ${testimonial_title_type_mr}px ${testimonial_title_type_mb}px ${testimonial_title_type_ml}px;
}`;
                               if (testimonial_title_font_load) {
                                 var testimonial_title_type_font_family = config.testimonial_title_typography.font_family;
                                 css += `
#simesy-testimonial-pro-${id}.simesy-testimonial-pro-section .tpro-testimonial-title .sp-tpro-testimonial-title{
font-family: ${testimonial_title_type_font_family};
}`;
                               }
                             }
                             // Testimonial Des Font
                             if(testimonial_content){
                               var testimonial_content_type_color = config.testimonial_content_typography.color,
                                   testimonial_content_type_font_size = config.testimonial_content_typography.font_size,
                                   testimonial_content_type_line_height = config.testimonial_content_typography.line_height,
                                   testimonial_content_type_text_transform = config.testimonial_content_typography.text_transform,
                                   testimonial_content_type_letter_spacing = config.testimonial_content_typography.letter_spacing,
                                   testimonial_content_type_text_align = config.testimonial_content_typography.text_align,
                                   testimonial_title_type_mt = config.testimonial_content_typography.margin_top,
                                   testimonial_title_type_mr = config.testimonial_content_typography.margin_right,
                                   testimonial_title_type_mb = config.testimonial_content_typography.margin_bottom,
                                   testimonial_title_type_ml = config.testimonial_content_typography.margin_left,
                                   testimonial_content_type_font_weight = config.testimonial_content_typography.font_weight;
                               var font_normal = testimonial_content_type_font_weight && testimonial_content_type_font_weight !== "italic" && testimonial_content_type_font_weight === "normal" ? "normal" : "";
                               var font_weight = testimonial_content_type_font_weight && testimonial_content_type_font_weight !== "italic" &&  testimonial_content_type_font_weight !== "normal" ? testimonial_content_type_font_weight.replace("italic", "") : font_normal;
                               var font_style = testimonial_content_type_font_weight && testimonial_content_type_font_weight.substr(-6) === "italic" ? "italic" : "";
                               css += `
#simesy-testimonial-pro-${id}.simesy-testimonial-pro-section .tpro-client-testimonial{
color: ${testimonial_content_type_color};
font-size: ${testimonial_content_type_font_size}px;
line-height: ${testimonial_content_type_line_height}px;
text-transform: ${testimonial_content_type_text_transform};
letter-spacing: ${testimonial_content_type_letter_spacing}px;
text-align: ${testimonial_content_type_text_align};

font-style: ${font_style};
font-weight: ${font_weight};
margin: ${testimonial_title_type_mt}px ${testimonial_title_type_mr}px ${testimonial_title_type_mb}px ${testimonial_title_type_ml}px;
}
`;
                               if (testimonial_content_font_load) {
                                 var testimonial_content_type_font_family = config.testimonial_content_typography.font_family;
                                 css += `
#simesy-testimonial-pro-${id}.simesy-testimonial-pro-section .tpro-client-testimonial{
font-family: ${testimonial_content_type_font_family};
}`
                               }
                               if(testimonial_content_readmore){
                                 css += `
#sp-testimonial-pro-${id}.sp-testimonial-pro-section a.tpro-read-more{
color:${testimonial_content_readmore_color};
}
#sp-testimonial-pro-${id}.sp-testimonial-pro-section a.tpro-read-more:hover{
color:${testimonial_content_readmore_hover};
}
`;
                               }
                             }
                             // FullName Font
                             if(testimonial_fullname){
                               var fullname_type_color = config.fullname_typography.color,
                                   fullname_type_font_size = config.fullname_typography.font_size,
                                   fullname_type_line_height = config.fullname_typography.line_height,
                                   fullname_type_text_transform = config.fullname_typography.text_transform,
                                   fullname_type_letter_spacing = config.fullname_typography.letter_spacing,
                                   fullname_type_text_align = config.fullname_typography.text_align,
                                   fullname_type_mt = config.fullname_typography.margin_top,
                                   fullname_type_mr = config.fullname_typography.margin_right,
                                   fullname_type_mb = config.fullname_typography.margin_bottom,
                                   fullname_type_ml = config.fullname_typography.margin_left,
                                   fullname_type_font_weight = config.fullname_typography.font_weight;
                               var font_normal = fullname_type_font_weight && fullname_type_font_weight !== "italic" && fullname_type_font_weight === "normal" ? "normal" : "";
                               var font_weight = fullname_type_font_weight && fullname_type_font_weight !== "italic" &&  fullname_type_font_weight !== "normal" ? fullname_type_font_weight.replace("italic", "") : font_normal;
                               var font_style = fullname_type_font_weight && fullname_type_font_weight.substr(-6) === "italic" ? "italic" : "";
                               css += `
#simesy-testimonial-pro-${id}.simesy-testimonial-pro-section .tpro-client-name{
color: ${fullname_type_color};
font-size: ${fullname_type_font_size}px;
line-height: ${fullname_type_line_height}px;
text-transform: ${fullname_type_text_transform};
letter-spacing: ${fullname_type_letter_spacing}px;
text-align: ${fullname_type_text_align};
font-style: ${font_style};
font-weight: ${font_weight};
margin: ${fullname_type_mt}px ${fullname_type_mr}px ${fullname_type_mb}px ${fullname_type_ml}px;
}
`;
                               if (fullname_font_load) {
                                 var fullname_type_font_family = config.fullname_typography.font_family;
                                 css += `
#simesy-testimonial-pro-${id}.simesy-testimonial-pro-section .tpro-client-name{
font-family: ${fullname_type_font_family};
}
`;
                               }
                             }

                             // Rate Icon
                             if(testimonial_client_rating){
                               var testimonial_client_rating_color = config.testimonial_client_rating_color,
                                   testimonial_client_rating_alignment = config.testimonial_client_rating_alignment,
                                   testimonial_client_rating_margin_top = config.testimonial_client_rating_margin.top != "" ? config.testimonial_client_rating_margin.top : "0",
                                   testimonial_client_rating_margin_right = config.testimonial_client_rating_margin.right != "" ? config.testimonial_client_rating_margin.right : "0",
                                   testimonial_client_rating_margin_bottom = config.testimonial_client_rating_margin.bottom != "" ? config.testimonial_client_rating_margin.bottom : "0",
                                   testimonial_client_rating_margin_left = config.testimonial_client_rating_margin.left != "" ? config.testimonial_client_rating_margin.left : "0";
                               css += `
#simesy-testimonial-pro-${id}.simesy-testimonial-pro-section .tpro-client-rating{
margin: ${testimonial_client_rating_margin_top}px ${testimonial_client_rating_margin_right}px ${testimonial_client_rating_margin_bottom}px ${testimonial_client_rating_margin_left}px;
text-align: ${testimonial_client_rating_alignment};
color: ${testimonial_client_rating_color};
}
`;
                             }
                             // Company Font
                             if(client_company_name){
                               var company_type_color = config.company_typography.color,
                                   company_type_font_size = config.company_typography.font_size,
                                   company_type_line_height = config.company_typography.line_height,
                                   company_type_text_transform = config.company_typography.text_transform,
                                   company_type_letter_spacing = config.company_typography.letter_spacing,
                                   company_type_text_align = config.company_typography.text_align,
                                   company_type_mt = config.company_typography.margin_top,
                                   company_type_mr = config.company_typography.margin_right,
                                   company_type_mb = config.company_typography.margin_bottom,
                                   company_type_ml = config.company_typography.margin_left,
                                   company_type_font_weight = config.company_typography.font_weight;
                               var font_normal = company_type_font_weight && company_type_font_weight !== "italic" && company_type_font_weight === "normal" ? "normal" : "";
                               var font_weight = company_type_font_weight && company_type_font_weight !== "italic" &&  company_type_font_weight !== "normal" ? company_type_font_weight.replace("italic", "") : font_normal;
                               var font_style = company_type_font_weight && company_type_font_weight.substr(-6) === "italic" ? "italic" : "";
                               css += `
#simesy-testimonial-pro-${id}.simesy-testimonial-pro-section .tpro-client-designation-company{
color: ${company_type_color};
font-size: ${company_type_font_size}px;
line-height: ${company_type_line_height}px;
text-transform: ${company_type_text_transform};
letter-spacing: ${company_type_letter_spacing}px;
text-align: ${company_type_text_align};
font-family: Open Sans;
font-style: ${font_style};
font-weight: ${font_weight};
margin: ${company_type_mt}px ${company_type_mr}px ${company_type_mb}px ${company_type_ml}px;
}
`;
                               if (company_font_load) {
                                 var company_type_font_family = config.company_typography.font_family;
                                 css += `
#simesy-testimonial-pro-${id}.simesy-testimonial-pro-section .tpro-client-designation-company{
font-family: ${company_type_font_family};
}`;
                               }
                             }
                             // Location Font
                             if(testimonial_client_location){
                               var location_type_color = config.location_typography.color,
                                   location_type_font_size = config.location_typography.font_size,
                                   location_type_line_height = config.location_typography.line_height,
                                   location_type_text_transform = config.location_typography.text_transform,
                                   location_type_letter_spacing = config.location_typography.letter_spacing,
                                   location_type_text_align = config.location_typography.text_align,
                                   location_type_mt = config.location_typography.margin_top,
                                   location_type_mr = config.location_typography.margin_right,
                                   location_type_mb = config.location_typography.margin_bottom,
                                   location_type_ml = config.location_typography.margin_left,
                                   location_type_font_weight = config.location_typography.font_weight;
                               var font_normal = location_type_font_weight && location_type_font_weight !== "italic" && location_type_font_weight === "normal" ? "normal" : "";
                               var font_weight = location_type_font_weight && location_type_font_weight !== "italic" &&  location_type_font_weight !== "normal" ? location_type_font_weight.replace("italic", "") : font_normal;
                               var font_style = location_type_font_weight && location_type_font_weight.substr(-6) === "italic" ? "italic" : "";
                               css += `
#sp-testimonial-pro-${id}.sp-testimonial-pro-section .tpro-client-location{
color: ${location_type_color};
font-size: ${location_type_font_size}px;
line-height: ${location_type_line_height}px;
text-transform: ${location_type_text_transform};
letter-spacing: ${location_type_letter_spacing}px;
text-align: ${location_type_text_align};
font-style: ${font_style};
font-weight: ${font_weight};
margin: ${location_type_mt}px ${location_type_mr}px ${location_type_mb}px ${location_type_ml}px;
}
`;
                               if (location_font_load) {
                                 var location_type_font_family = config.location_typography.font_family;
                                 css += `
#sp-testimonial-pro-${id}.sp-testimonial-pro-section .tpro-client-location{
font-family: ${location_type_font_family};
}`
                               }
                             }
                             // Phone Font
                             if(testimonial_client_phone){
                               var phone_type_color = config.phone_typography.color,
                                   phone_type_font_size = config.phone_typography.font_size,
                                   phone_type_line_height = config.phone_typography.line_height,
                                   phone_type_text_transform = config.phone_typography.text_transform,
                                   phone_type_letter_spacing = config.phone_typography.letter_spacing,
                                   phone_type_text_align = config.phone_typography.text_align,
                                   phone_type_mt = config.phone_typography.margin_top,
                                   phone_type_mr = config.phone_typography.margin_right,
                                   phone_type_mb = config.phone_typography.margin_bottom,
                                   phone_type_ml = config.phone_typography.margin_left,
                                   phone_type_font_weight = config.phone_typography.font_weight;
                               var font_normal = phone_type_font_weight && phone_type_font_weight !== "italic" && phone_type_font_weight === "normal" ? "normal" : "";
                               var font_weight = phone_type_font_weight && phone_type_font_weight !== "italic" &&  phone_type_font_weight !== "normal" ? phone_type_font_weight.replace("italic", "") : font_normal;
                               var font_style = phone_type_font_weight && phone_type_font_weight.substr(-6) === "italic" ? "italic" : "";
                               css += `
#sp-testimonial-pro-${id}.sp-testimonial-pro-section .tpro-client-phone{
color: ${phone_type_color};
font-size: ${phone_type_font_size}px;
line-height: ${phone_type_line_height}px;
text-transform: ${phone_type_text_transform};
letter-spacing: ${phone_type_letter_spacing}px;
text-align: ${phone_type_text_align};
font-style: ${font_style};
font-weight: ${font_weight};
margin: ${phone_type_mt}px ${phone_type_mr}px ${phone_type_mb}px ${phone_type_ml}px;
}
`;
                               if (phone_font_load) {
                                 var phone_type_font_family = config.phone_typography.font_family;
                                 css += `
#sp-testimonial-pro-${id}.sp-testimonial-pro-section .tpro-client-phone{
font-family: ${phone_type_font_family};
}`
                               }
                             }

                             // Email Font
                             if(testimonial_client_email){
                               var email_type_color = config.email_typography.color,
                                   email_type_font_size = config.email_typography.font_size,
                                   email_type_line_height = config.email_typography.line_height,
                                   email_type_text_transform = config.email_typography.text_transform,
                                   email_type_letter_spacing = config.email_typography.letter_spacing,
                                   email_type_text_align = config.email_typography.text_align,
                                   email_type_mt = config.email_typography.margin_top,
                                   email_type_mr = config.email_typography.margin_right,
                                   email_type_mb = config.email_typography.margin_bottom,
                                   email_type_ml = config.email_typography.margin_left,
                                   email_type_font_weight = config.email_typography.font_weight;
                               var font_normal = email_type_font_weight && email_type_font_weight !== "italic" && email_type_font_weight === "normal" ? "normal" : "";
                               var font_weight = email_type_font_weight && email_type_font_weight !== "italic" &&  email_type_font_weight !== "normal" ? email_type_font_weight.replace("italic", "") : font_normal;
                               var font_style = email_type_font_weight && email_type_font_weight.substr(-6) === "italic" ? "italic" : "";
                               css += `
#sp-testimonial-pro-${id}.sp-testimonial-pro-section .tpro-client-email{
color: ${email_type_color};
font-size: ${email_type_font_size}px;
line-height: ${email_type_line_height}px;
text-transform: ${email_type_text_transform};
letter-spacing: ${email_type_letter_spacing}px;
text-align: ${email_type_text_align};
font-style: ${font_style};
font-weight: ${font_weight};
margin: ${email_type_mt}px ${email_type_mr}px ${email_type_mb}px ${email_type_ml}px;
}
`;
                               if (email_font_load) {
                                 var email_type_font_weight = config.email_typography.font_family;
                                 css += `
#sp-testimonial-pro-${id}.sp-testimonial-pro-section .tpro-client-email{
font-family: ${email_type_font_weight};
}`
                               }
                             }

                             // Date Font
                             if(testimonial_client_date){
                               var date_type_color = config.date_typography.color,
                                   date_type_font_size = config.date_typography.font_size,
                                   date_type_line_height = config.date_typography.line_height,
                                   date_type_text_transform = config.date_typography.text_transform,
                                   date_type_letter_spacing = config.date_typography.letter_spacing,
                                   date_type_text_align = config.date_typography.text_align,
                                   date_type_mt = config.date_typography.margin_top,
                                   date_type_mr = config.date_typography.margin_right,
                                   date_type_mb = config.date_typography.margin_bottom,
                                   date_type_ml = config.date_typography.margin_left,
                                   date_type_font_weight = config.date_typography.font_weight;
                               var font_normal = date_type_font_weight && date_type_font_weight !== "italic" && date_type_font_weight === "normal" ? "normal" : "";
                               var font_weight = date_type_font_weight && date_type_font_weight !== "italic" &&  date_type_font_weight !== "normal" ? date_type_font_weight.replace("italic", "") : font_normal;
                               var font_style = date_type_font_weight && date_type_font_weight.substr(-6) === "italic" ? "italic" : "";
                               css += `
#sp-testimonial-pro-${id}.sp-testimonial-pro-section .tpro-client-date{
color: ${date_type_color};
font-size: ${date_type_font_size}px;
line-height: ${date_type_line_height}px;
text-transform: ${date_type_text_transform};
letter-spacing: ${date_type_letter_spacing}px;
text-align: ${date_type_text_align};
font-style: ${font_style};
font-weight: ${font_weight};
margin: ${date_type_mt}px ${date_type_mr}px ${date_type_mb}px ${date_type_ml}px;
}
`;
                               if (date_font_load) {
                                 var date_type_font_weight = config.date_typography.font_family;
                                 css += `
#sp-testimonial-pro-${id}.sp-testimonial-pro-section .tpro-client-date{
font-family: ${date_type_font_weight};
}`
                               }
                             }
                             // Website Font
                             if(testimonial_client_website){
                               var website_type_color = config.website_typography.color,
                                   website_type_font_size = config.website_typography.font_size,
                                   website_type_line_height = config.website_typography.line_height,
                                   website_type_text_transform = config.website_typography.text_transform,
                                   website_type_letter_spacing = config.website_typography.letter_spacing,
                                   website_type_text_align = config.website_typography.text_align,
                                   website_type_mt = config.website_typography.margin_top,
                                   website_type_mr = config.website_typography.margin_right,
                                   website_type_mb = config.website_typography.margin_bottom,
                                   website_type_ml = config.website_typography.margin_left,
                                   website_type_font_weight = config.website_typography.font_weight;
                               var font_normal = website_type_font_weight && website_type_font_weight !== "italic" && website_type_font_weight === "normal" ? "normal" : "";
                               var font_weight = website_type_font_weight && website_type_font_weight !== "italic" &&  website_type_font_weight !== "normal" ? website_type_font_weight.replace("italic", "") : font_normal;
                               var font_style = website_type_font_weight && website_type_font_weight.substr(-6) === "italic" ? "italic" : "";
                               css += `
#sp-testimonial-pro-${id}.sp-testimonial-pro-section .tpro-client-website{
color: ${website_type_color};
font-size: ${website_type_font_size}px;
line-height: ${website_type_line_height}px;
text-transform: ${website_type_text_transform};
letter-spacing: ${website_type_letter_spacing}px;
text-align: ${website_type_text_align};
font-style: ${font_style};
font-weight: ${font_weight};
margin: ${website_type_mt}px ${website_type_mr}px ${website_type_mb}px ${website_type_ml}px;
}
`;
                               if (website_font_load) {
                                 var website_type_font_weight = config.website_typography.font_family;
                                 css += `
#sp-testimonial-pro-${id}.sp-testimonial-pro-section .tpro-client-website{
font-family: ${website_type_font_weight};
}`
                               }
                             }
                             //Naviagtion
                             if (nav_desktop == "true" || nav_mobile == "true") {
                               var nav_color = config.navigation_color.color,
                                   nav_bg = config.navigation_color.background,
                                   nav_border = config.navigation_color.border,
                                   nav_color_hover = config.navigation_color.hover_color,
                                   nav_border_hover = config.navigation_color.hover_border,
                                   nav_bg_hover = config.navigation_color.hover_background,
                                   nav_size = config.navigation_size,
                                   nav_border_all = config.navigation_border.all,
                                   nav_border_style = config.navigation_border.style,
                                   nav_border_color = config.navigation_border.color,
                                   nav_border_hover_color = config.navigation_border.hover_color,
                                   nav_border_radius = config.nav_border_border_radius,
                                   nav_border_unit = config.nav_border_border_unit;
                               css += `
#simesy-testimonial-pro-${id}.simesy-testimonial-pro-section .slick-prev,
#simesy-testimonial-pro-${id}.simesy-testimonial-pro-section .slick-next{
background: ${nav_bg};
color: ${nav_color};
font-size: ${nav_size}px;
border: ${nav_border_all}px ${nav_border_style} ${nav_border_color};
border-radius: ${nav_border_radius}${nav_border_unit};
line-height: 32px;
}
#simesy-testimonial-pro-${id}.simesy-testimonial-pro-section .slick-prev:hover,
#simesy-testimonial-pro-${id}.simesy-testimonial-pro-section .slick-next:hover{
background: ${nav_bg_hover};
color: ${nav_color_hover};
border-color: ${nav_border_hover_color};
}
`;
                             }
                             //Pagination
                             if ( pagi_desktop == "true" || pagi_mobile == "true") {
                               var pagination_color = config.pagination_color.color,
                                   pagination_active_color = config.pagination_color.active_color,
                                   pagination_margin_top = config.pagination_margin.top,
                                   pagination_margin_right = config.pagination_margin.right,
                                   pagination_margin_bottom = config.pagination_margin.bottom,
                                   pagination_margin_left = config.pagination_margin.left;
                               css += `
#simesy-testimonial-pro-${id}.simesy-testimonial-pro-section .slick-dots{
margin: ${pagination_margin_top}px ${pagination_margin_right}px ${pagination_margin_bottom}px ${pagination_margin_left}px;
}#simesy-testimonial-pro-${id}.simesy-testimonial-pro-section .slick-dots li button{
background: ${pagination_color};
}
#simesy-testimonial-pro-${id}.simesy-testimonial-pro-section .slick-dots li.slick-active button{
background: ${pagination_active_color};
}
`;
                             }
                             if(social_profile){
                               var social_profile_margin_top = config.social_profile_margin.top,
                                   social_profile_margin_right = config.social_profile_margin.right,
                                   social_profile_margin_bottom = config.social_profile_margin.bottom,
                                   social_profile_margin_left = config.social_profile_margin.left,
                                   social_profile_position = config.social_profile_position,
                                   social_icon_border_radius = config.social_icon_border_radius,
                                   social_icon_border_unit = config.social_icon_border_unit,
                                   social_icon_custom_color = config.social_icon_custom_color,
                                   social_icon_color_bg = config.social_icon_color.bg,
                                   social_icon_color_color = config.social_icon_color.color,
                                   social_icon_color_bg_hover = config.social_icon_color.hover_background,
                                   social_icon_color_color_hover = config.social_icon_color.hover_color,
                                   social_icon_border_all = config.social_icon_border.all,
                                   social_icon_border_style = config.social_icon_border.style,
                                   social_icon_border_color = config.social_icon_border.color,
                                   social_icon_border_color_hover = config.social_icon_border.hover_color;
                               css += `
#sp-testimonial-pro-wrapper-${id} .sp-testimonial-pro-section .tpro-social-profile{
text-align:${social_profile_position};
}
#sp-testimonial-pro-wrapper-${id} .sp-testimonial-pro-section .tpro-social-profile a, .sp-tpro-modal-testimonial-49.sp-tpro-modal-testimonial .tpro-social-profile a{
color: ${social_icon_custom_color};
background: ${social_icon_color_bg};
border: ${social_icon_border_all}px ${social_icon_border_style} ${social_icon_border_color};
-webkit-border-radius: ${social_icon_border_radius}${social_icon_border_unit};
-moz-border-radius: ${social_icon_border_radius}${social_icon_border_unit};
border-radius: ${social_icon_border_radius}${social_icon_border_unit};
}
`;
                             }

                             var testimonial_border_all = config.testimonial_border.all,
                                 testimonial_border_style = config.testimonial_border.style,
                                 testimonial_border_color = config.testimonial_border.color,
                                 testimonial_bg = config.testimonial_bg,
                                 testimonial_inner_padding_top = config.testimonial_inner_padding.top,
                                 testimonial_inner_padding_right = config.testimonial_inner_padding.right,
                                 testimonial_inner_padding_bottom = config.testimonial_inner_padding.bottom,
                                 testimonial_inner_padding_left = config.testimonial_inner_padding.left;

                             if(["theme_two", "theme_three", "theme_four","theme_five","theme_six","theme_seven"].includes(theme_style)){
                               css += `
#simesy-testimonial-pro-${id}.simesy-testimonial-pro-section .simesy-testimonial-pro{
border: ${testimonial_border_all}px ${testimonial_border_style} ${testimonial_border_color};
background: ${testimonial_bg};
}
#simesy-testimonial-pro-${id}.simesy-testimonial-pro-section .simesy-testimonial-pro{
padding: ${testimonial_inner_padding_top}px ${testimonial_inner_padding_right}px ${testimonial_inner_padding_bottom}px ${testimonial_inner_padding_left}px;
}
#simesy-testimonial-pro-${id}.simesy-testimonial-pro-section .simesy-testimonial-pro{
margin-left:65px;
position: relative;
padding: 22px 22px 22px 87px;
}`
                             }
                             if(["theme_eight","theme_nine"].includes(theme_style)){
                               var testimonial_info_border_all = config.testimonial_info_border.all,
                                   testimonial_info_border_style = config.testimonial_info_border.style,
                                   testimonial_info_border_color = config.testimonial_info_border.color,
                                   testimonial_info_bg = config.testimonial_info_bg,
                                   testimonial_info_inner_padding_top = config.testimonial_info_inner_padding.top,
                                   testimonial_info_inner_padding_right = config.testimonial_info_inner_padding.right,
                                   testimonial_info_inner_padding_left = config.testimonial_info_inner_padding.left,
                                   testimonial_info_inner_padding_bottom = config.testimonial_info_inner_padding.bottom;
                               css += `
#simesy-testimonial-pro-${id}.simesy-testimonial-pro-section .simesy-testimonial-pro .tpro-testimonial-content-area{
border: ${testimonial_border_all}px ${testimonial_border_style} ${testimonial_border_color};
background: ${testimonial_bg};
padding:${testimonial_inner_padding_top}px ${testimonial_inner_padding_right}px ${testimonial_inner_padding_bottom}px ${testimonial_inner_padding_left}px;
position:relative;
}
#simesy-testimonial-pro-${id}.simesy-testimonial-pro-section .simesy-testimonial-pro .tpro-testimonial-meta-area{
border: ${testimonial_info_border_all}px ${testimonial_info_border_style} ${testimonial_info_border_color};
background: ${testimonial_info_bg};
padding:${testimonial_info_inner_padding_top}px ${testimonial_info_inner_padding_right}px ${testimonial_info_inner_padding_bottom}px ${testimonial_info_inner_padding_left}px;
}
`
                               if(["theme_ten"].includes(theme_style)){
                                 var testimonial_shadow_color = config.testimonial_shadow_color,
                                     testimonial_top_bg = config.testimonial_top_bg,
                                     testimonial_border_radius = config.testimonial_border_radius;
                                 css += `
#simesy-testimonial-pro-${id}.simesy-testimonial-pro-section .simesy-testimonial-pro .sp-tpro-top-background{
background: ${testimonial_shadow_color};
height:86px;
width:100%;
position: absolute;
top: 0;
left: 0;
z-index: 1;
-webkit-border-radius: ${testimonial_border_radius}px ${testimonial_border_radius}px 0 0;
-moz-border-radius: ${testimonial_border_radius}px ${testimonial_border_radius}px 0 0;
border-radius: ${testimonial_border_radius}px ${testimonial_border_radius}px 0 0;
}`;
                               }

                             }
                             if(testimonial_image_border_shadow == 'box_shadow' && testimonial_image){
                               var testimonial_image_shadow = config.testimonial_image_shadow;
                               css +=`
#simesy-testimonial-pro-${id}.simesy-testimonial-pro-section .tpro-client-image img, .sp-tpro-modal-testimonial-${id} .tpro-client-image img{
background: ${testimonial_image_bg};
padding: 3px;
box-shadow: 0px 0px 7px 0px ${testimonial_image_shadow};
margin: 7px;
}
`
                             }
                             css +=`
#simesy-testimonial-pro-wrapper-${id} .simesy-testimonial-pro-section{
padding: 0 60px;
}
/* xs */
@media (max-width: 600px) {
#simesy-testimonial-pro-wrapper-${id} .simesy-testimonial-pro-section{
padding: 0 30px;
}
}

#simesy-testimonial-pro-wrapper-${id} .slick-next {
right: 0px;
}

#simesy-testimonial-pro-wrapper-${id} .slick-prev {
left: 0;
}
`;

                             $("#simesy-testimonial-pro-wrapper-"+id).before(`<style>${css}</style>`);
                             var html = "";
                             var slider_data = ' data-layout="' + layout_present + '" data-preloader=' + pre_loader + "";
                             var grid_style_class = layout_present == "grid" ? " grid_style_" + config.grid_style[0] : "";
                             if (layout_present == "slider") {
                               var  carousel_pause_on_hover = config.slide_pause_on_hover,
                                   rtl_mode = config.slider_direction;
                               if (carousel_ticker_mode == "false") {
                                 var columns_1 = config.columns_large_desktop != "" ? config.columns_large_desktop : "1",
                                     columns_2 = config.columns_desktop != "" ? config.columns_desktop : "1",
                                     columns_3 = config.columns_laptop != "" ? config.columns_laptop : "1",
                                     columns_4 = config.columns_large_tablet != "" ? config.columns_large_tablet : "1",
                                     columns_5 = config.columns_large_mobile != "" ? config.columns_large_mobile : "1",
                                     carousel_auto_play = config.slider_autoplay,
                                     carousel_auto_play_speed = config.slider_autoplay_speed != "" ? config.slider_autoplay_speed : "3000",
                                     carousel_scroll_speed = config.slider_scroll_speed != "" ? config.slider_scroll_speed : "600",
                                     slides_to_scroll_1 = config.slide_to_scroll_large_desktop != "" ? config.slide_to_scroll_large_desktop : "1",
                                     slides_to_scroll_2 = config.slide_to_scroll_desktop != "" ? config.slide_to_scroll_desktop : "1",
                                     slides_to_scroll_3 = config.slide_to_scroll_laptop != "" ? config.slide_to_scroll_laptop : "1",
                                     slides_to_scroll_4 = config.slide_to_scroll_tablet != "" ? config.slide_to_scroll_tablet : "1",
                                     slides_to_scroll_5 = config.slide_to_scroll_mobile != "" ? config.slide_to_scroll_mobile : "1",
                                     carousel_infinite = config.slide_infinite,
                                     slider_row_1 = config.slide_row_large_desktop != "" ? config.slide_row_large_desktop : "1",
                                     slider_row_2 = config.slide_row_desktop != "" ? config.slide_row_desktop : "1",
                                     slider_row_3 = config.slide_row_laptop != "" ? config.slide_row_laptop : "1",
                                     slider_row_4 = config.slide_row_tablet != "" ? config.slide_row_tablet : "1",
                                     slider_row_5 = config.slide_row_mobile != "" ? config.slide_row_mobile : "1",
                                     slide_animation = config.slide_animation,
                                     carousel_swipe = config.carousel_swipe,
                                     carousel_draggable = config.carousel_draggable;
                                 slider_data += ' data-mode="normal" data-lightbox="" data-arrowicon="' + navigation_arrow_type +  '" data-slick=\'{"dots": ' +  pagi_desktop +',"adaptiveHeight":'+adaptive_height+', "pauseOnHover": ' + carousel_pause_on_hover + ', "slidesToShow": ' +  columns_1 + ', "speed": ' + carousel_scroll_speed + ', "arrows": ' + nav_desktop + ', "autoplay": ' + carousel_auto_play + ', "autoplaySpeed": ' + carousel_auto_play_speed + ', "swipe": ' + carousel_swipe + ', "draggable": ' + carousel_draggable + ', "rtl": ' + rtl_mode + ', "infinite": ' + carousel_infinite + ', "slidesToScroll": ' + slides_to_scroll_1 + ', "rows": ' + slider_row_1 + ', "responsive": [{"breakpoint": 1280, "settings": { "slidesToShow": ' + columns_2 + ', "slidesToScroll": ' + slides_to_scroll_2 + ', "rows": ' + slider_row_2 + ' } },{"breakpoint": 980, "settings": { "slidesToShow": ' + columns_3 + ', "slidesToScroll": ' + slides_to_scroll_3 + ', "rows": ' + slider_row_3 + ' } },{"breakpoint": 736, "settings": { "slidesToShow": ' + columns_4 + ', "slidesToScroll": ' + slides_to_scroll_4 + ', "rows": ' + slider_row_4 + ' }, {"breakpoint":480, "settings": { "slidesToShow": ' + columns_5 + ', "slidesToScroll": ' + slides_to_scroll_5 + ', "rows": ' + slider_row_5 + ', "dots": ' + pagi_mobile + ', "arrows": ' + nav_mobile + " } } ] }'";
                               } else {
                                 var ticker_scroll_speed = config.slider_scroll_speed,
                                     carousel_slide_width = config.carousel_slide_width,
                                     number_of_columns_ticker_1 = config.number_of_columns_ticker.number1 != "" ? config.number_of_columns_ticker.number1 : "5", 
                                     number_of_columns_ticker_4 = config.number_of_columns_ticker.number4 != "" ? config.number_of_columns_ticker.number4 : "2"; 
                                 slider_data += ' data-mode="ticker" data-ticker=\'{ "pauseOnHover": ' + carousel_pause_on_hover + ', "speed": ' + ticker_scroll_speed + ', "rtl": ' + rtl_mode + ', "maxColumn":' + number_of_columns_ticker_1 + ', "minColumn":' + number_of_columns_ticker_4 + ', "slideMargin":' + product_margin + ', "slideWidth":' + carousel_slide_width + " }'";
                               }
                             } else {
                             }
                             html += '<h2 class="simesy-testimonial-pro-section-title">Testimonial Slider (Default Free Demo)</h2>';

                             html += '<div id="simesy-testimonial-pro-' + id + '" class="simesy-product-section simesy-product-section-' + id + ' normal" ' + slider_data + ">";
                             html += "</div>";
                             html += "</div></div>";
                             $(".simesy-testi-section-" + id).addClass( "navigation_position_" +navigation_position +" "+grid_style_class + " simesy_" + config.theme_style + "");
                             $(".simesy-testi-section-" + id).html(html);
                             $.each(testimonial_list, function (index, item_testi) {
                               //console.log(item_testi)
                               var class_gird = layout_present == "grid" ? "simesy-masonry-item sp-simesy-col-xl-4 sp-simesy-col-lg-3 sp-simesy-col-md-2 sp-simesy-col-sm-1" : "";

                               //$("#simesy-product-slider-" + id + "").append(html_theme);
                             });
                             function smartTrim(str, length, appendix) {
                               var check_array = str.split(" ");
                               var str_title = str.split(/\s+/).slice(0, length).join(" ");
                               if (check_array.length >= length) {
                                 str_title += appendix;
                               }
                               return str_title;
                             }


                           };

                           if (typeof jQuery === "undefined" || parseFloat(jQuery.fn.jquery) < 1.7) {
                             loadScript(
                               "//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js",
                               function () {
                                 //     jQuery191 = jQuery.noConflict(true);
                                 initTestimonialSliderLibrary(jQuery);
                                 initTestimonialSlider(jQuery);
                               }
                             );
                           } else {
                             initTestimonialSliderLibrary(jQuery);
                             initTestimonialSlider(jQuery);
                           }
                          })();