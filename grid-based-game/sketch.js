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
let gameState = "startScreen";
let strikes = 0;
const LOSESQUARE = 0;
const WINSQUARE = 1;
const GOODCHOICE = 2;
const BADCHOICE = 3;


function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  input = createInput('', 'number');
  input.position(width/2.5, height / 2);
  setTimeout(checkInputForGoodNumber, 10000);
}

function draw() {
  textAlign(CENTER);
  if (gameState === "startScreen"){
    background("green");
    textSize(50);
    text("Please type in a number for your grid size you have 10 seconds", width/2, height/3);
    textSize(30);
    text("please input a number that is smaller then 12 and bigger then 3 non inclusive", width/2, height/2.5);
  }
  else if (gameState === "gameScreen"){
    background("white");
    displayGameBoard();
    displayTheOutsideNumbers();
    checkForWinOrLoss();
  }
  else if (gameState === "errorInputEntered"){
    background("red");
    textSize(50);
    text("error, number is too small or too large or no number inputted", width/2, height/2);
  }
  else if (gameState === "win"){
    textSize(60);
    background("white");
    text("you win good job", width/2, height/2);
  }
  else if (gameState === "loss"){
    textSize(60);
    background("white");
    text("you lose bad job", width/2, height/2);
  }
}

function checkForWinOrLoss(){
  let isWon = true;
  if (strikes > 3){
    gameState = "loss";
  }
  for (let y = 0; y < gridsize; y++){
    for (let x = 0; x < gridsize; x++){
      if (gameBoard[y][x] === 1){
        isWon = false;
      }
    }
  }
  if (isWon){
    gameState = "gameScreen";
  }
}

function mousePressed(){
  let xCord = Math.floor(mouseX/cellSize);
  let yCord = Math.floor(mouseY/cellSize);

  toggleCell(xCord, yCord);
}

function toggleCell(x, y){
  if (x >= 0 && y >= 0 && x < gridsize && y < gridsize){
    if (gameBoard[y][x] === WINSQUARE){
      gameBoard[y][x] = GOODCHOICE;
    }
    else if (gameBoard[y][x] === LOSESQUARE){
      gameBoard[y][x] = BADCHOICE;
      strikes += 1;
    }
  }
}

function displayTheOutsideNumbers(){
  fill("black");

  for (let x = 0; x < gridsize; x++){
    for (let y = 0; y < outsideGameBoard[x].length; y++){
      text(outsideGameBoard[x][y], cellSize * gridsize + cellSize/2 + cellSize*y/2.5, cellSize*x + cellSize/2);
    }
  }

  for (let x = 0; x < gridsize; x++){
    for (let y = 0; y < outsideGameBoard[x+gridsize].length; y++){
      text(outsideGameBoard[x+gridsize][y], cellSize*x + cellSize/2, cellSize * gridsize + cellSize/2 + cellSize*y/2);
    }
  }
}

function checkInputForGoodNumber(){
  if (input.value() > 3 && input.value() < 12 && input.value() !== ''){
    gridsize = Number(input.value());
    cellSize = height/gridsize/1.5;
    generateRandomGameBoard();
    findWinSquares();
    removeElements();
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
      let choice = random(100);
      if (choice > 50){
        gameBoard[y][x] = WINSQUARE;
      }
      else{
        gameBoard[y][x] = LOSESQUARE;
      }
    }
  }
}

function displayGameBoard(){
  for (let y = 0; y < gridsize; y++){
    for (let x = 0; x < gridsize; x++){
      if (gameBoard[y][x] === LOSESQUARE || gameBoard[y][x] === WINSQUARE){
        fill("grey");
      }
      else if (gameBoard[y][x] === GOODCHOICE){
        fill("green");
      }
      else {
        fill("red");
      }
      square(x * cellSize, y * cellSize, cellSize);
    }
  }
}

function findWinSquares(){
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