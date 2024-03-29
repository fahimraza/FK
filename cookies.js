$(document).ready(function() {
  // If the 'hide cookie is not set we show the message
  if (readCookie('hello')) {
$('#me').delay(10000).fadeOut(100);
  }

  // Add the event that closes the popup and sets the cookie that tells us to
  // not show it again until one day has passed.
  $('#___follow_0').click(function() {
    createCookie('hide_long', true, 1)
    return false;
  });

});

// ---
// And some generic cookie logic
// ---
function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*10*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

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
