export function getWeatherType(condition) {
  let descriptionArray = condition.split(",");
  let weatherType = descriptionArray[0];
  return weatherType;
}
