function setup() {
  createCanvas (500,500);
  //create buttons that will allow interactivity
  button1 = createButton('Line 2');
  button1.position(520, 10);
  button2 = createButton('Line 3');
  button2.position(620, 10);
  button3 = createButton('Line 4');
  button3.position(720, 10);
}

function draw() {
  for (var var1 = 0; var1 <= 500; var1 = var1+25) {
  stroke(200, 0, 0); //color red
  line(0, var1, 500, var1); //horizontal line - quadrant 1 to 4
  } 
  
  //a mouse click in each buttom will make the line appear
  button1.mouseClicked(line2); 
  button2.mouseClicked(line3);
  button3.mouseClicked(line4);
}

function line2(){
for (var var2 = 0; var2 <= 500; var2 = var2+25) {
    stroke(0, 100, 0); //color green
    line(var2, 250, var2, 500);} //vertical line - quatrand 3 and 4}
    for (var var3 = 250; var3 <= 500; var3 = var3+25){
    line(var3, 0, var3, 250);} //vertical line - quatrand 1 
}

function line3() {
for (var var4 = 25; var4 <= 250; var4 = var4+25){
  stroke(0, 0, 200); //color blue
  line(0, var4+250, var4, 250); //diagonal - 1st half quadrant 3
  line(var4, 500, 250, var4+250);  //diagonal - 2nd half quadrant 3
  line(250, var4+250, var4+250, 250);  //diagonal - 1st half quadrant 4
  line(var4+250, 500, 500, var4+250);} //diagonal - 2nd half quadrant 4
}

function line4() {
for (var var5 = 25; var5 <= 250; var5 = var5+25){
  stroke(150, 150, 0); //color yellow
  line(250, 500-var5, 250+var5, 500);  //diagonal2 - 1st half quadrant 4
  line(250+var5, 250, 500, 500-var5);} //diagonal2 - 2nd half quadrant 4
}

