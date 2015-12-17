function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background (0); //Black background 
  
  noStroke();
  
  //Draw pattern
  
  for (var i = 0; i <= 900; i++) {
    if(i<=300) {
      fill(204,0,0); //Red
    }
    else if (i>300 && i<600) {
      fill(255); //White
    }
    else{
      fill(153,153,255); //Purple
    }
  var xr = random(-100, windowWidth); //Randon position x
  var yr = random(-100, windowHeight); //Randon position y
  
  //Randon sizes
  
  var r1 = random (6);
  var r2 = random (6);
  var r3 = random (6);
  var r4 = random (6);
  var r5 = random (6);
  var r6 = random (6);
  var r7 = random (6);
  var r8 = random (6);
  
  beginShape();
  vertex(xr, yr);
  vertex(xr+r1, yr+r2);
  vertex(xr+r3, yr+r4);
  vertex(xr-r5, yr-r6);
  vertex(xr-r7, yr-r8);
  endShape ();
    
  }
  
  noLoop();

}