$(document).ready(function() {
    initNavBarSlideOut();
    initScrollForNavBar();

    setHeightsForParallax();
});

$(window).on('resize', function () {
    setHeightsForParallax();
});

var setHeightsForParallax = function() {
    // Get and set the intial height for the cards so that when the
    // elements inside become 'fixed', the overall height doesn't change
    $('.first-card').css({
        height: $('.first-card').outerHeight()
    });

    $('.second-card').css({
        height: $('.second-card .title-row-secondcard').outerHeight() + $('.second-card .text-row-secondcard').outerHeight()
    });
};

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
        // scrolling up
        else if (currentScrollTop < lastScrollTop - 5) {
            $navbar.addClass('scrolled');
            $navbar.addClass('scroll-visible');
            $navbar.removeClass('scroll-hidden');

            lastScrollTop = currentScrollTop;
        }

        // at the top
        if (currentScrollTop === 0) {
            $navbar.removeClass('scrolled');
            $navbar.removeClass('scroll-visible');
            $navbar.removeClass('scroll-hidden');

            lastScrollTop = currentScrollTop;
        }

    });
};

var setLogo = function() {
    var currentScrollTop = $(window).scrollTop();

    var firstCardOffset = 553;

    var secondCardDifference = $('.second-card').offset().top - currentScrollTop;
    $('.title-row-secondcard').css(
        'clip',
        'rect(' + (secondCardDifference - 100) + 'px, 9000px, 500px, 0)'
    );

    if (currentScrollTop >= $('.first-card').offset().top + firstCardOffset) {
        $('.first-card').addClass('fixed');
    }
    else {
        $('.first-card').removeClass('fixed');
    }

    if (currentScrollTop >= $('.second-card').offset().top) {
        $('.second-card').removeClass('fixed');
    }
    else {
        $('.second-card').addClass('fixed');
    }
};

$(document).scroll(function() {
  setLogo();
});
