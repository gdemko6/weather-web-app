import { WeatherType } from "./weatherType";

export class View {
  displaySearchResults(location, weather) {
    weatherType = WeatherType.getWeatherType(weather);
    changeTheme(weatherType);
  }
  changeTheme(weatherType) {}
}
