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
var display = document.getElementById("time");
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
var timerInterval;
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

// timer countdown from 60 seconds
var secondsLeft = 60;
function setTime() {
  // Sets interval in variable
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";

    if (secondsLeft <= 0) {
      // if (secondsLeft === 0) {
      clearInterval(timerInterval);
      endGame();
      // sendMessage();
    }
  }, 1000);
}

document.getElementById("time").style.visibility = "hidden";
document.getElementById("questionText").style.visibility = "hidden";
document.getElementById("buttonA").style.visibility = "hidden";
document.getElementById("buttonB").style.visibility = "hidden";
document.getElementById("buttonC").style.visibility = "hidden";
document.getElementById("buttonD").style.visibility = "hidden";

// not functioning
function beginQuiz() {
  setTime();

  // var h2 = document.getElementById("questionText");
  // h2.style.display = "none";
  // var timeHtml = document.getElementById("time");
  // timeHtml.style.display = "none";
  // updateContent();
}

button.onclick = function () {
  var div = document.getElementById("hide");
  div.style.display = "none";
  document.getElementById("time").style.visibility = "visible";
  document.getElementById("questionText").style.visibility = "visible";
  document.getElementById("buttonA").style.visibility = "visible";
  document.getElementById("buttonB").style.visibility = "visible";
  document.getElementById("buttonC").style.visibility = "visible";
  document.getElementById("buttonD").style.visibility = "visible";
};
//  } else {
//   beginQuiz()

// body.style.display = "block";
// var timer = document.createElement("h2");
// timer.setAttribute("id", "timer");
// display.append(timer);
// setTime();
// }

// switches through questions
function updateContent() {
  currentQuestion++;
  if (currentQuestion === 5 || secondsLeft <= 0) {
    questionSecton.innerHTML = "";
    clearInterval(timerInterval);
    endGame();
    // if should turn to hiscore html
    // else would be to populate end quiz
  }

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
  //  } else (
  // return console.log("Quiz end");
  //  )
}

// endgame
function endGame() {
  var score = secondsLeft;
  localStorage.setItem("currentScore", score);
  window.location.href = "./highScore.html";
}

// checks users answers against correct answers
function checkAnswer() {
  if (
    userAnswersArray[currentQuestion] === correctAnswersArray[currentQuestion]
  ) {
    secondsLeft += 2;
  } else {
    secondsLeft -= 15;
  }
}

setTime();
buttonA.onclick = function () {
  console.log();
  // get elementby id is the ability to change by running functions

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
  updateContent();
};

// display secondsLeft at end
