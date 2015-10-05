function setup() {
  createCanvas (windowWidth,windowHeight);
}

function draw() {
  background(255);
  var clockW;
  var clockH;
  var varW;
  var varH; 
  frameRate (1);
  
  clockW = random(0, windowWidth)/120 * second();
  clockH = random(0, windowHeight)/120 * second();
  
  fill (0);
  triangle (0, 0, 0, windowHeight, windowWidth/2 - clockW, windowHeight/2);
  triangle (windowWidth, 0, windowWidth, windowHeight, windowWidth/2 + clockW, windowHeight/2);
  triangle (0, 0, windowWidth, 0, windowWidth/2, windowHeight/2 - clockH);
  triangle (0, windowHeight, windowWidth, windowHeight, windowWidth/2, windowHeight/2 + clockH);
}