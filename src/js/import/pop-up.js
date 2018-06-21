
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




//pop-up
$('[data-pop]').on('click', function() {
  let id = $(this).attr('href');
  $(id).fadeIn();
  $('body').addClass('no-scroll');
});

$('.pop-up__close, .next').on('click', function() {
  $('.modal').fadeOut();
  $('body').removeClass('no-scroll');
});
