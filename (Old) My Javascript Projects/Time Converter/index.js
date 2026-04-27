let convertFormEl = document.getElementById("convertForm");
let hoursInputEl = document.getElementById("hoursInput");
let minutesInputEl = document.getElementById("minutesInput");
let convertBtnEl = document.getElementById("convertBtn");
let timeInSecondsEl = document.getElementById("timeInSeconds");
let errorMsgEl = document.getElementById("errorMsg");

convertFormEl.addEventListener("submit", onDisplaySeconds);

function onDisplaySeconds(event) {
  event.preventDefault();
  let hours = hoursInputEl.value;
  let minutes = minutesInputEl.value;

  if (hours === "") {
    timeInSecondsEl.classList.remove("seconds-text");
    timeInSecondsEl.textContent = "";
    errorMsgEl.textContent = "Please enter valid number of hours.";
  } else if (minutes === "") {
    timeInSecondsEl.classList.remove("seconds-text");
    timeInSecondsEl.textContent = "";
    errorMsgEl.textContent = "Please enter valid number of minutes.";
  } else if (hours < 0 || minutes < 0) {
    timeInSecondsEl.classList.remove("seconds-text");
    timeInSecondsEl.textContent = "";
    errorMsgEl.textContent = "Please enter integers.";
  } else {
    timeInSecondsEl.classList.add("seconds-text");
    timeInSecondsEl.textContent = hours * 3600 + minutes * 60 + "s";
    errorMsgEl.textContent = "";
  }
}
