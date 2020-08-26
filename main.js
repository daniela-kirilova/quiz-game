let counter = 0;
const body = document.getElementsByTagName("body")[0];
const card = document.createElement("div");

//question
const questionH = document.createElement("h2");
card.appendChild(questionH);
let quest = data[counter].questions;
questionH.innerHTML = quest;

// answers
const answerP = document.createElement("div");
answerP.className = "answerDiv";
card.appendChild(answerP);

let answerBtns = "";
let answer = data[counter].answers;
answer.forEach((answer) => {
  answerBtns += `<button class="answersBtn" onclick="compare(event)">${answer}</button>`;
  answerP.innerHTML = answerBtns;
});

let correct = data[counter].correctAnswer;
let score = 0;
let message = document.getElementById("message");
let scoreTag = document.getElementById("score");
scoreTag.innerHTML = "Your points: 0";
function compare(el) {
  let targetEl = el.target.innerHTML;
  if (targetEl === correct) {
    el.target.style.color = "green";
    message.innerHTML = "You have answered correct!!";
    scoreTag.innerHTML = "Your points: " + (score += 5);
    nextBtn();
  } else {
    el.target.style.color = "red";
    message.innerHTML = "You have answered wrong. The correct answer is:  " + correct
  }
}

// click on button to show next question
function nextBtn() {
  const next = document
    .getElementById("next")
    .addEventListener("click", function () {
      //next.removeAttribute("hidden");

      counter = counter + 1;

      questionH.innerHTML = data[counter].questions;

      let answerBtns = "";
      let answer = data[counter].answers;
      answer.forEach((answer) => {
        answerBtns += `<button id='anwersBtn'>${answer}</button> `;
        answerP.innerHTML = answerBtns;
      });
    });
}

body.appendChild(card);
