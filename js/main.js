$(function(){
  $('.slider').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-prev.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-next.png" alt=""></button>'
  });

  $('.menu__mobil').on('click', function(){
    $('.menu__list').slideToggle();
  });

});