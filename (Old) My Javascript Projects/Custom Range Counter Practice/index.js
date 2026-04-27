let fromUserInputEl = document.getElementById("fromUserInput");
let toUserInputEl = document.getElementById("toUserInput");
let counterTextEl = document.getElementById("counterText");

let count = 0;
let uniqueId;

function onClickStart() {
  if (fromUserInputEl.value > toUserInputEl.value) {
    alert("Values are incorrect.");
    return;
  }

  if (fromUserInputEl.value !== "") {
    if (toUserInputEl.value !== "") {
      count = fromUserInputEl.value;
      uniqueId = setInterval(onCount, 1000);
    } else {
      alert("Enter to value input.");
    }
  } else {
    alert("Enter from value input.");
  }
}

function onCount() {
  counterTextEl.textContent = count;
  count++;

  if (count > toUserInputEl.value) {
    clearInterval(uniqueId);
  }
}
