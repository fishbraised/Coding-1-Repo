let submitBtnEl = document.getElementById("submitBtn");
let submitTextEl = document.getElementById("submitText");

submitBtnEl.addEventListener("click", displaySubmitText);

function displaySubmitText() {
  let radioBtns = document.querySelectorAll(".radio-btn");
  let selected;

  radioBtns.forEach(function (eachBtn) {
    if (eachBtn.checked === true) {
      selected = eachBtn.value;
    }
  });
  submitTextEl.textContent = "Your favorite place is " + selected;
}
