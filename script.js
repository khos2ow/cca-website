$( document ).ready(function() {

// Open navbarSide when button is clicked
    $('#navbarSideButton').on('click', function() {
        $('#navbarSide').addClass('reveal');
        $('.overlay').show();
    });

// Close navbarSide when the outside of menu is clicked
    $('.overlay').on('click', function(){
        $('#navbarSide').removeClass('reveal');
        $('.overlay').hide();
    });
 //Close navbarSide when "close" button is pressed
    $('.close-side-button').on('click', function(){
        $('#navbarSide').removeClass('reveal');
        $('.overlay').hide();
    }); 
}); 


$(function () {
  var lastScrollTop = 0;
  var $navbar = $('.navbar');

  $(window).scroll(function(event){
    var st = $(this).scrollTop();

    if (st > lastScrollTop) { // scroll down
      $navbar.addClass("fade-out");
      $navbar.removeClass("fade-in");
    } 
      else { // scroll up
      $navbar.addClass("fade-in");
      $navbar.removeClass("fade-out");  
    }
    lastScrollTop = st;
  });
});