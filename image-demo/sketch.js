// Image Demo
// Sept 23, 2024

let squidward;

function preload(){
  squidward = loadImage("ward.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  image(squidward, mouseX, mouseY, squidward.Width * 0.2, squidward.Height * 0.2)
}
