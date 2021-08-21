let qButton = document.getElementById('start')
let setClock = document.getElementById('curTime')
let quizSpace = document.getElementById('quiz')
let answerSpace = document.getElementById('answerGrid')

let q1 = "What is your favorite colour?"
let clock = 59




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
function addAns(a1, a2, a3, a4) {
    clearQ('answers')
    answerSpace.innerHTML = '<div class="row m-2"><button type="button" class="btn btn-primary col-5">a1</button><div class="col-2"></div><button type="button" class="btn btn-primary col-5">a2</button> </div><div class="row m-2"><button type="button" class="btn btn-primary col-5">a3</button><div class="col-2"></div><button type="button" class="btn btn-primary col-5">a4</button></div>'    
}
addAns('Yes', 'No', 'Maybe', 'I dont know')


//Function for validating answers



//Wrong answer




//Right answer



//Timer runs out




//Conclude Quiz 




//Enter in initials and save to local storage


}