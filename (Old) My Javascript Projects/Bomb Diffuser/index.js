let inputEl = document.getElementById("bombInput");
let headingEl = document.getElementById("bombHeading");
let timerId = setInterval(increase, 1000);

inputEl.addEventListener("keydown", diffuse);

//inputEl.onkeydown(diffuse)

function increase() {
  let prev = headingEl.textContent;
  prev = parseInt(prev) - 1;
  headingEl.textContent = prev;

  if (prev === 0) {
    headingEl.textContent = "BOOM";
    clearInterval(timerId);
  }
}

// Event object
function diffuse(event) {
  if (
    event.key === "Enter" &&
    inputEl.value === "Diffuse" &&
    headingEl.textContent !== "BOOM"
  ) {
    headingEl.textContent = "Bomb diffused";
    clearInterval(timerId);
  }
}
