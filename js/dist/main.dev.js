"use strict";

$(function () {
  $('.top-slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="../images/prev-arrow.svg" alt="previous-arrow"></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="../images/next-arrow.svg" alt="next-arrow"></button>',
    responsive: [{
      breakpoint: 1024,
      settings: {}
    }, {
      breakpoint: 640,
      settings: {
        arrows: false
      }
    }]
  });
});
$(function () {
  $('.feedback-slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });
}); ///Button up function 

$(document).ready(function () {
  var button = $('.footer__btn-up');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
  });
  button.on('click', function () {
    $('body, html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
});