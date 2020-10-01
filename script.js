//HTML variables
var startButton = document.getElementById("start-btn");
var questionContainerElement = document.getElementById("quizContainer");
var questionElement = document.getElementById("question");
var anwserButtonsElement = document.getElementById("anwser");
var choiceA= document.getElementById("A");
var choiceB= document.getElementById("B");
var choiceC= document.getElementById("C");
var choiceD= document.getElementById("D");
var scoreContainer= document.getElementById("score-container");
var initials = document.getElementById("initials");
var lastScore = document.getElementById("lastScore");
//


//timer variables 
var timeElement= document.getElementById("timer");
var secondsLeft = 100;
//

//Timer count down function
var myCountDown = setInterval(function(){
    secondsLeft--;
    timeElement.textContent= secondsLeft + "seconds left until the end";

    if(secondsLeft===0){
        clearInterval(myCountDown)
    }
}, 1000)//milliseceonds 
//

//Questions,answers, and correct choice array
var questions = [

    {

        question : "What does the HTML DOM method getElementById() do?",

        
        choiceA : "Returns the element that has the ID attribute with the specified value.",

        choiceB : "Returns the first element that matches a specified CSS selector(s) in the document.",

        choiceC : "Returns a collection of all elements in the document with the specified class name.",

        correct : "A"

    },{

        question : "What does the HTML DOM method getElementsByClassName() do?",

        
        choiceA : "Returns the first element that matches a specified CSS selector(s) in the document.",

        choiceB : "Returns a collection of all elements in the document with the specified class name.",

        choiceC : "Returns the element that has the ID attribute with the specified value.",

        correct : "B"

    },{

        question : "What does HTML DOM method querySelector() do?",

        

        choiceA : "Returns a collection of all elements in the document with the specified class name.",

        choiceB : "Returns the element that has the ID attribute with the specified value.",

        choiceC : "Returns the first element that matches a specified CSS selector(s) in the document.",

        correct : "C"

    }

];
//

//Variables to cycle through question prompt and answer buttons 
var lastQuestion = questions.length -1;
var runningQuestion = 0;
//

//Gives start button a click function
startButton.addEventListener("click", startQuiz,)
//

//This function hides the start button, brings up the first question/answers, and starts the timer.
function startQuiz (){
    startButton.classList.add("hide"); //hides start button
    questionContainerElement.classList.remove("hide"); //reveals question container
    timeElement.classList.remove ("hide"); //starts timer countdown
    renderQuestion();
    }
//   

 //Shows question and answer buttons in question container 
function renderQuestion (){
   var q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question +"<p>"
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
} 
//

//Gives answer buttons click function
anwserButtonsElement.addEventListener("click", checkAnwser)
    //console.log ("hello "); this was to test the answer buttons


//Checks to see if the answer clicked is correct, deducts 30 seconds if a wrong answer is clicked, and cycles to the next question. Once the last question is answered the timer is stopped.
    function checkAnwser (e){
        e.preventDefault();
        console.log (e.target)
        var userAnswer = e.target.getAttribute("id"); ////Checks to see if A, B, or C is correct
            if (userAnswer === questions[runningQuestion].correct){
                console.log ("yes");
            } else {
                secondsLeft -= 30; //subtracts 30 seconds if the user clicks the wrong answer
            }
            if (runningQuestion < lastQuestion){
                renderQuestion (runningQuestion++); //prompts next question until there is none left
            } else {
                console.log ("finish")
                clearInterval(myCountDown); //Stops timer
                showScore();
            }        
    }
//

//hides question container, reveals high score/save container, and lists the last high score.
function showScore(){
    scoreContainer.classList.remove("hide");
    //startButton.classList.remove("hide");
    questionContainerElement.classList.add("hide");
    scoreContainer.classList.remove("hide");
}
//

//HTML variables used to store and retrieve score
var initialsInput = document.querySelector("#initials");
var scoreInput = document.querySelector("#finalScore");
var saveScore = document.querySelector("#saveScore");
var msgDiv = document.querySelector("#msg");
var userInitials = document.querySelector("#user-initials");
var userScore = document.querySelector("#user-score");
//

renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

//Retrieves and displays last high score
function renderLastRegistered() {
  var initials = localStorage.getItem("initials");
  var finalScore= localStorage.getItem("finalScore");


  if (!initials || !finalScore) {
    return;
  }

  userInitials.textContent = initials;
  userScore.textContent = finalScore;
}
//

//Saves high score and intials entered by user
saveScore.addEventListener("click", function(event) {
  event.preventDefault();

  var initials = document.querySelector("#initials").value;
  var finalScore = document.querySelector("#finalScore").value;

  if (initials === "") {
    displayMessage("error", "Initials cannot be blank");
  } else if (finalScore === "") {
    displayMessage("error", "finalScore cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");

    localStorage.setItem("initials", initials);
    localStorage.setItem("finalScore", finalScore);
    renderLastRegistered();
  }
});
//