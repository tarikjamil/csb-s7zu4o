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
