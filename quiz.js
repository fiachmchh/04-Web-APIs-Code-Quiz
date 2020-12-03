

var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')

var shuffledQuestions, currentQuestionIndex


//OR...startButton.addEventListener('click', startGame (plus start timer function or new event listener))
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

document.getElementById("start-btn").addEventListener("click", function(){
    var timeleft = 100;

    var downloadTimer = setInterval(function startTimer(){
        document.getElementById("countdown").innerHTML = timeleft + 
       "&nbsp"+"seconds remaining";

       timeleft -= 1;
    if(timeleft <= 0){
       clearInterval(downloadTimer);
       document.getElementById("countdown").innerHTML = "Time is up!"
    }
    }, 1000);
    
    console.log(countdown);

});

function startGame() {
    //console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

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

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'what color are frogs?',
        answers: [
            { text: 'green', correct: true},
            { text: 'red', correct: false},
            { text: 'orange', correct: false},
            { text: 'purple', correct: false}
        ]
    },
    {
        question: 'Who was the first man on the moon?',
        answers: [
            { text: 'Edwin "Buzz" Aldrin', correct: false},
            { text: 'Neil Armstrong', correct: true},
            { text: 'Alan B. Shepard Jr.', correct: false},
            { text: 'George Bush Sr', correct: false}
        ]
    },
    {
        question: 'When was the electric guitar invented?',
        answers: [
            { text: '1929', correct: false},
            { text: '1899', correct: false},
            { text: '1931', correct: true},
            { text: '1912', correct: false}
        ]
    },
    {
        question: 'What is the worlds largest country by landmass?',
        answers: [
            { text: 'Canada', correct: false},
            { text: 'USA', correct: false},
            { text: 'China', correct: false},
            { text: 'Russia', correct: true}
        ]
    },
    {
        question: 'what color are frogs?',
        answers: [
            { text: 'green', correct: true},
            { text: 'red', correct: false},
            { text: 'red', correct: false},
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