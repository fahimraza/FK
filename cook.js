$(document).ready(function() {
  if (readCookie('pushalert_10826_1_already_subscribed')) {
document.getElementById('subscribed').click();
$('.sidebar-box').removeClass('sidebar-box');
$('.read-more').hide();
}
// ---
// And some generic cookie logic
// ---
function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function eraseCookie(name) {
  createCookie(name,"",-1);
}
