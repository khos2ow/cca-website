$(document).ready(function() {
    initNavBarSlideOut();
    initScrollForNavBar();

});

var initNavBarSlideOut = function() {
    // Open navbarSide when button is clicked
    $('#navbarSideButton').on('click', function() {
        $('#navbarSide').addClass('reveal');
        $('.overlay').show();
    });

    // Close navbarSide when the outside of menu is clicked
    $('.overlay').on('click', function() {
        $('#navbarSide').removeClass('reveal');
        $('.overlay').hide();
    });

    // Close navbarSide when "close" button is pressed
    $('.close-side-button').on('click', function() {
        $('#navbarSide').removeClass('reveal');
        $('.overlay').hide();
    });
};

var initScrollForNavBar = function() {
    var lastScrollTop = 0;
    var $navbar = $('.navbar');

    $(window).scroll(function(event) {
        var currentScrollTop = $(this).scrollTop();

        // scrolling down
        if (currentScrollTop > lastScrollTop + 50) {
            $navbar.addClass('scroll-hidden');
            $navbar.removeClass('scroll-visible');

            lastScrollTop = currentScrollTop;
        }

        // at the top
        if (currentScrollTop === 0) {
            $navbar.removeClass('scroll-visible');
           $navbar.removeClass('scroll-hidden');

           lastScrollTop = currentScrollTop;
        }

    });
};
