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

function searchCity(event) {
  event.preventDefault();
  let usersCity = document.querySelector("#city-input");

  let newCity = document.querySelector("#city");
  newCity.innerHTML = `${usersCity.value}`;

  let apiKey = "d2b4efd6e0f5423f450f89aaf0181665";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${usersCity.value}&units=metric&appid=${apiKey}`;

  function newTemp(response) {
    let temperature = Math.round(response.data.main.temp);

    let newTemp = document.querySelector("#temp");
    newTemp.innerHTML = `${temperature}`;
  }

  axios.get(`${apiUrl}`).then(newTemp);
}

let searchButton = document.querySelector("#submit-button");
searchButton.addEventListener("click", searchCity);
