const question1 = document.getElementById("question-1");
const question2 = document.getElementById("question-2");
const question3 = document.getElementById("question-3");
const question4 = document.getElementById("question-4");
const question5 = document.getElementById("question-5");
const question6 = document.getElementById("question-6");


const answer1 = document.getElementById("answer-1");
const answer2 = document.getElementById("answer-2");
const answer3 = document.getElementById("answer-3");
const answer4 = document.getElementById("answer-4");
const answer5 = document.getElementById("answer-5");
const answer6 = document.getElementById("answer-6");

question1.addEventListener('click', () => {
    if(answer1.style.display === "none"){
        answer1.style.display = "block";
    }else{
        answer1.style.display = "none";
    }
});
question2.addEventListener('click', () => {
    if(answer2.style.display === "none"){
        answer2.style.display = "block";
    }else{
        answer2.style.display = "none";
    }
});
question3.addEventListener('click', () => {
    if(answer3.style.display === "none"){
        answer3.style.display = "block";
    }else{
        answer3.style.display = "none";
    }
});
question4.addEventListener('click', () => {
    if(answer4.style.display === "none"){
        answer4.style.display = "block";
    }else{
        answer4.style.display = "none";
    }
});
question5.addEventListener('click', () => {
    if(answer5.style.display === "none"){
        answer5.style.display = "block";
    }else{
        answer5.style.display = "none";
    }
});
question6.addEventListener('click', () => {
    if(answer6.style.display === "none"){
        answer6.style.display = "block";
    }else{
        answer6.style.display = "none";
    }
});