//add vars to reveal the containers within the html doc
var startButton = document.getElementById("start-btn"); // start-button
var questionContainerElement = document.getElementById("quizContainer"); // quiz container button 
var questionElement = document.getElementById("question");
var anwserButtonsElement = document.getElementById("anwser");
var choiceA= document.getElementById("A");
var choiceB= document.getElementById("B");
var choiceC= document.getElementById("C");
var choiceD= document.getElementById("D");
var scoreContainer= document.getElementById("score-container");
var initials = document.getElementById("initials");
var lastScore = document.getElementById("lastScore");



//timer vars 
var timeElement= document.getElementById("timer");
var secondsLeft = 100;


//timer start functiom
var myCountDown = setInterval(function(){
    secondsLeft--;
    timeElement.textContent= secondsLeft + "seconds left until the end";

    if(secondsLeft===0){
        clearInterval(myCountDown)
    }
}, 1000)//milliseceonds 

//questions array
var questions = [

    {

        question : "What does HTML stand for?",

        
        choiceA : "A",

        choiceB : "Wrong",

        choiceC : "Wrong",

        correct : "A"

    },{

        question : "What does CSS stand for?",

        

        choiceA : "Wrong",

        choiceB : "Correct",

        choiceC : "Wrong",

        correct : "B"

    },{

        question : "What does JS stand for?",

        

        choiceA : "Wrong",

        choiceB : "Wrong",

        choiceC : "Correct",

        correct : "C"

    }

];
//var 
var lastQuestion = questions.length -1;
var runningQuestion = 0;


//added event listener so that when the start button is clicked it will start the quiz
startButton.addEventListener("click", startQuiz,)

//function to hide start button, reveal the first question & start the quiz 
function startQuiz (){
    console.log ("test");
    startButton.classList.add("hide");
    questionContainerElement.classList.remove("hide");
    timeElement.classList.remove ("hide");
    renderQuestion();
    
    }
    

 //functinon to show questions & choices    
function renderQuestion (){
   var q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question +"<p>"
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    

} 

anwserButtonsElement.addEventListener("click", checkAnwser)
    console.log ("hello ");



    function checkAnwser (e){
        e.preventDefault();
        console.log (e.target)
        var userAnswer = e.target.getAttribute("id"); //// A, B, C, or D
            if (userAnswer === questions[runningQuestion].correct){
                console.log ("yes");
        
            } else {
                console.log ("no");
                secondsLeft -= 30;
            }
            if (runningQuestion < lastQuestion){
                renderQuestion (runningQuestion++);
            } else {
                clearInterval(myCountDown);
                showScore();

            }
            
    }
function showScore(){
    scoreContainer.classList.remove("hide");
    startButton.classList.remove("hide");
    questionContainerElement.classList.add("hide");
    lastScore.classList.remove("hide");
}

var initialsInput = document.querySelector("#initials");
var scoreInput = document.querySelector("#finalScore");
var saveScore = document.querySelector("#saveScore");
var msgDiv = document.querySelector("#msg");
var userInitials = document.querySelector("#user-initials");
var userScore = document.querySelector("#user-score");


renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  var initials = localStorage.getItem("initials");
  var finalScore= localStorage.getItem("finalScore");

  if (!initials || !finalScore) {
    return;
  }

  userInitials.textContent = initials;
  userScore.textContent = finalScore;
}

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

//create a custom atribute to show if that is correct or not 

//apend to page 




      














// for (var i=0; i <questions.length; i++);{
//     questionForm.display (questions[i].promt);
//     if (response==)
// }




// startButton.addEventListener("click", generateQuiz)


// function generateQuiz (){
//     event.preventDefault();
  

//     }

// }



//varables


//when the user clicks the start button the first question will appear & the timer will start 

    //the timer will start with 60 seconds on the clock and count down

    //the questions will be stored as a object within an  array 

    
        //Questions:
            //1. How do you comment in a Java Script File 
                //a. <!--  
                //b. //
                //c. !!~
                // correct button/anwser=b
            //2. What is the proper way to save a Java Script File?
                //a. script.js  
                //b. script.javasript
                //c. java.script
                // correct button/anwser=a


//if the user clicks the correct button the user will go to the next question


//if the user doesnt select the correct button, the user will loose 10 seconds from the clock and go to the next question

//this function will loop until the quiz is complete or the user runs out of time 

//the user will see their score & add their initails & see the history of high scores 

//the user will be promted to retry the game 


//call funtctions

//event listenrs



// for (var i=0;i<numQuestions;i++){
//     if (userInput[i]==answers[i]){
//     score += 1;
//     }
//     else{
//     score += 0;
//     }
    