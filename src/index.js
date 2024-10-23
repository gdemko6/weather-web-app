import "./styles.css";
import { View } from "./view";
import { WeatherAPI } from "./weatherAPI";

window.addEventListener("load", initialize);

async function initialize() {
  const view = new View();
  const weatherAPI = new WeatherAPI();

  // Fetch initial weather data
  const { weatherWeek, dateWeek, descriptionWeek } =
    await weatherAPI.getWeather("Minneapolis");
  view.displaySearchResults(
    "Minneapolis",
    weatherWeek,
    dateWeek,
    descriptionWeek
  );
  view.changeTheme(descriptionWeek[0]);

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
      view.changeTheme(card.children[2].innerText);
    });
  });

  //initialize search button
  const searchButton = document.querySelector("#search-button");
  searchButton.addEventListener("click", async () => {
    const searchInput = document.querySelector("#search-input");
    const { weatherWeek, dateWeek, descriptionWeek } =
      await weatherAPI.getWeather(searchInput.value);

    view.displaySearchResults(
      searchInput.value,
      weatherWeek,
      dateWeek,
      descriptionWeek
    );
    searchInput.value = ""; // Clear the input field
  });
}
