

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')


let shuffledQuestions, currentQuestionIndex


//OR...startButton.addEventListener('click', startGame (plus start timer function or new event listener))
startButton.addEventListener('click', startGame)

function startGame() {
    //console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

// function startTimer() {

// }

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
       (answerButtonsElement.firstChild)
    }
}

function selectAnswer() {

}

const questions = [
    {
        question: 'what color are frogs?',
        answers: [
            { text: 'green', correct: true},
            { text: 'red', correct: false}
        ]
    }
]






// TIMED QUIZ ON JS THAT STORES HIGHSCORES

//ONCE START BUTTON IS CLICKED...



//A TIMER STARTS...

// AND A QUESTION IS PRESENTED TO THE USER

//UPON ANSWERING, ANOTHER QUESTION IS PUT TO THE USER

//WHEN A QUESTION IS ANSWERED INCORRECTLY THEN TIME IS SUBRACTED FROM THE CLOCK

//GAME OVER WHEN ALL QUESTIONS ARE ANSWERED OR WHEN THE TIMER REACHES 0

//AFTER GAME IS OVER, INITIALS CAN BE ENTERED AND SCORE CAN BE SAVED



// document.getElementById("startQuiz").addEventListener("click", function(){
//     var timeleft = 100;
//     var score = 0;
//     var questions = [
//         {
//             prompt: "what color are frogs?\n(a) Green\n\(b) Purple\n(c) Orange",
//             answer: "a"
//         },
//         {
//             prompt: "what color is grass?\n(a) purple\n\(b) orange\n(c) green",
//             answer: "c"
//         },
//         {
//             prompt: "where is the cavehill?\n(a) Ballymena\n\(b) Belfast\n(c) Dublin",
//             answer: "b"
//         }
//     ];

//     var downloadTimer = setInterval(function function1(){
//         document.getElementById("countdown").innerHTML = timeleft + 
//        "&nbsp"+"seconds remaining";

       

//        timeleft -= 1;
//     if(timeleft <= 0){
//        clearInterval(downloadTimer);
//        document.getElementById("countdown").innerHTML = "Time is up!"
//     }
//     }, 1000);
   
      

//     for(var i=0; i < questions.length; i++){
//         var response = window.prompt(questions[i].prompt);
//         if(response == questions[i].answer){
//             score++;
//             alert("Correct");
//         }
//         else {
//             alert("Wrong")
//         }
//     }
    
// });

//    console.log(countdown); 

// alert("you got" + score + "/" + questions.length);