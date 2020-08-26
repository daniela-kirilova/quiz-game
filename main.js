let counter = 0;
const body = document.getElementsByTagName("body")[0];
const card = document.createElement("div");
let score = 0;
body.appendChild(card);

//question
const questionH = document.createElement("h2");
card.appendChild(questionH);
let quest = data[counter].questions;
let correct = data[counter].correctAnswer;
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
// click on button to show next question
function nextBtn() {
  const next = document
    .getElementById("next")
    .addEventListener("click", function () {
      let correct = data[counter].correctAnswer;

      questionH.innerHTML = data[counter].questions;
      console.log("correct", data[counter]);
      console.log(correct);
      message.innerHTML = "";
      message.innerHTML = "";

      let answerBtns = "";
      let answer = data[counter].answers;
      answer.forEach((answer) => {
        answerBtns += `<button  class='anwersBtn'  onclick="compare(event)">${answer}</button> `;
        answerP.innerHTML = answerBtns;
      });
    });
  data[counter].correctAnswer;
}

let message = document.getElementById("message");
let scoreTag = document.getElementById("score");
scoreTag.innerHTML = "Your points: 0";

// find the correct answer
function compare(el) {
  let targetEl = el.target.innerHTML;
  let correct = data[counter].correctAnswer;
  if (targetEl === correct) {
    el.target.style.color = "green";
    message.innerHTML = "You have answered correct!!";
    scoreTag.innerHTML = "Your points: " + (score += 5);
    // el.target.classList.add("show");
    console.log(score);
    if (data.length - 1 === counter && score < 30) {
      alert("you are stupid");
    }
    if (data.length - 1 === counter && score > 30) {
      alert("you are better stupid");
    }
    if (data.length - 1 === counter && score > 60) {
      alert("you are good");
    }
    counter = counter + 1;
  } else {
    document;
    // .getElementById("next").classList.add("hidden");
    // document.getElementById("next").classList.remove("show");
    el.target.style.color = "red";
    message.innerHTML = "Sorry your answer is wrong, try again! ";
    scoreTag.innerHTML = "Your points: " + (score -= 5);
  }
}
nextBtn();
