// let taglineEl = document.querySelector("#tagline");
let taglineEl = document.getElementById("tagline");
let daysEl = document.getElementById("days");
let hoursEl = document.getElementById("hours");
let minsEl = document.getElementById("mins");
let secsEl = document.getElementById("secs");

let monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let curDate = new Date();
console.log(curDate);

let curYear = curDate.getFullYear();

let curMonth = curDate.getMonth();
let curDay = curDate.getDate();
console.log(curYear);
console.log(curMonth);
console.log(curDay);
console.log(curDate.getHours());

// Date(year, month, day, hours, minutes, seconds, milliseconds)

const furDate = new Date(curYear, curMonth, curDay + 10, 10);
const furYear = furDate.getFullYear();
const furMonth = furDate.getMonth();
const furDay = furDate.getDate();
const furWeekDay = furDate.getDay();

const furMonthName = monthNames[furMonth];
const furDayName = dayNames[furWeekDay];

console.log(furDate.getHours());
taglineEl.textContent = `Giveaway Ends On ${furDayName}, ${furDay} ${furMonthName} ${furYear} ${furDate.getHours()}:${furDate.getMinutes()}`;

function countdownTimer() {
  let now = new Date();
  let nowTime = now.getTime();
  let remainingTime = furDate.getTime() - nowTime;

  let oneDay = 24 * 60 * 60 * 1000;
  let oneHour = 60 * 60 * 1000;
  let oneMinute = 60 * 1000;

  let days = Math.floor(remainingTime / oneDay);
  let rem = remainingTime % oneDay;
  let hours = Math.floor(rem / oneHour);
  rem = rem % oneHour;
  let minutes = Math.floor(rem / oneMinute);
  rem = rem % oneMinute;
  let seconds = Math.floor(rem / 1000);

  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minsEl.textContent = minutes;
  secsEl.textContent = seconds;
}

let timerId = setInterval(countdownTimer, 1000);
