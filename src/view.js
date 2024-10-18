import { WeatherType } from "./weatherType";

export class View {
  displaySearchResults(location, weatherWeek, dates) {
    let type = new WeatherType();

    // const weatherType = type.getWeatherType(weather);
    // this.changeTheme(weatherType);

    for (let index = 0; index < 7; index++) {
      const weatherDayDom = document.querySelector(`#day${index}`);
      weatherDayDom.innerHTML = "";

      if (weatherWeek[index] !== undefined && dates[index] !== undefined) {
        const temperatureDom = document.createElement("div");
        const dateDom = document.createElement("div");

        temperatureDom.innerText = `Temperature: ${weatherWeek[index]}°C`;
        dateDom.innerText = `${dates[index]}`;

        weatherDayDom.appendChild(dateDom);
        weatherDayDom.appendChild(temperatureDom);
      }
    }

    const locationDom = document.querySelector("#location");
    locationDom.innerText = location;
  }

  changeTheme(weatherType) {}
}
