// Arrays and Object Notation Assignment
// Caylixx Starr
// 10/8/2024
// Extra for experts: Made and used a sort algorithm to randomly suffle the cards in the deck

// Setting up the const of cardsNumber and suits then initializing deck and cardsUsed
const cardNumbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "T", "J", "Q", "K"];
const suits = ["s", "c", "h", "d"];
let deck = [];
let cardsUsed = [];

// Setting up the ggameStart to false and cardsUsedCounter to 1
let cardsUsedCounter = 1;
let gameStart = false;

// Initializing the variables for the images
let CA;
let C2;
let C3;
let C4;
let C5;
let C6;
let C7;
let C8;
let C9;
let CT;
let CJ;
let CQ;
let CK;
let SA;
let S2;
let S3;
let S4;
let S5;
let S6;
let S7;
let S8;
let S9;
let ST;
let SJ;
let SQ;
let SK;
let DA;
let D2;
let D3;
let D4;
let D5;
let D6;
let D7;
let D8;
let D9;
let DT;
let DJ;
let DQ;
let DK;
let HA;
let H2;
let H3;
let H4;
let H5;
let H6;
let H7;
let H8;
let H9;
let HT;
let HJ;
let HQ;
let HK;

function preload(){
  // Preloading all the card images and setting them to their variables
  CA = loadImage("AC.svg");
  C2 = loadImage("2C.svg");
  C3 = loadImage("3C.svg");
  C4 = loadImage("4C.svg");
  C5 = loadImage("5C.svg");
  C6 = loadImage("6C.svg");
  C7 = loadImage("7C.svg");
  C8 = loadImage("8C.svg");
  C9 = loadImage("9C.svg");
  CT = loadImage("TC.svg");
  CJ = loadImage("JC.svg");
  CQ = loadImage("QC.svg");
  CK = loadImage("KC.svg");
  SA = loadImage("AS.svg");
  S2 = loadImage("2S.svg");
  S3 = loadImage("3S.svg");
  S4 = loadImage("4S.svg");
  S5 = loadImage("5S.svg");
  S6 = loadImage("6S.svg");
  S7 = loadImage("7S.svg");
  S8 = loadImage("8S.svg");
  S9 = loadImage("9S.svg");
  ST = loadImage("TS.svg");
  SJ = loadImage("JS.svg");
  SQ = loadImage("QS.svg");
  SK = loadImage("KS.svg");
  DA = loadImage("AD.svg");
  D2 = loadImage("2D.svg");
  D3 = loadImage("3D.svg");
  D4 = loadImage("4D.svg");
  D5 = loadImage("5D.svg");
  D6 = loadImage("6D.svg");
  D7 = loadImage("7D.svg");
  D8 = loadImage("8D.svg");
  D9 = loadImage("9D.svg");
  DT = loadImage("TD.svg");
  DJ = loadImage("JD.svg");
  DQ = loadImage("QD.svg");
  DK = loadImage("KD.svg");
  HA = loadImage("AH.svg");
  H2 = loadImage("2H.svg");
  H3 = loadImage("3H.svg");
  H4 = loadImage("4H.svg");
  H5 = loadImage("5H.svg");
  H6 = loadImage("6H.svg");
  H7 = loadImage("7H.svg");
  H8 = loadImage("8H.svg");
  H9 = loadImage("9H.svg");
  HT = loadImage("TH.svg");
  HJ = loadImage("JH.svg");
  HQ = loadImage("QH.svg");
  HK = loadImage("KH.svg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  setUpTheDeckAndSuffle();
}

function draw() {
  // Startscreen
  if (!gameStart){
    drawStartScreen();
  }

  // Gamescreen
  else{
    drawTextAndBackgroundOnGameScreen();
    getLastCardThenDraw();
  }
}

function setUpTheDeckAndSuffle(){
  // Set up make the deck then suffle it then spawn the first card
  makeDeck();
  suffleDeck();
  spawnCard(deck[0]);
}

function drawStartScreen(){
  // Drawing the text and background of the startscreen
  background("lightgreen");
  textSize(75);
  text("Card Drawing Game", width/3, height/3.5);
  textSize(25);
  text("click mouse to start", width/2.2, height/2.5);
}

function drawTextAndBackgroundOnGameScreen(){
  //
  background("lightblue");
  textSize(100);
  if (cardsUsedCounter < 52){
    text(cardsUsedCounter + " cards drawn", width/2 - 300, 150);
  }
  else{
    text("Whole deck drawn", width/2 - 325, 150);
  }
  textSize(30);
  text("press d to draw a card", width/2 - 150, 200);
}

function makeDeck(){
  // Creating the deck by appending each object in the suits and cardNum lists then pushing the result to deck
  deck = [];
  for (let suit of suits){
    for (let cardNum of cardNumbers){
      deck.push(cardNum + suit);
    }
  }
}

function mousePressed(){
  // When mouse pressed on startscreen it will can it to the gamescreen
  gameStart = true;
}

function suffleDeck(){
  // Shuffling the deck by using sort by subtracting 0.5 by Math.random(which is a random number between -1 and 1)
  // then the answer will get put in the sort if positive or 0 then A then B and if negative B then A this is not completely random
  // but it will be random enough the that it is essentially random to a human
  deck = deck.sort(() => 0.5 - Math.random());
}

function spawnCard(card){
  // Making someCard with object notation then setting a varable to suit making it getSuit card and another number making it getNumber card
  let someCard = {
    suit: getSuit(card),
    number: getNumber(card),
  };

  // Putting someCard in the first postition of cardsUsed and then removing the first object in deck
  cardsUsed.unshift(someCard);
  deck.shift();
}

function getLastCardThenDraw(){
  // This will use the first card in cardsUsed by finding the suit then the number of it then after it will then draw the image of whatever card it is
  if (cardsUsed[0].suit === "S"){
    if (cardsUsed[0].number === "A"){
      image(SA, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === 2){
      image(S2, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === 3){
      image(S3, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === 4){
      image(S4, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === 5){
      image(S5, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === 6){
      image(S6, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === 7){
      image(S7, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === 8){
      image(S8, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === 9){
      image(S9, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === "T"){
      image(ST, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === "J"){
      image(SJ, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === "Q"){
      image(SQ, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === "K"){
      image(SK, width/2-100, height/2-100);
    }
  }
  else if (cardsUsed[0].suit === "C"){
    if (cardsUsed[0].number === "A"){
      image(CA, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === 2){
      image(C2, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === 3){
      image(C3, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === 4){
      image(C4, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === 5){
      image(C5, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === 6){
      image(C6, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === 7){
      image(C7, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === 8){
      image(C8, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === 9){
      image(C9, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === "T"){
      image(CT, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === "J"){
      image(CJ, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === "Q"){
      image(CQ, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === "K"){
      image(CK, width/2-100, height/2-100);
    }
  }
  else if (cardsUsed[0].suit === "D"){
    if (cardsUsed[0].number === "A"){
      image(DA, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === 2){
      image(D2, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === 3){
      image(D3, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === 4){
      image(D4, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === 5){
      image(D5, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === 6){
      image(D6, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === 7){
      image(D7, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === 8){
      image(D8, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === 9){
      image(D9, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === "T"){
      image(DT, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === "J"){
      image(DJ, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === "Q"){
      image(DQ, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === "K"){
      image(DK, width/2-100, height/2-100);
    }
  }
  else if (cardsUsed[0].suit === "H"){
    if (cardsUsed[0].number === "A"){
      image(HA, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === 2){
      image(H2, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === 3){
      image(H3, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === 4){
      image(H4, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === 5){
      image(H5, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === 6){
      image(H6, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === 7){
      image(H7, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === 8){
      image(H8, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === 9){
      image(H9, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === "T"){
      image(HT, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === "J"){
      image(HJ, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === "Q"){
      image(HQ, width/2-100, height/2-100);
    }
    else if (cardsUsed[0].number === "K"){
      image(HK, width/2-100, height/2-100);
    }
  }
}

function getSuit(card){
  // This will find the suit of the card by finding the second character of card then returning it
  if (card[1] === "s"){
    return "S";
  }
  else if (card[1] === "c"){
    return "C";
  }
  else if (card[1] === "h"){
    return "H";
  }
  else if (card[1] === "d"){
    return "D";
  }
}

function getNumber(card){
  // This will find the number of the card by finding the first character of card then returning it
  if (card[0] === "A"){
    return "A";
  }
  else if (card[0] === "T"){
    return "T";
  }
  else if (card[0] === "J"){
    return "J";
  }
  else if (card[0] === "Q"){
    return "Q";
  }
  else if (card[0] === "K"){
    return "K";
  }
  else if (card[0] === "2"){
    return 2;
  }
  else if (card[0] === "3"){
    return 3;
  }
  else if (card[0] === "4"){
    return 4;
  }
  else if (card[0] === "5"){
    return 5;
  }
  else if (card[0] === "6"){
    return 6;
  }
  else if (card[0] === "7"){
    return 7;
  }
  else if (card[0] === "8"){
    return 8;
  }
  else if (card[0] === "9"){
    return 9;
  }
}

function keyPressed(){
  // When d is pressed another card will be spawned then add one to the cardsUsedCounter
  if (key === "d"){
    spawnCard(deck[0]);
    cardsUsedCounter += 1;
  }
}