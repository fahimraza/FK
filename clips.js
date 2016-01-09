$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 400) {
        $("#clips").addClass(".modify");
    }
     if (scroll <= 400) {
        $("#clips").removeClass(".modify");
    }
});
