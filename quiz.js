

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')


let shuffledQuestions, currentQuestionIndex


//OR...startButton.addEventListener('click', startGame (plus start timer function or new event listener))
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

var timeleft = 100;
var downloadTimer = setInterval(function function1(){
    document.getElementById("countdown").innerHTML = timeleft + 
   "&nbsp"+"seconds remaining";

   

   timeleft -= 1;
if(timeleft <= 0){
   clearInterval(downloadTimer);
   document.getElementById("countdown").innerHTML = "Time is up!"
}
}, 1000);

function startGame() {
    //console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

    
   

// function f1(sec) {//define (declare) sec as parameter
//     f2(); //call the function
//     var f = new Date();
//     document.getElementById("countdown").innerHTML = "Your started your quiz at " + f.getHours() + ":" + f.getMinutes();
//     var showtime = document.getElementById("showtime"); //used many times
//     //Here we put (closure) f2
//     function f2() {
//       //f2 knows sec from parent scope
//       if (sec <= 0) {//parseInt(sec) no need. sec is int
//         showtime.innerHTML = 'Time is over'; 
//         //ShowAnswers(); //show on the same page or post to .php
//         return;
//       }
//         sec--;// = parseInt(sec) - 1;
//         showtime.innerHTML = "Your Left Time  is :" + Math.floor(sec / 60) +" Minutes ," + (sec % 60) +" Seconds";
//         setTimeout(f2, 1000);//"f2()" is correct but this way is better
//     /* no need in remaining code
//     }
//     else {
//         if (parseInt(sec) == 0) {
//             min = parseInt(min) - 1;
//             if (parseInt(min) == 0) {
//                 clearTimeout(tim);
//                 location.href = "www.rawlanguages.com";
//             }
//             else {
//                 sec = 60;
//                 document.getElementById("showtime").innerHTML = "Your Left Time  is :" + min + " Minutes ," + sec + " Seconds";
//                 tim = setTimeout("f2()", 1000);
//             }
//         }

//     }
//     */
// }//f2
// }//f1

// // function startTimer() {

// // }

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