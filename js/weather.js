const icon = document.querySelector('img');
const weather = document.querySelector('#temp');
const city = document.querySelector('#city');

const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '231d4983516d4805532c619cb6f0d149';
const iconUrl = 'http://openweathermap.org/img/w';

// const weatherList = [
//   { name: 'Clear', icon: '☀︎' },
//   { name: 'Clouds', icon: '☁︎' },
//   { name: 'Rain', icon: '☂︎' },
//   { name: 'Snow', icon: '☃︎' },
// ];

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  //   console.log(lat, lon);
  const url = `${weatherUrl}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;

      // try {
      //   weatherToday = weatherList.find(
      //     (item) => item.name === data.weather[0].main
      //   ).icon;
      // } catch (error) {
      //   weatherToday = data.weather[0].main;
      // }

      icon.src = `${iconUrl}/${data.weather[0].icon}.png`;

      weather.innerText = `${data.main.temp}도(최저:${data.main.temp_min}, 최고:${data.main.temp_max}) /`;
      // weather.innerText = `${data.weather[0].main} / ${data.main.temp}도(${data.main.temp_min}~${data.main.temp_max})`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
