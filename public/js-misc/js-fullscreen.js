const fullscreen = () => {
  var el = document.getElementById("jsdos");

  if (el.webkitRequestFullScreen) {
    el.webkitRequestFullScreen();
  } else {
    el.mozRequestFullScreen();
  }
};
