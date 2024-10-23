import "./styles.css";
import { View } from "./view";
import { WeatherAPI } from "./weatherAPI";
import { WeatherType } from "./weatherType";

window.addEventListener("load", initialize);

async function initialize() {
  const view = new View();
  const weatherAPI = new WeatherAPI();
  const weatherType = new WeatherType();

  // Fetch initial weather data
  const { weatherWeek, dateWeek } = await weatherAPI.getWeather("Minneapolis");
  view.displaySearchResults("Minneapolis", weatherWeek, dateWeek);

  //initialize ability to click on day of weather
  let cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    //for each to give the event listener to each card
    card.addEventListener("click", () => {
      cards.forEach((card) => {
        //for each to make sure only one card is active
        card.classList.remove("active");
      });
      card.classList.add("active");
      view.changeTheme(
        weatherType.getWeatherType(card.firstElementChild.innerText)
      );
    });
  });

  //initialize search button
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
