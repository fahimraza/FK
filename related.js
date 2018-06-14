setTimeout(function() {
$("iframe").each(function() {
  this.contentWindow.location.reload(true);
});
}, 10000);
