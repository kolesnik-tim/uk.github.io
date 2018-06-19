import 'jquery-modal';

//header
$(window).scroll(function() {
  if($(this).scrollTop() >= 100) {
    $('.header__scroll').addClass('active');
  } else {
    $('.header__scroll').removeClass('active');
  }
});
