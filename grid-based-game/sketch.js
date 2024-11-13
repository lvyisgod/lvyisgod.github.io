// Picross 
// Caylixx Starr
// Oct 28, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gameBoard = [];
let outsideGameBoard = [];
let gridsize;
let cellSize;
let input;
let gameState = "startSceen";
let maxNumber;

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
    gridsize = Number(input.value());
    cellSize = height/gridsize/1.5;
    removeElements();
    generateRandomGameBoard();
    gameState = "gameScreen";
    findSquares();
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
        fill("green");
      }
      square(x * cellSize, y * cellSize, cellSize);
    }
  }
}

function findSquares(){
  maxNumber = Math.ceil(gridsize/2);
  for (let i = 0; i < gridsize*2; i++){
    outsideGameBoard.push([]);
  }

  for (let y = 0; y < gridsize; y++){
    let counter = 0;

    for (let x = 0; x < gridsize; x++){

      if (gameBoard[y][x] === 1){
        counter += 1;
      }
      else if (gameBoard[y][x] === 0 && counter > 0){
        outsideGameBoard[y].push(counter);
        counter = 0;
      }
      if (x === gridsize-1 && counter > 0){
        outsideGameBoard[y].push(counter);
      }
    }
  }

  for (let x  = 0; x < gridsize; x++){
    let counter = 0;

    for (let y = 0; y < gridsize; y++){
      if (gameBoard[y][x] === 1){
        counter += 1;
      }
      else if (gameBoard[y][x] === 0 && counter > 0){
        outsideGameBoard[x + gridsize].push(counter);
        counter = 0;
      }
      if (y === gridsize-1 && counter > 0){
        outsideGameBoard[x + gridsize].push(counter);
      }
    }
  }
}