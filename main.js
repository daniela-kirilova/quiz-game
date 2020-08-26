let counter = 0;
let score = 0;
const body = document.getElementsByTagName("body")[0];
const card = document.createElement("div");
//score
let scoreTag = document.createElement("h2");
scoreTag.innerHTML = "Your points: " + score;
body.appendChild(scoreTag);

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
  answerBtns += `<button class="answersBtn" onclick= "test(${answer})">${answer}</button>`;
});
answerP.innerHTML = answerBtns;

// console.log("answers: ", answer);

function test(el) {
  el.forEach((item) => {
    console.log(item);
  });
}
// let test =document.querySelectorAll('.answersBtn')
// console.log(test)





//find the value of answers when clicked
// let correct = data[counter].correctAnswer;

// // items.forEach(function (item) {
// //   item.addEventListener("click",function (element) {
// //     console.log(element.innerHTML);
// //   });
// });
// function getValue(event){
// console.log(event.target)
// }

//find the correct answer, and add one point
// if (answer.includes(correct)) {
//   score += 5;
//   correct.style.color = "green";
//   return "That was the correct answer! Well Done!";
//   nextBtn();
// } else {
//   correct.style.color = "red";
//   return `You should have chosen ${correct}. `;
//   nextBtn();
// }

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
nextBtn();
body.appendChild(card);
