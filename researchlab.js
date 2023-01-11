// MENU LINKS

$(".menu_link").on("mouseenter", function () {
  $(".menu_shape").css("opacity", "1");
  let state = Flip.getState(".menu_shape");
  $(".menu_shape").appendTo($(this));
  Flip.from(state, {
    duration: 0.4,
    ease: "power2.out"
  });
});
$(".menu_wrap").on("mouseleave", function () {
  $(".menu_shape").css("opacity", "0");
  let state = Flip.getState(".menu_shape");
  Flip.from(state, {
    duration: 0.4,
    ease: "power2.out"
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".slider1", {
    type: "slider",
    perPage: 3,
    perMove: 1,
    gap: "48rem",
    breakpoints: {
      991: {
        // Tablet
        perPage: 2,
        gap: "24rem",
        arrows: false
      },
      767: {
        // Mobile Landscape
        perPage: 1,
        gap: "24rem",
        arrows: false
      },
      479: {
        // Mobile Portrait
        perPage: 1,
        gap: "24rem",
        arrows: false
      }
    }
  });
  splide.mount();
});

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".slider2", {
    type: "slider",
    perPage: 3,
    perMove: 1,
    gap: "48rem",
    breakpoints: {
      991: {
        // Tablet
        perPage: 2,
        gap: "24rem",
        arrows: false
      },
      767: {
        // Mobile Landscape
        perPage: 1,
        gap: "24rem",
        arrows: false
      },
      479: {
        // Mobile Portrait
        perPage: 1,
        gap: "24rem",
        arrows: false
      }
    }
  });
  splide.mount();
});

$(document).ready(function () {
  var scrollTop = 0;
  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();
    if (scrollTop >= 100) {
      $(".program-menu-wrapper").addClass("is--show");
    } else if (scrollTop < 100) {
      $(".program-menu-wrapper").removeClass("is--show");
    }
  });
});
