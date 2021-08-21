let qButton = document.getElementById('start')
let setClock = document.getElementById('curTime')
let quizSpace = document.getElementById('quiz')
let q1 = "What is your favorite colour?"
let clock = 6




qButton.addEventListener('click', startQuiz)

function startQuiz() {
    console.log('Quiz Started')
//start timer
    setInterval(myTimer, 1000)
    
    function myTimer() {
    if (clock == -1) {
        clearInterval(clock)
    } else {
        setClock.innerHTML = clock--
    } 
}

//Function for clearing quiz area
function clearQ(el) {
    document.getElementById(el).innerText = ""
}

//clearQ('quiz')

//Adding the question
function addQuest(q) {
    clearQ('quiz')
    quizSpace.innerHTML = '<h3>'+ q + '</h3>'
}

addQuest(q1)



//Function for generating answers



//Function for validating answers



//Wrong answer




//Right answer



//Timer runs out




//Conclude Quiz 




//Enter in initials and save to local storage


}