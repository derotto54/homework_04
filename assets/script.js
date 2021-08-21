let qButton = document.getElementById('start')
let setClock = document.getElementById('curTime')
let quizSpace = document.getElementById('quiz')
let answerSpace = document.getElementById('answerGrid')
var correctAns = ''
let clock = 59
let response =''
const c = console.log





let q1 = "What is your favorite colour?"

const a1 = {a1:'Red', a2:'Yellow', a3:'Green',a4: 'Blue', a5: 'ans2'}





qButton.addEventListener('click', startQuiz)

function startQuiz() {
    // console.log('Quiz Started')

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
        
        
        // let ans2 = document.getElementById('.ans2')
        // let ans3 = document.getElementById('.ans3')
        // let ans4 = document.getElementById('.ans4')
        
    }
   
    addQuest(q1)
    addAns.apply(a1)
    ans1.addEventListener('click', checkAnswer)
    ans2.addEventListener('click', checkAnswer)
    ans3.addEventListener('click', checkAnswer)
    ans4.addEventListener('click', checkAnswer)
    


//Function for validating answers

    function checkAnswer(event) {
        response = event.target.id
        console.log(response)
        console.log(correctAns)
        if (response == correctAns) {
                c('correct')
            } else {
                c('incorrect')
                clock = clock - 5
            }
    }



//Wrong answer




//Right answer



//Timer runs out




//Conclude Quiz 




//Enter in initials and save to local storage


}