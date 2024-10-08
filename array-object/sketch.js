// Arrays and Object Notation Assignment
// Caylixx Starr
// 10/8/2024
// Extra for experts:

let cardNumbers = ["ACE", 2, 3, 4, 5, 6, 7, 8, 9, 10, "JACK", "QUEEN", "KING"];
let suits = ["s", "c", "h", "d"];
let deck = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  makeDeck();
  console.log(deck);
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