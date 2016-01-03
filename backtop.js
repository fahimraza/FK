//http://code.google.com/p/domready/
(function(){var DomReady=window.DomReady={};var userAgent=navigator.userAgent.toLowerCase();var browser={version:(userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[])[1],safari:/webkit/.test(userAgent),opera:/opera/.test(userAgent),msie:(/msie/.test(userAgent))&&(!/opera/.test(userAgent)),mozilla:(/mozilla/.test(userAgent))&&(!/(compatible|webkit)/.test(userAgent))};var readyBound=false;var isReady=false;var readyList=[];function domReady(){if(!isReady){isReady=true;if(readyList){for(var fn=0;fn<readyList.length;fn++){readyList[fn].call(window,[])}readyList=[]}}};function addLoadEvent(func){var oldonload=window.onload;if(typeof window.onload!='function'){window.onload=func}else{window.onload=function(){if(oldonload){oldonload()}func()}}};function bindReady(){if(readyBound){return}readyBound=true;if(document.addEventListener&&!browser.opera){document.addEventListener("DOMContentLoaded",domReady,false)}if(browser.msie&&window==top)(function(){if(isReady)return;try{document.documentElement.doScroll("left")}catch(error){setTimeout(arguments.callee,0);return}domReady()})();if(browser.opera){document.addEventListener("DOMContentLoaded",function(){if(isReady)return;for(var i=0;i<document.styleSheets.length;i++)if(document.styleSheets[i].disabled){setTimeout(arguments.callee,0);return}domReady()},false)}if(browser.safari){var numStyles;(function(){if(isReady)return;if(document.readyState!="loaded"&&document.readyState!="complete"){setTimeout(arguments.callee,0);return}if(numStyles===undefined){var links=document.getElementsByTagName("link");for(var i=0;i<links.length;i++){if(links[i].getAttribute('rel')=='stylesheet'){numStyles++}}var styles=document.getElementsByTagName("style");numStyles+=styles.length}if(document.styleSheets.length!=numStyles){setTimeout(arguments.callee,0);return}domReady()})()}addLoadEvent(domReady)};DomReady.ready=function(fn,args){bindReady();if(isReady){fn.call(window,[])}else{readyList.push(function(){return fn.call(window,[])})}};bindReady()})();
//http://www.scriptiny.com/2011/01/javascript-fade-in-out/
var fadeEffect=function(){
    return{
        init:function(id, flag, target){
            this.elem = document.getElementById(id);
            clearInterval(this.elem.si);
            this.target = target ? target : flag ? 100 : 0;
            this.flag = flag || -1;
            this.alpha = this.elem.style.opacity ? parseFloat(this.elem.style.opacity) * 100 : 0;
            this.si = setInterval(function(){fadeEffect.tween()},100);
        },
        tween:function(){
            if(this.alpha == this.target){
                clearInterval(this.elem.si);
            }else{
                var value = Math.round(this.alpha + ((this.target - this.alpha) * .05)) + (1 * this.flag);
                this.elem.style.opacity = value / 100;
                this.elem.style.filter = 'alpha(opacity=' + value + ')';
                this.alpha = value;
            }
        }
    }
}();
function getScrollY() {
  sY = 0;
  if( typeof( window.pageYOffset ) == 'number' ) {
    sY = window.pageYOffset;
  } else if(document.body && document.body.scrollTop) {
    sY = document.body.scrollTop;
  } else if(document.documentElement && document.documentElement.scrollTop ) {
    sY = document.documentElement.scrollTop;
  }
  return sY;
}
var topAnim;
function goTop() {
  if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
    window.scrollBy(0,-50);
    topAnim=setTimeout('goTop()',10);
  }
  else clearTimeout(topAnim);
}
if (typeof topButton === 'undefined'){
		var topButton = '<img src="http://backtotopbutton.com/script/buttons/sleek/simple-blue.png" alt="Back to top" id="toTopImg" />';
	}
	else{
		topButton = '<img src="http://backtotopbutton.com/script/buttons/' + topButton + '.png" alt="Back to top" id="toTopImg" />';
	}
DomReady.ready(function() {
	var toTop = document.createElement('div');
	toTop.style.position = 'absolute';
	toTop.style.right = '0';
	toTop.style.top = '50%';
	toTop.style.position='fixed';
	toTop.style.cursor = 'pointer';
	toTop.style.opacity = '0';
	toTop.style.filters = "progid:DXImageTransform.Microsoft.Alpha(opacity=50)";
	toTop.id = 'toTop';
	toTop.innerHTML = topButton;
	toTop.style.display = 'none';
	document.getElementsByTagName('body')[0].appendChild(toTop);
	if (getScrollY() > 300) {
		toTop.style.display = 'block';
		fadeEffect.init('toTop', 1);
	}
	window.onscroll = function (e) {
        if (getScrollY() > 200) {
			toTop.style.display = 'block';
			fadeEffect.init('toTop', 1);
        } else {
			fadeEffect.init('toTop', 0);
			//toTop.style.display='none';
        }
    };
	toTop.onclick = function(){
		goTop();
	};
	document.getElementsByTagName('body')[0].onkeypress = (function (ev) {
		 var key;
		  var isShift;
		  if (window.event) {
			key = window.event.keyCode;
			isShift = window.event.shiftKey ? true : false;
		  } else {
			key = ev.which;
			isShift = ev.shiftKey ? true : false;
		  }
		  if ( isShift ) {
			switch (key) {
			  case 16: break;
			  case 84: goTop(); break;
			  default:break;
			}
		  }
	});
});
