let currentTime = new Date();
function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentDay = days[date.getDay()];
  let fullTime = currentTime.getTime();
  let hours = currentTime.getHours();
  let minuts = currentTime.getMinutes();
  if (minuts < 10) {
    minuts = `0${minuts}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let formattedDate = `${currentDay} ${hours}:${minuts}`;
  let timeNow = document.querySelector("h3");
  timeNow.innerHTML = formattedDate;
  console.log(formattedDate);
}
formatDate(currentTime);

function showWeather(response) {
  console.log(response.data);
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("#tempvalue").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidvalue").innerHTML = Math.round(
    response.data.main.humidity
  );
  document.querySelector("#windvalue").innerHTML = Math.round(
    response.data.wind.speed
  );
}

function displayCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let theCity = `${cityInput.value}`;
  let apiKey = "415b778c777202b3c441f0a528a39576";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${theCity}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showWeather);
}
let signUpForm = document.querySelector("#enter-city");
signUpForm.addEventListener("submit", displayCity);

//function convertToFahrenheit(event) {
//event.preventDefault();
//let temperatureElement = document.querySelector("#temperature");
//temperatureElement.innerHTML = 66;
//}

//function convertToCelsius(event) {
//event.preventDefault();
//let temperatureElement = document.querySelector("#temperature");
//temperatureElement.innerHTML = Math.round(response.data.main.humidity);
//}
//let fahrenheitLink = document.querySelector("#fahrenheit-link");
//fahrenheitLink.addEventListener("click", convertToFahrenheit);

//let celsiusLink = document.querySelector("#celsius-link");
//celsiusLink.addEventListener("click", convertToCelsius);
