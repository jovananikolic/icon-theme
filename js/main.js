$(document).ready(function(){
    
    $('.navbar-nav a').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1250);
    });
    
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 150) {
            $('header').addClass('py-2');
            $('.navbar-brand').addClass('small-logo');
            $('header').css('background-color', 'rgba(0,0,0,0.8)');
        } else {
            $('header').removeClass('py-2');
            $('.navbar-brand').removeClass('small-logo');
            $('header').css('background-color', 'rgba(0,0,0,0.3)');
        }
    });
});