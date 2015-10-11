var imgBackgroud;
var imgLeft;
var imgMiddle;
var imagRight;

function setup() {
  
  imgBackgroud = createImg("http://monmouthcivicchorus.org/public/wp-content/uploads/2015/08/art-gallery-699429_640.jpg");
  imgBackgroud.position(0, 0);
  imgBackgroud.size(windowWidth, windowHeight);
  
  imgLeft = createImg("http://www.michelleforsyth.com/images/dresses/greybundle2.jpg");
  imgLeft.position(windowWidth/11.5,windowHeight/3.4);
  imgLeft.size(windowWidth/4.33, windowHeight/2.95);
  
  imgMiddle = createImg("http://www.michelleforsyth.com/images/dresses/againstwall.jpg");
  imgMiddle.position(windowWidth/2.62,windowHeight/3.4);
  imgMiddle.size(windowWidth/4.4, windowHeight/2.96);
  
  imgLeft = createImg("http://www.michelleforsyth.com/images/dresses/yellowyellow.jpg");
  imgLeft.position(windowWidth/1.487,windowHeight/3.4);
  imgLeft.size(windowWidth/4.4, windowHeight/2.96);
  
}