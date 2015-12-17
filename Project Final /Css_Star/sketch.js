var moon;

function preload(){
  moon= loadImage("Pictures/Moon.png"); //Load moon image
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  image(moon, 300, 100, 142, 152); //Define the size and the position of the image
}