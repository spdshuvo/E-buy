$(function () {
    'use strict';
    $(".banner_slider_container").slick();

    $('.featured_filter_container').filterizr();
    $(".latest_products_container").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrow:false,
    })
    $(".testimonial_item_container").slick({
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 2000
    })
})