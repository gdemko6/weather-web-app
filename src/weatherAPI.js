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
      console.log(weatherData);

      const weatherWeek = weatherData.days.map((day) => day.temp);
      const dateWeek = weatherData.days.map((day) => day.datetime);
      const descriptionWeek = weatherData.days.map((day) => day.conditions);

      return { weatherWeek, dateWeek, descriptionWeek };
    } catch (error) {
      console.error(error);
      return { weatherWeek: [], dateWeek: [], descriptionWeek: [] };
    }
  }
}
