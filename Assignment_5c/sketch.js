var angleS = 0.0;
var angleM = 0.0;
var angleH = 0.0;
var sx=0
var sy=0;
var mx=0
var my=0;
var hx=0
var hy=0;

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
  
  sx = cos(angleS) * 180; //second x
  sy = sin(angleS) * 180; //second y
  mx = cos(angleM) * 120; //minute x
  my = sin(angleM) * 120; //minute y
  hx = cos(angleH) * 60; //hour x
  hy = sin(angleH) * 60; //hour y

  noStroke();
  fill(255,0,0); //red - second
  ellipse (sx,sy,15,15); //second ellipse
  fill(0,255,0); //green - minute
  ellipse (mx,my,30,30); //minute ellipse
  fill(0,0,255);//blue - hour
  ellipse(hx,hy,45,45); //hour ellipse
 
}