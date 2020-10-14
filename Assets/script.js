//click start quiz trigers quiz function
document.getElementById('startBtn').onclick = quiz
//Variables
var countdownEl = document.querySelector('#countdown')
var title = document.getElementById('title') 
var container = document.getElementById('container')
var contents = document.getElementById('contents')
var start = document.getElementById('startBtn')
var userScore = 0;

//Creates choice buttons
var choiceOne = document.createElement('button')
      choiceOne.setAttribute("class","btn")
      choiceOne.setAttribute("id","btnOne")
      choiceOne.setAttribute("style","margin-top:10px; margin-left:5px;")
var choiceTwo = document.createElement('button')
      choiceTwo.setAttribute("class","btn")
      choiceTwo.setAttribute("id","btnTwo")
      choiceTwo.setAttribute("style","margin-top:10px; margin-left:5px;")
var choiceThree = document.createElement('button')
      choiceThree.setAttribute("class","btn")
      choiceThree.setAttribute("id","btnThree")
      choiceThree.setAttribute("style","margin-top:10px; margin-left:5px;")
var choiceFour = document.createElement('button')
      choiceFour.setAttribute("class","btn")
      choiceFour.setAttribute("id","btnFour")
      choiceFour.setAttribute("style","margin-top:10px; margin-left:5px;")
  
//Questions
var questions =
[
    {
    question: "what is your name?",
    choices: ["Manchester", "Birmingham", "Dan", "Birmingham"],
    answer: "btnThree"
    },
    {
    question: "where do you live?",
    choices: ["Manchester", "sacramento", "Dan", "space"],
    answer: "btnTwo"
    },
    {
      question: "bob?",
      choices: ["yes", "no", "maybe so", "all of the above"],
      answer: "btnThree"
    },
    {
      question: "what is not in the us?",
      choices: ["Manchester", "sacramento", "Dan", "Carrie"],
      answer: "btnOne"
    },
    {
      question: "what is your name?",
      choices: ["Manchester", "Birmingham", "Dan", "Birmingham"],
      answer: "btnThree"
    },
    {
      question: "what is not your name?",
      choices: ["Manchester", "Birmingham", "Dan", "Birmingham"],
      answer: "btnOne"
    },
    {
      question: "bob?",
      choices: ["yes", "no", "maybe so", "all of the above"],
      answer: "btnThree"
    },
    {
    question: "What is the capital of California?",
    choices: ["California", "Sacramento", "Miami", "Florida"],
    answer: "btnTwo"
    }
  ];
  
//WHEN I click the start button a timer starts


function quiz() {
    var countdown = 60
    var countdownInterval = setInterval(function () {
      countdownEl.textContent = "Time: " + countdown 
      countdown--
      if (countdown === 0) {
        countdownEl.textContent = '';
        clearInterval(countdownInterval)
      }
    }, 1000);

    var i = 0 
    //THEN I am presented with a question
  setTimeout(function() {
    
    title.textContent = questions[i].question;
    container.setAttribute("style","text-align:left;")
    contents.textContent = '';
    start.remove();
    container.appendChild(choiceOne);
    choiceOne.textContent = "A) " + questions[i].choices[0];
    container.appendChild(choiceTwo)
    choiceTwo.textContent = "B) " + questions[i].choices[1];
    container.appendChild(choiceThree);
    choiceThree.textContent = "C) " + questions[i].choices[2];
    container.appendChild(choiceFour);
    choiceFour.textContent = "D) " + questions[i].choices[3];
    //get usersChoice
    document.getElementById('btnOne').onclick = whatWasChose
    document.getElementById('btnTwo').onclick = whatWasChose
    document.getElementById('btnThree').onclick = whatWasChose
    document.getElementById('btnFour').onclick = whatWasChose
  }, 1000); 
    function whatWasChose() {
    
        usersChoice =this.id;
        console.log(usersChoice)
        //When I answer correctly
        if (usersChoice === questions[i].answer){
        console.log('correct')
        //add a point to score
        userScore++;
        console.log(userScore)
        //present next question
        i++;
        title.textContent = questions[i].question;
        choiceOne.textContent = "A) " + questions[i].choices[0]; 
        choiceTwo.textContent = "B) " + questions[i].choices[1];
        choiceThree.textContent = "C) " + questions[i].choices[2];
        choiceFour.textContent = "D) " + questions[i].choices[3];
        //WHEN I answer a question incorrectly
        } else {
        console.log('incorrect')
        //minus 10 seconds from timer
        countdown = countdown - 10;
        //present next question
        i++
        title.textContent = questions [i].question;
        choiceOne.textContent = "A) " + questions[i].choices[0]; 
        choiceTwo.textContent = "B) " + questions[i].choices[1];
        choiceThree.textContent = "C) " + questions[i].choices[2];
        choiceFour.textContent = "D) " + questions[i].choices[3]; 
    }
  }
}  


//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and score
