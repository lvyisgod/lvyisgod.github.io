// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnPoint(width/2, height/2);
}

function draw() {
  background('black');

  // Move and draw lines
  for (let point of points){
    point.update(points);
  }
  // Draw circles after, so they show up on top
  for (let point of points){
    point.display();
  }
}

function mousePressed(){
  spawnPoint(mouseX, mouseY);
}

function spawnPoint(x, y){
  let somePoint = new movingPoint(x, y);
  points.push(somePoint);
}

class movingPoint {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.radius = 15;
    this.speed = 5;
    this.color = color(random(255), random(255), random(255));
    this.xTime = random(1000);
    this.yTime = random(1000);
    this.deltaTime = 0.01;
    this.reach = 150;
    this.MIN_RADIUS = 15;
    this.MAX_RADIUS = 50;
  }

  display(){
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.radius * 2);
  }

  update(thePoints) {
    this.move();
    this.connectTo(thePoints);
    this.adjustSizeWithMouse();
  }

  move(){
    // pick random dircetion of movement
    let dx = noise(this.xTime);
    let dy = noise(this.yTime);

    // scale to movement speed
    dx = map(dx, 0, 1, -this.speed, this.speed);
    dy = map(dy, 0, 1, -this.speed, this.speed);

    // move
    this.x += dx;
    this.y += dy;

    // increment the time
    this.yTime += this.deltaTime;
    this.xTime += this.deltaTime;

    this.wrapAroundScreen();
  }

  wrapAroundScreen(){
    // teleport across the screen
    if (this.x > width){
      this.x = 0;
    }

    if (this.x < 0){
      this.x = windowWidth;
    }

    if (this.y < 0){
      this.y = windowHeight;
    }

    if (this.y > height){
      this.y = 0;
    }
  }

  connectTo(pointsArray){
    for (let otherpoint of pointsArray){
      if (this !== otherpoint){
        let pointDistance = dist(this.x, this.y, otherpoint.x, otherpoint.y);
        if (pointDistance < this.reach){ 
          stroke(this.color);
          line(this.x, this.y, otherpoint.x, otherpoint.y);
        }
      }
    }
  }

  adjustSizeWithMouse(){
    let mouseDist = dist(this.x, this.y, mouseX, mouseY);
    if (mouseDist < this.reach){
      let theSize = map(mouseDist, 0, this.reach, this.MAX_RADIUS, this.MIN_RADIUS);
      this.radius = theSize;
    }
    else{
      this.radius = this.MIN_RADIUS;
    }
  }
}
