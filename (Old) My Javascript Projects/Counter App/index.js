// Datatypes --->
// Primitive Datatypes  =  Number, String, Boolean, Undefined
// Reference datatypes  =  arrays, objects

// let num = 5;
// var num2 = 2.0;
// console.log(typeof num);
// console.log(typeof num2);
// num = 15;
// console.log(num);
// var digit = 10;

// let name1 = `Lewis`;
// console.log(name1);

// let result;
// console.log(result);

// result = "25";
// console.log(parseInt(result) + 10);

let counterEl = document.getElementById("counter");
console.log(counterEl);

function decrease() {
  let prev = counterEl.textContent;
  prev = parseInt(prev) - 1;
  counterEl.textContent = prev;
  counterEl.style.color = "red";
}

function reset() {
  let prev = counterEl.textContent;
  prev = 0;
  counterEl.textContent = prev;
  counterEl.style.color = "#212529";
}

function increase() {
  let prev = counterEl.textContent;
  prev = parseInt(prev) + 1;
  counterEl.textContent = prev;
  counterEl.style.color = "green";
}
