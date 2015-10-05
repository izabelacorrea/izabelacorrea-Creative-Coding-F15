function setup() {
  createCanvas (800,670);
  
      // create sliders
  rSlider = createSlider(0, 255, 1);
  rSlider.position(600, 20);
  gSlider = createSlider(0, 255, 1);
  gSlider.position(600, 50);
  bSlider = createSlider(0, 255, 1);
  bSlider.position(600, 80);
}

function draw() {
  var x=0;
  var y=0;
  var xl=175;
  var yl=210;
  var xr=425;
  var yr=210;
  var dimension1 = 0;
  var dimension2 = 0;
  var rl=205;
  var gl=36;
  var bl=40;
  var rr=205;
  var gr=36;
  var br=40;
  var r = rSlider.value();
  var g = gSlider.value();
  var b = bSlider.value();
  
  noStroke();
  
  fill (r, g, b); // change color background image
  rect (x,y,600, 670); //background image
 
  fill (68,38,38); // color rect brown
  rect (x,y, dimension1+600, dimension2+110); // rect top
  
  fill(105,53,24); // color rect light brown
  rect (x+225, y+190, dimension1+150, dimension2+470); // rect middle
  
  fill (255,199,121); // color rect yellow
  rect (x+165, y+585, dimension1+55, dimension2+75); // rect vert small left
  rect (x+380, y+585, dimension1+55, dimension2+75); // rect vert small right
  
  fill (82,94,236); // color rect purple
  rect (x+10, y+580, dimension1+140, dimension2+5); // rect horiz small left
  rect (x+450, y+580, dimension1+140, dimension2+5); // rect horiz small right
  
  for(var cont=1; cont<=165; cont++) { // big trapezoid left
    if (xl > 150) {
      stroke (rl,gl,bl);
      line(xl, 210, xl, yl);
      xl=xl-1;
      yl=yl+14.8;
    }
    else if (xl <= 150 && xl >= 10) {
      stroke (rl,gl,bl);
      line(xl, 210, xl, 580);
      xl=xl-1;
    }
     rl=rl+0.101;
     gl=gl+0.323;
     bl=bl+0.383;
  }
 
   for(var cont=1; cont<=165; cont++) { // big trapezoid right
    if (xr < 450) {
      stroke (rr,gr,br);
      line(xr, 210, xr, yr);
      xr=xr+1;
      yr=yr+14.8;
    }
    else if (xr >= 450 && xr <= 590) {
      stroke (rr,gr,br);
      line(xr, 210, xr, 580);
      xr=xr+1;
    }
     rr=rr+0.101;
     gr=gr+0.323;
     br=br+0.383;
  }
 

 beginShape (); // small trapezoid left 
    noStroke();
    fill (97,6,1); //color dark red
    vertex (x+10, y+590);
    vertex (x+150, y+590);
    vertex (x+145, y+660);
    vertex (x+10, y+660);
    endShape();
 
 beginShape (); // small trapezoid right
   noStroke();
   fill (97,6,1); //color dark red
   vertex (x+590, y+590);
   vertex (x+ 450, y+590);
   vertex (x+ 455, y+660);
   vertex (x+590, y+660);
   endShape();
   
 
  fill(0);
  text("Red", 605, 20);
  text("Green", 605, 50);
  text("Blue", 605, 80);

}