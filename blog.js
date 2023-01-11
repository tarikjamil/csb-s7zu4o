// http://ahrengot.com/tutorials/greensock-javascript-animation

var $circle = $(".is--mouse");

function moveCircle(e) {
  TweenLite.to($circle, 0.3, {
    css: {
      left: (e.pageX/window.width)*100vw,
      top: e.pageY
    }
  });
}

$(window).on("mousemove", moveCircle);
