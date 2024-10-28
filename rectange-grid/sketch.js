//Rectangle Grid
// Caylixx Starr

const CELL_SIZE = 5;
let grid;
let rows;
let cols;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = Math.floor(windowWidth / CELL_SIZE);
  rows = Math.floor(windowHeight / CELL_SIZE);
  grid = generateRandomGrid(cols, rows);
}

function draw() {
  background(220);
  displayGrid();
}

function displayGrid(){
  for (let y = 0; y < rows; y++){
    for (let x = 0; x < cols; x++){
      if (grid[y][x] === 1){
        fill("lightpink");
      }
      else{
        fill("purple");
      }
      square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
    }
  }
}

function generateRandomGrid(cols, rows){
  newGrid = [];
  for (let y = 0; y < rows; y++){
    newGrid.push([]);
    for (let x = 0; x < cols; x++){
      if (random(100) < 50){
        newGrid[y].push(0);
      }
      else{
        newGrid[y].push(1);
      }
    }
  }
  return newGrid;
}