// Arrays and Object Notation Assignment
// Caylixx Starr
// 10/8/2024
// Extra for experts:

const cardNumbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const suits = ["s", "c", "h", "d"];
let deck = [];
let cardsOnTable = [
  [0],
  [0, 0],
  [0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
];

let card;
let picture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  makeDeck();
  suffleDeck();
}

function draw() {
  background(220);
  drawCardsOnTable("AS")
}

function makeDeck(){
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

function drawCardsOnTable(card){
  let TableCard = {
    suit: getSuit(card),
    number: getNumber(card),
  }

  picture = loadImage(["TableCard.suit" + "TableCard.number" + ".svg"]);
  image(picture, 100, 100, 100, 100);
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
  else if (card[0] === 10){
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
  else if (card[0] === 1){
    return 1
  }
  else if (card[0] === 2){
    return 2
  }
  else if (card[0] === 3){
    return 3
  }
  else if (card[0] === 4){
    return 4
  }
  else if (card[0] === 4){
    return 4
  }
  else if (card[0] === 5){
    return 5
  }
  else if (card[0] === 6){
    return 6
  }
  else if (card[0] === 7){
    return 7
  }
  else if (card[0] === 8){
    return 8
  }
  else if (card[0] === 9){
    return 9
  }
}