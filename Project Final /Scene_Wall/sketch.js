var hyd;
var graf;
var windowWidth=600;
var windowHeight=600;

function preload() {
  hyd = loadImage("Pictures/HydrantShadow.png"); //Load hydrant image
  graf = loadImage("Pictures/Grafitti.png"); //Load grafitti image
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  drawWall();
  drawFloor();
  image(graf, 0 ,windowHeight/6,windowWidth/3,windowHeight/3); //Define the size and the position of the grafitti image
  image(hyd, windowWidth/1.5 ,windowHeight/3,windowWidth/1.5, windowHeight/1.5); //Define the size and the position of the hydrant image
}

function drawWall() {

var sizew=30; //Define width blocks
var sizeh=10; //Define hight blocks

//Draw blocks

for(var y=0; y<windowHeight/2; y=y+2*sizeh) {
  for (var x=0; x<windowWidth+sizew; x=x+sizew) {
    stroke(0); //Black
    fill(115,55,5); //Brow 
    rect(x,y,sizew,sizeh);
    rect(x-(sizew/2),(y+sizeh),sizew,sizeh);
    }
  }
}

function drawFloor() {
  
//Draw floor.

fill(136,153,155); //Gray
noStroke();
rect(0, windowHeight/2, windowWidth, windowHeight);

//Draw lines floor. Sense of depth. 

for(var spch=0;spch<windowHeight; spch=spch+50){
  stroke(0);
  line(0, windowHeight/2+spch, windowWidth,windowHeight/2+spch);
  }

line(0, windowHeight/1.5, windowWidth/10, windowHeight/2);
line(windowWidth, windowHeight/1.5, (windowWidth)-windowWidth/10,windowHeight/2);

for(var spcv=0; spcv<=3; spcv++) {
  line(spcv*windowWidth/6, windowHeight,(2+spcv)* windowWidth/10, windowHeight/2);
  line(windowWidth - spcv*windowWidth/6, windowHeight,(windowWidth)-(2+spcv)*windowWidth/10, windowHeight/2);
  }
  
}

