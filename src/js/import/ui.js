import 'jquery-modal';
import range from 'rangeslider.js';
import '../lib/maskedinput.js';

//header
$(window).scroll(function() {
  if($(this).scrollTop() >= 100) {
    $('.header__scroll').addClass('active');
  } else {
    $('.header__scroll').removeClass('active');
  }
});

//select
$('select').each(function() {
  $(this).siblings('p').text( $(this).children('option:selected').text() );
});
$('select').change(function() {
  $(this).siblings('p').text( $(this).children('option:selected').text() );
});


//range

$('input[type="range"]').rangeslider({
  polyfill: false,
  onSlide: function() {
    day();
  },
});

function day() {
  let text = $('.calculator .form__range p');
  let valinput = $('.calculator .form__range input[type="range"]').val();
  $(text).text(valinput + ' дней');
}


//mask input
$('.phone').mask('+7 (9 9 9) 9 9 9 - 9 9 - 9 9');
