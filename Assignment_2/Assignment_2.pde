void setup(){
  size(600,670);
  background (0);
}

void draw(){
  float x=0;
  float y=0;
  float xl=175;
  float yl=210;
  float xr=425;
  float yr=210;
  float dimension1 = 0;
  float dimension2 = 0;
  float rl=205;
  float gl=36;
  float bl=40;
  float rr=205;
  float gr=36;
  float br=40;
  
  noStroke();
 
  fill (#442626); // color rect brown
  rect (x,y, dimension1+800, dimension2+110); // rect top
  
  fill(#693518); // color rect light brown
  rect (x+225, y+190, dimension1+150, dimension2+470); // rect middle
  
  fill (#FFC779); // color rect yellow
  rect (x+165, y+585, dimension1+55, dimension2+75); // rect vert small left
  rect (x+380, y+585, dimension1+55, dimension2+75); // rect vert small right
  
  fill (#525EEC); // color rect purple
  rect (x+10, y+580, dimension1+140, dimension2+5); // rect horiz small left
  rect (x+450, y+580, dimension1+140, dimension2+5); // rect horiz small right
  
  for(int cont=1; cont<=165; cont++) { // big trapezoid left
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
 
   for(int cont=1; cont<=165; cont++) { // big trapezoid right
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
    fill (#610601); //color red
    vertex (x+10, y+590);
    vertex (x+150, y+590);
    vertex (x+145, y+660);
    vertex (x+10, y+660);
    endShape();
 
 beginShape (); // small trapezoid right
   noStroke();
   fill (#610601); //color dark red
   vertex (x+590, y+590);
   vertex (x+ 450, y+590);
   vertex (x+ 455, y+660);
   vertex (x+590, y+660);
   endShape();
 
}