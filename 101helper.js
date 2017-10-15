// Button trigger:
$(function() {
    setTimeout(function() {
        $('.addthis_button_compact').trigger('click');
    }, 120000);
});
// Close related posts:
$(document).ready(function(){
  $(".x-feat").click(function() { 
    $("#feat").fadeOut("slow");
  });
});
// sticky nav and reloader:
$(window).scroll(function(){ 
var a = 2000;
var pos = $(window).scrollTop();
if(pos &gt; a) {$("#reloader").css({position: 'fixed',top:'5px',width: '23%'});}
else {$("#reloader").css({position: 'relative',top:'10px',width: '300px'});}});
$(window).scroll(function(){ 
var a = 1000;
var pos = $(window).scrollTop();
if(pos &gt; a) {$('.nav').css({position: 'fixed',top:'-5px',width: '14%'});}
else 
{$('.nav').css({position: 'relative',width: 'initial'});}
});
// Related posts popup:
$(window).load(function() {
  setTimeout(function() {
      $('.related').addClass('show');
    }, 60000)
});
