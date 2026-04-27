let bgColorInputEl = document.getElementById("bgColorInput");
let fontColorInputEl = document.getElementById("fontColorInput");
let fontSizeInputEl = document.getElementById("fontSizeInput");
let fontWeightInputEl = document.getElementById("fontWeightInput");
let paddingInputEl = document.getElementById("paddingInput");
let borderRadiusInputEl = document.getElementById("borderRadiusInput");

let applyButtonEl = document.getElementById("applyButton");
let customButtonEl = document.getElementById("customButton");

applyButtonEl.addEventListener("click", function () {
  customButtonEl.style.backgroundColor = bgColorInputEl.value;
  customButtonEl.style.color = fontColorInputEl.value;
  customButtonEl.style.fontSize = fontSizeInputEl.value;
  customButtonEl.style.fontWeight = fontWeightInputEl.value;
  customButtonEl.style.padding = paddingInputEl.value;
  customButtonEl.style.borderRadius = borderRadiusInputEl.value;
});
