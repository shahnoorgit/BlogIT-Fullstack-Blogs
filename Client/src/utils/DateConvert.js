export function parseDateString(dateString) {
  // Create a Date object from the provided string
  const date = new Date(dateString);

  // Extract date and time components
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  // Return formatted date and time
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
