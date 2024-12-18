// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let intitialTriangle = [
  {x: 622, y:50},
  {x: 50, y:600},
  {x: 1200, y:600},
];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  sirepinski(intitialTriangle, 3);
}

function sirepinski(points, depth){
  triangle(points[0].x, points[0].y, points[1].x, points[1].y, points[2].x, points[2].y);

  // Draw upper triangle
  if (depth > 0){
    sirepinski([points[0], midpoint[points[0], points[1]], midpoint(points[0], points[2])], depth-1);
  }
}

function midpoint(point1, point2){
  let midX = (point1.x + point2.x)/2;
  let midY = (point1.y + point2.y)/2;
  return {x: midX,y: midY};
}