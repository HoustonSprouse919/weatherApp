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
  (function displayData() {
    function specificData(location, dataWanted) {
      document.querySelector(`#${location}`).textContent = currentWeatherData[dataWanted];
    }
    specificData('location', 'location');
    specificData('country', 'country');
    specificData('mainWeather', 'mainWeatherCondition');
    specificData('temp', 'temp');
    specificData('feelsLike', 'feelsLike');
    specificData('tempHigh', 'tempMax');
    specificData('tempLow', 'tempMin');
    specificData('weatherDescription', 'weatherDescription');
    specificData('windSpeed', 'windSpeed');
    specificData('humidity', 'humidity');
    specificData('pressure', 'pressure');
  }());
}
function changeWeather() {
  const div = document.getElementsByClassName('dataGoesHere');
  div.textContent = '';
  getMainStuff();
}
changeWeather();
