function redLightOn() {
  document.getElementById("redLight").style.backgroundColor = "#cf1124";
  document.getElementById("redButton").style.backgroundColor = "#cf1124";

  document.getElementById("greenLight").style.backgroundColor = "#4b5069";
  document.getElementById("greenButton").style.backgroundColor = "#1f1d41";

  document.getElementById("yellowLight").style.backgroundColor = "#4b5069";
  document.getElementById("yellowButton").style.backgroundColor = "#1f1d41";
}

function yellowLightOn() {
  document.getElementById("redLight").style.backgroundColor = "#4b5069";
  document.getElementById("redButton").style.backgroundColor = "#1f1d41";

  document.getElementById("greenLight").style.backgroundColor = "#4b5069";
  document.getElementById("greenButton").style.backgroundColor = "#1f1d41";

  document.getElementById("yellowLight").style.backgroundColor = "#f7c948";
  document.getElementById("yellowButton").style.backgroundColor = "#f7c948";
}

function greenLightOn() {
  document.getElementById("redLight").style.backgroundColor = "#4b5069";
  document.getElementById("redButton").style.backgroundColor = "#1f1d41";

  document.getElementById("greenLight").style.backgroundColor = "#199473";
  document.getElementById("greenButton").style.backgroundColor = "#199473";

  document.getElementById("yellowLight").style.backgroundColor = "#4b5069";
  document.getElementById("yellowButton").style.backgroundColor = "#1f1d41";
}
