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
let strikes = 0;

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
    text("please input a number that is smaller than 8 and bigger then 3", 300, height/2.5);
  }
  else if (gameState === "gameScreen"){
    background("darkblue");
    displayGameBoard();
    displayTheOutsideNumbers();
    checkForWinOrLoss();
  }
  else if (gameState === "errorInputEntered"){
    background("red");
    textSize(50);
    text("error. number too small or too large or no number inputted", width/8, height/2);
  }
  else if (gameState === "win"){
    background("white");
  }
  else if (gameState === "loss"){
    background("black");
  }
}

function checkForWinOrLoss(){
  let isWon = true;
  if (strikes > 3){
    gameState = "loss"
  }
  for (let y = 0; y < gridsize; y++){
    for (let x = 0; x < gridsize; x++){
      if (gameBoard[y][x] === 1){
        isWon = false;
      }
    }
  }
  if (isWon){
    gameState = "win"
  }
}

function mousePressed(){
  let xCord = Math.floor(mouseX/cellSize);
  let yCord = Math.floor(mouseY/cellSize);

  toggleCell(xCord, yCord);
}

function toggleCell(x, y){
  if (x >= 0 && y >= 0 && x < gridsize && y < gridsize){
    if (gameBoard[y][x] === 1){
      gameBoard[y][x] = 2;
    }
    else if (gameBoard[y][x] === 0){
      gameBoard[y][x] = 3;
      strikes += 1;
    }
  }
}

function displayTheOutsideNumbers(){
  fill("black");

  for (let y = 0; y < gridsize; y++){
    text(outsideGameBoard[y], cellSize * gridsize + gridsize, cellSize*y + (cellSize/2))
  }

  for (let x = 0; x < gridsize; x++){
    for (let y = 0; y < outsideGameBoard[x+gridsize].length; y++){
      text(outsideGameBoard[x+gridsize][y], cellSize*x+25, cellSize * gridsize + cellSize/2 + (cellSize*y)/2)
    }
  }
}

function printWO(){
  if (input.value() > 3 && input.value() < 10 && input.value() !== ''){
    gridsize = Number(input.value());
    cellSize = height/gridsize/1.5;
    removeElements();
    generateRandomGameBoard();
    findSquares();
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
        fill("grey");
      }
      else if (gameBoard[y][x] === 1){
        fill("grey");
      }
      else if (gameBoard[y][x] === 2){
        fill("green");
      }
      else {
        fill("red");
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