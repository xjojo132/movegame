let stepX = 1;
let stepY = 1;
let contWidth = 600;
let contHeight = 400;
let mvDivWidth = 20;
let mvDivHeight = 20;
let posX
let mvDiv = document.getElementById("moveDiv");
let contDiv = document.getElementById("container");
let hDiv = document.getElementById("hitDiv");
let hitBoxDiv = document.getElementById("hitBox");
let score = 0;
let mis = true;
let interval;
let started = false;
let rectMvDiv;
let elementMvDiv = document.querySelector("#moveDiv");
let rectHDiv;
let elementHDiv = document.querySelector("#hitDiv");
let MDis;
let hitPoints = 10;
let hDivEind = 500;
let hDivBegin = 100;
let lvlMove;


rectMvDiv = elementMvDiv.getBoundingClientRect();
rectHDiv = elementHDiv.getBoundingClientRect();

console.log(rectMvDiv.top, rectMvDiv.left, rectMvDiv.width, rectMvDiv.height);
console.log(rectHDiv.top, rectHDiv.left, rectHDiv.width, rectHDiv.height);

function move() {

	//de scoring/lvls 

	if (score <= 10) { lvlMove = 100; hitDivWidth = 200; }
	if (score > 100 && score <= 200) { hitPoints = 15; hitDivWidth = 150; lvlMove = 75; hDivBegin = 75; hDivEind = 525; }
	if (score > 200 && score <= 300) { hitPoints = 20; hitDivWidth = 100; lvlMove = 50; hDivBegin = 50; hDivEind = 550; }
	if (score > 300) { hitPoints = 25; hitDivWidth = 50; lvlMove = 25; hDivBegin = 25; hDivEind = 575; }
	if (score > 400) { hitPoints = 30; aantalMs = 5; fStop(); fStart(); }
	if (score > 500) { hitPoints = 40; aantalMs = 3; fStop(); fStart(); }
	hDiv.style.width = hitDivWidth + "px";
	hDiv.innerHTML = hitPoints;

     //y move 
	// console.log("in move function");
	let yPos = mvDiv.offsetTop;
	// console.log("yPos = " + yPos);
	if (yPos + stepY > 380) {
		stepY = -stepY;
	} else if (yPos + stepY < -5) {
		stepY = 1;
	}
	mvDiv.style.top = yPos + stepY + "px";
	
	
	//x move
	let xPos = mvDiv.offsetLeft;
	// console.log("xPos = " + xPos);
	if (xPos + stepX > 580) {
		stepX = -stepX;
	} else if (xPos + stepX < 0) {
		stepX = 1;
	}
	mvDiv.style.left = xPos + stepX + "px";
	

	// hit reg
	rectMvDiv = elementMvDiv.getBoundingClientRect();
	rectHDiv = elementHDiv.getBoundingClientRect();
	// console.log (rectHDiv.top, rectMvDiv.top + 10)
	if (Math.round(rectHDiv.top) == Math.round(rectMvDiv.top) + 20) {
		console.log("hallo");

		for (let i = Math.round(rectHDiv.right); i >= Math.round(rectHDiv.left); i--) {
			console.log("for werkt");

			if (i == Math.round(rectMvDiv.left) + 10) {
				console.log("hit");
				score += hitPoints;
				mis = false;
				document.getElementById("hitDiv").innerHTML = hitPoints;
				document.getElementById("score").innerHTML = score;
				console.log(mis);
			}
		}
		if (mis == true) {
			console.log("mis");
			score -= hitPoints;
			document.getElementById("score").innerHTML = score;
			document.getElementById("hitDiv").innerHTML = hitPoints;

		}
		mis = true;
	}
}

function fStart() {
	if (started == false) {
		interval = setInterval(move, 7);
		started = true;

	}
}

function fStop() {
	clearInterval(interval);
	started = false;

}

function reset() {
	clearInterval(interval);
	started = false;
	score = 0;
	hitPoints = 10;
	hDivEind = 500;
	hDivBegin = 100;
	stepX = 1;
	stepY = 1;
	hDiv.style.left = 0 + "px";
	mvDiv.style.left = 10 + "px";
	mvDiv.style.top = 10 + "px";
}

// function showCoords(event){
//     let x = event.clientX;
//     let y = event.clientY;  
//     console.log(x, y, "hallo")
// }
// document.getElementById("container").addEventListener("mousemove", showCoords);

// document.getElementById("container").onmousemove = showCoords;


function showCoords(event) {
	mouseX = event.offsetX;
	mouseY = event.offsetY;
	// console.log(mouseX, mouseY, "hallo")
}
contDiv.onmousemove = showCoords;


//func om de balk onderin telaten bewegen 
function mouseClick(event) {
	console.log("mouseX + hitDivWidth  = " + (mouseX + rectHDiv.width));
	posX = mouseX;
	MDis = (mouseX - lvlMove)
	if (event.button == 0) {
		if (posX >= hDivEind) {
			hDiv.style.left = 400 + "px";
			console.log("eind")
		} else if (posX <= hDivBegin) {
			hDiv.style.left = 0 + "px";
			console.log("begin")
		} else {
			hDiv.style.left = MDis + "px";
			console.log("mid")
		}

		// hDiv.style.left =  MDis + "px";
	}
}
hitBoxDiv.onmousedown = mouseClick;

