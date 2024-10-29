// Picross 
// Caylixx Starr
// Oct 28, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gameBoard = [];
let cellsize;
let input;
let p = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  input = createInput('');
  input.position(0, 100);
}

function draw() {
  if (p === 0){
    setTimeout(printWO, 3000);
    p += 1;
  }
  background(220);
}

function printWO(){
  console.log(input.input);
}
