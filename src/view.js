export class View {
  displaySearchResults(location, weatherWeek, dates, descriptions) {
    // const weatherType = type.getWeatherType(weather);
    // this.changeTheme(weatherType);

    for (let index = 0; index < 5; index++) {
      const weatherDayDom = document.querySelector(`#day${index}`);
      weatherDayDom.innerHTML = "";

      if (weatherWeek[index] !== undefined && dates[index] !== undefined) {
        const temperatureDom = document.createElement("div");
        const dateDom = document.createElement("div");
        const descriptionDom = document.createElement("div");

        temperatureDom.innerText = weatherWeek[index];
        dateDom.innerText = `${dates[index]}`;
        descriptionDom.innerText = descriptions[index];

        weatherDayDom.appendChild(dateDom);
        weatherDayDom.appendChild(temperatureDom);
        weatherDayDom.appendChild(descriptionDom);
      }
    }

    const locationDom = document.querySelector("#location");
    locationDom.innerText = location;
  }

  changeTheme(description) {
    let descriptionArray = description.split(",");
    let weatherType = descriptionArray[0];
    const body = document.querySelector("body");
    body.className = "";
    let cloudy = document.querySelector("#cloudy");
    cloudy.classList.add("invisible");
    if (weatherType === "Partially cloudy") {
      cloudy.classList = "";
      body.classList.add("cloudy");
    } else if (weatherType === "Clear") {
      body.classList.add("clear");
    } else if (weatherType === "Snow") {
      body.classList.add("snowy");
    } else if (weatherType === "Rain") {
      body.classList.add("rainy");
    } else if (weatherType === "Overcast") {
      body.classList.add("overcast");
    }
  }
}
