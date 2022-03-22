var scoreDeclare = document.getElementById("yourScore");
var getScore = localStorage.getItem("currentScore");
scoreDeclare.textContent = getScore;

document.getElementById("submitName").addEventListener("click", function () {
  var userName = document.getElementById("name").value;
  localStorage.setItem("highScore", JSON.stringify({ userName: getScore }));
});
