// Interactive Scene
// Demo

let rowLength = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(searchXandY(1, 0, 2));
}

function draw() {
  background(0);
  circle(mouseX, mouseY, 100);
}

let matrix2d = [
  [0, 2, 0],
  [0, 0, 3],
  [0, 0, 0]
];
console.log(matrix2d[0][1]);

function searchXandY(colume, row, numToFind){
  let searchY = true;
  for (let times = 1; times < 3; times++){
    for (let length = 0; length < rowLength; length++){
      if (searchY){
        console.log(matrix2d[row][length])
        console.log((matrix2d[row][length] === matrix2d[colume][row]))
        if ((numToFind === matrix2d[row][length]) && (matrix2d[row][length] === matrix2d[colume][row])){
          return true;
        }
      }
      else {
        console.log(matrix2d[length][colume])
        if ((numToFind === matrix2d[length][colume]) && (matrix2d[length][colume] === matrix2d[colume][row])){
          return true;
        }
      }
    }
    searchY = false
  }
  return false;
}