gsap.registerPlugin(ScrollTrigger);

// navbar button scroll
$(document).ready(function () {
  var scrollTop = 0;
  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();
    if (scrollTop >= 100) {
      $(".navbar-cta").addClass("is--show");
    } else if (scrollTop < 100) {
      $(".navbar-cta").removeClass("is--show");
    }
  });
});

// img parallax
$(".img-parallax").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      scrub: true,
      // trigger element - viewport
      start: "top bottom",
      end: "bottom top"
    }
  });
  tl.to(targetElement, {
    y: "-15%"
  });
});

//parallax reverse
$(".img-parallax-reverse").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      scrub: true,
      // trigger element - viewport
      start: "top bottom",
      end: "bottom top"
    }
  });
  tl.to(targetElement, {
    y: "15%"
  });
});

$(".program-element").on("mouseenter mouseleave", function () {
  $(this).find(".animation-dot").toggleClass("is--scale");
});

// navbar menu hamburger click
$(".menu-navbar-link").click(function () {
  var clicks = $(this).data("clicks");
  if (clicks) {
    // odd clicks
    gsap.to(".is--navbar-load", {
      y: "10rem",
      duration: 0.3,
      opacity: 0,
      ease: "Quint.easeOut",
      stagger: {
        each: 0.1,
        from: "end"
      }
    });
    gsap.to(".line-navbar", {
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
      ".is--navbar-load",
      {
        y: "10rem",
        opacity: 0
      },
      {
        duration: 0.5,
        delay: 0.3,
        y: "0rem",
        opacity: 1,
        ease: "Quint.easeOut",
        stagger: {
          each: 0.1
        }
      }
    );
    gsap.fromTo(
      ".line-navbar",
      {
        width: "0%",
        opacity: 0
      },
      {
        duration: 0.5,
        delay: 0.6,
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
  let splide = new Splide(".slider1", {
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
  let splide = new Splide(".slider2", {
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

// research lab hover effect
$(".research-lab-element").on("mouseenter mouseleave", function () {
  let state = Flip.getState(".researchlab-img, .research-labcontent-card", {
    props: "border-radius"
  });
  $(this).toggleClass("is--active");
  Flip.from(state, {
    duration: 0.4,
    ease: "power2.out"
  });
});

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
