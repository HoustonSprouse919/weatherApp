const userInput = 'Charlotte';
async function getMainStuff() {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${userInput}&APPID=651b36dd9ec2d5156544989665f507bd`, { mode: 'cors' });
  const data = await response.json();
  const currentWeatherData = {
    lat: data.coord.lat,
    long: data.coord.lon,
    mainWeatherCondition: data.weather[0].main,
    weatherDescription: data.weather[0].description,
    temp: data.main.temp,
    feelsLike: data.main.feels_like,
    tempMax: data.main.temp_max,
    tempMin: data.main.temp_min,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    location: data.name,
    country: data.sys.country,
    windSpeed: data.wind.speed,
  };
  document.querySelector('#location').append(currentWeatherData.location);
  document.querySelector('#country').append(currentWeatherData.country);
  document.querySelector('#mainWeather').append(currentWeatherData.mainWeatherCondition);
  /* console.log(`data is temp:${temp}  feels like: ${feelsLike} max temp:${tempMax} min
  temp:${tempMin} humidity:${humidity} pressure: ${pressure}`);
   console.log(`the coordinates are ${lat},${long}`); */
}
getMainStuff();
