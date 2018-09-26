import Swiper from 'swiper';
//menu
let toolbar = $('.header__toolbar');
let scrollHeader = $('.header__scroll');
let menu = $('.menu');
let menuOpen = $('.menu-open');

if($(window).width() < 767) {
  menuOpen.on('click', function() {
    $('body').addClass('no-scroll');
    menu.fadeToggle();
    toolbar.addClass('active');
    scrollHeader.css({'transform' : 'translateY(-200%)'});
    return false;
  });
  $('.menu__block h4').on('click', function(event) {
    event.preventDefault();
    $(this).next('ul').slideToggle();
    $(this).toggleClass('active');
    return false;
  });
}

if($(window).width() > 767) {
  menuOpen.on('click', function() {
    menuOpen.toggleClass('active');
    $('body').toggleClass('no-scroll');
    menu.fadeToggle();
    $('.header').toggleClass('active');
    if($(window).scrollTop() <= 150) {
      if(menuOpen.hasClass('active')) {
        scrollHeader.css({'transform' : 'translateY(0%)'});
      } else{
        scrollHeader.css({'transform' : 'translateY(-200%)'});
      }
    }
    return false;
  });
}

$('.menu-close').on('click', function() {
  menu.fadeOut();
  $('body').removeClass('no-scroll');
  toolbar.removeClass('active');
  if($(window).scrollTop() >= 150) {
    scrollHeader.css({'transform' : 'translateY(0%)'});
  }
  return false;
});




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

//pop-up
$('[data-pop]').on('click', function() {
  let id = $(this).attr('href');
  $(id).fadeIn();
  $('body').addClass('no-scroll');
  return false;
});

$('.modal__close, .next').on('click', function() {
  $('.modal').fadeOut();
  $('body').removeClass('no-scroll');
  return false;
});

