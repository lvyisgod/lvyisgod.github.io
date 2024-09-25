// Interactive Scene
// Demo
let rowLength = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(searchXandY(0, 1, 5));
}

function draw() {
  background(0);
  circle(mouseX, mouseY, 100);
}

let matrix2d = [
  [0, 2, 0],
  [0, 5, 0],
  [0, 0, 0]
];
console.log(matrix2d[0][1]);

function searchXandY(colume, row, numToFind){
  let SearchY = true;
  for (let times = 1; times < 2; times++){
    for (let length = 0; length < rowLength; length++){
      if (SearchY){
        if (numToFind === matrix2d[row][length]){
          return true;
        }
      }
      else {
        if (numToFind === matrix2d[length][colume]){
          return true;
        }
      }
    }
    !SearchY;
  }
  return false;
}