export class WeatherAPI {
  constructor() {
    this.apiKey = "VXAVKRGFZEPR7TZD8QRKDJBHB";
  }

  async getWeather(location) {
    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${this.apiKey}`,
        { mode: "cors" }
      );
      const weatherData = await response.json();
      console.log(weatherData);

      const temperatures = weatherData.days.map((day) => day.temp);
      const dates = weatherData.days.map((day) => day.datetime);
      const descriptions = weatherData.days.map((day) => day.conditions);
      location = weatherData.address;

      return { temperatures, dates, descriptions, location };
    } catch (error) {
      console.error(error);
      return { temperatures: [], dates: [], descriptions: [], location };
    }
  }
}
