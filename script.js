function getWeather()
{
    let cityName=id_city.value;
    console.log(cityName);
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6fa99e1f96f024f79970c5a3532b2ac6&units=metric`).
    then(res=>res.json()).then(data=>displayWeather(data))
}

function displayWeather(data)
{
    let tempature=data.main.temp;
    let minTemp=data.main.temp_min;
    let maxTemp=data.main.temp_max;
// temp attr ends
    let humidity=data.main.humidity;
    let windDegree=data.wind.deg;
    let feelsLike=data.main.feelsLike;
// humidity attr ends
    let windSpeed=data.wind.speed;
    let sunriseTime=data.sys.sunrise;
    let sunsetTime=data.sys.sunset;
// wind attr ends
    let htmldata=`
    <div class="card text-center">
    <h6 class="text-danger">Tempature Info</h6>
    <div class="card-header">
      ${tempature} c
    </div>
    <div class="card-body">
      <h5 class="card-title">Tempature is ${tempature}</h5>
      <p class="card-text">MinimumTempature is ${minTemp}</p>
      <p class="card-text">MaximumTempature is ${maxTemp}</p>
    </div>
    <div class="card-footer text-muted">
      Today
    </div>
  </div>  `
// temp data ends

   let humidityInfo=`
   <div class="card text-center">
    <h6 class="text-danger">Humidity Info</h6>
   <div class="card-header">
     ${humidity} %
   </div>
   <div class="card-body">
     <h5 class="card-title">Humidity is ${humidity}</h5>
     <p class="card-text">WindDegree is ${windDegree}</p>
     <p class="card-text">FeelsLike is ${feelsLike}</p>
   </div>
   <div class="card-footer text-muted">
     Today
   </div>
 </div> `
 // humidity data ends

 let windInfo=`
 <div class="card text-center">
  <h6 class="text-danger">Wind Info</h6>
 <div class="card-header">
   ${windSpeed} km/hr
 </div>
 <div class="card-body">
   <h5 class="card-title">WindSpeed is ${windSpeed}</h5>
   <p class="card-text">SunriseTime is ${sunriseTime}</p>
   <p class="card-text">SunsetTime is ${sunsetTime}</p>
 </div>
 <div class="card-footer text-muted">
   Today
 </div>
</div> `
// wind data ends

  id_temp.innerHTML=htmldata
  id_location.innerHTML=`<h3 class="text-center text"><i class="fa fa-cloud"></i> Weather in ${data.name}<h3>`
  id_humidity.innerHTML=humidityInfo
  id_wind.innerHTML=windInfo
}
function getWeatherbyLocation()
{
  if(navigator.geolocation)
  {
    navigator.geolocation.getCurrentPosition((pos)=>
    {let lat=pos.coords.latitude
    let long=pos.coords.longitude
      console.log(lat,long);
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=6fa99e1f96f024f79970c5a3532b2ac6`).then(res=>res.json()).then(data=>displayWeather(data))
    })
  }
}
 