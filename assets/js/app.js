$(function () {
    'use strict';
    $(".banner_slider_container").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        prevArrow:'<i class="fas fa-chevron-left banner_arrow left"></i>' ,
        nextArrow: '<i class="fas fa-chevron-right banner_arrow right"></i>',
        infinite: true,
        speed: 700,
        fade: true,
        cssEase: 'linear',
        autoplaySpeed: 2000,
    });

    $('.featured_filter_container').filterizr();
    $(".latest_products_container").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow:'<i class="fas fa-chevron-left latest_products_arrow left"></i>' ,
        nextArrow: '<i class="fas fa-chevron-right latest_products_arrow right"></i>',
    })
    $(".testimonial_item_container").slick({
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 2000
    })
})