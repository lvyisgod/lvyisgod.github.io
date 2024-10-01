// Interactive Scene, Sudoku
// Caylixx, Starr
// Sept 30, 2024
// Wow Me factor: adding the numbers being able to be resized with a scroll wheel on the mouse by moxing it up or down

// This is Instilizing all the games boards it will randomly choses from
let randomBoards = [
  [2, 1, 3],
  [3, 2, 1],
  [1, 3, 2],

  [2, 3, 1],
  [1, 2, 3],
  [3, 1, 2],

  [3, 1, 2],
  [2, 3, 1],
  [1, 2, 3],

  [1, 3, 2],
  [3, 2, 1],
  [2, 1, 3],

  [3, 2, 1],
  [2, 1, 3],
  [1, 3, 2]
];

// setting up the game state
let gameState = "start";

// setting up the rowlength, random pick and boolean and the orignal numSize
const rowLength = 3;
let randomPick;
let randomTrueOrFalse;
let numSize = 90;

// Instlizing all the numbers to be false
let firstNum = false;
let secondNum = false;
let thirdNum = false;
let fourthNum = false;
let fifthNum = false;
let sixthNum = false;
let seventhNum = false;
let eighthNum = false;
let ninthNum = false;


function setup() {
  // This will pick a random number 0-4 then times it by 3 to get the start of each of the game boards
  // and also make a random boolean true or false

  createCanvas(windowWidth, windowHeight);
  randomPick = round(random(4))*3;
  randomTrueOrFalse = randomizeTrueOrFalse();
}

function draw() {
  // This will draw the background white then drawSquares then drawNumbers and then numReveal

  background(0);
  if (gameState === "start"){
    text("Sudoku", windowWidth/2, windowHeight/3);
  }
  if (gameState === "inGame"){
    drawSquares();
    drawNumbers();
    numReveal();
  }
  
  // if (gameState === "win"){

  // }

  // if (gameState === "loss"){

  // }
}


function drawSquares(){
  //  This function draws the grid of squares for the numbers to go into

  for (let x = 0; x < windowWidth; x += windowWidth / rowLength) {
    for (let y = 0; y < windowHeight; y += windowHeight / rowLength) {
      square(x, y, windowWidth);
    }
  }
}


function drawNumbers(){
  // This function will use a nested loop to draw the numbers from the random board that was picking by making colume equal to random pick and then going up by 1 untill random pick + 3
  // then making row = 0 and go till go length then it will draw the numbers in while also making some numbers hiden if hidefirstnum = true the first, third, fifth, seventh and nineth will be hiden
  // if false it will hide second, fourth, sixth, eighth

  let hideFirstNum = randomTrueOrFalse;
  let counter = 0;
  for (let colume = randomPick; colume < randomPick + 3; colume++){
    for (let row = 0; row < rowLength; row++){
      textSize(numSize);
      if (!hideFirstNum){
        text(randomBoards[colume][row], windowWidth/6 + windowWidth/3 * row - 30, windowHeight/6 + windowHeight/3 * counter + 20);
      }
      hideFirstNum = !hideFirstNum;
    }
    counter += 1;
  }
}

function mouseWheel(event) {
  // Making a function that changes the numSize based on the mouse wheel going up or down

  if (event.delta < 0) {
    numSize -= 2;
  } 
  else{
    numSize += 2;
  }
}

function randomizeTrueOrFalse(){
  // This function will randomize a boolean to be eather true or false

  randomTrueOrFalse = round(random(1));
  if (randomTrueOrFalse === 0) {
    return true;
  }
  else {
    return false;
  }
}

function mouseClicked(){
  // This function will ask if a square has been clicked and if you are clicking the right box and the right number on the keyboard if so if will make the corresponeding number true


  if (mouseX > 0 && mouseX < windowWidth/3 && (mouseY > 0 && mouseY < windowHeight/3) && randomTrueOrFalse && keyIsDown(getNumToKeyCodes(0, 0))){
    firstNum = true;
  }
  if (mouseX > windowWidth/3 && mouseX < windowWidth/3*2 && (mouseY > 0 && mouseY < windowHeight/3) && !randomTrueOrFalse && keyIsDown(getNumToKeyCodes(0, 1))){
    secondNum = true;
  }
  if (mouseX > windowWidth/3*2 && mouseX < windowWidth && (mouseY > 0 && mouseY < windowHeight/3) && randomTrueOrFalse && keyIsDown(getNumToKeyCodes(0, 2))){
    thirdNum = true;
  }
  if (mouseX > 0 && mouseX < windowWidth/3 && (mouseY > windowHeight/3 && mouseY < windowHeight/3*2) && !randomTrueOrFalse && keyIsDown(getNumToKeyCodes(1, 0))){
    fourthNum = true;
  }
  if (mouseX > windowWidth/3 && mouseX < windowWidth/3*2 && (mouseY > windowHeight/3 && mouseY < windowHeight/3*2) && randomTrueOrFalse && keyIsDown(getNumToKeyCodes(1, 1))){
    fifthNum = true;
  }
  if (mouseX > windowWidth/3*2 && mouseX < windowWidth && (mouseY > windowHeight/3 && mouseY < windowHeight/3*2) && !randomTrueOrFalse && keyIsDown(getNumToKeyCodes(1, 2))){
    sixthNum = true;
  }
  if (mouseX > 0 && mouseX < windowWidth/3 && (mouseY > windowHeight/3*2 && mouseY < windowHeight) && randomTrueOrFalse && keyIsDown(getNumToKeyCodes(2, 0))){
    seventhNum = true;
  }
  if (mouseX > windowWidth/3 && mouseX < windowWidth/3*2 && (mouseY > windowHeight/3*2 && mouseY < windowHeight) && !randomTrueOrFalse && keyIsDown(getNumToKeyCodes(2, 1))){
    eighthNum = true;
  }
  if (mouseX > windowWidth/3*2 && mouseX < windowWidth && (mouseY > windowHeight/3*2 && mouseY < windowHeight) && randomTrueOrFalse && keyIsDown(getNumToKeyCodes(2, 2))){
    ninthNum = true;
  }
}


function numReveal(){
  // If a number has been made true this will draw the number in the right spot that the number is suppost to be in

  if (firstNum){
    text(randomBoards[randomPick][0], windowWidth/6 - 30, windowHeight/6 + 20);
  }
  if (secondNum){
    text(randomBoards[randomPick][1], windowWidth/2 - 30, windowHeight/6 + 20);
  }
  if (thirdNum){
    text(randomBoards[randomPick][2], windowWidth/6*5 - 30, windowHeight/6 + 20);
  }
  if (fourthNum){
    text(randomBoards[randomPick+1][0], windowWidth/6 - 30, windowHeight/2 + 20);
  }
  if (fifthNum){
    text(randomBoards[randomPick+1][1], windowWidth/2 - 30, windowHeight/2 + 20);
  }
  if (sixthNum){
    text(randomBoards[randomPick+1][2], windowWidth/6*5 - 30, windowHeight/2 + 20);
  }
  if (seventhNum){
    text(randomBoards[randomPick+2][0], windowWidth/6 - 30, windowHeight/6 * 5 + 20);
  }
  if (eighthNum){
    text(randomBoards[randomPick+2][1], windowWidth/2 - 30, windowHeight/6 * 5 + 20);
  }
  if (ninthNum){
    text(randomBoards[randomPick+2][2], windowWidth/6*5 - 30, windowHeight/6 * 5 + 20);
  }
}


function getNumToKeyCodes(numToAddToRandomPick, row){
  // This function will ask the colume by doing random pick + the number to add to it and will ask the row and after finding out what number it is it will return the number code

  if (randomBoards[randomPick+numToAddToRandomPick][row] === 1){
    return 49;
  }
  if (randomBoards[randomPick+numToAddToRandomPick][row] === 2){
    return 50;
  }
  else{
    return 51;
  }
}