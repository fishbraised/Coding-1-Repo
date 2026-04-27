let checkButtonEl = document.getElementById("checkButton");
let restartButtonEl = document.getElementById("restartButton");
let userInputEl = document.getElementById("userInput");
let gameResultEl = document.getElementById("gameResult");

let firstNumberEl = document.getElementById("firstNumber");
let secondNumberEl = document.getElementById("secondNumber");

let random1;
let random2;

checkButtonEl.addEventListener("click", checkAddition);
restartButtonEl.addEventListener("click", restartGame);

function checkAddition() {
  let result = random1 + random2;
  if (parseInt(userInputEl.value) === result) {
    gameResultEl.textContent = "Congratulations! You got it right.";
    gameResultEl.style.background = "#028a0f";
  } else {
    gameResultEl.textContent = "Please try again!";
    gameResultEl.style.background = "#1e217c";
  }
}

function restartGame() {
  random1 = Math.round(Math.random() * 100);
  random2 = Math.round(Math.random() * 100);

  console.log("first: ", random1);
  console.log("second:", random2);

  firstNumberEl.textContent = random1;
  secondNumberEl.textContent = random2;
  gameResultEl.textContent = "";
}
restartGame();
