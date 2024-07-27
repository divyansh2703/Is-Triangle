const quizForm = document.querySelector('.quiz-form');
const submitAnswerBtn = document.querySelector('#submit-answer-btn');
const outputEl = document.querySelector('#output');

const correctAnswer = ["90°", "Right angled"];

function calculateScore(){
    let score = 0;
    let index = 0;
    const fromResult = new FormData(quizForm);
    for(let value of fromResult.values()){
        if(value === correctAnswer[index]){
            score = score + 1;
        }
        index = index + 1;
    }
    // console.log(score);
    outputEl.innerText = "Your score is " + score;
}

submitAnswerBtn.addEventListener('click',calculateScore);