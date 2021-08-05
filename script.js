document.querySelectorAll(".iphone-btn").forEach((l) => {
  l.addEventListener("click", function (e) {
    e.preventDefault();
  });
});

// controls
const controls = document.querySelector(".controls");
const cube = document.querySelector(".cube");
let y = 0;
let x = 0;
let z = 0;
let bool = true;
let interval;
controls.addEventListener("click", function (e) {
  e.preventDefault();
  const arrow = e.target;
  if (arrow.classList.contains("fa-arrow-up")) {
    cube.style.transform = `rotateX(${(x += 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
  }
  if (arrow.classList.contains("fa-arrow-down")) {
    cube.style.transform = `rotateX(${(x -= 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
  }
  if (arrow.classList.contains("fa-arrow-right")) {
    cube.style.transform = `rotateX(${x}deg) rotateY(${(y += 20)}deg) rotateZ(${z}deg)`;
  }
  if (arrow.classList.contains("fa-arrow-left")) {
    cube.style.transform = `rotateX(${x}deg) rotateY(${(y -= 20)}deg) rotateZ(${z}deg)`;
  }
  if (arrow.classList.contains("fa-chevron-circle-right")) {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${(z += 20)}deg)`;
  }
  if (arrow.classList.contains("fa-chevron-circle-left")) {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${(z -= 20)}deg)`;
  }
});

const playPause = () => {
  const a = 23;
  if (bool) {
    interval = setInterval(() => {
      cube.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`;
    }, 100);
  } else {
    clearInterval(interval);
  }
};
playPause();

controls.addEventListener("mouseover", () => {
  bool = false;
  playPause();
});
controls.addEventListener("mouseout", () => {
  bool = true;
  playPause();
});
// end of controls
// slideshow
const slideshowDivs = () => {
  for (let i = 1; i <= 5; i++) {
    const div = document.createElement("div");
    i === 1 && div.classList.add("change");
    div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`;
    document.querySelector(".slideshow").appendChild(div);
  }
};
slideshowDivs();

let a = 1;
const divs = document.querySelectorAll(".slideshow div");

const slideshowEffect = () => {
  setInterval(() => {
    a++;
    const div = document.querySelector(".slideshow .change");
    div.classList.remove("change");

    if (divs.length > a) {
      div.nextElementSibling.classList.add("change");
    } else {
      a = 1;
      divs[0].classList.add("change");
    }
  }, 20000);
};
slideshowEffect();

// end of slideshow
// section 3
const section3Content = document.querySelector(".section-3-content");
const watches = document.querySelector(".section-4");
window.addEventListener("scroll", function () {
  if (
    window.pageYOffset + window.innerHeight >=
    section3Content.offsetTop + section3Content.offsetHeight / 2
  ) {
    section3Content.classList.add("change");
  }

  if (
    window.pageYOffset + window.innerHeight >=
    watches.offsetTop + watches.offsetHeight / 3
  ) {
    document.querySelector(".watch-bands").classList.add("change");
    document.querySelector(".watch-cases").classList.add("change");
  }
});
// end of section 3
// section 4 watches

const watchControls = document.querySelectorAll(".watch-control");
const bands = document.querySelector(".watch-bands");
const cases = document.querySelector(".watch-cases");
const right = document.querySelector(".watch-right-control");

const left = document.querySelector(".watch-left-control");
const down = document.querySelector(".watch-down-control");
const up = document.querySelector(".watch-top-control");
let axisY = 0;
let axisX = 0;

const deleteWatchControl = () => {
  if (axisX === 350) {
    right.classList.add("hideControl");
  } else {
    right.classList.remove("hideControl");
  }
  if (axisX === -280) {
    left.classList.add("hideControl");
  } else {
    left.classList.remove("hideControl");
  }
  if (axisY === 350) {
    down.classList.add("hideControl");
  } else {
    down.classList.remove("hideControl");
  }
  if (axisY === -280) {
    up.classList.add("hideControl");
  } else {
    up.classList.remove("hideControl");
  }
};

watchControls.forEach((c) => {
  c.addEventListener("click", function (e) {
    e.preventDefault();

    const link = e.target.closest("a");
    if (link.classList.contains("watch-top-control")) {
      cases.style.marginTop = `${(axisY -= 70)}rem`;
      deleteWatchControl();
    }
    if (link.classList.contains("watch-down-control")) {
      cases.style.marginTop = `${(axisY += 70)}rem`;
      deleteWatchControl();
    }
    if (link.classList.contains("watch-left-control")) {
      bands.style.marginRight = `${(axisX -= 70)}rem`;
      deleteWatchControl();
    }
    if (link.classList.contains("watch-right-control")) {
      bands.style.marginRight = `${(axisX += 70)}rem`;
      deleteWatchControl();
    }
  });
});
// end of  section 4 watches
// if (/Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//   document.querySelector(".section-4").style.display = "block";

//   document.querySelector(".watch-link").style.display = "block";
// }
