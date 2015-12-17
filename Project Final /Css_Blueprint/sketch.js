var plant;

function preload(){
  plant= loadImage("Pictures/Plant.png"); //Load plant image
}
function setup() {
  createCanvas(775, 475);
}

function draw() {
  image(plant, 70, 50, 600, 364); //Define the size and the position of the image
}