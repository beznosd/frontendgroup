jQuery(function($) {
    // custom scroll
    $("#mogo-whatWeDo .panel-body").mCustomScrollbar({
        theme: "default"
    });
    // bootstrap carusel
    $('.carousel').carousel();
    // set height of mogo-header to fuul screen
    if ($(window).width() > 1024) {
        if ($(window).height() > 850) {
            $('#mogo-header').css('height', $(window).height());
        }
    }
});
