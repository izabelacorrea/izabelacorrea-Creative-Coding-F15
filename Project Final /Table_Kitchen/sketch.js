var bg;
var spoon;

function preload(){
  bg = loadImage("Pictures/TableTop.jpg"); //Load table image
  spoon = loadImage("Pictures/SpoonShadow.png"); //Load spoon image
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(bg); //Define table image as background
  drawCheckerboard();
  image(spoon, 0, windowHeight/50, windowWidth/1.8, windowHeight/1.1); //Define position and size spoon image
}

function drawCheckerboard() {
  
  //White background tablecloth

  fill(255,200);
  rect(0,height/1.7,width, height); 

  //Draw tablecloth

  var size=20; //Size square

  for (var y=height/1.7; y<=height; y=y+2*size) {
    for(var x=0; x<=width; x=x+2*size) {
      
      //White square
      
      fill(255); 
      noStroke();
      rect(x,y,size,size); 
      
      //Lines white square
     
      for (var diag = 2; diag <= size; diag = diag+2){
      stroke(64,106,255);
      line(x,(y+size)-diag, x+diag,y+size);
      line(x+diag, y, x+size,(y+size)-diag );
      }
    
      //Blue square
      
      fill(64,106,255);
      noStroke();
      rect(x+size,y,size,size);
      rect(x,y+size,size,size);
        
      }
  }
  
  //Tablecloth seam
  
  for (var xl=0; xl<=width; xl=xl+10) {
  stroke(255,200),
  line(xl, height/1.7+15 , xl+5, height/1.7+15);
  }
  }