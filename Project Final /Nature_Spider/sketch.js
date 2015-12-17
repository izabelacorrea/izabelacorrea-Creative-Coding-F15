var spider;

function preload(){
  spider = loadImage("Pictures/Spider2.png"); //Load spider image
}

function setup() {
  createCanvas (windowWidth, windowHeight);
  background(66,66,66); //Gray background
  drawWeb();
  image(spider, 200, 200, windowWidth/7, windowHeight/3); //Define the size and the position of the image
}

function drawWeb() {
  stroke(255); // White
  fill(255); //White
  
  ellipse(windowWidth/2, windowHeight/2, 2, 2);  //Center ellipse
  
  line(windowWidth/2, 0, windowWidth/2, windowHeight); //Horizontal line
  line(0, windowHeight/2, windowWidth, windowHeight/2); //Vertical line
  line(0, 0, windowWidth, windowHeight); //Diagonal 1
  line(0, windowHeight, windowWidth, 0); //Diagonal 2

  
  noFill();
  var angle = TWO_PI / 8;
  
  //Draw pattern
  
  for (var radius = 10; radius <475; radius = radius + 20) {
  beginShape();
  for (var a = 0; a < TWO_PI; a = a + angle) {
    var sx = windowWidth/2 + cos(a) * radius;
    var sy = windowHeight/2 + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
  }
  
  
}