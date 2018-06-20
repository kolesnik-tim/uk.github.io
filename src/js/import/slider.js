import Swiper from 'swiper';

//intro
var swiper = new Swiper('.swiper-intro', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-intro-next',
    prevEl: '.swiper-intro-prev',
  },
  pagination: {
    el: '.swiper-intro-pagination',
    clickable: true,
  },
});

//special-offers

var swiper = new Swiper('.swiper-special-offers', {
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-special-offers-next',
    prevEl: '.swiper-special-offers-prev',
  },
});


//gallery

var swiper = new Swiper('.swiper-gallery', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-gallery-next',
    prevEl: '.swiper-gallery-prev',
  },
  pagination: {
    el: '.swiper-gallery-pagination',
    clickable: true,
  },
});


//reviews

var swiper = new Swiper('.swiper-reviews', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-reviews-next',
    prevEl: '.swiper-reviews-prev',
  },
});
