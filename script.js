let now = new Date();
let todaysDate = document.querySelector("#date");
let todaysTime = document.querySelector("#time");
let date = now.getDate();
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let year = now.getFullYear();
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minute = now.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}

todaysDate.innerHTML = `${day}, ${month} ${date}, ${year}`;
todaysTime.innerHTML = `${hour}:${minute}`;

function changeTemp(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#conditions").innerHTML =
    response.data.weather[0].description;

  console.log(response);
}

function changeCity(event) {
  event.preventDefault();
  let city = document.querySelector("#search-input").value;
  let apiKey = "862505b1b6aac4d71786143d27378ed5";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(changeTemp);
}

let form = document.querySelector("#city-search");
form.addEventListener("submit", changeCity);
