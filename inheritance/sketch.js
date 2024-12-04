// OOP Inheritance demo
// Caylixx Starr
// Dec/3/2024

// Parent class
class shape {
  constructor(x, y, theColor){
    this.x = x;
    this.y = y;
    this.theColor = theColor;
  }

  // Common display for all shapes
  display(){
    noStroke();
    fill(this.theColor);
  }

  // Common move function
  move(){
    this.x += random(-2, 2);
    this.y += random(-2, 2);
  }
}

// Child class
class square extends shape{
  constructor(x, y, theColor, length){
    super(x, y, theColor);
    this.length = length;
  }

  // Overide the display function
  display(){
    super.display();
    square(this.x, this.y, this.length);
  }
}

// Child chass
class circle extends shape{
  constructor(x, y, theColor, radius){
    super(x, y, theColor);
    this.radius = radius;
  }

  // Overide the display function
  display(){
    super.display();
    circle(this.x, this.y, this.radius * 2);
  }
}

theShapes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 20; i++){
    if (random(100) < 50){
      let theCircle = new circle(random(width), random(height), color(random(255), random(255), random(255)), random(20));
      theShapes.push(theCircle);
    }
    else{
      let theSquare = new square(random(width), random(height), color(random(255), random(255), random(255)), random(20));
      theShapes.push(theSquare);
    }
  }
}

function draw() {
  background(220);
  for (let shape of theShapes){
    shape.display();
  }
}
