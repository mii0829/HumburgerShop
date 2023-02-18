$(function($) {
    $('.bg-swicher').bgSwitcher({
        images: ['images/bg1.jpg','images/bg2.jpg','images/bg3.jpg'],
        interval: 5000,
        effect: "blind",
        loop: true
    });

    $(window).scroll(function () {
        var targetElement = $('.this').offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > targetElement - windowHeight + 200) {
            $('.this').css('opacity', '1');
            $('.this').css('transform','translateX(0)');
        }
    });

    $('.slider').slick({
        arrows: false,
        autoplay: true,
        dots: true,
        centerMode: true,
        centerPadding: '20%',
        pauseOnHover: true,
    });

    $('.more-button').on('click',function () {
        if ($('.open-box').is(':hidden')) {
            $('.open-box').slideDown();
            $(this).text('close');
            $(this).css('background-color','#808080');
        }else {
            $('.open-box').slideUp();
            $(this).text('more');
            $(this).css('background-color', '#fabb51');
        }
    });

    $('.modal-button').modaal();

    $('nav a[href^="#"]').click(function() {
        var adjust = 50;
        var speed = 1000;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - adjust;
        $('body,html').animate( {
            scrollTop: position
        }, speed, 'swing');
        return false;
    })
});