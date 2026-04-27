let display1El = document.querySelector(".display-1");
let display2El = document.querySelector(".display-2");
let tempResultEl = document.querySelector(".display-3");

let numList = document.querySelectorAll(".num");
let opList = document.querySelectorAll(".op");

let clearAllEl = document.querySelector(".clear-all");
let clearEntityEl = document.querySelector(".clear-entity");
let equalsEl = document.querySelector(".equals");

let display1 = "";
let display2 = "";
let result = null;

let isDotPresent = false;

let lastOp = "";

numList.forEach(function (num) {
  num.addEventListener("click", onNumClick);
});

function onNumClick(event) {
  let clickedNum = event.target.textContent;
  if (clickedNum === "." && !isDotPresent) {
    isDotPresent = true;
  } else if (clickedNum === "." && isDotPresent) {
    return;
  }
  display2 += clickedNum;
  display2El.textContent = display2;
}

opList.forEach(function (op) {
  op.addEventListener("click", onOpClick);
});

function onOpClick(event) {
  if (display2 === "") {
    return;
  }

  let opName = event.target.textContent;

  if (display1 !== "" && display2 !== "") {
    // we want to perform mathematical operation and get the result
    mathOperation();
  } else {
    result = parseFloat(display2);
  }
  lastOp = opName;
  clearAndshift(opName);
  isDotPresent = false;
}

function mathOperation() {
  if (lastOp === "+") {
    result = result + parseFloat(display2);
  } else if (lastOp === "-") {
    result = result - parseFloat(display2);
  } else if (lastOp === "x") {
    result = result * parseFloat(display2);
  } else if (lastOp === "/") {
    result = result / parseFloat(display2);
  } else if (lastOp === "%") {
    result = result % parseFloat(display2);
  }
}

function clearAndshift(opName) {
  display1 = display1 + display2 + " " + opName + " ";
  display1El.textContent = display1;

  display2 = "";
  display2El.textContent = "";

  tempResultEl.textContent = result;
}

equalsEl.addEventListener("click", function () {
  if (!display1 || !display2) {
    return;
  }
  mathOperation();
  display2El.textContent = result;
  tempResultEl.textContent = "";
  isDotPresent = false;
});

clearAllEl.addEventListener("click", function () {
  display1 = "";
  display2 = "";
  result = null;
  display1El.textContent = 0;
  display2El.textContent = 0;
  tempResultEl.textContent = "";
  isDotPresent = false;
});

clearEntityEl.addEventListener("click", function () {
  display2 = "";
  display2El.textContent = "";
  isDotPresent = false;
});

window.addEventListener("keydown", onKeyPress);

function onKeyPress(event) {
  if (
    event.key === "0" ||
    event.key === "1" ||
    event.key === "2" ||
    event.key === "3" ||
    event.key === "4" ||
    event.key === "5" ||
    event.key === "6" ||
    event.key === "7" ||
    event.key === "8" ||
    event.key === "9" ||
    event.key === "."
  ) {
    // call the number function
    numList.forEach(function (eachBtn) {
      if (eachBtn.textContent === event.key) {
        eachBtn.click();
      }
    });
  } else if (
    event.key === "%" ||
    event.key === "/" ||
    event.key === "" ||
    event.key === "-" ||
    event.key === "+"
  ) {
    opList.forEach(function (eachBtn) {
      if (eachBtn.textContent === event.key) {
        eachBtn.click();
      }
    });
  } else if (event.key === "*" || event.key === "x") {
    opList.forEach(function (eachBtn) {
      if (eachBtn.textContent === "x") {
        eachBtn.click();
      }
    });
  } else if (event.key === "Enter" || event.key === "=") {
    equalsEl.click();
  }
}

// console every step
