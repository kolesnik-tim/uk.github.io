import range from 'rangeslider.js';
import '../lib/maskedinput.js';
import TweenMax from 'gsap';
import 'animation.gsap';
import 'debug.addIndicators';
import '../lib/selectize.min.js';
import objectFitImages from 'object-fit-images';


$('#doctor').on('click', function() {
  //Запросим базы отдыха

  $.ajax({
    url: '/assets/connectors/doctor.php',
    success: function(response) {
      $('select[name=kurort]').append(response);
      $('#selec').selectize();
    }
  });

});




objectFitImages();
// var elements = $('.aside');
// const sticky = new Stickyfill.Sticky(element);


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

$('.selectized').change(function() {
  let valinput = $('.calculator .form__range input[type="range"]').val();
  let result = +valinput * +$('.calculator select option:selected').val();
  $('.form__sum span').text(`от ${result}`);
});

$('input[type="range"]').rangeslider({
  polyfill: false,
  onInit: function() {
    day();
  },
  onSlide: function() {
    day();
  },
  
});

function day() {
  let text = $('.calculator .form__range p');
  let valinput = $('.calculator .form__range input[type="range"]').val();
  $(text).text(valinput + ' дней');
  let result = +valinput * +$('.calculator select option:selected').val();
  $('.form__sum span').text(`от ${result}`);
}


//mask input
$('.phone').mask('+9 (9 9 9) 9 9 9 - 9 9 - 9 9');


//tabs

$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
  $(this)
    .addClass('active').siblings().removeClass('active')
    .closest('div.tabs').children('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  if($(this).closest('.tabs__nav')) {
    $(this).closest('div.tabs').children('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  }
});

//parallax
if($('div').is('#water-triger')) {
  
}
//scroll
 
$('.scroll').on('click','a', function(event) {
  event.preventDefault();
  var id  = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1500);
});



$(window).on('scroll', function() {
  if($('html, body').scrollTop() >= 150) {
    $('.header').addClass('fixed');
    $('.header__scroll').css({'transform' : 'translateY(0%)'});
  } else {
    $('.header').removeClass('fixed');
    $('.header__scroll').css({'transform' : 'translateY(-200%)'});
  }
});


$('.all-tags').on('click', function(event) {
  event.preventDefault();
  if($(this).hasClass('active')) {
    $('.tags ul').css({'max-height' : '100px'});
    $(this).removeClass('active');
  } else {
    $('.tags ul').css({'max-height' : '400px'});
    $(this).addClass('active');
  }
});
