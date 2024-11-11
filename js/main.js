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

  $(".logo-slider").slick({
    slidesToShow: 4.99,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
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

function throttle(func, limit) {
  let inThrottle;
  return function () {
    if (!inThrottle) {
      func.apply(this, arguments);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

function handleAosDelay() {
  const elements = document.querySelectorAll(".aos-element");
  const isMobileView = window.innerWidth <= 768;

  elements.forEach((element) => {
    if (isMobileView) {
      element.removeAttribute("data-aos-delay");
    }
  });
}

window.addEventListener("load", handleAosDelay);
window.addEventListener("resize", throttle(handleAosDelay, 200));
window.addEventListener("load", handleAosDelay);
window.addEventListener("resize", handleAosDelay);

// Nav bar Fuctionality
document.addEventListener("click", function (event) {
  const navbarCollapse = document.querySelector(".navbar-collapse");

  if (
    !navbarCollapse.contains(event.target) &&
    navbarCollapse.classList.contains("show")
  ) {
    navbarCollapse.classList.remove("show");
    document.body.style.overflow = "";
  } else if (navbarCollapse.contains(event.target)) {
    if (event.target.tagName === "A") {
      navbarCollapse.classList.remove("show");
      document.body.style.overflow = "";
    } else {
      navbarCollapse.classList.add("show");
      document.body.style.overflow = "hidden";
    }
  }
});

// Pricing Section
function togglePricing() {
  const monthlyPlans = document.getElementById("monthlyPlans");
  const annualPlans = document.getElementById("annualPlans");
  const isChecked = document.getElementById("pricingToggle").checked;

  if (isChecked) {
    monthlyPlans.style.setProperty("display", "none", "important");
    annualPlans.style.setProperty("display", "flex", "important");
  } else {
    monthlyPlans.style.setProperty("display", "flex", "important");
    annualPlans.style.setProperty("display", "none", "important");
  }
}
