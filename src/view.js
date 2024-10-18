import { WeatherType } from "./weatherType";

export class View {
  displaySearchResults(location, weather) {
    let type = new WeatherType();
    //weatherType = type.getWeatherType(weather);
    //changeTheme(weatherType);
    const weatherDom = document.createElement("div");
    const locationDom = document.createElement("div");
    weatherDom.innerText = weather;
    locationDom.innerText = location;
    const body = document.querySelector("body");
    body.append(weatherDom, locationDom);
  }
  changeTheme(weatherType) {}
}
