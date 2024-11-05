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
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  $("#testimonial-prev").click(function () {
    $(".talking-about-slider").slick("slickPrev");
  });

  $("#testimonial-next").click(function () {
    $(".talking-about-slider").slick("slickNext");
  });
  $(".main-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: ".thumbnail-slider",
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  });

  // Initialize the thumbnail slider
  $(".thumbnail-slider").slick({
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    asNavFor: ".main-slider",
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    centerPadding: "98px",
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          centerPadding: "75px",
        },
      },
      {
        breakpoint: 991,
        settings: {
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
    ],
  });
});
$("#gen-prev").click(function () {
  $(".thumbnail-slider").slick("slickPrev");
});

$("#gen-next").click(function () {
  $(".thumbnail-slider").slick("slickNext");
});

AOS.init();

// Nav bar Fuctionality
document.addEventListener("click", function (event) {
  const navbarCollapse = document.querySelector(".navbar-collapse");

  // Check if the clicked element is outside the navbar collapse and if it's currently open
  if (
    !navbarCollapse.contains(event.target) &&
    navbarCollapse.classList.contains("show")
  ) {
    navbarCollapse.classList.remove("show");
    document.body.style.overflow = ""; // Remove overflow hidden when menu is closed
  } else if (navbarCollapse.contains(event.target)) {
    // Check if a link inside the navbar is clicked
    if (event.target.tagName === "A") {
      navbarCollapse.classList.remove("show");
      document.body.style.overflow = ""; // Remove overflow hidden when menu is closed
    } else {
      navbarCollapse.classList.add("show");
      document.body.style.overflow = "hidden"; // Set overflow hidden when menu is open
    }
  }
});
