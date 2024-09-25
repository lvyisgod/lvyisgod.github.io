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
  checkColor();
  makeCircle();
}

function checkColor(){
  if (millis() > lastSwitch + timeSwap && colorz === 2){
    colorz = 0;
    timeSwap = 1200;
    lastSwitch = millis();
  }

  else if (millis() > lastSwitch + timeSwap && colorz === 0){
    colorz = 1;
    timeSwap = 2000;
    lastSwitch = millis();
  }

  else if (millis() > lastSwitch + timeSwap && colorz === 1){
    colorz = 2;
    timeSwap = 2000;
    lastSwitch = millis();
  }
}

function makeCircle(){
  if (colorz === 0){
    fill("green"); 
    ellipse(width/2, height/2 - 65, 50, 50);
  }

  if (colorz === 1){
    fill("yellow"); 
    ellipse(width/2, height/2, 50, 50);
  }

  else{
    fill("red");
    ellipse(width/2, height/2 + 65, 50, 50);
  }
}