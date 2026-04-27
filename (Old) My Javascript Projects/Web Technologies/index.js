let containerEl = document.getElementById("bgContainer");
let headingEl = document.createElement("h1");
console.log(headingEl);
headingEl.textContent = "Web Technologies";
document.body.appendChild(headingEl);

// containerEl.appendChild(headingEl);

// // FUNCTION DECLARATION
// // function changeStyle() {
// //   headingEl.textContent = "4.0 Technologies";
// // }

// // FUCNTION EXPRESSION
// // let changeStyle = function () {
// //   headingEl.textContent = "4.0 Technologies";
// // };

let buttonEl = document.createElement("button");
buttonEl.onclick = function () {
  headingEl.textContent = "4.0 Technologies";
};
buttonEl.textContent = "Change Text";
containerEl.appendChild(buttonEl);

let person = {
  firstName: "Lewis",
  lastName: "Lye",
  age: 100,
};

// A key name in an object can contain alpha numeric values.
// It cannot start with a number
// It cannot have any other symbols other than $ & _

console.log(person);
console.log(typeof person);

// Accessing object properties using Bracket notation
console.log(person["firstName"]);

// Accessing object properties using Dot notation
console.log(person.lastName);

let myChoice = "age";

console.log(person.myChoice);
console.log(person[myChoice]);

person.age = 50;
person["age"] = 60;

let { firstName, lastName } = person;
console.log(firstName);
console.log(lastName);

let random = Math.random() * 100;
console.log(random);
console.log(Math.ceil(random));
console.log(Math.floor(random));

console.log(15 == 16);
console.log(15 == "15");

console.log(15 === "15");
