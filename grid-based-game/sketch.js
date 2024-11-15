// Picross 
// Caylixx Starr
// Oct 28, 2024
//
// Extra for Experts:
// - Used Input to make it so the player can make any sized grid between 4 to 10 squares and also used SetTimeout to make my code wait 5 seconds then run my function

// Setting up the squares to make it easier to read
const LOSECELL = 0;
const WINCELL = 1;
const GOODCHOICE = 2;
const BADCHOICE = 3;

// Setting up the variables and arrays
let gameBoard = [];
let outsideGameBoard = [];
let gridsize;
let cellSize;
let playerInput;
let gameState = "startScreen";
let strikes = 0;

function setup() {
  // creating the canvas then creating the input then waiting 5 seconds to check it

  createCanvas(windowWidth, windowHeight);
  createInputThenCheckItAfter5Sec();
}

function draw() {
  // This will find what the game state is then draw that state

  textAlign(CENTER, CENTER);
  if (gameState === "startScreen"){
    // Start Screen
    drawStartScreen();
  }
  else if (gameState === "gameScreen"){
    // Game Screen
    drawGameScreen();
  }
  else if (gameState === "errorInputEntered"){
    // Error Screen
    drawErrorScreen();
  }
  else if (gameState === "win"){
    // Win Screen
    drawWinScreen();
  }
  else if (gameState === "loss"){
    // Loss Screen
    drawLossScreen();
  }
}

function createInputThenCheckItAfter5Sec(){
  // This will create a blank number input then after five seconds it will run checkInputForGoodNumber

  playerInput = createInput('', 'number');
  playerInput.position(width/2.5, height / 2);
  setTimeout(checkInputForGoodNumber, 5000);
}

function drawStartScreen(){
  // This will draw the start screen text and change the background to green until the state gets changed
  
  background("green");
  textSize(50);
  text("Please type in a number for your grid size you have 5 seconds", width/2, height/3);
  textSize(30);
  text("please input a number that is between 4 to 10", width/2, height/2.5);
}

function drawGameScreen(){
  // This will change the background to light blue then display the gameboard then display the outside numbers then check for a win or loss then draw the strikes text all until
  // you win or lose

  background("lightblue");
  displayGameBoard();
  displayTheOutsideNumbers();
  checkForWinOrLoss();
  drawStrikesText();
}

function drawErrorScreen(){
  // This will draw the error text and change the background to red when a error happens

  background("red");
  textSize(50);
  text("error, number is too small or too large or no number inputted", width/2, height/2);
}

function drawWinScreen(){
  // This will draw the win text and change the background to light green when you win

  background("lightgreen");
  textSize(60);
  text("you win, good job", width/2, height/2);
}

function drawLossScreen(){
  // This will draw the loss text and change the background to red when you lose

  background("red");
  textSize(60);
  text("you lose, bad job", width/2, height/2);
}

function drawStrikesText(){
  // This will draw the stikes text at the right of the gameboard

  textSize(40);
  textAlign(LEFT);
  text(strikes + " strikes", cellSize*(gridsize+3), cellSize*(gridsize/2));
  textSize(20);
  text("Dont get more then 3", cellSize*(gridsize+2.8), cellSize*(gridsize/1.6));
}

function checkForWinOrLoss(){
  // Checking if you have won or lost the game if so then changing the gamestate

  // If you have more then 3 Strikes it will change gamestate to loss
  if (strikes > 3){
    gameState = "loss";
  }

  // creating isWon and setting it to true and then checking all the squares for a WINCELL and if one is found setting isWon to false
  // Then asking if isWon is true if so then change gameState to win
  let isWon = true;
  for (let y = 0; y < gridsize; y++){
    for (let x = 0; x < gridsize; x++){

      // WINCELL
      if (gameBoard[y][x] === WINCELL){
        isWon = false;
      }
    }
  }
  // isWon equals true
  if (isWon){
    gameState = "win";
  }
}

function mousePressed(){
  // Setting xCord and yCord to the corresponding cell the changing the cell to either good or bad choice

  let xCord = Math.floor(mouseX/cellSize);
  let yCord = Math.floor(mouseY/cellSize);

  ChangeCellBadOrGoodChoice(xCord, yCord);
}

function ChangeCellBadOrGoodChoice(x, y){
  // If x and y in the grid then ask if the cell is a WINCELL if so then change the cell to GOODCHOICE
  // else if the cell is a LOSECELL then change cell to BADCHOICE and add one to strikes

  if (x >= 0 && y >= 0 && x < gridsize && y < gridsize){

    // WINCELL
    if (gameBoard[y][x] === WINCELL){
      gameBoard[y][x] = GOODCHOICE;
    }
    // LOSECELL
    else if (gameBoard[y][x] === LOSECELL){
      gameBoard[y][x] = BADCHOICE;
      strikes += 1;
    }
  }
}

function displayTheOutsideNumbers(){
  // This will display the numbers on the right and bottom of the gameboard

  textSize(30);
  fill("black");

  // This will display the numbers on the right of the gameboard then go down and repeat until the end of the gameboard
  for (let i = 0; i < gridsize; i++){
    for (let j = 0; j < outsideGameBoard[i].length; j++){
      text(outsideGameBoard[i][j], cellSize * gridsize + cellSize/2 + cellSize*j/2.5, cellSize*i + cellSize/2);
    }
  }

  // This will display the numbers on the bottom of the grid then go right and repeat until the end of the gameboard
  for (let i = 0; i < gridsize; i++){
    for (let j = 0; j < outsideGameBoard[i+gridsize].length; j++){
      text(outsideGameBoard[i+gridsize][j], cellSize*i + cellSize/2, cellSize * gridsize + cellSize/2 + cellSize*j/1.8);
    }
  }
}

function checkInputForGoodNumber(){
  // This will check the playerInput to see if they have both inputted a number and a correct one

  // if number a number was inputted and is between 4 and 10
  if (playerInput.value() > 3 && playerInput.value() < 11 && playerInput.value() !== ''){

    // This will set the gridsize and cellSize then make a random game board then find the WINCELLS then remove the input then change gamestate to gameScreen
    gridsize = Number(playerInput.value());
    cellSize = height/gridsize/1.5;
    generateRandomGameBoard();
    findWinCells();
    removeElements();
    gameState = "gameScreen";
  }

  else{

    // This will remove the input then change gameState to errorInputEntered
    removeElements();
    gameState = "errorInputEntered";
  }
}

function generateRandomGameBoard(){
  // This will create a random gameboard based on the grid size then fill with WINCELL or LOSECELL until its filled

  for (let y = 0; y < gridsize; y++){
    gameBoard.push([]);
    for (let x = 0; x < gridsize; x++){
      let choice = random(100);

      // 50-100
      if (choice > 50){
        gameBoard[y][x] = WINCELL;
      }
      // 0-50
      else{
        gameBoard[y][x] = LOSECELL;
      }
    }
  }
}

function displayGameBoard(){
  // This will check all the cells in the game board then setting the color based on if it is a LOSECELL, LOSECELL, GOODCHOICE or BADCHOICE then draw a square at the right position

  for (let y = 0; y < gridsize; y++){
    for (let x = 0; x < gridsize; x++){

      // LOSSCELL or WINCELL
      if (gameBoard[y][x] === LOSECELL || gameBoard[y][x] === WINCELL){
        fill("pink");
      }
      // GOODCHOICE
      else if (gameBoard[y][x] === GOODCHOICE){
        fill("lightgreen");
      }
      // BADCHOICE
      else {
        fill("darkred");
      }
      square(x * cellSize, y * cellSize, cellSize);
    }
  }
}

function findWinCells(){
  // This will set up the outsideGameBoard 2d array then check the win cells for the rows and push them into the outsideGameBoard until their y is equal to gridsize then it will do
  // the same for the columns and push them in outsideGameBoard but their y is gridsize+1 to gridsize*2

  // Adding a empty array to outsideGameBoard for gridsize*2 times all the numbers from position 0 to gridsize will be the rows and the rest will be the columns
  for (let i = 0; i < gridsize*2; i++){
    outsideGameBoard.push([]);
  }

  // ROWS
  // For in each column will make a counter then check the first cell then if its a WINCELL it will add one to the counter or else if it's a LOSECELL and counter is greater than 0
  // it will push the counter to outsideGameBoard at y then set counter to 0 and if x = gridsize and counter greater than 0 it will push the counter to outsideGameBoard at y
  // then after this has ran though one row the counter will reset and the whole process repeat to the next row until all rows are checked
  // it will check like this ie: X X X
  for (let y = 0; y < gridsize; y++){
    let counter = 0;
    for (let x = 0; x < gridsize; x++){

      // WINCELL
      if (gameBoard[y][x] === WINCELL){
        counter += 1;
      }
      // LOSSCELL and counter greater than 0
      else if (gameBoard[y][x] === LOSECELL && counter > 0){
        outsideGameBoard[y].push(counter);
        counter = 0;
      }
      // x = gridsize and counter greater than 0
      if (x === gridsize-1 && counter > 0){
        outsideGameBoard[y].push(counter);
      }
    }
  }

  // COLUMNS
  // For in each column will make a counter then check the first cell then if its a WINCELL it will add one to the counter or else if it's a LOSECELL and counter is greater than 0
  // it will push the counter to outsideGameBoard at x + gridsize then set counter to 0 and if y = gridsize and counter greater than 0 it will push the counter to outsideGameBoard at x + gridsize
  // then after this has ran though one column the counter will reset and the whole process repeat to the next column until all columns are checked
  //  it will check like this ie: X
  //                              X
  //                              X
  for (let x  = 0; x < gridsize; x++){
    let counter = 0;
    for (let y = 0; y < gridsize; y++){

      // WINCELL
      if (gameBoard[y][x] === WINCELL){
        counter += 1;
      }
      // LOSSCELL and counter greater than 0
      else if (gameBoard[y][x] === LOSECELL && counter > 0){
        outsideGameBoard[x + gridsize].push(counter);
        counter = 0;
      }
      // y = gridsize and counter greater than 0
      if (y === gridsize-1 && counter > 0){
        outsideGameBoard[x + gridsize].push(counter);
      }
    }
  }
}