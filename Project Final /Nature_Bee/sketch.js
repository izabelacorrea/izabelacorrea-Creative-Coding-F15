var bee1;
var bee2;
var bee3;

function preload(){
  bee1 = loadImage("Pictures/Bee1.png"); //Load image bee 1
  bee2 = loadImage("Pictures/Bee2.png"); //Load image bee 2
  bee3 = loadImage("Pictures/Bee3.png"); //Load image bee 3
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  drawHive();
  image(bee1, 0, 0, windowWidth/9, windowHeight/5); //Define the size and the position of the image bee1
  image(bee2, 10, 80, windowWidth/9.5, windowHeight/5.5); //Define the size and the position of the image bee2
  image(bee3, 200, 200, windowWidth/9, windowHeight/5); //Define the size and the position of the image bee3
}


function drawHive() {

var hexagonSize = 28; //Define hexagon size

//Define colors - red, green, blue

var cr = 0;
var cg = 0;
var cb = 0;

//Calcule hexagon sizes

var c = hexagonSize;
var b = hexagonSize/2;
var a = Math.sqrt((c*c)-(b*b));

strokeWeight(4); //Weight line
stroke(254,255,0); //Color line - yellow 

//Draw pattern

push(); 
for (var cont3=0; cont3<=windowHeight; cont3 = cont3 +1) {  
push();
 for (var cont2=0; cont2<=1; cont2 = cont2+1) {
 push();
    for (var cont1=0; cont1<=(windowWidth/(3*c)+1); cont1 = cont1+1) {
    
    fill(255+cr, 245+cg, 170+cb); //Color gradient
    
    //Draw hexagon
    
    beginShape();
    vertex(-b, -a);
    vertex(b, -a);
    vertex(c, 0);
    vertex(b, a);
    vertex(-b, a);
    vertex(-c, 0);
    vertex(-b, -a);
    endShape();
    translate(c*3,0);
    
    //Change color
    
    cr=cr-0.5;
    cg=cg-1.1;
    cb=cb-2;
  }
   pop();
   
   translate((c+b),a);
   
  }
pop();
translate(0,2*a);
   
}
pop();
 
noLoop();
 
}