// $(".talking-about-slider").slick({
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     adaptiveHeight: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   });

// $(".owl-carousel").owlCarousel({
//   loop: true,
//   margin: 10,
//   nav: true,
//   dots: false,

//   responsive: {
//     0: {
//       items: 1,
//     },
//     600: {
//       items: 1,
//     },
//     1000: {
//       items: 1,
//     },
//   },
// });

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 60) {
    $("header").addClass("bg-header");
  } else {
    $("header").removeClass("bg-header");
  }
});

$(document).ready(function () {
  $(".talking-about-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  $("#prev").click(function () {
    $(".talking-about-slider").slick("slickPrev");
  });

  $("#next").click(function () {
    $(".talking-about-slider").slick("slickNext");
  });
  $(".main-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: ".thumbnail-slider",
    autoplay: true,
    autoplaySpeed: 2000,
  });

  // Initialize the thumbnail slider
  $(".thumbnail-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".main-slider",
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    centerMode: true,
    centerPadding: "98px",
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
  });
});
