export class View {
  displaySearchResults(location, temperatures, dates, descriptions) {
    // const weatherType = type.getWeatherType(weather);
    // this.changeTheme(weatherType);

    for (let index = 0; index < 5; index++) {
      const weatherDayDom = document.querySelector(`#day${index}`);
      weatherDayDom.innerHTML = "";

      if (temperatures[index] !== undefined && dates[index] !== undefined) {
        const temperatureDom = document.createElement("div");
        const dateDom = document.createElement("div");
        const descriptionDom = document.createElement("div");

        temperatureDom.innerText = `Temperature: ${temperatures[index]}`;
        dateDom.innerText = `${dates[index]}`;
        descriptionDom.innerText = `Conditions: ${descriptions[index]}`;

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
    let rainy = document.querySelector("#rainy");
    rainy.classList.add("invisible");
    let snowy = document.querySelector("#snowy");
    snowy.classList.add("invisible");
    let overcast = document.querySelector("#overcast");
    overcast.classList.add("invisible");
    let clear = document.querySelector("#clear");
    clear.classList.add("invisible");
    if (weatherType === "Partially cloudy") {
      cloudy.classList = "";
      body.classList.add("cloudy");
    } else if (weatherType === "Clear") {
      clear.classList = "";
      body.classList.add("clear");
    } else if (weatherType === "Snow") {
      snowy.classList = "";
      body.classList.add("snowy");
    } else if (weatherType === "Rain") {
      rainy.classList = "";
      body.classList.add("rainy");
    } else if (weatherType === "Overcast") {
      overcast.classList = "";
      body.classList.add("overcast");
    }
  }
}
