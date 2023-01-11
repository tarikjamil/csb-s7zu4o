document.addEventListener("DOMContentLoaded", function () {
  let splide = new Splide(".slider1", {
    type: "slider",
    perPage: 1,
    perMove: 1,
    gap: "48rem",
    breakpoints: {
      991: {
        // Tablet
        perPage: 1,
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
    perPage: 2,
    perMove: 1,
    gap: "48rem",
    breakpoints: {
      991: {
        // Tablet
        perPage: 1,
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

// button animation
$(".logo-animations").each(function (index) {
  let triggerElement = $(this);
  // let myText = $(this).find(".split-text");
  let targetElement = $(".logo-animation");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top bottom",
      end: "bottom top"
    }
  });
  tl.from(targetElement, {
    duration: 1,
    delay: 0.3,
    opacity: 0,
    y: "50rem",
    ease: "Quint.easeOut",
    stagger: {
      amount: 0.1,
      from: "0"
    }
  });
});

$(".globe-container-wrapper").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      scrub: true,
      // trigger element - viewport
      start: "top top",
      end: "bottom top"
    }
  });
  tl.to(targetElement, {
    y: "0%"
  });
});
