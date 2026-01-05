document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherbtn = document.getElementById("get-weather-btn");
  const cityNameDisplay = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const weatherInfo = document.getElementById("weather-info");
  const errorMessage = document.getElementById("error-message");

  API_KEY = "0025e3a6041b232e4cdb1993e47b669c";

  cityInput.addEventListener("keydown", (e) => {
    const keyName = e.key;
    if (keyName === "Enter") {
      getWeatherbtn.click();
    }
  });

  getWeatherbtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) return;
    try {
      const weatherData = await getWeatherInfo(city);
      displayWeatherInfo(weatherData);
      console.log(weatherData);
    } catch (error) {
      displayErrorMsg();
    }
  });

  async function getWeatherInfo(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    try {
      const response = await fetch(url);
      console.log(typeof response);
      console.log(response);

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.error(error.message);
    }
  }
  function displayWeatherInfo(Data) {
    const { name, main, weather } = Data;
    cityNameDisplay.textContent = `${name}`;
    temperatureDisplay.textContent = `Temperature :- ${main.temp}`;
    descriptionDisplay.textContent = `Description :- ${weather[0].description}`;
    weatherInfo.classList.remove("Hidden");
    errorMessage.classList.add("Hidden");
  }

  function displayErrorMsg() {
    weatherInfo.classList.add("Hidden");
    errorMessage.classList.remove("Hidden");
  }
});
