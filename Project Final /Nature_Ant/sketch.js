var x; 
var y;
var grass;

function preload(){
  grass = loadImage("Pictures/Grass.png"); //Load grass image
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 0;  // Start Point x
  y = height/2; // Start Point y
}

function draw() {
  background(grass); //Image background
  drawAnt(); //Draw ant
}


function drawAnt (){
  
  stroke(1);
  
  var leg_move = sin(frameCount * 0.2) * 2; //Move Leg
  
  line(0+x, 0+y, leg_move-10+x, -10+y); //Leg Back Left
  line(0+x, 0+y, -leg_move+x, -12+y); //Leg Middle Left
  line(0+x, 0+y, leg_move+10+x, -10+y); //Leg Front Left
    
  line(0+x, 0+y, leg_move-10+x, 10+y); //Leg Back Right
  line(0+x, 0+y, -leg_move+x, 12+y); //Leg Middle Right
  line(0+x, 0+y, leg_move+10+x, 10+y); //Leg Front Right
  
  line(10+x, 0+y, 17+x, -4+y); //Antenna Right
  line(10+x, 0+y, 17+x, 4+y); //Antenna Left
  
  fill(95, 61, 10);
  noStroke();
  ellipse(x, y, 15, 10);//Body
  ellipse(10+x, 0+y, 8, 8); //Head
  
  //Move Ant
  
  y = y + random(-1, 1); // Moving randomly on the vertical axis
  x = x + 1;   // Moving right at a constant speed

  if (x > width) { 
    x = 0;   // Reset to the beginning
  }
  
  }