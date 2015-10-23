function setup() {
  createCanvas(windowWidth, windowHeight);
  // Load the data from openweathermap
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=New%20York,NY&units=imperial&APPID=7bbbb47522848e8b9c26ba35c226c734';
  loadJSON(url, gotInformation);
   
}

function gotInformation(information) {
 
  //Determine the Time Now
  var dateNow = new Date();
  
  //Determine the Sunrise Time
  var sunrise = information.sys.sunrise;
  var dateSunrise = new Date (sunrise*1000);
  
  //Determine the Sunset Time
  var sunset = information.sys.sunset;
  var dateSunset = new Date (sunset*1000);
  
  //Change the color background according to sunrise and sunset time
  if (dateNow < dateSunrise || dateNow > dateSunset) {
    background(25,25,112); //Background Dark Blue
  } else {
    background(135,206,250); //Background Light Blue
  }
 
  //Draw clouds based on the API information
  var clouds=information.clouds.all;
  var cont=0;
  
  while(cont <= clouds) {
  fill(255);
  noStroke();
  var x=random(-10,width-50);
  var y=random(-10,height-150);
  ellipse(x+30, y+50, 60, 60);
  ellipse(x+55, y+55, 50, 50);
  ellipse(x+80, y+60, 30, 30);
  ellipse(x, y+60, 30, 30); 
  cont=cont+1;
  }
   
  //Color text
  fill(255);
  
  //Write Name City
  text(information.name + ' Sky',10, windowHeight-45);
  
  
  //Write Temperature Fahrenheit
  text('Temperature Fahrenheit: ' + floor(information.main.temp)+'°',10, windowHeight-30);
  
  //Calcule and Write Temperature Celsiu
  var tempCelsius = (information.main.temp - 32) * 5/9;
  text('Temperature Celsius: ' + floor(tempCelsius)+'°',10, windowHeight-15);

}
  
 
