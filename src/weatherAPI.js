export class WeatherAPI {
  constructor() {
    this.apiKey = "VXAVKRGFZEPR7TZD8QRKDJBHB";
  }
  async getWeather(location) {
    console.log(location);
    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${this.apiKey}`,
        { mode: "cors" }
      );
      const weatherData = await response.json();
      let weather = weatherData.days[0].temp;
      console.log(weather);
      return weather;
    } catch (error) {
      console.log(error);
    }
  }
}
