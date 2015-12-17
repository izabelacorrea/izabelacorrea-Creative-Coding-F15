var bg;

function preload(){
  bg = loadImage("Pictures/TableTop2.png"); //Load table image
}

function setup() {
  createCanvas(775, 475);
  background(bg); //Define image as background
  drawPattern();
}

function drawPattern() {
  
  stroke(192,192,192); //Gray
  translate(397,285); //Center of internal circle
  noFill();
  
  
  var r=120; //Radius of external circle
  var ri=55; //Radius of internal circle
  
  //Draw pattern
  
  for(var ang=0.1; ang < 6.2; ang=ang+0.2){
    ellipse(ri*cos(ang),ri*sin(ang),r,r);
  }
}