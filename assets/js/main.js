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


/*---------------------------------------------FOOTER----------------------------------------------*/
// CHECK FORM REGISTER infomation
function registerInfoCheck(){
  var register = document.getElementById("emailFooter");

  if(
    register.value != "" && register.value.indexOf("@") != -1 && register.value.indexOf(".") != -1
  )
  {
    swal(
      "You have successfully subscribed to receive information!",
      "success"
    );
  }else{
    swal("An error occurred!", "You have not entered information!", "error");
  }
}

/*---------------------------------------------Book a table----------------------------------------------*/
function bookCheck(){
  var date = document.getElementById("date");
  var name = document.getElementById("fullname");
  var address = document.getElementById("address");
  var phone = document.getElementById("phone");

  if(
    date.value != "" && name.value != "" && address.value != "" && phone.value != ""
  ){
    swal({
      title: "Confirm !",
      text: "Are you sure to book a table?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) =>  {
      if(willDelete){
        swal(
          "You have successfully booked your table!",
          {
            icon:"success",
          }
        );
      }else{
        swal("You have canceled your reservation!");
      }
    });
  }else{
    swal(
      "An error occurred!",
      "You have not entered complete or incorrect information!",
      "error"
    );
  }
}

/*---------------------------------------------Menu----------------------------------------------*/
var numOfElement = document.getElementsByClassName("discount").length;
var discountArr = [numOfElement];
var priceArr = [numOfElement];

for (let i = 0; i < numOfElement; i++){
  var saleNum = document.getElementsByClassName("discount");
  discountArr[i]=saleNum[i].innerText;
  discountArr[i]=parseFloat(discountArr[i]);

  var priceNum = document.getElementsByClassName("price");
  priceArr[i]=priceNum[i].innerText;
  priceArr[i]=parseFloat(priceArr[i]);

  var priceDiscount = document.getElementsByClassName("price_discount");
  priceDiscount[i].innerText = (priceArr[i] - discountArr[i]* 0.01 *priceArr[i]).toFixed(2) + "$";
}