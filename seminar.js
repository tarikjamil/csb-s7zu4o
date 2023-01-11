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
