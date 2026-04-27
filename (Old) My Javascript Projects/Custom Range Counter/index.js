let fromUserInput = document.getElementById("fromUserInput");
let toUserInput = document.getElementById("toUserInput");
let startBtn = document.getElementById("counterBtn");
let counterText = document.getElementById("counterText");

startBtn.addEventListener("click", startTimer);

function startTimer() {
  let start = fromUserInput.value; // start = 10;
  let end = toUserInput.value;

  if (start === "") {
    alert("Enter valid start value.");
  } else if (end === "") {
    alert("Enter valid end value.");
  } else {
    start = parseInt(start);
    end = parseInt(end);
    let count = start;
    counterText.textContent = count;

    let timerId = setInterval(function () {
      startBtn.disabled = true;
      if (count < end) {
        count++;
        counterText.textContent = count;
      } else {
        clearInterval(timerId);
      }
    }, 1000);
  }
}
