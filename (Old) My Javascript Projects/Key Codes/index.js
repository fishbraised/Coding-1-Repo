let userInputEl = document.getElementById("userInput");
let keyCodeListEl = document.getElementById("keyCodeList");

userInputEl.addEventListener("keydown", onGetKeyCode);

function onGetKeyCode(event) {
  keyCodeListEl.innerHTML += `<li>${event.keyCode}</li>`;
}
