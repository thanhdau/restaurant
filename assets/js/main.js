// Animation
AOS.init({
    offset: 150,
    delay: 0,
    duration: 1000,
  });

// Qoute slide js
$(document).ready(function () {
  $(".qoute").slick({
    slidesToShow: 1,
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
  });
});

// commnets slide js
$(document).ready(function () {
  $(".comments__reviews").slick({
    slidesToShow: 1,
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
  });
});

// food photo
baguetteBox.run(".gallery");

