function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(153,76,0); //Brown background
  noStroke();
  
  var i=20;  //Size parallelogram
  
  //Draw pattern
  
  for (var y=0; y < windowHeight +100; y=y+6*i) {
  for (var x=0; x < windowWidth ; x=x+4*i) {
    
    //Black parallelogram line 1 and line 2, respectively
    
    fill(0);
    
    beginShape();
    vertex (x,y+i);
    vertex (x,y-i);
    vertex (x+2*i,y-2*i);
    vertex (x+2*i,y);
    endShape();
    
    beginShape();
    vertex (x+2*i,y+2*i);
    vertex (x+2*i,y+4*i);
    vertex (x+4*i,y+3*i);
    vertex (x+4*i,y+i);
    endShape();
    
    //White parallelogram line 1 and line 2, respectively
    
    fill(255);
    
    beginShape();
    vertex (x+2*i,y-2*i);
    vertex (x+2*i,y);
    vertex (x+4*i,y+i);
    vertex (x+4*i,y-i);
    endShape();
    
    beginShape();
    vertex (x,y+i);
    vertex (x,y+3*i);
    vertex (x+2*i,y+4*i);
    vertex (x+2*i,y+2*i);
    endShape();
  }
  }
}