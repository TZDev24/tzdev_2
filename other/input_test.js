console.log("Input test script loaded successfully");

// Get the actual canvas element
const canvas = document.querySelector(".input-test-canvas");
let canvasWidth = (canvas.width = window.innerWidth);
let canvasHeight = (canvas.height = window.innerHeight);

const context = canvas.getContext("2d");

// Fill the canvas with a black background
context.fillStyle = "black";
context.fillRect(0, 0, canvasWidth, canvasHeight);

// We'll display some data as well. Write some stuff on the screen
context.font = "24px monospace";
context.fillStyle = "white";
context.textAlign = "center";
context.textBaseline = "left";

let boxPosX = 0;
let boxPosY = 0;

let boxSizeX = 128;
let boxSizeY = 128;

let boxColor = "#FFA500";

function redrawSquare() {
  // Refill the background to remove previous drawings
  context.fillStyle = "black";
  context.fillRect(0, 0, canvasWidth, canvasHeight);

  // Redraw the square on top of the newly-redrawn background
  context.fillStyle = boxColor;
  context.fillRect(boxPosX, boxPosY, boxSizeX, boxSizeY);
}

// Instead of drawing text on the canvas, we'll use p elements to show info
// Get the elements here instead of doing this in the function every time. Yes, we care about performance this much.
let boxPosX_p = document.getElementById("canvastest-box-pos-x");
let boxPosY_p = document.getElementById("canvastest-box-pos-y");

function updateInfo() {
  boxPosX_p.textContent = `Box pos X: ${boxPosX}`;
  boxPosY_p.textContent = `Box pos Y: ${boxPosY}`;
}

// Call the function a first time here
redrawSquare();
updateInfo();

// Let's do some input handling
const body = document.body;
body.addEventListener("keydown", (event) => {
  // Convert event key to lowercase, then it doesn't matter if user has caps lock on or not
  let lowerKey = event.key.toLowerCase();
  console.log(`A key was pressed (${lowerKey})`);

  if (lowerKey === 'w' || lowerKey == "arrowup") {
    console.log("W key was pressed");
    boxPosY -= 16;
  }
  if (lowerKey === 's' || lowerKey == "arrowdown") {
    console.log("S key was pressed");
    boxPosY += 16;
  }

  if (lowerKey === 'a' || lowerKey == "arrowleft") {
    console.log("A key was pressed");
    boxPosX -= 16;
  }

  if (lowerKey === 'd' || lowerKey == "arrowright") {
    console.log("D key was pressed");
    boxPosX += 16;
  }

  
  // Controls for other things besides moving around
  if (lowerKey === 'r') {
    console.log("R key was pressed. Resetting position");
    boxPosX = 0;
    boxPosY = 0;
  }

  redrawSquare();

  // Tell ourselves where exactly it's positioned at. We have to update this every time the square is moved and the screen is updated
  updateInfo();
});

// The mouse should do stuff too
let mouseHeldDown = false;
canvas.onmousedown = function(event) {
  mouseHeldDown = true;
  console.log("Mouse was pressed");
}

canvas.onmouseup = function(event) {
  mouseHeldDown = false;
  console.log("Mouse was released");
}

canvas.onmousemove = function(event) {
  if (mouseHeldDown) {
    console.log("Mouse is being moved around canvas while held down");
  }
}

body.addEventListener("keyup", (event) => {
  let lowerKey = event.key.toLowerCase();
  // console.log(`A key was released (${lowerKey})`);
  //
  if (lowerKey === 'w') {
    console.log("W key was released");
  }
  else if (lowerKey === 's') {
    console.log("S key was released");
  }
});

// Canvas size should adjust to the browser window's dimensions
window.addEventListener("resize", function() {
  console.log(`Window resized. New dimensions: (${window.innerWidth}, ${window.innerHeight})`);

  canvasWidth = (canvas.width = window.innerWidth);
  canvasHeight = (canvas.height = window.innerHeight);

  context.fillStyle = "black";
  context.clearRect(0, 0, canvasWidth, canvasHeight);
  context.fillRect(0, 0, canvasWidth, canvasHeight);

  redrawSquare();
});

let colorPicker = document.getElementById("current-square-color");

// There's "onchange" and "input." Input is the one that updates in real time. "onchange" upates after
colorPicker.addEventListener("input", function(event) {
  console.log(`Color changed. New color: ${event.target.value}`);
  boxColor = event.target.value;

  redrawSquare();
});
