// On Page Load
function pageLoad() {
  let tl = gsap.timeline();
  tl.from(".line.is--join", {
    width: "0%",
    opacity: 0,
    delay: 1,
    stagger: { each: 0.1, from: "start" },
    ease: "Quint.easeOut",
    duration: 0.5
  });
}
pageLoad();
