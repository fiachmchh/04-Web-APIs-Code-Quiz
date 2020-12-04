//QUESTIONS TO BE INCLUDED IN QUIZ
var correctAnswer = 0
var incorrectAnswer = 0
var questions = [
    {
        question: 'what color are frogs?',
        answers: [
            { text: 'green', correct: true},
            { text: 'red', wrong: false},
            { text: 'orange', wrong: false},
            { text: 'purple', wrong: false}
        ],
        correct: 'green'
    },
    {
        question: 'Who was the first man on the moon?',
        answers: [
            { text: 'Edwin "Buzz" Aldrin', wrong: false},
            { text: 'Neil Armstrong', correct: true},
            { text: 'Alan B. Shepard Jr.', wrong: false},
            { text: 'George Bush Sr', wrong: false}
        ],
        correct: 'Neil Armstrong'
    },
    {
        question: 'When was the electric guitar invented?',
        answers: [
            { text: '1929', wrong: false},
            { text: '1899', wrong: false},
            { text: '1931', correct: true},
            { text: '1912', wrong: false}
        ],
        correct: '1931'
    },
    {
        question: 'What is the worlds largest country by landmass?',
        answers: [
            { text: 'Canada', wrong: false},
            { text: 'USA', wrong: false},
            { text: 'China', wrong: false},
            { text: 'Russia', correct: true}
        ],
        correct: 'Russia'
    },
    {
        question: 'How many miles on average is the moon from earth?',
        answers: [
            { text: '238,855 miles', correct: true},
            { text: '256,985 miles', wrong: false},
            { text: '100,000 miles', wrong: false},
            { text: '56,775 miles', wrong: false}
        ],
        correct: '238,855 miles'
    }
]

var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')

var shuffledQuestions, currentQuestionIndex

// TIMED QUIZ ON JS THAT STORES HIGHSCORES

//ONCE START BUTTON IS CLICKED...

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

//A TIMER STARTS...

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
});

// AND A QUESTION IS PRESENTED TO THE USER

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

//UPON ANSWERING, ANOTHER QUESTION IS PUT TO THE USER

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
        button.value = answer.text
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
    // console.log(e.target.value)

    // console.log(questions[currentQuestionIndex].correct)
    
    if (e.target.value === questions[currentQuestionIndex].correct){
     correctAnswer++
    //  console.log(correctAnswer)
    }

    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        var h = document.createElement("H1");
        var t = document.createTextNode("Your score is " + correctAnswer + " out of 5!");
        h.appendChild(t);
        document.getElementById('answer-buttons').appendChild(h);
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


document.querySelector(".btn").onclick = function() {
    console.log('you got clicked')
}
// IF PLAYER SELECTS CORRECT ANSWER, SCORE + 1

let score = 0;
document.getElementById("next-btn").onclick = function() {
    var  answers = document.getElementById("answer-buttons").value;
    // console.log('we got clicked!!', answers)
    // console.log('ccorrect answer!!', questions[currentQuestionIndex].correct)
}


//WHEN A QUESTION IS ANSWERED INCORRECTLY THEN TIME IS SUBRACTED FROM THE CLOCK

//WHEN ALL QUESTIONS ANSWERED, SCORE IS ANOUNCED AND TIMER SHOULD STOP

//GAME OVER WHEN ALL QUESTIONS ARE ANSWERED OR WHEN THE TIMER REACHES 0

//AFTER GAME IS OVER, INITIALS CAN BE ENTERED AND SCORE CAN BE SAVED

