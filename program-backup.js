// MENU LINKS
$(".menu_link").on("mouseenter", function () {
  let state = Flip.getState(".menu_shape");
  $(".menu_shape").appendTo($(this));
  Flip.from(state, {
    absolute: true,
    duration: 0.4,
    ease: "power2.out"
  });
});
$(".menu_wrap").on("mouseleave", function () {
  let state = Flip.getState(".menu_shape");
  $(".menu_shape").appendTo($(".menu_link.w--current"));
  Flip.from(state, {
    absolute: true,
    fade: true,
    duration: 0.4,
    ease: "power2.out"
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
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
