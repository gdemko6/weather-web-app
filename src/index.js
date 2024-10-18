import "./styles.css";
import { View } from "./view";
import { WeatherAPI } from "./weatherAPI";
import { WeatherType } from "./weatherType";

window.addEventListener("load", initialize);

async function initialize() {
  const view = new View();
  const weatherAPI = new WeatherAPI();

  // Fetch initial weather data
  const { weatherWeek, dateWeek } = await weatherAPI.getWeather("Minneapolis");
  view.displaySearchResults("Minneapolis", weatherWeek, dateWeek);

  const searchButton = document.querySelector("#search-button");
  searchButton.addEventListener("click", async () => {
    const searchInput = document.querySelector("#search-input");
    const { weatherWeek, dateWeek } = await weatherAPI.getWeather(
      searchInput.value
    );

    view.displaySearchResults(searchInput.value, weatherWeek, dateWeek);
    searchInput.value = ""; // Clear the input field
  });
}
