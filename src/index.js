import "./styles.css";
import { View } from "./view";
import { WeatherAPI } from "./weatherAPI";
import { WeatherType } from "./weatherType";

window.addEventListener("load", initialize());

function initialize() {
  const weatherAPI = new WeatherAPI();
  let minneapolisWeather = weatherAPI.getWeather("Minneapolis");
  /*View.displaySearchResults("Minneapolis", minneapolisWeather);

  const searchButton = document.querySelector("#search-button");
  searchButton.addEventListener("click", () => {
    const search = document.querySelector("#search-input");
    currentWeather = weatherAPI.getWeather(search.value);
    View.displaySearchResults(search.value, currentWeather);
  });*/
}
