import "./styles.css";
import { View } from "./view";
import { WeatherAPI } from "./weatherAPI";
import { WeatherType } from "./weatherType";

window.addEventListener("load", initialize());

async function initialize() {
  const view = new View();
  const weatherAPI = new WeatherAPI();
  let minneapolisWeather = await weatherAPI.getWeather("Minneapolis");
  view.displaySearchResults("Minneapolis", minneapolisWeather);

  const searchButton = document.querySelector("#search-button");
  searchButton.addEventListener("click", async () => {
    const search = document.querySelector("#search-input");
    let currentWeather = await weatherAPI.getWeather(search.value);
    view.displaySearchResults(search.value, currentWeather);
  });
}
