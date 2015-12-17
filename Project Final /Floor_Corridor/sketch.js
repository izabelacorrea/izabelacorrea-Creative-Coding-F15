
function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  noStroke();
  
  var i=30; //Size rhombus
  
  //Draw pattern
  
  for (var y=0; y < windowHeight +100; y=y+2*i) {  
  for (var x=0; x < windowWidth +100; x=x+2*i) {
    
    //White rhombus
    
    fill(255,255,255); 
    
    beginShape();
    vertex (x,y);
    vertex (x+i,y-i);
    vertex (x+2*i,y);
    vertex (x+i,y+i);
    endShape();
    
    
    //Gray rhombus
    
    fill(128,128,128);
    
    beginShape();
    vertex (x-i,y+i);
    vertex (x,y);
    vertex (x+i,y+i);
    vertex (x,y+2*i);
    endShape();
  }
  }
  
}