// Traffic Light Starter Code
// Caylixx Starr
// 24 Sept, 2024

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/#/p5/millis

let colorz = 2;
let lastSwitch = 0;
let timeSwap = 2000;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  drawOutlineOfLights();
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  checkColor()
  makeCircles(colors())
}

function checkColor(){
  if (millis() > lastSwitch + timeSwap && color === 2){
    color = 0
    timeSwap = 1200
    lastSwitch = millis()
  }

  else if (millis() > lastSwitch + timeSwap && color === 0){
    color = 1
    timeSwap = 2000
    lastSwitch = millis()
  }

  else if (millis() > lastSwitch + timeSwap && color === 1){
    color = 2
    lastSwitch = millis()
  }
}

function colors(){
  if (colorz === 0){
    return "green"
  }
  else if (colorz === 1){
    return "yellow"
  }
  else {
    return "red"
  }
}

function makeCircles(color){
  if (color === "green"){
    fill("green"); 
     ellipse(width/2, height/2 - 65, 50, 50);
   fill("black");
    ellipse(width/2, height/2, 50, 50);
   ellipse(width/2, height/2 + 65, 50, 50);
  }

  if (color === "yellow"){
    fill("black");
    ellipse(width/2, height/2 - 65, 50, 50);
   fill("green"); 
    ellipse(width/2, height/2, 50, 50);
    fill("black");
   ellipse(width/2, height/2 + 65, 50, 50);
  }

  else{
    fill("black");
    ellipse(width/2, height/2 - 65, 50, 50);
    ellipse(width/2, height/2, 50, 50);
   fill("red");
   ellipse(width/2, height/2 + 65, 50, 50);
  }
}