$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

$('.slider').slick({
  slidesToShow: 1,
  slidesToScroll:1,
  
});
