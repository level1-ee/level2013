/**
 * jQuery CSS Customizable Scrollbar
 *
 * Copyright 2013, Yuriy Khabarov
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * If you found bug, please contact me via email <13real008@gmail.com>
 *
 * @author Yuriy Khabarov aka Gromo
 * @version 0.1.4
 * @url https://github.com/gromo/dslib/tree/master/jquery.scrollbar
 *
 * TODO:
 *
 */
(function(e,t,n){function h(){var t={border:"none",height:"100px",margin:"0",padding:"0",width:"100px"};var n=e("<div>").css(e.extend({},t));var i=e("<div>").css(e.extend({background:"#F00",left:"-200px",overflow:"scroll",position:"absolute",top:"-200px"},t)).append(n).appendTo("body").scrollLeft(n.width()).scrollTop(n.height());var s={height:i.offset().top-n.offset().top||0,width:i.offset().left-n.offset().left||0};if(r.webkit){s.height=0;s.width=0}i.remove();return s}function p(n,r){e(t).on({"blur.scrollbar":function(){e(t).add("body").off(".scrollbar");n()},"dragstart.scrollbar":function(e){e.preventDefault();return false},"mouseup.scrollbar":function(){e(t).add("body").off(".scrollbar");n()}});e("body").on({"selectstart.scrollbar":function(e){e.preventDefault();return false}});r&&r.preventDefault();return false}function d(e){var t=e.originalEvent;if(t.axis&&t.axis===t.HORIZONTAL_AXIS)return false;if(t.wheelDeltaX)return false;return true}var r={mobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),webkit:n.WebKitPoint?true:false,log:function(t,r){var i=t;if(r&&typeof t!="string"){i=[];e.each(t,function(e,t){i.push('"'+e+'": '+t)});i=i.join(", ")}if(n.console&&n.console.log){n.console.log(i)}},scroll:null};var i=false;var s=1,o="px";var u=[];var a={autoScrollSize:true,disableBodyScroll:false,duration:200,ignoreMobile:true,scrollStep:30,showArrows:true,type:"advanced",scrollx:null,scrolly:null,onInit:null,onDestroy:null};var f=function(t,n){if(!r.scroll){r.scroll=h();r.log("Init jQuery CSS Customizable Scrollbar v0.1.4")}this.container=t;this.options=e.extend({},a);this.scrollx={};this.scrolly={};if(!(r.mobile&&this.options.ignoreMobile))this.init(n)};f.prototype={destroy:function(){if(!this.wrapper){return}var n=this.container.scrollLeft();var r=this.container.scrollTop();this.container.insertBefore(this.wrapper).css({height:"",margin:""}).removeClass("scroll-content").removeClass("scroll-scrollx_show").removeClass("scroll-scrolly_show").off(".scrollbar").scrollLeft(n).scrollTop(r);this.scrollx.scrollbar.hide().find("div").andSelf().off(".scrollbar");this.scrolly.scrollbar.hide().find("div").andSelf().off(".scrollbar");this.wrapper.remove();e(t).add("body").off(".scrollbar");if(e.isFunction(this.options.onDestroy))this.options.onDestroy.apply(this,[this.container])},getScrollbar:function(t){var n=this.options["scroll"+t];var r={advanced:'<div class="scroll-arrow scroll-arrow_less"></div>'+'<div class="scroll-arrow scroll-arrow_more"></div>'+'<div class="scroll-element_outer">'+'    <div class="scroll-element_size"></div>'+'    <div class="scroll-element_inner-wrapper">'+'        <div class="scroll-element_inner">'+'            <div class="scroll-element_inner-bottom"></div>'+"        </div>"+"    </div>"+'    <div class="scroll-bar">'+'        <div class="scroll-bar_body">'+'            <div class="scroll-bar_body-inner"></div>'+"        </div>"+'        <div class="scroll-bar_bottom"></div>'+'        <div class="scroll-bar_center"></div>'+"    </div>"+"</div>",simple:'<div class="scroll-element_outer">'+'    <div class="scroll-element_size"></div>'+'    <div class="scroll-element_inner"></div>'+'    <div class="scroll-bar"></div>'+"</div>"};var i=r[this.options.type]?this.options.type:"advanced";if(n){if(typeof n=="string"){n=e(n).appendTo(this.wrapper)}else{n=e(n)}}else{n=e("<div>").addClass("scroll-element").html(r[i]).appendTo(this.wrapper)}if(this.options.showArrows){n.addClass("scroll-element_show-arrows")}return n.addClass("scroll-"+t)},init:function(n){function v(t,n){var i="scroll-scroll"+t+"_show";var s=t=="x"?f.y:f.x;var a=parseInt(u.css(t=="x"?"left":"top"),10)||0;var c=n.size;var h=n.visible+a;n.isVisible=c>h;if(n.isVisible){n.scrollbar.show();s.scrollbar.addClass(i);u.addClass(i)}else{n.scrollbar.hide();s.scrollbar.removeClass(i);u.removeClass(i)}if(t=="y"){u.css("height",n.isVisible?h+r.scroll.height+o:"auto")}if(f.x.size!=u.prop("scrollWidth")||f.y.size!=u.prop("scrollHeight")||f.x.visible!=l.width()||f.y.visible!=l.height()||f.x.offset!=(parseInt(u.css("left"),10)||0)||f.y.offset!=(parseInt(u.css("top"),10)||0)){e.each(f,function(t,n){e.extend(n,t=="x"?{offset:parseInt(u.css("left"),10)||0,size:u.prop("scrollWidth"),visible:l.width()}:{offset:parseInt(u.css("top"),10)||0,size:u.prop("scrollHeight"),visible:l.height()})});v(t=="x"?"y":"x",s)}}var i=this;var u=this.container;var a=e.extend(this.options,n);var f={x:this.scrollx,y:this.scrolly};var l=this.wrapper;var c={scrollLeft:u.scrollLeft(),scrollTop:u.scrollTop()};if(!l){this.wrapper=l=u.wrap(e("<div>").css({position:u.css("position")=="absolute"?"absolute":"relative"}).addClass("scroll-wrapper").addClass(u.attr("class"))).parent();u.addClass("scroll-content").css({height:"auto","margin-bottom":r.scroll.height*-1+o,"margin-right":r.scroll.width*-1+o}).on("scroll.scrollbar",function(){f.x.isVisible&&f.x.scroller.css("left",u.scrollLeft()*f.x.kx+o);f.y.isVisible&&f.y.scroller.css("top",u.scrollTop()*f.y.kx+o)});if(a.disableBodyScroll){var h=function(e){d(e)?f.y.isVisible&&f.y.mousewheel(e):f.x.isVisible&&f.x.mousewheel(e)};l.on({"MozMousePixelScroll.scrollbar":h,"mousewheel.scrollbar":h})}}else{u.css({height:"auto"})}e.each(f,function(n,r){var o=null;var l=true;var c=n=="x"?"scrollLeft":"scrollTop";var h=a.scrollStep;var v=function(){var e=u[c]();u[c](e+h);if(l==true&&e+h>=m)e=u[c]();if(l==false&&e+h<=m)e=u[c]();if(u[c]()==e&&o){o()}};var m=0;if(!r.scrollbar){r.scrollbar=i.getScrollbar(n);r.scroller=r.scrollbar.find(".scroll-bar");r.mousewheel=function(e){if(!r.isVisible||n=="x"&&d(e)){return}if(n=="y"&&!d(e)){f.x.mousewheel(e);return}var t=e.originalEvent.wheelDelta*-1||e.originalEvent.detail;var i=r.size-r.visible-r.offset;if(!(m<=0&&t<0||m>=i&&t>0)){m=m+t;if(m<0)m=0;if(m>i)m=i;var s={};s[c]=m;u.stop().animate(s,240,"linear",function(){m=u[c]()})}e.preventDefault();return false};r.scrollbar.on({"MozMousePixelScroll.scrollbar":r.mousewheel,"mousewheel.scrollbar":r.mousewheel,"mouseenter.scrollbar":function(){m=u[c]()}});r.scrollbar.find(".scroll-arrow, .scroll-element_inner").on("mousedown.scrollbar",function(t){if(t.which!=s)return;l=true;var i=r.size-r.visible-r.offset;if(e(this).hasClass("scroll-arrow")){l=e(this).hasClass("scroll-arrow_more");h=l?a.scrollStep:a.scrollStep*-1;m=l?i:0}else{l=t[n=="x"?"pageX":"pageY"]>r.scroller.offset()[n=="x"?"left":"top"];h=l?r.visible:r.visible*-1;m=t[n=="x"?"pageX":"pageY"]-r.scroller.offset()[n=="x"?"left":"top"];if(l)m=m-r.scroller[n=="x"?"width":"height"]();m=u[c]()+m/r.kx}var f=0,d=0;o=function(){m=u[c]();clearInterval(d);clearTimeout(f);f=0;d=0};f=setTimeout(function(){d=setInterval(v,40)},a.duration+100);var g={};g[c]=u[c]()+h;u.animate(g,a.duration);return p(o,t)});r.scroller.on("mousedown.scrollbar",function(i){if(i.which!=s)return;var o=i[n=="x"?"pageX":"pageY"];var a=u[c]();r.scrollbar.addClass("scroll-draggable");e(t).on("mousemove.scrollbar",function(e){var t=parseInt((e[n=="x"?"pageX":"pageY"]-o)/r.kx,10);u[c](a+t)});return p(function(){r.scrollbar.removeClass("scroll-draggable");m=u[c]()},i)})}});e.each(f,function(e,t){var n="scroll-scroll"+e+"_show";var r=e=="x"?f.y:f.x;t.scrollbar.hide();r.scrollbar.removeClass(n);u.removeClass(n)});e.each(f,function(t,n){e.extend(n,t=="x"?{offset:parseInt(u.css("left"),10)||0,size:u.prop("scrollWidth"),visible:l.width()}:{offset:parseInt(u.css("top"),10)||0,size:u.prop("scrollHeight"),visible:l.height()})});e.each(f,v);e.each(f,function(e,t){var n=e=="x"?"left":"top";var r=e=="x"?"width":"height";var i=parseInt(u.css(n),10)||0;var s=t.size;var f=t.visible+i;t.scrollbar.css(r,t.visible+o);var l=t.scrollbar.find(".scroll-element_size");l=l[r]()+parseInt(l.css(n)||0,10);if(a.autoScrollSize){t.scrollbarSize=parseInt(l*f/s,10);t.scroller.css(r,t.scrollbarSize+o)}t.scrollbarSize=parseInt(t.scroller.css(r),10);t.kx=(l-t.scrollbarSize)/(s-f)||1});if(e.isFunction(a.onInit))a.onInit.apply(this,[u]);u.scrollLeft(c.scrollLeft).scrollTop(c.scrollTop).trigger("scroll")}};e.fn.scrollbar=function(t,n){var r=this;if(t=="get")r=null;this.each(function(){var i=e(this);if(i.hasClass("scroll-wrapper")||i.get(0).nodeName=="body"){return}var s=i.data("scrollbar");if(s){if(t==="get"){r=s;return false}t=typeof t=="string"&&s[t]?t:"init";s[t].apply(s,e.isArray(n)?n:[]);if(t=="destroy"){i.removeData("scrollbar");while(e.inArray(s,u)>=0)u.splice(e.inArray(s,u),1)}}else{if(typeof t!="string"){s=new f(i,t);i.data("scrollbar",s);u.push(s)}}});return r};var l=0;var c=setInterval(function(){var e,t,n,s,o,a;for(e=0;e<u.length;e++){n=u[e];t=n.container;s=n.wrapper;o=n.scrollx;a=n.scrolly;if(s.is(":visible")&&(t.prop("scrollWidth")!=o.size||t.prop("scrollHeight")!=a.size||s.width()!=o.visible||s.height()!=a.visible)){n.init();if(i){r.log({scrollHeight:t.prop("scrollHeight")+":"+n.scrolly.size,scrollWidth:t.prop("scrollWidth")+":"+n.scrollx.size,visibleHeight:s.height()+":"+n.scrolly.visible,visibleWidth:s.width()+":"+n.scrollx.visible},true);if(l++>100){r.log("Scroll udpates exceed 100");clearInterval(c)}}}}},300)})(jQuery,document,window);





/*
 * jQuery EasyTabs plugin 3.2.0
 *
 * Copyright (c) 2010-2011 Steve Schwartz (JangoSteve)
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Date: Thu May 09 17:30:00 2013 -0500
 */
(function(a){a.easytabs=function(j,e){var f=this,q=a(j),i={animate:true,panelActiveClass:"active",tabActiveClass:"active",defaultTab:"li:first-child",animationSpeed:"normal",tabs:"> ul > li",updateHash:true,cycle:false,collapsible:false,collapsedClass:"collapsed",collapsedByDefault:true,uiTabs:false,transitionIn:"fadeIn",transitionOut:"fadeOut",transitionInEasing:"swing",transitionOutEasing:"swing",transitionCollapse:"slideUp",transitionUncollapse:"slideDown",transitionCollapseEasing:"swing",transitionUncollapseEasing:"swing",containerClass:"",tabsClass:"",tabClass:"",panelClass:"",cache:true,event:"click",panelContext:q},h,l,v,m,d,t={fast:200,normal:400,slow:600},r;f.init=function(){f.settings=r=a.extend({},i,e);r.bind_str=r.event+".easytabs";if(r.uiTabs){r.tabActiveClass="ui-tabs-selected";r.containerClass="ui-tabs ui-widget ui-widget-content ui-corner-all";r.tabsClass="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all";r.tabClass="ui-state-default ui-corner-top";r.panelClass="ui-tabs-panel ui-widget-content ui-corner-bottom"}if(r.collapsible&&e.defaultTab!==undefined&&e.collpasedByDefault===undefined){r.collapsedByDefault=false}if(typeof(r.animationSpeed)==="string"){r.animationSpeed=t[r.animationSpeed]}a("a.anchor").remove().prependTo("body");q.data("easytabs",{});f.setTransitions();f.getTabs();b();g();w();n();c();q.attr("data-easytabs",true)};f.setTransitions=function(){v=(r.animate)?{show:r.transitionIn,hide:r.transitionOut,speed:r.animationSpeed,collapse:r.transitionCollapse,uncollapse:r.transitionUncollapse,halfSpeed:r.animationSpeed/2}:{show:"show",hide:"hide",speed:0,collapse:"hide",uncollapse:"show",halfSpeed:0}};f.getTabs=function(){var x;f.tabs=q.find(r.tabs),f.panels=a(),f.tabs.each(function(){var A=a(this),z=A.children("a"),y=A.children("a").data("target");A.data("easytabs",{});if(y!==undefined&&y!==null){A.data("easytabs").ajax=z.attr("href")}else{y=z.attr("href")}y=y.match(/#([^\?]+)/)[1];x=r.panelContext.find("#"+y);if(x.length){x.data("easytabs",{position:x.css("position"),visibility:x.css("visibility")});x.not(r.panelActiveClass).hide();f.panels=f.panels.add(x);A.data("easytabs").panel=x}else{f.tabs=f.tabs.not(A);if("console" in window){console.warn("Warning: tab without matching panel for selector '#"+y+"' removed from set")}}})};f.selectTab=function(x,C){var y=window.location,B=y.hash.match(/^[^\?]*/)[0],z=x.parent().data("easytabs").panel,A=x.parent().data("easytabs").ajax;if(r.collapsible&&!d&&(x.hasClass(r.tabActiveClass)||x.hasClass(r.collapsedClass))){f.toggleTabCollapse(x,z,A,C)}else{if(!x.hasClass(r.tabActiveClass)||!z.hasClass(r.panelActiveClass)){o(x,z,A,C)}else{if(!r.cache){o(x,z,A,C)}}}};f.toggleTabCollapse=function(x,y,z,A){f.panels.stop(true,true);if(u(q,"easytabs:before",[x,y,r])){f.tabs.filter("."+r.tabActiveClass).removeClass(r.tabActiveClass).children().removeClass(r.tabActiveClass);if(x.hasClass(r.collapsedClass)){if(z&&(!r.cache||!x.parent().data("easytabs").cached)){q.trigger("easytabs:ajax:beforeSend",[x,y]);y.load(z,function(C,B,D){x.parent().data("easytabs").cached=true;q.trigger("easytabs:ajax:complete",[x,y,C,B,D])})}x.parent().removeClass(r.collapsedClass).addClass(r.tabActiveClass).children().removeClass(r.collapsedClass).addClass(r.tabActiveClass);y.addClass(r.panelActiveClass)[v.uncollapse](v.speed,r.transitionUncollapseEasing,function(){q.trigger("easytabs:midTransition",[x,y,r]);if(typeof A=="function"){A()}})}else{x.addClass(r.collapsedClass).parent().addClass(r.collapsedClass);y.removeClass(r.panelActiveClass)[v.collapse](v.speed,r.transitionCollapseEasing,function(){q.trigger("easytabs:midTransition",[x,y,r]);if(typeof A=="function"){A()}})}}};f.matchTab=function(x){return f.tabs.find("[href='"+x+"'],[data-target='"+x+"']").first()};f.matchInPanel=function(x){return(x&&f.validId(x)?f.panels.filter(":has("+x+")").first():[])};f.validId=function(x){return x.substr(1).match(/^[A-Za-z]+[A-Za-z0-9\-_:\.].$/)};f.selectTabFromHashChange=function(){var y=window.location.hash.match(/^[^\?]*/)[0],x=f.matchTab(y),z;if(r.updateHash){if(x.length){d=true;f.selectTab(x)}else{z=f.matchInPanel(y);if(z.length){y="#"+z.attr("id");x=f.matchTab(y);d=true;f.selectTab(x)}else{if(!h.hasClass(r.tabActiveClass)&&!r.cycle){if(y===""||f.matchTab(m).length||q.closest(y).length){d=true;f.selectTab(l)}}}}}};f.cycleTabs=function(x){if(r.cycle){x=x%f.tabs.length;$tab=a(f.tabs[x]).children("a").first();d=true;f.selectTab($tab,function(){setTimeout(function(){f.cycleTabs(x+1)},r.cycle)})}};f.publicMethods={select:function(x){var y;if((y=f.tabs.filter(x)).length===0){if((y=f.tabs.find("a[href='"+x+"']")).length===0){if((y=f.tabs.find("a"+x)).length===0){if((y=f.tabs.find("[data-target='"+x+"']")).length===0){if((y=f.tabs.find("a[href$='"+x+"']")).length===0){a.error("Tab '"+x+"' does not exist in tab set")}}}}}else{y=y.children("a").first()}f.selectTab(y)}};var u=function(A,x,z){var y=a.Event(x);A.trigger(y,z);return y.result!==false};var b=function(){q.addClass(r.containerClass);f.tabs.parent().addClass(r.tabsClass);f.tabs.addClass(r.tabClass);f.panels.addClass(r.panelClass)};var g=function(){var y=window.location.hash.match(/^[^\?]*/)[0],x=f.matchTab(y).parent(),z;if(x.length===1){h=x;r.cycle=false}else{z=f.matchInPanel(y);if(z.length){y="#"+z.attr("id");h=f.matchTab(y).parent()}else{h=f.tabs.parent().find(r.defaultTab);if(h.length===0){a.error("The specified default tab ('"+r.defaultTab+"') could not be found in the tab set ('"+r.tabs+"') out of "+f.tabs.length+" tabs.")}}}l=h.children("a").first();p(x)};var p=function(z){var y,x;if(r.collapsible&&z.length===0&&r.collapsedByDefault){h.addClass(r.collapsedClass).children().addClass(r.collapsedClass)}else{y=a(h.data("easytabs").panel);x=h.data("easytabs").ajax;if(x&&(!r.cache||!h.data("easytabs").cached)){q.trigger("easytabs:ajax:beforeSend",[l,y]);y.load(x,function(B,A,C){h.data("easytabs").cached=true;q.trigger("easytabs:ajax:complete",[l,y,B,A,C])})}h.data("easytabs").panel.show().addClass(r.panelActiveClass);h.addClass(r.tabActiveClass).children().addClass(r.tabActiveClass)}q.trigger("easytabs:initialised",[l,y])};var w=function(){f.tabs.children("a").bind(r.bind_str,function(x){r.cycle=false;d=false;f.selectTab(a(this));x.preventDefault?x.preventDefault():x.returnValue=false})};var o=function(z,D,E,H){f.panels.stop(true,true);if(u(q,"easytabs:before",[z,D,r])){var A=f.panels.filter(":visible"),y=D.parent(),F,x,C,G,B=window.location.hash.match(/^[^\?]*/)[0];if(r.animate){F=s(D);x=A.length?k(A):0;C=F-x}m=B;G=function(){q.trigger("easytabs:midTransition",[z,D,r]);if(r.animate&&r.transitionIn=="fadeIn"){if(C<0){y.animate({height:y.height()+C},v.halfSpeed).css({"min-height":""})}}if(r.updateHash&&!d){window.location.hash="#"+D.attr("id")}else{d=false}D[v.show](v.speed,r.transitionInEasing,function(){y.css({height:"","min-height":""});q.trigger("easytabs:after",[z,D,r]);if(typeof H=="function"){H()}})};if(E&&(!r.cache||!z.parent().data("easytabs").cached)){q.trigger("easytabs:ajax:beforeSend",[z,D]);D.load(E,function(J,I,K){z.parent().data("easytabs").cached=true;q.trigger("easytabs:ajax:complete",[z,D,J,I,K])})}if(r.animate&&r.transitionOut=="fadeOut"){if(C>0){y.animate({height:(y.height()+C)},v.halfSpeed)}else{y.css({"min-height":y.height()})}}f.tabs.filter("."+r.tabActiveClass).removeClass(r.tabActiveClass).children().removeClass(r.tabActiveClass);f.tabs.filter("."+r.collapsedClass).removeClass(r.collapsedClass).children().removeClass(r.collapsedClass);z.parent().addClass(r.tabActiveClass).children().addClass(r.tabActiveClass);f.panels.filter("."+r.panelActiveClass).removeClass(r.panelActiveClass);D.addClass(r.panelActiveClass);if(A.length){A[v.hide](v.speed,r.transitionOutEasing,G)}else{D[v.uncollapse](v.speed,r.transitionUncollapseEasing,G)}}};var s=function(z){if(z.data("easytabs")&&z.data("easytabs").lastHeight){return z.data("easytabs").lastHeight}var B=z.css("display"),y,x;try{y=a("<div></div>",{position:"absolute",visibility:"hidden",overflow:"hidden"})}catch(A){y=a("<div></div>",{visibility:"hidden",overflow:"hidden"})}x=z.wrap(y).css({position:"relative",visibility:"hidden",display:"block"}).outerHeight();z.unwrap();z.css({position:z.data("easytabs").position,visibility:z.data("easytabs").visibility,display:B});z.data("easytabs").lastHeight=x;return x};var k=function(y){var x=y.outerHeight();if(y.data("easytabs")){y.data("easytabs").lastHeight=x}else{y.data("easytabs",{lastHeight:x})}return x};var n=function(){if(typeof a(window).hashchange==="function"){a(window).hashchange(function(){f.selectTabFromHashChange()})}else{if(a.address&&typeof a.address.change==="function"){a.address.change(function(){f.selectTabFromHashChange()})}}};var c=function(){var x;if(r.cycle){x=f.tabs.index(h);setTimeout(function(){f.cycleTabs(x+1)},r.cycle)}};f.init()};a.fn.easytabs=function(c){var b=arguments;return this.each(function(){var e=a(this),d=e.data("easytabs");if(undefined===d){d=new a.easytabs(this,c);e.data("easytabs",d)}if(d.publicMethods[c]){return d.publicMethods[c](Array.prototype.slice.call(b,1))}})}})(jQuery);











/*global jQuery */
/*jshint multistr:true browser:true */
/*!
* FitVids 1.0.3
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* Date: Thu Sept 01 18:00:00 2011 -0500
*/

(function( $ ){

  "use strict";

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null
    };

    if(!document.getElementById('fit-vids-style')) {

      var div = document.createElement('div'),
          ref = document.getElementsByTagName('base')[0] || document.getElementsByTagName('script')[0],
          cssStyles = '&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>';

      div.className = 'fit-vids-style';
      div.id = 'fit-vids-style';
      div.style.display = 'none';
      div.innerHTML = cssStyles;

      ref.parentNode.insertBefore(div,ref);

    }

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        "iframe[src*='player.vimeo.com']",
        "iframe[src*='youtube.com']",
        "iframe[src*='youtube-nocookie.com']",
        "iframe[src*='kickstarter.com'][src*='video.html']",
        "object",
        "embed"
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var $allVideos = $(this).find(selectors.join(','));
      $allVideos = $allVideos.not("object object"); // SwfObj conflict patch

      $allVideos.each(function(){
        var $this = $(this);
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('id')){
          var videoID = 'fitvid' + Math.floor(Math.random()*999999);
          $this.attr('id', videoID);
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+"%");
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };
// Works with either jQuery or Zepto
})( window.jQuery || window.Zepto );






