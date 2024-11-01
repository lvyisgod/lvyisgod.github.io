// Grid Demo
// Caylixx Starr
// 10/22/2024

//  If hardcoding grid use this
// let grid = [[1, 0, 1, 0],
//   [0, 1, 0, 0], 
//   [1, 0, 1, 1], 
//   [0, 1, 1, 0]];

// If tring to randomize it use this
let grid;
const GRID_SIZE = 15;
let cellSize;
let shouldToggleNeigbours = true;

function setup() {
  if (windowWidth < windowHeight){
    createCanvas(windowWidth, windowWidth);
  }
  else{
    createCanvas(windowHeight, windowHeight); 
  }
  cellSize = width/GRID_SIZE;

  grid = generateRandomGrid(GRID_SIZE, GRID_SIZE);
}

function draw() {
  background(220);
  noStroke();
  displayGrid();
}

function displayGrid(){
  for(let y = 0; y < GRID_SIZE; y++){
    for(let x = 0; x < GRID_SIZE; x++){
      if (grid[y][x] === 1){
        fill("darkblue");
      }
      else{
        fill("lightpink");
      }
      square(x * cellSize, y* cellSize, cellSize);
    }
  }
}
function keyPressed(){
  if (key === "r"){
    grid = generateRandomGrid(GRID_SIZE, GRID_SIZE);
  }
  if (key === "e"){
    grid = makeEmptyGrid(GRID_SIZE, GRID_SIZE);
  }
  if (key === "n"){
    shouldToggleNeigbours = !shouldToggleNeigbours;
  }
}

function generateRandomGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      //choose either 0 or 1, each 50% of the time
      if (random(100) < 50) {
        newGrid[y].push(1);
      }
      else {
        newGrid[y].push(0);
      }
    }
  }
  return newGrid;
}

function makeEmptyGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      newGrid[y].push(0);
    }
  }
  return newGrid;
}

function toggleCell(x, y){
  if (x >= 0 && y >= 0 && x < GRID_SIZE && y < GRID_SIZE){
    if (grid[y][x] === 1){
      grid[y][x] = 0;
    }
    else{
      grid[y][x] = 1;
    }
  }
}
function mousePressed(){
  let xCord = Math.floor(mouseX/cellSize);
  let yCord = Math.floor(mouseY/cellSize);

  toggleCell(xCord, yCord);

  if (shouldToggleNeigbours){
    toggleCell(xCord + 1, yCord);
    toggleCell(xCord - 1, yCord);
    toggleCell(xCord, yCord + 1);
    toggleCell(xCord, yCord - 1);
  }
}

function windowResize(){
  if (windowWidth < windowHeight){
    resizeCanvas(windowWidth, windowWidth);
  }
  else{
    resizeCanvas(windowHeight, windowHeight); 
  }
  cellSize = width/GRID_SIZE;
}