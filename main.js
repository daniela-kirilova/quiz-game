let counter = 0;
let score = 0;
const body = document.getElementsByTagName("body")[0];
const card = document.createElement("div");
body.appendChild(card);

//questions
const questionH = document.createElement("h2");
card.appendChild(questionH);
let question = data[counter].questions;
let correct = data[counter].correctAnswer;
questionH.innerHTML = question;

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

function nextBtn() {
  document.getElementById("next").addEventListener("click", function () {
    let correct = data[counter].correctAnswer;

    questionH.innerHTML = data[counter].questions;
 
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
   let endMsg= document.createElement("h1")
   endMsg.className= 'endMsg'
   card.appendChild(endMsg)
    if (data.length - 1 === counter && score < 60) {
     endMsg.innerHTML= "You have " + score + " from 100 points! You can do better!"
     document;
  document.getElementById("next").classList.add("hidden");
    }
    if (data.length - 1 === counter  && score > 50) {
      endMsg.innerHTML= "You have " + score + " from 100 points! Well done!"
      document.getElementById("next").classList.add("hidden");
    }
  
    counter = counter + 1;
  } else {   
    el.target.style.color = "red";
    message.innerHTML = "Sorry your answer is wrong, try again! ";
    scoreTag.innerHTML = "Your points: " + (score -= 5);
  }
}
nextBtn();
