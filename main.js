let counter = 0;
let score = 0;
const body = document.getElementsByTagName("body")[0];
const card = document.createElement("div");
//score
let scoreTag = document.createElement("h2");
scoreTag.innerHTML = "Your points: " + score;
body.appendChild(scoreTag);

// display   the question and answers
const questionH = document.createElement("h2");
card.appendChild(questionH);
let quest = data[counter].questions;
questionH.innerHTML = quest;

const answerP = document.createElement("div");
answerP.className = "answerDiv";
card.appendChild(answerP);

let answerBtns = "";
let answer = data[counter].answers;
answer.forEach((answer) => {
  answerBtns += `<button id='anwersBtn'>${answer}</button> `;

  answerP.innerHTML = answerBtns;
});

//write a logic to find the correct answer, if the answer is corect add one point
 
  // let nextQues = document.getElementById("anwersBtn").addEventListener("click", function () {

  //   if (answer.includes(data[counter].correctAnswer)) {
  //     score += 5;
  //     answerP.style.color = "green";
  //     nextBtn();
  //     return 'That was the correct answer! Well Done!'
  //   } else {
  //     answerP.style.color = "red";
  //     nextBtn();
  //     return `You should have chosen ${correctAnswer}. `;
      
  //   }
  // });
 

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
nextBtn()
body.appendChild(card);
