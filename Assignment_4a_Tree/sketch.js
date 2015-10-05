function setup() {
  createCanvas(800,500);
  background (90); //Background gray
}

function draw() {
  translate(width/2, height); //Start the tree at middle-bottom of the screen
  stroke(255); //Line white
  branch(150); //Call function branch that draws the tree
}

function branch(leng){
  line(0,0,0,-leng); 
  translate (0,-leng); //Begin of a new branch equals end of last branch
  leng = leng * 0.7; //Length of new branch is 0.7 the size of the last branch
  if(leng > 5) { //Create tree branches rotating the lines
    push();
    rotate(PI/7);
    branch(leng);
    pop();
    push();
    rotate(-PI/7);
    branch(leng);
    pop();
}
}