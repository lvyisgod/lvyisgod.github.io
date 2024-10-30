// Picross 
// Caylixx Starr
// Oct 28, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gameBoard = [];
let gridsize;
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
  }
  else if (gameState === "gameScreen"){
    displayGameBoard();
  }
  else if (gameState === "noInputEntered"){

  }
}

function printWO(){
  gridsize = input.value();
  removeElements();
  generateRandomGameBoard();
  gameState = "gameScreen";
}

function generateRandomGameBoard(){
  for (let y = 0; y < gridsize; y++){
    gameBoard.push([]);
    for (let x = 0; x < gridsize; x++){
      gameBoard[y].push(round(random(1)));
    }
  }
}