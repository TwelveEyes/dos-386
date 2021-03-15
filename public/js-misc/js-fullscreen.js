const fullscreen = () => {
  const el = document.getElementById("jsdos");

  if (el.requestFullscreen) el.requestFullscreen();
  // Firefox
  else if (el.mozRequestFullScreen) el.mozRequestFullScreen();
  // Chrome, Safari
  else if (el.webkitRequestFullScreen) el.webkitRequestFullScreen();
  // IE 11, Edge
  else if (el.msRequestFullscreen) el.msRequestFullscreen();
};
