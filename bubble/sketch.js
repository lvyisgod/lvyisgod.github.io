// Bubble object notation demo
// showing how to delete objects from an array
// Caylixx Starr
// Oct 10, 2024

let theBubbles = [];
let bubbleGraveLocations = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 5; i++){
    spawnBubble();
  }

  // create a new bubble every second
  window.setInterval(spawnBubble, 10);
}

function draw() {
  background(0);
  // moveBubblesRandomly();
  moveBubbleWithNoise();
  displayBubbles();
  displayGraves();
}

function displayGraves(){
  for (let grave of bubbleGraveLocations){
    fill("white");
    textAlign(CENTER, CENTER);
    text("x", grave.x, grave.y);
  }
}

function mousePressed(){
  for (let bubble of theBubbles){
    if (clickedOnBubble(mouseX, mouseY, bubble)){
      let theIndex = theBubbles.indexOf(bubble);
      theBubbles.splice(theIndex, 1);
      undertaker(mouseX, mouseY);
    }
  }
}

function undertaker(theX, theY){
  let grave = {
    x: theX,
    y: theY,
  };
  bubbleGraveLocations.push(grave);
}

function clickedOnBubble(x, y, bubble){
  return dist(x, y, bubble.x, bubble.y) < bubble.radius;
}

function spawnBubble(){
  let someBubble = {
    x: random(0, width),
    y: height + random(0, 50),
    speed: random(2, 5),
    radius: random(20, 50),
    r: random(255),
    g: random(255),
    b: random(255),
    alpha: random(255),
    timeX: random(1000000),
    timeY: random(10000000),
    deltaTime: 0.003,
  };
  theBubbles.push(someBubble);
}

function displayBubbles(){
  for (let bubble of theBubbles){
    noStroke();
    fill(bubble.r, bubble.g, bubble.b, bubble.alpha);
    circle(bubble.x, bubble.y, bubble.radius * 2);
  }
}

function moveBubblesRandomly(){
  for (let bubble in theBubbles){
    let choice = random(100);
    if (choice < 50){
      // move up
      bubble.y -= bubble.speed;
    }

    else if (choice < 65){
      // move down
      bubble.y += bubble.speed;
    }

    else if (choice < 75){
      // move right
      bubble.x += bubble.speed;
    }

    else{
      // move left
      bubble.x -= bubble.speed;
    }
  }
}

function moveBubbleWithNoise(){
  for (let bubble of theBubbles){
    bubble.x = noise(bubble.timeX) * width;
    bubble.y = noise(bubble.timeY) * height;

    bubble.timeX += bubble.deltaTime;
    bubble.timeY += bubble.deltaTime;
  }
}