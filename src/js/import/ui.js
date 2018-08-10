import range from 'rangeslider.js';
import '../lib/maskedinput.js';
import ScrollMagic from 'scrollmagic';
import TweenMax from 'gsap';
import 'animation.gsap';
import 'debug.addIndicators';
import '../lib/selectize.min.js';


$('.healthy-children, .healthy-children__content').css('polyfilter','blur(3px)');



$('select').selectize('options');

//input label

$('.form__input input').focus(function() {
  $(this).closest('.form__input').addClass('active');
});

$('.form__input input').focusout(function() {
  if($(this).val() === '+_ (_ _ _) _ _ _ - _ _ - _ _' || $(this).val() === '') {
    $(this).closest('.form__input').removeClass('active');
  } else {
    $(this).closest('.form__input').addClass('active');
  }
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
$('.phone').mask('+9 (9 9 9) 9 9 9 - 9 9 - 9 9');


//tabs

$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
  $(this)
    .addClass('active').siblings().removeClass('active')
    .closest('div.tabs').children('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  if($(this).closest('.tabs__nav')) {
    $(this).closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  }
});

//parallax
var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({triggerElement: '#water-triger', duration: 2200})
  .setPin('#water')
  .setTween(TweenMax.to('#water', 1, { top: '-900px' }))
  .addTo(controller);


var controller1 = new ScrollMagic.Controller();
var scene1 = new ScrollMagic.Scene({triggerElement: '#clay-triger', duration: 2200})
  .setPin('#clay')
  .setTween(TweenMax.to('#clay', 1, { top: '-900px' }))
  .addTo(controller1);


//scroll
 
$('.scroll').on('click','a', function(event) {
  event.preventDefault();
  var id  = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1500);
});
