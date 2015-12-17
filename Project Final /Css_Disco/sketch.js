var tex;
var theta = 0;

function preload(){
  tex= loadImage("Pictures/Ball.png"); //Load disco ball texture
}
function setup() {
  createCanvas(775, 475, WEBGL);
}

function draw() {
  
  pointLight(255, 255, 255, windowWidth/2, 0, -1000); //Define light color and positon 
  
  //Draw and rotate disco ball
  
  push(); 
  rotateY(theta * 50 * 0.01);
  texture(tex);
  sphere(150);
  pop();
  theta += 0.05;
  
  //Draw and rotate chain
  
  for (var ty=0; ty < 340; ty = ty + 40) {
  push();
  translate(0,-475+ty,0);
  rotateY(80+theta * 50 * 0.01);
  torus (10,2);
  pop(); 
  }
  
  for (var ty=20; ty < 340; ty = ty + 40) {
  push();
  translate(0,-475+ty,0);
  rotateY(theta * 50 * 0.01);
  torus (10,2);
  pop(); 
  }

}