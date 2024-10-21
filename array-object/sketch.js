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


function setup() {
  createCanvas(windowWidth, windowHeight);
  makeDeck();
  suffleDeck();
  putCardsOnTable();
}

function draw() {
  background(220);
}

function makeDeck(){
  for (let suit of suits){
    for (let cardNum of cardNumbers){
      deck.push(suit + cardNum);
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