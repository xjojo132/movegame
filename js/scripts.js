let stepX = 10;
let stepY = 20;
let contWidth = 400;
let contHeight = 300;
let mvDivWidth = 20;
let mvDivHeight = 20;
let mvDiv = document.getElementById("moveDiv")
let contDiv = document.getElementById("container")
let score = 0;


function move() {
    console.log("in move function");
    let yPos = mvDiv.offsetTop;
    console.log("yPos = " + yPos);
    if (yPos + stepY > 600) {
        stepY = -stepY
    }
    mvDiv.style.top = (yPos + stepY) + "px";
}

function fStart(){
    let interval = setInterval(move, 500);
}

function fStop(){
    clearInterval(interval);
}
