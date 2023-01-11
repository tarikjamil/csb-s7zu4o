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

// On Page Load
function pageLoad() {
  let tl = gsap.timeline();
  tl.fromTo(
    ".is--line-load",
    {
      width: "0%",
      opacity: 0
    },
    {
      duration: 0.5,
      delay: 1,
      width: "100%",
      opacity: 1,
      ease: "Quint.easeOut",
      stagger: {
        each: 0.1
      }
    }
  );
  tl.fromTo(
    ".is--line-load-vertical",
    {
      height: "0%",
      opacity: 0
    },
    {
      duration: 0.5,
      delay: 0,
      height: "100%",
      opacity: 1,
      ease: "Quint.easeOut",
      stagger: {
        each: 0.1
      }
    }
  );
}
pageLoad();

// navbar menu hamburger click
$(".program-hamburger-menu").click(function () {
  var clicks = $(this).data("clicks");
  if (clicks) {
    // odd clicks
    gsap.to(".is--program-link", {
      y: "10rem",
      duration: 0.1,
      opacity: 0,
      ease: "Quint.easeOut",
      stagger: {
        each: 0.1,
        from: "end"
      }
    });
    gsap.to(".line-navbar2", {
      duration: 0.3,
      width: "0%",
      opacity: 0,
      ease: "Quint.easeOut",
      delay: 0.1,
      stagger: {
        each: 0.1,
        from: "end"
      }
    });
  } else {
    // even clicks
    gsap.fromTo(
      ".is--program-link",
      {
        y: "10rem",
        opacity: 0
      },
      {
        duration: 0.1,
        delay: 0.4,
        y: "0rem",
        opacity: 1,
        ease: "Quint.easeOut",
        stagger: {
          each: 0.1
        }
      }
    );
    gsap.fromTo(
      ".line-navbar2",
      {
        width: "0%",
        opacity: 0
      },
      {
        duration: 0.5,
        delay: 0.4,
        width: "100%",
        opacity: 1,
        ease: "Quint.easeOut",
        stagger: {
          each: 0.1
        }
      }
    );
  }
  $(this).data("clicks", !clicks);
});

// First, create a media query that targets desktop devices
const mq2 = window.matchMedia("(max-width: 992px)");

// Then, create a function to initialize the GSAP animation
function initAnimation() {
  // Add your GSAP animation code here
  $(".menu_link").on("click", function () {
    $(".program-hamburger-menu").click();
  });
}

// Finally, check the media query and run the animation if the criteria is met
if (mq2.matches) {
  initAnimation();
}
