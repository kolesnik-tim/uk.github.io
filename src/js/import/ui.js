import range from 'rangeslider.js';
import '../lib/maskedinput.js';
import ScrollMagic from 'scrollmagic';
import TweenMax from 'gsap';
import 'animation.gsap';
import 'debug.addIndicators';


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


//tabs

$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
  $(this)
    .addClass('active').siblings().removeClass('active')
    .closest('div.tabs').children('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  if($(this).closest('.tabs__nav')) {
    $(this).closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  }
});


var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({triggerElement: '#water-triger', duration: 2000})
  .setPin('#water')
  .setTween(TweenMax.to('#water', 1, { top: '-900px' }))
  .addTo(controller);


var controller1 = new ScrollMagic.Controller();
var scene1 = new ScrollMagic.Scene({triggerElement: '#clay-triger', duration: 2000})
  .setPin('#clay')
  .setTween(TweenMax.to('#clay', 1, { top: '-900px' }))
  .addTo(controller1);
