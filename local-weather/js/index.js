/*Gets  user location
by IP address
*/
$.getJSON("http://ip-api.com/json", function(json) {
 var result = JSON.stringify(json);
var user_city = json.city;
  var user_lon = json.lon;
  var user_lat = json.lat;
  
 $(".message").html(JSON.stringify(json));
 //Below Code uses IP API results to get weather
  //personalized to user
    $.getJSON("http://api.openweathermap.org/data/2.5/weather" + '?lat=' + user_lat + '&lon=' + user_lon + "&appid=" + "8df1c0043704c7a3944e6afaa07200fb", function(json) {   
    var temp = json.main.temp; //unit is kelvin
     
      var icon = json.weather[0].icon;
      
     var des = json.weather[0].description;
      
     // console.log(des);
      
      //Converts Kelvin to Celsius:
      function kelvinToC(temp) {
        var cel = temp - 273.15;
      return cel;
      }
      
      var celTemp = Math.floor(kelvinToC(temp)) ;
      
      //Converts Celsius to Fahrenheit:
      function  celsiusToF(celTemp){
        var fah = ((celTemp * 9)/5 ) + 32;
        return fah;
      }
      //Floors result:
      var fahTemp = Math.floor(celsiusToF(celTemp));
  
      
     $("#two").on("click", function() {
   $("#temp").html("<h3>"+fahTemp + "&deg;F"+"</h3>");
});
      $("#one").on("click", function() {
   $("#temp").html("<h3>"+celTemp + "&deg;C"+"</h3>");
});
      
      
      $("#city").html("<h2>"+user_city+"</h2>");
      $("#description").html("<h3>"+des+"</h3>");
      $("#temp").html("<h4>"+temp+" K"+"</h4>");
      $("#icon").html("<img src="+ "http://openweathermap.org/img/w/" + icon + ".png"+ ">"); 
      
    
    });
});