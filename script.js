let index = Math.floor(Math.random() * 25);
const body = document.querySelector("body");

let timeout = 500;
add = -50;

body.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    openFullscreen(document.documentElement); // Fullscreen the entire page
  } else {
    closeFullscreen();
  }
});

const bginterval = setInterval(() => {
  let bg = "url('./assets/cr" + index + ".jpg')";
  body.style.backgroundImage = bg;
  index++;
  timeout += add;
  if (index >= 26) {
    index = 1;
  }
  if (timeout < 100) {
    add = 50;
  }
  if (timeout > 1000) {
    add = -50;
  }
  console.log(timeout);
}, timeout);

setTimeout(() => {
  let i = 1;
  let interval = setInterval(() => {
    let div = document.createElement("div");
    div.style.backgroundImage = "url('./assets/cr" + index + ".jpg')";
    body.appendChild(div);
    i++;
    if (i == 26) {
      clearInterval(interval);
      clearInterval(bginterval);
    }
  }, timeout);
}, 15000);

function openFullscreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    // Firefox
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    // Chrome, Safari, and Opera
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    // Internet Explorer/Edge
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    // Firefox
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    // Chrome, Safari, and Opera
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    // Internet Explorer/Edge
    document.msExitFullscreen();
  }
}
