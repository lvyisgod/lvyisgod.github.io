// Interactive Scene
// Demo

let randomBoards = [
  [2, 1, 3],
  [3, 2, 1],
  [1, 3, 2],

  [2, 3, 1],
  [1, 2, 3],
  [1, 3, 2],

  [3, 1, 2],
  [2, 3, 1],
  [1, 2, 3],

  [1, 3, 2],
  [3, 2, 1],
  [2, 1, 3],

  [3, 2, 1],
  [2, 1, 3],
  [1, 3, 2]
]


const rowLength = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  console.log(randomBoards[4])
}

function draw() {
  background(0);
  for (let x = 0; x < windowWidth; x += windowWidth / rowLength) {
    for (let y = 0; y <= windowHeight; y += windowHeight / rowLength) {
      square(x, y, windowWidth / 2);
      text(randomBoards[x][y], x+windowWidth/(rowLength*2), y-windowWidth/(rowLength*2))
    }
  }
}

// function drawGameBoard(){
  // for (let x = 0; x < windowWidth; x += windowWidth / rowLength) {
  //   for (let y = 0; y < windowHeight; y += windowHeight / rowLength) {
  //     square(x, y, windowWidth / 2);
  //     text(gameBoard[0][1], x+windowWidth/(rowLength*2), y-windowWidth/(rowLength*2))
  //   }
  // }
// }


// function searchXandY(colume, row, numToFind, easyOrHard){
//   let searchX = true;
//   for (let times = 0; times < 2; times++){
//     for (let length = 0; length < rowLength; length++){
//       if (searchX){
//         if (numToFind === easyOrHard[row][length] && length !== colume){
//           return true;
//         }
//       }
//       else {
//         if (numToFind === easyOrHard[length][colume] && length !== row){
//           return true;
//         }
//       }
//     }
//     searchX = false;
//   }
//   return false;
// }

// function createGame(easyOrHard){
//   for (let y = 0; y < rowLength; y++){
//     for (let x = 0; x < rowLength; x++){
//       easyOrHard[y][x] = round(random(1, rowLength))
//       while (searchXandY(x, y, easyOrHard[y][x], easyOrHard)){
//         easyOrHard[y][x] = round(random(1, rowLength))
//      }
//     }
//   }
// }