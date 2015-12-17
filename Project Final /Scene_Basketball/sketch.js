var court;

function preload(){
  court = loadImage("Pictures/Court2.png"); //Load court image
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(court); //Define image as background
  drawNet();
}

function drawNet() {
  fill(0); //Black
  
  rect(windowWidth/17, windowHeight/1.74, windowWidth/3, windowHeight/90); //Superior post
  rect(windowWidth/2.58, windowHeight/1.8, windowWidth/90, windowHeight); //Right post
  ellipse(windowWidth/2.54, windowHeight/1.8,windowWidth/90, windowHeight/90); //Top of post
  
  var i=15; 
 
  // Draw pattern 
  
  for (var y=windowHeight/1.7; y < windowHeight+8; y=y+i) {
  for (var x=windowWidth/25; x < windowWidth/2.7 ; x=x+i) {
    
    noFill();
    
    beginShape();
    vertex (x,y);
    vertex (x+i,y-i);
    vertex (x+2*i,y);
    vertex (x+i,y+i);
    endShape();
}
}
}