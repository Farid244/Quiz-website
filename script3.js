
var timeTaken = (300 - totalTime); // Calculate time taken in seconds
var timeTakenDisplay = document.getElementById('timeTaken');
timeTakenDisplay.textContent = Math.floor(timeTaken / 60) + " minutes " + (timeTaken % 60) + " seconds";

var answersList = document.getElementById('answersList');

// Retrieve answers from sessionStorage
var answers = [
  sessionStorage.getItem('q1answer'),
  sessionStorage.getItem('q2answer'),
  sessionStorage.getItem('q3answer'),
  sessionStorage.getItem('q4answer'),
  sessionStorage.getItem('q5answer')
  // Add answers for Question 3 to Question 5 here
];

// Display answers
for (var i = 0; i < answers.length; i++) {
  var listItem = document.createElement('li');
  listItem.textContent = "Question " + (i + 1) + ": " + answers[i];
  answersList.appendChild(listItem);
}
