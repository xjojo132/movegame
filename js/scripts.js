let stepX = 1;
let stepY = 2;
let contWidth = 800;
let contHeight = 600;
let mvDivWidth = 20;
let mvDivHeight = 20;
let mvDiv = document.getElementById("moveDiv")
let contDiv = document.getElementById("container")
let score = 0;
let interval
let started = false;

function move() {
    console.log("in move function");
    let yPos = mvDiv.offsetTop;
    console.log("yPos = " + yPos);
    if (yPos + stepY > 580) {
        stepY = -stepY
    } else if (yPos + stepY < -5) {
        stepY = 2;
        console.log("hallo")
    }
    mvDiv.style.top = (yPos + stepY) + "px";


    let xPos = mvDiv.offsetLeft;
    console.log("xPos = " + xPos);
    if (xPos + stepX > 780) {
        stepX = -stepX
    } else if (xPos + stepX < 0) {
        stepX = 1;
        console.log("hallo")
    }
    mvDiv.style.left = (xPos + stepX) + "px";
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

function reset(){
    clearInterval(interval);
    started = false
    mvDiv.style.left = (10) + "px";
    mvDiv.style.top = (10) + "px";


}
