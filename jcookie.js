  // Add the event that closes the popup and sets the cookie that tells us to
  // not show it again until one day has passed.
  $(document).ready(function() {
    if (!readCookie('pushalert_10826_1_already_subscribed')) {
    setTimeout(function() {
    createCookie('pushalert_10826_1_already_subscribed', true, 1)
    return false;
      }, 10000);
    };
  });


// ---
// And some generic cookie logic
// ---
function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*20*60*1000));
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
