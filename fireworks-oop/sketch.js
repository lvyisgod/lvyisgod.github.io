// Project Title
// Caylixx Starr
// Nov / 18 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const NUMBER_OF_PARTICLES_PER_CLICK = 250;

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.size = 5;
    this.r = 255;
    this.g = 0;
    this.b = 0;
    this.opacity = 255;
  }

  display() {
    fill(this.r, this.g, this.b, this.opacity);
    circle(this.x, this.y, this.size);
  }

  update() {
    // move
    this.x += this.dx;
    this.y += this.dy;

    // fade away over time
    this.opacity--;
  }

  isDead(){
    return this.opacity <= 0;
  }
}

let theFireworks = [];

function setup() {
  noStroke();
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("Black");
  for (let firework of theFireworks) {
    if (firework.isDead()){
      let index = theFireworks.indexOf(firework);
      theFireworks.splice(index, 1);
    }
    else{
      firework.display();
      firework.update();
    }
  }
}

function mousePressed() {
  for (let i = 0; i < NUMBER_OF_PARTICLES_PER_CLICK; i++) {
    let someParticle = new Particle(mouseX, mouseY);
    theFireworks.push(someParticle);
  }
}