var street;

function preload(){
  street = loadImage("Pictures/Street.png"); //Load street image
}

function setup() {
  createCanvas(775, 475);
  background(street); //Define image as background
  drawCrosswalk();
}

function drawCrosswalk() {
  fill(255);
  stroke(255);
  
  //Draw "rectangle" 1 -left to right

  beginShape();
  vertex (79,337);
  vertex (155,300);
  vertex (205,300);
  vertex (139,337);
  endShape();
  
  //Draw "rectangle" 2 -left to right
  
  beginShape();
  vertex (197,337);
  vertex (257,300);
  vertex (300,300);
  vertex (254,337);
  endShape();

  //Draw "rectangle" 3 -left to right

  beginShape();
  vertex (316,337);
  vertex (338,300);
  vertex (380,300);
  vertex (374,337);
  endShape();

  //Draw "rectangle" 4 -left to right

  beginShape();
  vertex (439,337);
  vertex (425,300);
  vertex (465,300);
  vertex (491,337);
  endShape();
  
  //Draw "rectangle" 5 -left to right
 
  beginShape();
  vertex (555,337);
  vertex (512,300);
  vertex (553,300);
  vertex (613,337);
  endShape();
  
  //Draw "rectangle" 6 -left to right

  beginShape();
  vertex (675,337);
  vertex (597,300);
  vertex (638,300);
  vertex (732,337);
  endShape();
  
}