$(document).ready(function() {
  if (readCookie('pushalert_10826_1_already_subscribed')) {
document.getElementById('subscribed').click();
$('.sidebar-box').removeClass('sidebar-box');
$('.read-more').hide();
}
