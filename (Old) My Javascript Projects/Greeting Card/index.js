let greeting =
  '{"greetText":"A very happy Diwali to you and your family! May the millions of lamps of Diwali illuminate your life with happiness, joy, peace and health","from":"Rohit","to":"Arjun"}';
let parsedGreeting = JSON.parse(greeting);

let fromTextEl = document.getElementById("fromText");
let toTextEl = document.getElementById("toText");
let greetingTextEl = document.getElementById("greeting");

fromTextEl.textContent = `From: ${parsedGreeting.from}`;
toTextEl.textContent = `To: ${parsedGreeting.to}`;
greetingTextEl.textContent = parsedGreeting.greetText;
