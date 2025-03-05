let stepX = 1;
let stepY = 2;
let contWidth = 800;
let contHeight = 600;
let mvDivWidth = 20;
let mvDivHeight = 20;
let mvDiv = document.getElementById("moveDiv");
let contDiv = document.getElementById("container");
let hDiv = document.getElementById("hitDiv");
let score = 0;
let mis = true;
let interval;
let started = false;
let rectMvDiv;
let elementMvDiv = document.querySelector("#moveDiv");
let rectHDiv;
let elementHDiv = document.querySelector("#hitDiv");

rectMvDiv = elementMvDiv.getBoundingClientRect();
rectHDiv = elementHDiv.getBoundingClientRect();

console.log(rectMvDiv.top, rectMvDiv.left, rectMvDiv.width, rectMvDiv.height);
console.log(rectHDiv.top, rectHDiv.left, rectHDiv.width, rectHDiv.height);

function move() {
  // console.log("in move function");
  let yPos = mvDiv.offsetTop;
  // console.log("yPos = " + yPos);
  if (yPos + stepY > 580) {
    stepY = -stepY;
  } else if (yPos + stepY < -5) {
    stepY = 2;
  }
  mvDiv.style.top = yPos + stepY + "px";

  let xPos = mvDiv.offsetLeft;
  // console.log("xPos = " + xPos);
  if (xPos + stepX > 780) {
    stepX = -stepX;
  } else if (xPos + stepX < 0) {
    stepX = 1;
  }
  mvDiv.style.left = xPos + stepX + "px";

  rectMvDiv = elementMvDiv.getBoundingClientRect();
  rectHDiv = elementHDiv.getBoundingClientRect();
  // console.log (rectHDiv.top, rectMvDiv.top + 10)
  if (Math.round(rectHDiv.top) == Math.round(rectMvDiv.top) + 20) {
    console.log("hallo");
    for (
      let i = Math.round(rectHDiv.right);
      i >= Math.round(rectHDiv.left);
      i--
    ) {
      console.log("for werkt");
      if (i == Math.round(rectMvDiv.left) + 10) {
        console.log("hit");
        score += 2;
        mis = false;
        document.getElementById("hitDiv").innerHTML = score;
        console.log(mis);
      }
    }
    if (mis == true) {
      console.log("mis");
      score -= 2;
      document.getElementById("hitDiv").innerHTML = score;
    }
  }
}

function fStart() {
  if (started == false) {
    interval = setInterval(move, 10);
    started = true;
  } else {
  }
}

function fStop() {
  clearInterval(interval);
  started = false;
}

function reset() {
  clearInterval(interval);
  started = false;
  mvDiv.style.left = 10 + "px";
  mvDiv.style.top = 10 + "px";
}
function showCoords(event){
    let x = event.clientX;
let y = event.clientY;  
console.log(x, y)
}
