// Button trigger:
$(function() {
    setTimeout(function() {
        $(&#39;.addthis_button_compact&#39;).trigger(&#39;click&#39;);
    }, 120000);
});
// Close related posts:
$(document).ready(function(){
  $(&quot;.x-feat&quot;).click(function() { 
    $(&quot;#feat&quot;).fadeOut(&quot;slow&quot;);
  });
});
// sticky nav and reloader:
$(window).scroll(function(){ 
var a = 2000;
var pos = $(window).scrollTop();
if(pos &gt; a) {$(&quot;#reloader&quot;).css({position: &#39;fixed&#39;,top:&#39;5px&#39;,width: &#39;23%&#39;});}
else {$(&quot;#reloader&quot;).css({position: &#39;relative&#39;,top:&#39;10px&#39;,width: &#39;300px&#39;});}});
$(window).scroll(function(){ 
var a = 1000;
var pos = $(window).scrollTop();
if(pos &gt; a) {$(&#39;.nav&#39;).css({position: &#39;fixed&#39;,top:&#39;-5px&#39;,width: &#39;14%&#39;});}
else 
{$(&#39;.nav&#39;).css({position: &#39;relative&#39;,width: &#39;initial&#39;});}
});
// Related posts popup:
$(window).load(function() {
  setTimeout(function() {
      $(&#39;.related&#39;).addClass(&#39;show&#39;);
    }, 60000)
});
