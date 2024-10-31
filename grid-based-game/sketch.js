// Picross 
// Caylixx Starr
// Oct 28, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gameBoard = [];
let gridsize;
let cellSize;
let input;
let p = 0;
let gameState = "startSceen";

function setup() {
  createCanvas(windowWidth, windowHeight);
  input = createInput('', 'number');
  input.position(width/2.5, height / 2);
  setTimeout(printWO, 2000);
}

function draw() {
  background(220);
  if (gameState === "startSceen"){
    background("green");
    textSize(50);
    text("Please type in a number for your grid size you have 10 seconds", 100, height/3);
    textSize(30);
    text("please input a number that is smaller than 8 and bigger then 1", 300, height/2.5);
  }
  else if (gameState === "gameScreen"){
    background("white");
    displayGameBoard();
  }
  else if (gameState === "errorInputEntered"){
    background("red");
    textSize(50);
    text("error number too small or too large or no number inputed", width/8, height/2);
  }
}

function printWO(){
  if (input.value() > 1 && input.value() < 8 && input.value() !== ''){
    gridsize = input.value();
    cellSize = height/gridsize/1.5;
    removeElements();
    generateRandomGameBoard();
    gameState = "gameScreen";
  }
  else{
    removeElements();
    gameState = "errorInputEntered";
  }
}

function generateRandomGameBoard(){
  for (let y = 0; y < gridsize; y++){
    gameBoard.push([]);
    for (let x = 0; x < gridsize; x++){
      gameBoard[y].push(round(random(1)));
    }
  }
}

function displayGameBoard(){
  for (let y = 0; y < gridsize; y++){
    for (let x = 0; x < gridsize; x++){
      if (gameBoard[y][x] === 0){
        fill("red");
      }
      else if (gameBoard[y][x] === 1){
        fill("black");
      }
      square(x * cellSize, y * cellSize, cellSize);
    }
  }
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
      square(x+cellSize * cellSize, y * cellSize, cellSize);
    }
  }
}