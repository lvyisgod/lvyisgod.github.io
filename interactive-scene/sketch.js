// Interactive Scene
// Demo


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  circle(mouseX, mouseY, 100)
}

const arrX = [1, 2, 3];
const arrY = [arrX, arrX, arrX];
console.log(arrY);
console.log(arrY[2] && arrX[2]);

for (let i = 0; i < arrY.length; i++){
  console.log(arrY[i]);
  for (let x = 0; x < arrX.length; x++){
    console.log 
  }
}