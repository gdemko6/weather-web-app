export function formatDates(dates) {
  const date = new Date(dates[index]);
  const options = { weekday: "long", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  return formattedDate;
}
