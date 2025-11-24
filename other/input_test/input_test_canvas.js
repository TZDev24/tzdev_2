console.log("Input Test: Canvas loading...");

// Only run JS after all the HTML has loaded in
window.addEventListener("load", (event) => {
  console.log("HTML has loaded");
  const canvas = document.getElementById("input-canvas");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const ctx = canvas.getContext("2d");

  let backgroundColor = "rgb(0, 128, 255)";

  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, width, height);

  var shapeX = 0;
  var shapeY = 0;
  var shapeWidth = 32;
  var shapeHeight = 32;

  shapeColor = "orange";

  function DrawSquare() {
    ctx.fillStyle = shapeColor;
    ctx.fillRect(shapeX, shapeY, shapeWidth, shapeHeight);
  }

  function RedrawCanvas() {
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);
  }

  DrawSquare();

  window.addEventListener("resize", (event) => {
    console.log("Window resized");
    
    // Make the canvas adjust whenever the browser window is resized
    width = (canvas.width = window.innerWidth);
    height = (canvas.height = window.innerHeight);

    // We also have to redraw after resizing
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);

    // Redraw where our square is too
    DrawSquare();
  });

  window.addEventListener("keydown", (event) => {
    let capslockEnabled = event.getModifierState('CapsLock');
    lowercaseKey = event.key.toLowerCase();
    console.log("A key was pressed (" + event.key + ")");
  
    // MOVEMENT
    if (lowercaseKey == 'w') {
      console.log("w, up");
      // Caps lock being on will increase the move distance
      shapeY -= 16 * (1 + capslockEnabled);
      console.log(`shapeY: ${shapeY}`);

      RedrawCanvas();
      DrawSquare();
    }

    if (lowercaseKey == 'a') {
      console.log("a, left");
      shapeX -= 16 * (1 + capslockEnabled);
      RedrawCanvas();
      DrawSquare();
    }

    if (lowercaseKey == 's') {
      console.log("s, down");
      shapeY += 16 * (1 + capslockEnabled);
      console.log(`shapeY: ${shapeY}`);
      RedrawCanvas();
      DrawSquare();
    }

    if(lowercaseKey == 'd') {
      console.log("d, right");
      shapeX += 16 * (1 + capslockEnabled);
      RedrawCanvas();
      DrawSquare();
    } 

    // CONTROLLING POSITION OF SHAPE
    if (lowercaseKey == 'r') {
      console.log("r key pressed, resetting position");
      shapeX = 0;
      shapeY = 0;

      RedrawCanvas();
      DrawSquare();
    }

    if (lowercaseKey == '`') {
      console.log("tilde key (`) pressed, enter a console command like Source Engine or something");
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

