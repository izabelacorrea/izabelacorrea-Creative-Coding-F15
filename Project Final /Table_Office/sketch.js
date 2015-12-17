var bg;

function preload(){
  bg = loadImage("Pictures/TableTop.jpg"); //Load table image
}

function setup() {
  createCanvas(775, 475);
  background(bg); //Define image as background
  drawNotebook();
}

function drawNotebook() {
  
  var x=0;
  var y=0;
  
 stroke(231,233,245); // Light gray
 
 
 //Draw lines
 
 for (var cont=0; cont<50; cont=cont+1) {
  line(775/1.835-x, 475/9+y, 775/1.15-x, 475/4.65+y);
  x=x+1.55;
  y=y+7;
}
}