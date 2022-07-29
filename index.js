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
  console.log(response.data.main);
  let value = document.querySelector("#value");
  let temperature = Math.round(response.data.main.temp);
  value.innerHTML = `It is ${temperature}°C in ${response.data.name}`;
  let humidvalue = document.querySelector("#humidvalue");
  let humid = Math.round(response.data.main.humidity);
  humidvalue.innerHTML = `${humid}`;
}

function displayCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let theCity = `${cityInput.value}`;
  let displayInput = document.querySelector("h1");
  displayInput.innerHTML = theCity;
  let apiKey = "415b778c777202b3c441f0a528a39576";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${theCity}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showWeather);
}
let signUpForm = document.querySelector("#enter-city");
signUpForm.addEventListener("submit", displayCity);
