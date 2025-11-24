// These need to be accessible from our input file. Declare them outside of any blocks
var shapePosX = 0;
var shapePosY = 0;

var shape = "Square";
shapeColor = "rgb(255, 128, 0)";

function DrawShape(shape, color, w, h, x, y) {
  // Get the context from the other file
  let context = ctx;
  context.fillStyle = color;
  if (shape == "Square") {
    context.fillRect(w, h, x, y);
  }
}

window.addEventListener("load", (event) => {  

  // Call it here so it draws before the user does anything
  DrawShape(shape, shapeColor, 25, 25, shapePosX, shapePosY);

  window.addEventListener("keydown", (event) => {
    lowercaseKey = event.key.toLowerCase();
    console.log("A key was pressed (" + event.key + ")");
    if (lowercaseKey == 'w') {
      console.log("w, up");
      shapePosY -= 16;
      console.log(`shapePosY: ${shapePosY}`);
    }

    if (lowercaseKey == 'a') {
      console.log("a, left");
      shapePosX -= 16;
    }

    if (lowercaseKey == 's') {
      console.log("s, down");
      shapePosY += 16;
      console.log(`shapePosY: ${shapePosY}`);
    }

    if(lowercaseKey == 'd') {
      console.log("d, right");
      shapePosX += 16;
    }
  });

  let mouseDown = false;

  window.addEventListener("mousedown", (event) => {
    console.log("The mouse has been pressed down");
    mouseDown = true;
  });

  window.addEventListener("mouseup", (event) => {
    console.log("The mouse has been released");
    mouseDown = false;
  });
});
