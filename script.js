// GIVEN I am taking a code quiz
// WHEN I click the start button

// starts with my html screen when clicked dissapear and timers starts

// have 1 question and 4 answers where we know where one correct answer is

// THEN a timer starts and I am presented with a question

// start page that hides on click to begin

var quizArray = [
  {
    question:
      "What country was not part of the original Axis powers in World War II?",
    options: ["Germany", "Italy", "Russia", "Japan"],
    ans: "Russia",
  },
  {
    question: "What is 'cynophobia'?",
    options: [
      "Fear of Drugs",
      "Fear of Dogs",
      "Fear of Cats",
      "Fear of Cyclones",
    ],
    ans: "Fear of Dogs",
  },
  {
    question: "What is the rarest M&M color?",
    options: ["Brown", "Green", "Blue", "Red"],
    ans: "Brown",
  },
  {
    question: "Which is the only edible food that never goes bad?",
    options: ["Twinkies", "Honey", "Velveta Cheese", "Marshmellow"],
    ans: "Honey",
  },
  {
    question:
      "What football team was formerly known as the Frankford Yellow Jackets?",
    options: [
      "Philadelphia Eagles",
      "New York Jets",
      "New England Patriots",
      "Baltimore Ravens",
    ],
    ans: "Philadelphia Eagles",
  },
];
var currentQuestion = 0;
var userAnswersArray = [];
var correctAnswersArray = [];
var button = document.getElementById("startButton");
var body = document.body;
var header = document.head;
var questionSecton = document.createElement("section");
var questionText = document.createElement("h2");
questionText.setAttribute("id", "questionText");
var buttonA = document.createElement("button");
buttonA.setAttribute("id", "buttonA");
var buttonB = document.createElement("button");
buttonB.setAttribute("id", "buttonB");
var buttonC = document.createElement("button");
buttonC.setAttribute("id", "buttonC");
var buttonD = document.createElement("button");
buttonD.setAttribute("id", "buttonD");
var secondsLeft = document.createElement("header");
var timeEl = document.getElementById("time");
header.appendChild(secondsLeft);
body.appendChild(questionSecton);
questionText.textContent = quizArray[currentQuestion].question;
questionSecton.appendChild(questionText);
buttonA.textContent = quizArray[currentQuestion].options[0];
buttonB.textContent = quizArray[currentQuestion].options[1];
buttonC.textContent = quizArray[currentQuestion].options[2];
buttonD.textContent = quizArray[currentQuestion].options[3];
questionSecton.appendChild(buttonA);
questionSecton.appendChild(buttonB);
questionSecton.appendChild(buttonC);
questionSecton.appendChild(buttonD);

// ???
function listRun() {
  if (currentQuestion.length <= 4) {
    updateContent;
  }
}

// function beginQuiz() {
//   setTime();
//   header.style.display = "none";
//   body.style.display = "none";
//   updateContent();
// }

button.onclick = function () {
  var div = document.getElementById("hide");
  if (div.style.display !== "block") {
    div.style.display = "none";
  } else {
    body.style.display = "block";
    setTime();
  }
};
function updateContent() {
  if (currentQuestion <= 5) {
    // if length// check if more questions before ++
    currentQuestion++;
    document.getElementById("questionText").textContent =
      quizArray[currentQuestion].question;

    document.getElementById("buttonA").textContent =
      quizArray[currentQuestion].options[0];

    document.getElementById("buttonB").textContent =
      quizArray[currentQuestion].options[1];

    document.getElementById("buttonC").textContent =
      quizArray[currentQuestion].options[2];

    document.getElementById("buttonD").textContent =
      quizArray[currentQuestion].options[3];
    // } else {
    // }
    // return console.log("Quiz end");
  }
}

// var userAnswer = function (event) {
//   var selectedanswer = event.target;
//   console.log(selectedanswer);
//   // if(
//   //   quizArray[0][2] === selectedanswer
//   // )
// };
// buttonA.onclick = userAnswer;
var secondsLeft = 60;
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);

      // sendMessage();
    }
  }, 1000);
}
function checkAnswer() {
  if (
    userAnswersArray[currentQuestion] === correctAnswersArray[currentQuestion]
  ) {
    console.log(secondsLeft);
    secondsLeft += 2;
  } else {
    console.log("wrong");
    secondsLeft -= 15;
  }
}

setTime();
buttonA.onclick = function () {
  console.log();
  // get elementby id is the ability to change by running functions
  // need to save their answer in an array before updating coentent
  var userAnswer = quizArray[currentQuestion].options[0];
  userAnswersArray.push(userAnswer);
  console.log(userAnswersArray);
  var correctAnswer = quizArray[currentQuestion].ans;
  correctAnswersArray.push(correctAnswer);
  console.log(correctAnswersArray);
  checkAnswer();
  updateContent();
};

buttonB.onclick = function () {
  var userAnswer = quizArray[currentQuestion].options[1];
  userAnswersArray.push(userAnswer);
  console.log(userAnswersArray);
  var correctAnswer = quizArray[currentQuestion].ans;
  correctAnswersArray.push(correctAnswer);
  console.log(correctAnswersArray);
  checkAnswer();
  updateContent();
};
buttonC.onclick = function () {
  var userAnswer = quizArray[currentQuestion].options[2];
  userAnswersArray.push(userAnswer);
  console.log(userAnswersArray);
  var correctAnswer = quizArray[currentQuestion].ans;
  correctAnswersArray.push(correctAnswer);
  console.log(correctAnswersArray);

  checkAnswer();
  updateContent();
};
buttonD.onclick = function () {
  var userAnswer = quizArray[currentQuestion].options[3];
  userAnswersArray.push(userAnswer);
  console.log(userAnswersArray);
  var correctAnswer = quizArray[currentQuestion].ans;
  correctAnswersArray.push(correctAnswer);
  console.log(correctAnswersArray);

  checkAnswer();
  // updateContent(); will be changed to new function called finish quiz
};

// local storage content
// if there are no more questions need to call a new function that must be made called gradeQuiz

// put questions in array and onclick of array go to next question in array

// quiz[0].questionOne[2]
// quiz[0].ans
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

//  need a place for my questions
// need a place for multiple choices that are strings
// place to store correct answers
