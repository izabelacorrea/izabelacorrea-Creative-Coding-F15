var copClip;
var bgColor;

function setup() {
  createCanvas(windowWidth,windowHeight);
  bgColor = color(0);
  
  copClip = createVideo(['media/Clip officiel de la COP21.mp4']);
  copClip.loop(); // Set the video to start playing
  
  copClip.hide();
}

function draw() {
  background(bgColor); //Define the background color

  //Change the background color on specific times
  copClip.addCue(1.6, changeBackground, color(66,66,66));
  copClip.addCue(3.5, changeBackground, color(32,32,32));
  copClip.addCue(3.55, changeBackground, color(51,0,102));
  copClip.addCue(5.0, changeBackground, color(202,205,0));
  copClip.addCue(7.5, changeBackground, color(255,204,229));
  copClip.addCue(9.46, changeBackground, color(0,153,153));
  copClip.addCue(11.6, changeBackground, color(225,229,204));
  copClip.addCue(12.0, changeBackground, color(218,112,214));
  copClip.addCue(11.8, changeBackground, color(216,191,216));
  copClip.addCue(13.5, changeBackground, color(139,69,19));
  copClip.addCue(15.0, changeBackground, color(233,150,122));
  copClip.addCue(16.0, changeBackground, color(230,230,250));
  copClip.addCue(17.43, changeBackground, color(32,32,32));
  copClip.addCue(18.0, changeBackground, color(225,229,204));
  copClip.addCue(19.53, changeBackground, color(0,153,15));
  copClip.addCue(20.0, changeBackground, color(51,0,102));
  copClip.addCue(20.55, changeBackground, color(216,191,216));
  copClip.addCue(22.0, changeBackground, color(255));
  copClip.addCue(23.0, changeBackground, color(0));
  
  //Define color and size elipses based on pixels
  copClip.loadPixels();
  noStroke();
  for (var y=0; y<height; y+=25) {
    for (var x=0; x<width; x+=25) {
      var i = y * width + x;
      var darkness = (255 - copClip.pixels[i*4 % (copClip.pixels.length / 4)])/255;
      var radius = darkness*25;//stepSize * darkness;
      fill(
        copClip.pixels[i % copClip.pixels.length],
        copClip.pixels[i*2 % copClip.pixels.length],
        copClip.pixels[i*3 % copClip.pixels.length]
      );
      ellipse(x, y, radius, radius);
    }
  }
}

//Change the background color
function changeBackground (col) { 
  bgColor = col;
}
