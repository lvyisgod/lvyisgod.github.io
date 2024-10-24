// Arrays and Object Notation Assignment
// Caylixx Starr
// 10/8/2024
// Extra for experts:

const cardNumbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "T", "J", "Q", "K"];
const suits = ["s", "c", "h", "d"];
let deck = [];
let cardsUsed = [];
let cardUsedCounter = 1;

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
  CA = loadImage("AC.svg")
  C2 = loadImage("2C.svg")
  C3 = loadImage("3C.svg")
  C4 = loadImage("4C.svg")
  C5 = loadImage("5C.svg")
  C6 = loadImage("6C.svg")
  C7 = loadImage("7C.svg")
  C8 = loadImage("8C.svg")
  C9 = loadImage("9C.svg")
  CT = loadImage("TC.svg")
  CJ = loadImage("JC.svg")
  CQ = loadImage("QC.svg")
  CK = loadImage("KC.svg")
  SA = loadImage("AS.svg")
  S2 = loadImage("2S.svg")
  S3 = loadImage("3S.svg")
  S4 = loadImage("4S.svg")
  S5 = loadImage("5S.svg")
  S6 = loadImage("6S.svg")
  S7 = loadImage("7S.svg")
  S8 = loadImage("8S.svg")
  S9 = loadImage("9S.svg")
  ST = loadImage("TS.svg")
  SJ = loadImage("JS.svg")
  SQ = loadImage("QS.svg")
  SK = loadImage("KS.svg")
  DA = loadImage("AD.svg")
  D2 = loadImage("2D.svg")
  D3 = loadImage("3D.svg")
  D4 = loadImage("4D.svg")
  D5 = loadImage("5D.svg")
  D6 = loadImage("6D.svg")
  D7 = loadImage("7D.svg")
  D8 = loadImage("8D.svg")
  D9 = loadImage("9D.svg")
  DT = loadImage("TD.svg")
  DJ = loadImage("JD.svg")
  DQ = loadImage("QD.svg")
  DK = loadImage("KD.svg")
  HA = loadImage("AH.svg")
  H2 = loadImage("2H.svg")
  H3 = loadImage("3H.svg")
  H4 = loadImage("4H.svg")
  H5 = loadImage("5H.svg")
  H6 = loadImage("6H.svg")
  H7 = loadImage("7H.svg")
  H8 = loadImage("8H.svg")
  H9 = loadImage("9H.svg")
  HT = loadImage("TH.svg")
  HJ = loadImage("JH.svg")
  HQ = loadImage("QH.svg")
  HK = loadImage("KH.svg")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(100);
  makeDeck();
  suffleDeck();
  spawnCard(deck[0]);
}

function draw() {
  background(220);
  getLastCardImage();
  if (cardUsedCounter < 52){
    text(cardUsedCounter + " cards drawn", width/2 - 300, 150)
  }
  else{
    text("All cards drawn", width/2 - 300, 150)
  }
}

function makeDeck(){
  deck = [];
  for (let suit of suits){
    for (let cardNum of cardNumbers){
      deck.push(cardNum + suit);
    }
  }
}

function suffleDeck(){
  deck = deck.sort(() => 0.5 - Math.random());
}

function putCardsOnTable(){
  for(let listnum of cardsOnTable){
    for(let card = 0; card < listnum.length ; card++){
      listnum.pop();
      listnum.unshift(deck[0]);
      deck.shift();
    }
  }
}

function spawnCard(card){
  let someCard = {
    suit: getSuit(card),
    number: getNumber(card),
  };

  cardsUsed.unshift(someCard);
  deck.shift();
}

function drawCard(){
  image(getLastCardImage(), width/2, height/2)
}

function getLastCardImage(){
  if (cardsUsed[0].suit === "S"){
    if (cardsUsed[0].number === "A"){
      image(SA, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === 2){
      image(S2, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === 3){
      image(S3, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === 4){
      image(S4, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === 5){
      image(S5, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === 6){
      image(S6, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === 7){
      image(S7, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === 8){
      image(S8, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === 9){
      image(S9, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === "T"){
      image(ST, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === "J"){
      image(SJ, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === "Q"){
      image(SQ, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === "K"){
      image(SK, width/2-100, height/2-100)
    }
  }
  else if (cardsUsed[0].suit === "C"){
    if (cardsUsed[0].number === "A"){
      image(CA, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === 2){
      image(C2, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === 3){
      image(C3, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === 4){
      image(C4, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === 5){
      image(C5, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === 6){
      image(C6, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === 7){
      image(C7, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === 8){
      image(C8, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === 9){
      image(C9, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === "T"){
      image(CT, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === "J"){
      image(CJ, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === "Q"){
      image(CQ, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === "K"){
      image(CK, width/2-100, height/2-100)
    }
  }
  else if (cardsUsed[0].suit === "D"){
    if (cardsUsed[0].number === "A"){
      image(DA, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === 2){
      image(D2, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === 3){
      image(D3, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === 4){
      image(D4, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === 5){
      image(D5, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === 6){
      image(D6, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === 7){
      image(D7, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === 8){
      image(D8, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === 9){
      image(D9, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === "T"){
      image(DT, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === "J"){
      image(DJ, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === "Q"){
      image(DQ, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === "K"){
      image(DK, width/2-100, height/2-100)
    }
  }
  else if (cardsUsed[0].suit === "H"){
    if (cardsUsed[0].number === "A"){
      image(HA, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === 2){
      image(H2, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === 3){
      image(H3, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === 4){
      image(H4, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === 5){
      image(H5, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === 6){
      image(H6, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === 7){
      image(H7, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === 8){
      image(H8, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === 9){
      image(H9, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === "T"){
      image(HT, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === "J"){
      image(HJ, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === "Q"){
      image(HQ, width/2-100, height/2-100)
    }
    else if (cardsUsed[0].number === "K"){
      image(HK, width/2-100, height/2-100)
    }
  }
}

function getSuit(card){
  if (card[1] === "s"){
    return "S"
  }
  if (card[1] === "c"){
    return "C"
  }
  if (card[1] === "h"){
    return "H"
  }
  if (card[1] === "d"){
    return "D"
  }
}

function getNumber(card){
  if (card[0] === "A"){
    return "A"
  }
  else if (card[0] === "T"){
    return "T"
  }
  else if (card[0] === "J"){
    return "J"
  }
  else if (card[0] === "Q"){
    return "Q"
  }
  else if (card[0] === "K"){
    return "K"
  }
  else if (card[0] === "2"){
    return 2
  }
  else if (card[0] === "3"){
    return 3
  }
  else if (card[0] === "4"){
    return 4
  }
  else if (card[0] === "5"){
    return 5
  }
  else if (card[0] === "6"){
    return 6
  }
  else if (card[0] === "7"){
    return 7
  }
  else if (card[0] === "8"){
    return 8
  }
  else if (card[0] === "9"){
    return 9
  }
}

function keyPressed(){
  if (key === "w"){
    spawnCard(deck[0]);
    cardUsedCounter += 1;
  }
}