// Bounncing Balls
// Oct, 3, 2024

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 10; i++){
    spawnBall(width/2, height/2);
  }
}

function draw() {
  background(220);

  for (let someBall of ballArray){
    // Move ball
    
    someBall.x += someBall.dx;
    someBall.y += someBall.dy;
  
    // Bounce if needed
  
    if (someBall.x <  someBall.radius || someBall.x > windowWidth - someBall.radius){
      someBall.dx *= -1;
    }
  
    if (someBall.y <  someBall.radius|| someBall.y > windowHeight - someBall.radius){
      someBall.dy *= -1;
    }
  
    // Display the ball
  
    noStroke();
    fill(someBall.red, someBall.green, someBall.blue, someBall.alpha);
    circle(someBall.x, someBall.y, someBall.radius*2);
  }
}

function mousePressed(){
  for (let i = 0; i < 150; i++){
    spawnBall(width/2, height/2);
  }
}

function spawnBall(theX, theY){
  let theBall = {
    x: theX, 
    y: theY,
    radius: random(30, 70),
    dx: random(-1, 1),
    dy: 5,
    red: random(0, 255),
    green: random(0, 255),
    blue: random(0, 255),
    alpha: random(0, 255),
  };
  ballArray.push(theBall);
}