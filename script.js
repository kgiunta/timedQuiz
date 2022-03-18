// GIVEN I am taking a code quiz
// WHEN I click the start button

// starts with my html screen when clicked dissapear and timers starts

// have 1 question and 4 answers where we know where one correct answer is

// THEN a timer starts and I am presented with a question

// start page that hides on click to begin

var button = document.getElementById("startButton"); 

button.onclick = function() {
    var div = document.getElementById("hide");
    if (div.style.display !== "none") {
        div.style.display = "none";
    }
    else {
        div.style.display = "block";
    }
};

// 
var timeEl = document.querySelector(".time");

var secondsLeft = 60;
function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left.";
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }
  
    }, 1000);
  }
// WHEN I answer a question

 var questionOne = {
question: "What country was not part of the original Axis powers in World War II?",
options:["Germany","Italy","Russia", "Japan"], 
ans: "Russia",
 }

 var questionTwo = {
question: "What is 'cynophobia'?", 
options:[ "Fear of Drugs","Fear of Dogs","Fear of Cats" ,"Fear of Cyclones"],
ans: "Fear of Dogs"
 }

 var questionThree ={
question: "What is the rarest M&M color?",
options: ["Brown","Green","Blue","Red"],
ans: "Brown"


 }
var questionFour = {
question: "Which is the only edible food that never goes bad?",
options: ["Twinkies","Honey","Velveta Cheese","Marshmellow"],
ans: "Honey",
}

var questionFive = {
question: "What football team was formerly known as the Frankford Yellow Jackets?",
options:["Philadelphia Eagles","New York Jets", "New England Patriots","Baltimore Ravens"] ,
ans:"Philadelphia Eagles", 
}

var quiz = [questionOne, questionTwo, questionThree, questionFour,questionFive]

quiz[0].questionOne[2]
quiz[0].ans
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