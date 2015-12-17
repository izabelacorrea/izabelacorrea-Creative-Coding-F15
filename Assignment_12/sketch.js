var guyWalking;
var sidewalk;

function setup() {
  frameRate(5); //
  createCanvas(750, 750);

  sidewalk = loadImage('image/sidewalk.jpg');
  guyWalking = loadImage('image/capguy-walk.png');
}

var sX = 0;
var wX=0;

function draw() {
  clear();
  image(sidewalk); //Define the background for the animation

  image(guyWalking, sX, 0, 184, 325, 0+wX, 100, 100, 150);  // Animate Guy Walking
  
  
  sX = sX + 184;
  if (sX === 1472) {
    sX = 0;
  }
  
  wX = wX + 10; //Move Guy through the screen

  if (wX>750){  //Start again
    wX=-50;
  }

}