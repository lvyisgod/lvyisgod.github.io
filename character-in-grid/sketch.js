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
const CLOSED_TILE = 1;
const OPEN_TILE = 0;
const PLAYER_TILE = 2;
let player = {
  x: 0,
  y: 0,
};
let cellSize;
let shouldToggleNeigbours = false;
let pathImg;
let waterImg;

function preload(){
  waterImg = loadImage("water.png");
  pathImg = loadImage("path.png");
}
function setup() {
  if (windowWidth < windowHeight){
    createCanvas(windowWidth, windowWidth);
  }
  else{
    createCanvas(windowHeight, windowHeight); 
  }
  cellSize = width/GRID_SIZE;

  grid = generateRandomGrid(GRID_SIZE, GRID_SIZE);

  // Add player to the grid
  grid[player.y][player.x] = PLAYER_TILE;
}

function draw() {
  background(220);
  noStroke();
  displayGrid();
}

function displayGrid(){
  for(let y = 0; y < GRID_SIZE; y++){
    for(let x = 0; x < GRID_SIZE; x++){
      if (grid[y][x] === OPEN_TILE){
        image(pathImg, x * cellSize, y * cellSize, cellSize, cellSize);
      }
      else if (grid[y][x] === CLOSED_TILE){
        image(waterImg, x * cellSize, y * cellSize, cellSize, cellSize);
      }
      else if(grid[y][x] === PLAYER_TILE){
        fill("red");
        square(x * cellSize, y* cellSize, cellSize);
      }
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
  if (key === "w") {
    // Move up
    movePlayer(player.x, player.y - 1);
  }
  if (key === "s"){
    // Move down
    movePlayer(player.x, player.y + 1);
  }
  if (key === "a"){
    // Move right
    movePlayer(player.x - 1, player.y);
  }
  if (key === "d"){
    swmovePlayer(player.x + 1, player.y);
  }
}

function movePlayer(x, y){

  if (x >= 0 && y >= 0 && y < GRID_SIZE && x < GRID_SIZE && grid[y][x] === OPEN_TILE){
  // When moveing reset to an open stop
    grid[player.y][player.x] = OPEN_TILE;

    // Keep track of player location
    player.x = x;
    player.y = y;

    // Put the player in grid again
    grid[player.y][player.x] = PLAYER_TILE;
  }
}

function generateRandomGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      //choose either 0 or 1, each 50% of the time
      if (random(100) < 50) {
        newGrid[y].push(CLOSED_TILE);
      }
      else {
        newGrid[y].push(OPEN_TILE);
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
      newGrid[y].push(OPEN_TILE);
    }
  }
  return newGrid;
}

function toggleCell(x, y){
  if (x >= 0 && y >= 0 && x < GRID_SIZE && y < GRID_SIZE){
    if (grid[y][x] === CLOSED_TILE){
      grid[y][x] = OPEN_TILE;
    }
    else if (grid[y][x] === OPEN_TILE){
      grid[y][x] = CLOSED_TILE;
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