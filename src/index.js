function displayTemperature(response) {
    let temperatureElement = document.querySelector("#current-temperature");
    let temperature = Math.round(response.data.temperature.current);
    let cityElement = document.querySelector("#current-city");
    let humidityElement = document.querySelector("#current-humidity");
    let windElement = document.querySelector("#current-wind");
    let currentDateElement = document.querySelector("#current-date");
  
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = temperature;
    humidityElement.innerHTML = `Humidity: <strong>${response.data.temperature.humidity}%</strong>`;
    windElement.innerHTML = `Wind: <strong>${Math.round(
      response.data.wind.speed
    )} km/h</strong>`;
    currentDateElement.innerHTML = formatDate(new Date());
  }
  
  function search(event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-input");
    let city = searchInputElement.value;
  
    let apiKey = "93c52f4e02ee6o7e13660b1taa06210f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(displayTemperature);
  }
  
  function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let day = date.getDay();
  
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    if (hours < 10) {
      hours = `0${hours}`;
    }
  
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  
    return `${days[day]} ${hours}:${minutes}`;
  }
  
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", search);
  
  let currentDateElement = document.querySelector("#current-date");
  currentDateElement.innerHTML = formatDate(new Date());
  