function onresize () {
  let width = document.getElementById("js-left").offsetWidth;

  let position = document.querySelector("svg");  
  position.style.left = width - 150;
 
  
}
onresize();
window.addEventListener("resize", onresize);

let paths = document.querySelectorAll("path");

pathSlider();

document.addEventListener('scroll', pathSlider);

function pathSlider() {
  let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  for (var i = 0; i< paths.length; i++) {
    let path = paths[i];
    let pathLength = path.getTotalLength();
    path.style.strokeDasharray = pathLength + ' ' + pathLength;
    path.style.strokeDashoffset = pathLength;

    let drawLength = pathLength * scrollPercentage;
    path.style.strokeDashoffset = pathLength - drawLength;
  }
}

const tl = gsap.timeline();

tl.from('.top', {
  duration: .5,
  y:500,
})

tl.from('.bottom', {
  duration: .5,
  y:-500
})


var tl1 = gsap.timeline();

tl1.from('.heading, .experience img, .experience h1, .experience p', {
  duration: .2,
  x: -400,
  stagger: .2,
})







