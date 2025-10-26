console.log("Input test script loaded successfully");

// Get the actual canvas element
const canvas = document.querySelector(".input-test-canvas");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

const context = canvas.getContext("2d");

// Fill the canvas with a black background
context.fillStyle = "black";
context.fillRect(0, 0, width, height);

// We'll display some data as well. Write some stuff on the screen
context.font = "24px monospace";
context.fillStyle = "white";
context.textAlign = "center";
context.textBaseline = "left";

let boxPosX = 0;
let boxPosY = 0;

let boxSizeX = 128;
let boxSizeY = 128;

let boxColor = "orange";

function redrawSquare() {
  // Refill the background to remove previous drawings
  context.fillStyle = "black";
  context.fillRect(0, 0, width, height);

  // Redraw the square on top of the newly-redrawn background
  context.fillStyle = boxColor;
  context.fillRect(boxPosX, boxPosY, boxSizeX, boxSizeY);
}

function redrawInfo() {
  // Make the text white
  context.fillStyle = "white";
  
  // Start drawing some info
  context.fillText(`Box pos X: ${boxPosX}`, 192, 64);
  context.fillText(`Box pos Y: ${boxPosY}`, 192, 96);
}

// Call the function a first time here
redrawSquare();
redrawInfo();

// Let's do some input handling
const body = document.body;
body.addEventListener("keydown", (event) => {
  // Convert event key to lowercase, then it doesn't matter if user has caps lock on or not
  let lowerKey = event.key.toLowerCase();
  // console.log(`A key was pressed (${lowerKey})`);

  if (lowerKey === 'w') {
    console.log("W key was pressed");
    boxPosY -= 16;
  }
  if (lowerKey === 's') {
    console.log("S key was pressed");
    boxPosY += 16;
  }

  if (lowerKey === 'a') {
    console.log("A key was pressed");
    boxPosX -= 16;
  }

  if (lowerKey === 'd') {
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
  redrawInfo();
});

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
