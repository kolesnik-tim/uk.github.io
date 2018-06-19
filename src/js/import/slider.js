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
