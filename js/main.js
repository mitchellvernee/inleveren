// functie die voor openweather
function getAPIdata() {
    // data nodig voor api request
    var url = "https://api.openweathermap.org/data/2.5/weather";
    var apiKey ="b21103c02e6b8ea39387f827c5d5fab4";
    var city = "Amsterdam";
    // aanmaak van var
    var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
    
    fetch(request)
    
    
    .then(function(response) {
        return response.json();
    })
    // doorvoering bij succes
    .then(function(response) {
        onAPISucces(response);  
    })
    
}

function onAPISucces(response) {
    var place = response.name;
    // plaats weer in string
    var type = response.weather[0].description;

    // temp in celcius anders in absolute temp
    var deg = Math.floor(response.main.temp - 273.15);

    // plaatst informatie in box 
    var weatherBox = document.getElementById('weather');
    weatherBox.innerHTML = place + '<br>' +deg + "&#176;C <br>" + type;

}
// error code bij niet werkende server
function onAPIError(error) {
    console.error('Request failed', error);
    var weatherBox = document.getElementById('weather');
    weatherBox.className = 'hidden'; 
}

// tonen van data aan systeem
getAPIdata();

// aanvraag type in http
var req = new XMLHttpRequest();
// mijn api code
var url = "https://api.nasa.gov/planetary/apod?api_key=qdDicK07y0sbeiAPtT2tryerTX19qq9Xb2sDZ5ak";
// aanvraag doormiddel van code
req.open("GET", url);
// aanvraag van het systeem
req.send();

req.addEventListener("load", function(){
  if(req.status == 200 && req.readyState == 4){
    var response = JSON.parse(req.responseText);
    //vraagt titel aan
    document.getElementById("titel").textContent = response.title;
    //vraagt foto aan
    document.getElementById("foto").src = response.hdurl;
    //vraagt uitleg van foto aan
    document.getElementById("uitleg").textContent = response.explanation;
  }
})