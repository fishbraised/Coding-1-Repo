const quizData = [
  {
    question:
      "Which of the following attributes is used to add link to any element?",
    options: ["link", "href", "ref", "newref"],
    answer: 1,
  },

  {
    question: "What does CSS stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Central Simple Style Sheets",
    ],
    answer: 1,
  },

  {
    question: "What does HTML stand for?",
    options: [
      "Hypertext Markup Language",
      "Hypertext Markdown Language",
      "Hyperloop Machine Language",
      "Hypertext and links markup language",
    ],
    answer: 0,
  },

  {
    question:
      "Which of the following HTML element is used for creating an unordered list?",
    options: ["<ui>", "<ol>", "<em>", "<ul>"],
    answer: 3,
  },

  {
    question:
      "Which of the following will write the message “Hello World!” in an alert box?",
    options: [
      "alertBox(“Hello World!”);",
      "alert(Hello World!);",
      "msgAlert(“Hello World!”);",
      "alert(“Hello World!”);",
    ],
    answer: 3,
  },

  {
    question:
      "Which are the correct “if” statements to execute certain code if “x” is equal to 2?",
    options: ["if(x 2)", "if(x = 2)", "if(x == 2)", "if(x != 2 )"],
    answer: 2,
  },

  {
    question: "Inside which element do you put JavaScript?",
    options: ["<var>", "<script>", "<section>", "<code>"],
    answer: 1,
  },

  {
    question: "Which one of the following is correct?",
    options: ["i =+ 1;", "i += 1;", "i = i++1;", "+i+;"],
    answer: 1,
  },
];

let questionEl = document.getElementById("question");
let optionsConEl = document.getElementById("optionsCon");
let submitBtnEl = document.getElementById("submitBtn");
submitBtnEl.addEventListener("click", onSubmit);

let questionCount = 0;
let score = 0;

createQuestion();

function createQuestion() {
  let curObj = quizData[questionCount];
  questionEl.textContent = curObj.question;
  let optionsHTML = curObj.options.map(function (optionText, index) {
    return `<li class="stripe">
              <input
                class="radio-btn"
                id="radioBtn${index}"
                type="radio"
                name="radioBtn"
              />
              <label class="label" for="radioBtn${index}">${optionText}</label>
            </li>`;
  });
  optionsHTML = optionsHTML.join("");
  optionsConEl.innerHTML = optionsHTML;
}

function findSelected() {
  let radioBtns = document.querySelectorAll(".radio-btn");
  let radioId;

  radioBtns.forEach(function (eachRadio) {
    if (eachRadio.checked === true) {
      radioId = eachRadio.id;
    }
  });
  return radioId;
}

function onSubmit() {
  let radioId = findSelected(); // radioBtn2
  if (!radioId) {
    alert("Choose a valid option.");
    return;
  }

  let curAnswer = quizData[questionCount].answer;
  curAnswer = "radioBtn" + curAnswer;

  if (curAnswer === radioId) {
    score += 5;
  }

  questionCount++;
  if (questionCount < quizData.length) {
    createQuestion();
  } else {
    questionEl.textContent = "Congratulations!";
    optionsConEl.innerHTML = `
    <h1 class="result-heading">score: <span class="result-value">${score}</span></h1>
    `;

    submitBtnEl.classList.add("hide-btn");
    restartBtn.classList.remove("hide-btn");

    restartBtn.addEventListener("click", function () {
      questionCount = 0;
      score = 0;
      submitBtnEl.classList.remove("hide-btn");
      restartBtn.classList.add("hide-btn");
      createQuestion();
    });

    // create a new button which says restart
    // add an event listener to it and in the callback funciton of the event,
    // just add a function expression and specify all the things that should happen when you restart
    // like resetting score, question count and remaining things
  }
}
