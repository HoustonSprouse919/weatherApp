let userInput = 'Charlotte';
function convertKelvin(kelvin) {
  return (((kelvin - 273.15) * 9) / 5 + 32).toFixed(1);
}
function convertMiles(kilo) {
  return (kilo / 1.609).toFixed(1);
}
async function getMainStuff() {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${userInput}&APPID=651b36dd9ec2d5156544989665f507bd`, { mode: 'cors' });
  const data = await response.json();
  const currentWeatherData = {
    lat: data.coord.lat,
    long: data.coord.lon,
    mainWeatherCondition: data.weather[0].main,
    weatherDescription: data.weather[0].description,
    temp: `${convertKelvin(data.main.temp)}°`,
    feelsLike: `${convertKelvin(data.main.feels_like)}°`,
    tempMax: `${convertKelvin(data.main.temp_max)}°`,
    tempMin: `${convertKelvin(data.main.temp_min)}°`,
    humidity: `${data.main.humidity}%`,
    pressure: `${data.main.pressure} hPa`,
    location: data.name,
    country: data.sys.country,
    windSpeed: `${convertMiles(data.wind.speed)} Mph`,
    icon: data.weather[0].icon,
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
    document.querySelector('.currentWeatherImage').src = `http://openweathermap.org/img/w/${currentWeatherData.icon}.png`;
  }());
}
function changeWeather() {
  const div = document.getElementsByClassName('dataGoesHere');
  div.textContent = '';
  getMainStuff();
}
changeWeather();

function changeLocation() {
  userInput = document.getElementById('inputBox').value;
  getMainStuff();
}

const button = document.querySelector('#searchButton');
button.addEventListener('click', changeLocation);
