    setInterval(function(){
$("iframe").each(function() {
  this.contentWindow.location.reload(true);
});
}, 60000);
