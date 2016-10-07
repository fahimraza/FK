        $(function() {
            var offset = $(&quot;#HTML2&quot;).offset();

            var topPadding = -120;
            $(window).scroll(function() {
                if ($(window).scrollTop() &gt; offset.top) {
                    $(&quot;#HTML2&quot;).stop().animate({
                        marginTop: $(window).scrollTop() - offset.top + topPadding
                    });
                } else {
                    $(&quot;#HTML2&quot;).stop().animate({
                        marginTop: 0
                    });
                };
            });
        });
// Cookies code:
      var hasSeenGreeting = localStorage.getItem(&quot;greeting&quot;);

      if(!hasSeenGreeting){
        document.getElementById(&quot;fund&quot;).style.display = &quot;block&quot;;
        localStorage.setItem(&quot;greeting&quot;, &quot;true&quot;);
      }

      document.querySelector(&quot;button&quot;).addEventListener(&quot;click&quot;, function(){
        localStorage.removeItem(&quot;greeting&quot;, &quot;true&quot;);
      });
