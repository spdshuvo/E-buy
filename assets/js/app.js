$(function () {
  'use strict';
  //banner slick slider activision//
  $(".banner_slider_container").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    prevArrow: '<i class="fas fa-chevron-left banner_arrow left"></i>',
    nextArrow: '<i class="fas fa-chevron-right banner_arrow right"></i>',
    infinite: true,
    speed: 700,
    fade: true,
    cssEase: 'linear',
    autoplaySpeed: 2000,
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
      }
    }]
  });
  //Filterizer plugin activision//
  $('.featured_filter_container').filterizr(

  );
  //latest product slider activision//
  $(".latest_products_container").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '<i class="fas fa-chevron-left latest_products_arrow left"></i>',
    nextArrow: '<i class="fas fa-chevron-right latest_products_arrow right"></i>',
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding:'300px',
      }
    }]
  })
  //Testimonial slider activision//
  $(".testimonial_item_container").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<i class="fas fa-chevron-left testimonial_arrow left"></i>',
    nextArrow: '<i class="fas fa-chevron-right testimonial_arrow right"></i>',
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }]
  })

  // Coutdown js//
  $('.count_down').countdown('2021/10/20', function (event) {
    var $this = $(this).html(event.strftime('' +
      '<div class="col-3"><div class="count_down_item"><span>%d</span><span>Days</span></div></div>' +
      '<div class="col-3"><div class="count_down_item"><span>%H</span><span>Hours</span></div></div>' +
      '<div class="col-3"><div class="count_down_item"><span>%M</span><span>Mins</span></div></div>' +
      '<div class="col-3"><div class="count_down_item"><span>%S</span><span>Sec</span></div></div>'));
  });
})