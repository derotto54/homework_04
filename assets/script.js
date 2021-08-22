let qButton = document.getElementById('start')
let setClock = document.getElementById('curTime')
let quizSpace = document.getElementById('quiz')
let answerSpace = document.getElementById('answerGrid')
let highScore = document.getElementById("highScore")
let reset = document.getElementById("reset")
var correctAns = ''
var startTimer = false
let clock = 59
let response =''
const c = console.log
var questionNumber = 1

//questions
let q1 = "What is your favorite colour?"
let q2 = "What is the average air speed of an unladen swallow?"

//responses and answer
const a1 = {a1:'Red', a2:'Yellow', a3:'Green',a4: 'Blue', a5: 'ans2'}
const a2 = {a1:'Well, I dont know that', a2:'Afican?', a3:'European?',a4: 'Well I dont know that... ahhhhh!', a5: 'ans4'}

//grab the local highscore and display it
highScore.innerText = localStorage.getItem("score")

//use the reset button to set local high score to zero
reset.addEventListener('click', resetScore)

function resetScore() {
    localStorage.setItem('score', 0)
    location.reload()
}

//End the quiz when time runs out
function gameOver () {
    alert('Game Over, loser')
    answerSpace.innerHTML = ''
    clock = 59
    quizSpace.innerHTML = '<h2>Quiz</h2><button type="button" id="start" class="btn btn-primary">Start Quiz</button></div>'
    if (localStorage.getItem("score") < questionNumber -1) {
        localStorage.setItem("score",questionNumber -1)
    }
    location.reload()
}

//Listens for the start of the quiz
qButton.addEventListener('click', startQuiz)

//The quiz runs under one function here
function startQuiz() {
    startTimer = true
    //start timer
    if (startTimer) {
        setInterval(myTimer, 1000)
    }
    //timer runs until it hits zero, then game overs
    function myTimer() {
        if (clock <= 0) {
            clearInterval(myTimer)
            gameOver()
        } else {
            setClock.innerHTML = clock--
            } 
        }

//Function for clearing quiz area
    function clearQ(el) {
        document.getElementById(el).innerText = ""
    }

//Adding the question
    function addQuest(q) {
        clearQ('quiz')
        quizSpace.innerHTML = '<h3>'+ q + '</h3>'
    }

//Function for generating answers
    function addAns(a1, a2, a3, a4, a5) {
        correctAns = this.a5
        clearQ('answers')
        var answerStr = '<div class="row m-2"><button type="button" class="btn btn-primary col-5" id="ans1">' + this.a1 + '</button><div class="col-2"></div><button type="button" class="btn btn-primary col-5" id="ans2">' + this.a2 + '</button> </div><div class="row m-2"><button type="button" class="btn btn-primary col-5" id="ans3">' + this.a3 + '</button><div class="col-2"></div><button type="button" class="btn btn-primary col-5" id="ans4">' + this.a4 + '</button></div>'
        answerSpace.innerHTML = answerStr
      
    }

//Function for setting quiz area and listening for responses
    function genQuestion(qn) {
        if (qn == 1) {
            addQuest(q1)
            addAns.apply(a1)
            ans1.addEventListener('click', checkAnswer)
            ans2.addEventListener('click', checkAnswer)
            ans3.addEventListener('click', checkAnswer)
            ans4.addEventListener('click', checkAnswer)
        } else if (qn == 2) {
            addQuest(q2)
            addAns.apply(a2)
            ans1.addEventListener('click', checkAnswer)
            ans2.addEventListener('click', checkAnswer)
            ans3.addEventListener('click', checkAnswer)
            ans4.addEventListener('click', checkAnswer)
        } 
    }

genQuestion(questionNumber)
   
//Function for validating answers
    function checkAnswer(event) {
        response = event.target.id
        console.log(response)
        console.log(correctAns)
        if (response == correctAns) {
                c('correct')
                questionNumber = questionNumber + 1
                c(questionNumber)
                genQuestion(questionNumber)
            } else {
                c('incorrect')
                clock = clock - 5
            }
    }
}