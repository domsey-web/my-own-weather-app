// ~ Date & Time ~
let dateElement = document.querySelector("#date-time");

let currentTime = new Date();
let hours = currentTime.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = currentTime.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let dayIndex = currentTime.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

dateElement.innerHTML = `${days[dayIndex]}, ${hours}:${minutes}`;

// ~ Celcius/Fahrenheit ~

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function clickC(event) {
  event.preventDefault();
  let temp = document.querySelector("#temp");
  temp.innerHTML = 20;
}
let changeToCelsius = document.querySelector("#celcius-link");
changeToCelsius.addEventListener("click", clickC);

function clickF(event) {
  event.preventDefault();
  let temp = document.querySelector("#temp");
  temp.innerHTML = "80";
}

let changeToFahrenheit = document.querySelector("#fahrenheit-link");
changeToFahrenheit.addEventListener("click", clickF);

// ~ Location & Temp Change ~

function displayTemperature(response) {
  console.log(response.data.weather[0].description);
  let temperatureElement = document.querySelector("#temp");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windspeedElement = document.querySelector("#windspeed");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windspeedElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "d2b4efd6e0f5423f450f89aaf0181665";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Cardiff&units=metric&appid=${apiKey}`;

axios.get(apiUrl).then(displayTemperature);
