  var seed = 4;
function setup() {
  createCanvas(800,500);
  background (90); //Background gray
}

function draw() {
  randomSeed(seed);
}

function branch(leng){
  line(0,0,0, -leng);
  translate (0,-leng);
  leng = leng * 0.7; //
  if(leng > 5) {
  for (var count=0; count<2; count++){
    var ang=random(-PI/5, PI/5);
    push();
    rotate(ang);
    branch(leng);
    pop();
}
}
}

function mousePressed (){
  push();
  translate(mouseX, mouseY);
  stroke(255); //Line white
  branch(100);
  pop();
}

