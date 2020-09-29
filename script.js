var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById("question-container")
var questionElement = document.getElementById("question")
var answerButtonsElement = document.getElementById("answer-buttons")

var shuffleQuestions
var currentQuestionIndex

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log("Started.")
    startButton.classList.add("hide") //hides start button
    shuffleQuestions = questions.sort(() => Math.random() - .5) //randomizes question order
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    var timeEl = document.querySelector(".time");
    var mainEl = document.getElementById("main");

    var secondsLeft = 180;


    var myCountdown = setInterval(function(){
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left until the end";

    if(secondsLeft === 0){
        //end this interval
        clearInterval(myCountdown)
    }
    }, 1000) //javascript usually works in milliseconds

    function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

        if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
        }

    }, 1000);
    }
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffleQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState()
{
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffleQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide")
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
    }
   

}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.add("wrong")
}

var questions = [
    {
        question: "What is the answer to this first question?",
        answers: [
            {text: "Correct answer", correct: true},
            {text: "Incorrect answer", correct: false},
            {text: "Incorrect answer", correct: false},
            {text: "Incorrect answer", correct: false}
        ]
    },
    {
        question: "What is the answer to this second question?",
        answers: [
            {text: "Incorrect answer", correct: false},
            {text: "Incorrect answer", correct: false},
            {text: "Incorrect answer", correct: false},
            {text: "Correct answer", correct: true}
        ]
    },
    {
        question: "What is the answer to this third question?",
        answers: [
            {text: "Incorrect answer", correct: false},
            {text: "Correct answer", correct: true},
            {text: "Incorrect answer", correct: false},
            {text: "Incorrect answer", correct: false}
        ]
    },
    {
        question: "What is the answer to this fourth question?",
        answers: [
            {text: "Incorrect answer", correct: false},
            {text: "Correct answer", correct: true},
            {text: "Incorrect answer", correct: false},
            {text: "Incorrect answer", correct: false}
        ]
    }
]