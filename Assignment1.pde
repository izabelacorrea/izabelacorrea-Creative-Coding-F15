void setup (){
  size(500,500);

for (int var = 0; var <= 500; var = var+25) {
  stroke(200, 0, 0); //color red
  line(0, var, 500, var); //horizontal line - quadrant 1 to 4
  stroke(0, 100, 0); //color green
  line(var, 250, var, 500);} //vertical line - quatrand 3 and 4}

for (int var2 = 250; var2 <= 500; var2 = var2+25)
  line(var2, 0, var2, 250); //vertical line - quatrand 1 

for (int var3 = 25; var3 <= 250; var3 = var3+25){
  stroke(0, 0, 200); //color blue
  line(0, var3+250, var3, 250); //diagonal - 1st half quadrant 3
  line(var3, 500, 250, var3+250);  //diagonal - 2nd half quadrant 3
  line(250, var3+250, var3+250, 250);  //diagonal - 1st half quadrant 4
  line(var3+250, 500, 500, var3+250); //diagonal - 2nd half quadrant 4
  stroke(150, 150, 0); //color yellow
  line(250, 500-var3, 250+var3, 500);  //diagonal2 - 1st half quadrant 4
  line(250+var3, 250, 500, 500-var3);} //diagonal2 - 2nd half quadrant 4
}