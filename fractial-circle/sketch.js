// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  recuriveCircle(width/2, height/2 ,mouseX);
}

function recuriveCircle(x, y, radius){
  circle(x, y, radius*2);

  if (radius > 30){
    recuriveCircle(x - radius/2, y, radius/2);
    recuriveCircle(x + radius/2, y, radius/2);
  }
}
