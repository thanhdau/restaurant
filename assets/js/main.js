// Back to top
$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $("#go-to-top").fadeIn();
    } else {
      $("#go-to-top").fadeOut();
    }
  });
  $("#go-to-top").click(function () {
    $("html, body").animate({
        scrollTop: 0,
      },
      2000
    );
    return false;
  });
});

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

/*Active navbar click */
// PC
$(document).ready(function () {
  $(".navbar__right ul li a").click(function () {
    $(".navbar__right ul li a.active").removeClass("active");
    $(this).addClass("active");
  });
});
// tablet and moblie
$(document).ready(function () {
  $(".navbar-list li a").click(function () {
    $(".navbar-list li a.active").removeClass("active");
    $(this).addClass("active");
  });
});

                                /*List item menu */
// -----------------------------------------------------------------------------
$(document).ready(function () {
  $(".navbar-menu li").click(function () {
    var choose = $(this).attr("index");

    if (choose == 0) {
      $(".menu-list__items-drink").show(500);
      $(".menu-list__items-food").show(500);
      $(".menu-list__items-seasonal").show(500);
    } else if (choose == 1) {
      $(".menu-list__items-drink").show(500);
      $(".menu-list__items-food").hide(500);
      $(".menu-list__items-seasonal").hide(500);
    } else if (choose == 2) {
      $(".menu-list__items-drink").hide(500);
      $(".menu-list__items-food").show(500);
      $(".menu-list__items-seasonal").hide(500);
    } else {
      $(".menu-list__items-drink").hide(500);
      $(".menu-list__items-food").hide(500);
      $(".menu-list__items-seasonal").show(500);
    }
  });
});
// click active items
$(document).ready(function () {
  $(".navbar-menu li a").click(function () {
    $(".navbar-menu li a.active").removeClass("active");
    $(this).addClass("active");
  });
});


