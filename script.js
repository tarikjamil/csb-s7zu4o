gsap.registerPlugin(ScrollTrigger);

// On Page Load
function pageLoad() {
  let tl = gsap.timeline();
  tl.to(".main-wrapper", {
    opacity: 1,
    ease: "Quint.easeOut",
    duration: 0.5
  });
  tl.from(".loading-animation", {
    y: "20rem",
    opacity: "0",
    stagger: { each: 0.1, from: "start" },
    ease: "Quint.easeOut",
    duration: 0.5
  });
}
pageLoad();

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

// First, create a media query that targets desktop devices
const mq = window.matchMedia("(max-width: 992px)");

// Then, create a function to initialize the GSAP animation
function initAnimation() {
  // Add your GSAP animation code here
  $(".navbar-cta").on("click", function () {
    $(".menu-navbar-link").click();
  });
}

// Finally, check the media query and run the animation if the criteria is met
if (mq.matches) {
  initAnimation();
}
