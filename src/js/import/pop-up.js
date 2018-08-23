import Swiper from 'swiper';
//menu
if($(window).width() < 767) {
  $('.menu-open').on('click', function() {
    $('body').addClass('no-scroll');
    $('.menu').fadeToggle();
    $('.header__toolbar').addClass('active');
  });
}
$('.menu-close').on('click', function() {
  $('.menu').fadeOut();
  $('body').removeClass('no-scroll');
  $('.header__toolbar').removeClass('active');
});

if($(window).width() > 767) {
  $('.menu-open').on('click', function() {
    $('.menu-open').toggleClass('active');
    $('body').toggleClass('no-scroll');
    $('.menu').fadeToggle();
    $('.header').toggleClass('active');
  });
}
if($(window).width() < 767) {
  $('.menu__block h4').on('click', function() {
    event.preventDefault();
    $(this).next('ul').slideToggle();
    $(this).toggleClass('active');
  });
}




//pop-gallery
var swiper = new Swiper('.swiper-pop-gallery', {
  slidesPerView: 1,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: '.swiper-pop-gallery-next',
    prevEl: '.swiper-pop-gallery-prev',
  },
  pagination: {
    el: '.swiper-pop-gallery-pagination',
    clickable: true,
  },
});

//pop-rooms-1
var swiper1 = new Swiper('.swiper-pop-rooms-1', {
  slidesPerView: 1,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: '.swiper-pop-rooms-1-next',
    prevEl: '.swiper-pop-rooms-1-prev',
  },
  pagination: {
    el: '.swiper-pop-rooms-1-pagination',
    clickable: true,
  },
});


//pop-rooms-2
var swiper2 = new Swiper('.swiper-pop-rooms-2', {
  slidesPerView: 1,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: '.swiper-pop-rooms-2-next',
    prevEl: '.swiper-pop-rooms-2-prev',
  },
  pagination: {
    el: '.swiper-pop-rooms-2-pagination',
    clickable: true,
  },
});

$('[data-pop]').on('click', function() {
  setTimeout(function() {
  }, 500);
});
//pop-up
$('[data-pop]').on('click', function() {
  let id = $(this).attr('href');
  $(id).fadeIn();
  $('body').addClass('no-scroll');
});

$('.modal__close, .next').on('click', function() {
  $('.modal').fadeOut();
  $('body').removeClass('no-scroll');
});

