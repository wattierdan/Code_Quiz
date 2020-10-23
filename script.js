//Variables
var body = document.querySelector('body')
var countdownEl = document.querySelector('#countdown')
var title = document.getElementById('title') 
var container = document.getElementById('container')
var contents = document.getElementById('contents')
var lineOne = document.querySelector('.lineOne')
var lineTwo = document.querySelector('.lineTwo')
var start = document.getElementById('startBtn')
var userScore = 0;
var userScoreText
var i = 0 
var countdownInterval
var highScoreList = document.getElementsByClassName('high_score_list')
//Creates choice buttons
var choiceOne = document.createElement('button')
      choiceOne.setAttribute("class","answer",)
      choiceOne.setAttribute("id","btnOne")
      choiceOne.setAttribute("style","margin-top:10px; margin-left:5px;")
var choiceTwo = document.createElement('button')
      choiceTwo.setAttribute("class","answer")
      choiceTwo.setAttribute("id","btnTwo")
      choiceTwo.setAttribute("style","margin-top:10px; margin-left:5px;")
var choiceThree = document.createElement('button')
      choiceThree.setAttribute("class","answer")
      choiceThree.setAttribute("id","btnThree")
      choiceThree.setAttribute("style","margin-top:10px; margin-left:5px;")
var choiceFour = document.createElement('button')
      choiceFour.setAttribute("class","answer")
      choiceFour.setAttribute("id","btnFour")
      choiceFour.setAttribute("style","margin-top:10px; margin-left:5px;")
//Creates score submit form
var scoreSubmit = document.createElement('form')
      scoreSubmit.setAttribute("type","submit")
      scoreSubmit.setAttribute ("id","scoreSubmit")
//Creates user intial input box
var userIntinput = document.createElement('input')
      userIntinput.setAttribute("type","text")
      userIntinput.setAttribute("style","width:160px")
      userIntinput.setAttribute("placeholder","Your Name")
      userIntinput.setAttribute("id","userIntinput")     
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
  },
  {
  question: "end of questions"  
  }
];
// creates elements for user score history overlay
var highScoreListBox = document.createElement("div")
    highScoreListBox.setAttribute("class","high_score_list")
var scoreTitle = document.createElement('h2')
    scoreTitle.setAttribute("class","scoreTitle")
    scoreTitle.textContent = "User Score History"
var userScoreList = document.createElement('ul')
    userScoreList.setAttribute('class','userScoreList')
var fadeOut = document.createElement("div")
    fadeOut.setAttribute("Id","fadeOut")
var veiwHighScores = document.getElementById('highScores');
var exitBtn = document.createElement('button');
    exitBtn.setAttribute("class","exitBtn");
    exitBtn.setAttribute("id","exitBtn");
    exitBtn.textContent = "X" 


//save data to local storage
function storeUserAndScore() {
  var str = JSON.stringify(userHighScores)
  localStorage.setItem("userAndScore", str)
}

//get data from local storage
function getHighScores() {
  var str = localStorage.getItem("userAndScore")
  userHighScores = JSON.parse(str)
  if (!userHighScores) {
    userHighScores = []
  }
}

//get date 
var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
var month = months[new Date().getMonth()]
var day = new Date().getDate()
var  year = new Date().getFullYear() 
var theTime = new Date().getHours() + ":"  + new Date().getMinutes()

//WHEN view user score history is clicked display a list users and scores
document.getElementById('highScores').onclick = highScores
function highScores() {
    body.appendChild(highScoreListBox)
    highScoreListBox.appendChild(scoreTitle)
    scoreTitle.appendChild(userScoreList)
    body.appendChild(fadeOut)
    veiwHighScores.remove();
    body.appendChild(exitBtn)
    document.getElementById('exitBtn').onclick = exitOverlay

  //prints list of user scores
  for(var i = userHighScores.length - 1; i >= 0; i--) {
      var listItem = document.createElement("p")
      listItem.style.margin = "5px 5px"
      listItem.textContent = userHighScores[i].toUpperCase()
      userScoreList.appendChild(listItem)
  }
        
  function exitOverlay() {
    highScoreListBox.remove();
    fadeOut.remove();
    exitBtn.remove();
    body.appendChild(veiwHighScores);
  }
}

//Game Over
function gameOver() {
  countdownEl.setAttribute('style','display:none;')
  clearInterval(countdownInterval)
  container.setAttribute("style","textalign:center;")
  contents.textContent = "Your Final Score Is: " + userScore
  choiceOne.remove()
  choiceTwo.remove()
  choiceThree.remove()
  choiceFour.remove()
  container.appendChild(scoreSubmit)
  scoreSubmit.appendChild(userIntinput)
  setTimeout(function() {
    contents.textContent = "enter your name below and press return to save your score"
  }, 2000); 
//WHEN the game is over THEN I can save my initials and score
document.getElementById("scoreSubmit").addEventListener('submit', function saveScore() {
  if (userIntinput.value === '') {
    userIntinput.value = "anonymous"
  }
  userScoreText = month + " " + day + " " + year + " " + userIntinput.value + ' ' + userScore + 'PTS'
  userHighScores.push(userScoreText)
  storeUserAndScore()
  location.reload();
})
}

getHighScores()
storeUserAndScore()

//WHEN I click the start button 
document.getElementById('startBtn').addEventListener('click', function quiz() {
  //a timer starts
  var countdown = 60
    countdownInterval = setInterval(function () {
    countdownEl.setAttribute('style','display:block;')
    countdownEl.textContent = "Time: " + countdown 
    countdown--
    //if countdown reaches zero
    if (countdown <= 0) {
      title.textContent = "You Ran Out Of Time!"
      gameOver();
    }
    }, 1000);
    //Ready, Set ....
    contents.textContent = '';
    start.remove()
    title.textContent = "Ready, Set, ..."
    //THEN I am presented with a question
    setTimeout(function() {
    title.textContent = questions[i].question;
    lineOne.appendChild(choiceOne);
    choiceOne.textContent = "A) " + questions[i].choices[0];
    lineOne.appendChild(choiceTwo)
    choiceTwo.textContent = "D) " + questions[i].choices[1];
    lineTwo.appendChild(choiceThree);
    choiceThree.textContent = "B) " + questions[i].choices[2];
    lineTwo.appendChild(choiceFour);
    choiceFour.textContent = "C) " + questions[i].choices[3];
    //get usersChoice
    document.getElementById('btnOne').onclick = whatWasChose
    document.getElementById('btnTwo').onclick = whatWasChose
    document.getElementById('btnThree').onclick = whatWasChose
    document.getElementById('btnFour').onclick = whatWasChose
  }, 1000); 
  
  //Runs everytime user clicks an answer
  function whatWasChose() {
      usersChoice =this.id;
      //When all questions are answered
      if (title.textContent === "What is the capital of California?") {
        (usersChoice === questions[i].answer) ? userScore++ : '';
        title.textContent = "You Made It!"
        gameOver();
      //When I answer correctly
      } else if (usersChoice === questions[i].answer){
      //add a point to score
      userScore++;
      //present next question
      i++;
      title.textContent = questions[i].question;
      choiceOne.textContent = "A) " + questions[i].choices[0]; 
      choiceTwo.textContent = "D) " + questions[i].choices[1];
      choiceThree.textContent = "B) " + questions[i].choices[2];
      choiceFour.textContent = "C) " + questions[i].choices[3];
      //WHEN I answer a question incorrectly
      } 
      else {
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
})

             

