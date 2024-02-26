var totalTime = 300; // 5 minutes in seconds
var timerDisplay = document.getElementById('timer');

var timerInterval = setInterval(function() {
  var minutes = Math.floor(totalTime / 60);
  var seconds = totalTime % 60;
  
  timerDisplay.textContent = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  
  if (totalTime <= 0) {
    clearInterval(timerInterval);
    submitQuiz();
  }
  
  totalTime--;
}, 1000);

function submitQuiz() {
  clearInterval(timerInterval);
  window.location.href = 'page3.html';
}
