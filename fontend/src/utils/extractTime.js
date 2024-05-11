export function extractTime(dateString) {
  function padZero(number) {
    return number.toString().padStart(2, "0");
  }

  const date = new Date(dateString);
  let hours = date.getHours();
  const minutes = padZero(date.getMinutes());
  const period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  hours = padZero(hours);
  return `${hours}:${minutes} ${period}`;
}
