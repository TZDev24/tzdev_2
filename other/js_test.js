console.log("If you can read this, the script loaded successfully");

const canvas = document.querySelector(".myCanvas");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// We need to get the context so we can draw stuff
const ctx = canvas.getContext("2d");

ctx.fillStyle = "black";
ctx.fillRect(0, 0, width, height);

// Drawing some simple rectangles
ctx.fillStyle = "red";
ctx.fillRect(50, 50, 100, 150);

ctx.fillStyle = "green";
ctx.fillRect(75, 75, 100, 100);

ctx.filStyle = "rgb(255 0 255 / 75%)";
ctx.fillRect(25, 100, 175, 50);

ctx.fillRect(384, 384, 100, 100);

// Trying some different colors here
// You can use RGB to set the draw color similar to how you'd do it in CSS
ctx.fillStyle = "rgb(0, 128, 255)";
ctx.fillRect(512, 512, 100, 100);

ctx.fillStyle = "rgb(255, 128, 0)";
ctx.fillRect(768, 768, 100, 100);

// You can draw box outlines like this
ctx.strokeStyle = "white";
// Changing the width of the outline
ctx.lineWidth = 5;
ctx.strokeRect(25, 25, 175, 200);
