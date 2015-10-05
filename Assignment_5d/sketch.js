var angleS = 0.0;
var angleM = 0.0;
var angleH = 0.0;

function setup(){
  createCanvas(windowWidth,windowHeight);
}

function draw(){
  background(0); //black
  translate(width/2, height/2); //origin at the middle
  fill(100); //gray
  ellipse(0,0,400,400); //clock
  
  angleS = map(second(), 0, 60, 0, TWO_PI) - HALF_PI; //aling second to start at the top
  angleM = map(minute(), 0, 60, 0, TWO_PI) - HALF_PI; //aling minute to start at the top
  angleH = map(hour(), 0, 24, 0, TWO_PI*2) - HALF_PI; //aling hour to start at the top
  
  noStroke();
  fill(255,0,0, 80); //red - second
  push();
  rotate(angleS); //rotate triagle scond
  triangle (200,0, -200, 0, 0,-200 ); //triangle second
  ellipse (200,0,5,5); //pointer second
  pop();
  
  fill(0,255,0, 80); //green - minute
  push();
  rotate(angleM); //rotate triagle minute
  triangle (200,0, -200, 0, 0,-200 ); //triangle minute
  ellipse (200,0,5,5); //pointer minute
  pop();
  
  fill(0,0,255,80);//blue - hour
  push();
  rotate(angleH); //rotate triagle hour
  triangle (200,0, -200, 0, 0,-200 );  //triangle hour
  ellipse (200,0,5,5); //pointer hour
  pop();
}