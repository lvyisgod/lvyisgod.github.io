// Interactive Scene
// Demo

let rowLength = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  makeGame(easymode);
  console.log(easymode);
}

function draw() {
  background(0);
  circle(mouseX, mouseY, 100);
}

let easymode = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];
easymode[2][1] = 2;

function searchXandY(colume, row, numToFind, easyOrHard){
  let searchY = true;
  for (let times = 0; times < 2; times++){
    for (let length = 0; length < rowLength; length++){
      if (searchY){
        if (numToFind === easyOrHard[row][length] && length !== row){
          return true;
        }
      }
      else {
        if (numToFind === easyOrHard[length][colume] && length !== colume){
          return true;
        }
      }
    }
    searchY = false;
  }
  return false;
}

function makeGame(easyOrHard){
  for (let x = 0; x < 1; x++){
    for (let y = 0; y < 2; x++){
      console.log[x, y];
    }
  }
}