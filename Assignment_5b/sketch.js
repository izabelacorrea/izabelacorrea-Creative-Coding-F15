function setup(){
  createCanvas(windowWidth,windowHeight);
}

function draw(){
  
  background(0); //black
  translate(width/2, height/2); //origin at the middle
  fill(100); //gray
  ellipse(0,0,400,400); //clock
  
  strokeWeight(5); //line arc
  noFill(); 

  stroke(255,0,0); //draw second arc
  var s = (second()/59 + 1);
  arc(0, 0, 360, 360, TWO_PI - HALF_PI, TWO_PI * (s) - HALF_PI);

  stroke(0,255,0); //draw minute arc
  var m = (minute()/59 + 1);
  arc(0, 0, 240, 240, TWO_PI - HALF_PI, TWO_PI * (m) - HALF_PI);

  stroke(0,0,255); //draw hour arc
  var h = (hour()/12 + 1);
  arc(0, 0, 120, 120, TWO_PI- HALF_PI, TWO_PI * (h) - HALF_PI);
}
