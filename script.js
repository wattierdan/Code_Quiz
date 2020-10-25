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
  question: "Inside which HTML element do we put the JavaScript?",
  choices: ["<javascript>", "<script>", "<scripting>", "<js>"],
  answer: "btnTwo"
  },
  {
  question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
  choices: ['<script href="xxx.js">', '<script name="xxx.js">', '<script src="xxx.js">', '<script loc="xxx.js"'],
  answer: "btnThree"
  },
  {
  question: "How do you create a function in JavaScript?",
  choices: ["function = myFunction()", "function myFunction()", "function:myFunction()", "florida myFunction:)"],
  answer: "btnTwo"
  },
  {
  question: "How to write an IF statement in JavaScript?",
  choices: ["if i == 5 then", "if(i == 5)", "if i = 5", "if i = 5 then"],
  answer: "btnTwo"
  },
  {
  question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
  choices: ["if (i != 5)", "if (i <> 5)", "if i =! 5 then", "if i <> 5"],
  answer: "btnOne"
  },
  {
  question: 'How does a WHILE loop start?',
  choices: ['while (i <= 10; i++)', 'while (i <= 10)', 'while i = 1 to 10', 'while var i = 0 ! i--'],
  answer: "btnTwo"
  },
  {
  question: 'How does a FOR loop start?',
  choices: ['for (i <= 5; i++)', 'for i = 1 to 5', 'for (i = 0; i <= 5; i++)', 'for (i = 0; i <= 5)'],
  answer: "btnThree"
  },
  {
  question: 'How can you add a comment in a JavaScript?',
  choices: ['<!--This is a comment-->', '//This is a comment', "'This is a comment", '(This is a comment)'],
  answer: "btnTwo"
  },
  {
  question: 'What is the correct way to write a JavaScript array?',
  choices: ['var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")', 
            'var colors = ["red", "green", "blue"]', 
            'var colors = (1:"red", 2:"green", 3:"blue")', 
            'var colors = "red", "green", "blue"'],
  answer: "btnTwo"
  },
  {
  question: 'How do you round the number 7.25, to the nearest integer?',
  choices: ['rnd(7.25)', 'Math.rnd(7.25)', 'round(7.25)', 'Math.round(7.25)'],
  answer: "btnFour"
  },
  {
  question: "How can you detect the client's browser name?",
  choices: ['navigator.appName', 'client.navName', 'browser.name', 'nav.client.name'],
  answer: "btnOne"
  },
  {
  question: 'Which event occurs when the user clicks on an HTML element?',
  choices: ['onclick', 'onmouseover', 'onmouseclick', 'onchange'],
  answer: "btnOne"
  },
  {
  question: 'How do you declare a JavaScript variable?',
  choices: ['variable carName;', 'v carName;', 'var carName;', ' var = carName'],
  answer: "btnThree"
  },
  {
  question: 'Which operator is used to assign a value to a variable?',
  choices: [':)', '-', '=', '*'],
  answer: "btnThree"
  },
  {
  question: 'What will the following code return: Boolean(10 > 9)',
  choices: ['False', 'Nan', 'True', 'Potato'],
  answer: "btnThree"
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
var veiwHighScores = document.getElementById('highScores')
var exitBtn = document.createElement('button')
    exitBtn.setAttribute("class","exitBtn")
    exitBtn.setAttribute("id","exitBtn")
    exitBtn.textContent = "X"
var clearScoreListBtn = document.createElement('button')
    clearScoreListBtn.setAttribute("id","clearScoreBtn")
    clearScoreListBtn.textContent = "clear scores"


console.log(Date())

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

//get date and time
var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
var month = months[new Date().getMonth()]
var day = new Date().getDate()
var  year = new Date().getFullYear() 
var theTime = new Date().getHours() + ":"  + new Date().getMinutes()

//WHEN score history is clicked a list of users and scores is displayed
document.getElementById('highScores').onclick = highScores
function highScores() {
  container.style.filter = "blur(4px)"
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

  userScoreList.appendChild(clearScoreListBtn)
  clearScoreListBtn.addEventListener('click', function clearScore() {
    userScoreList.remove()
    localStorage.clear();
  })

        
  function exitOverlay() {
    
    location.reload();
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
  userScoreText = theTime + " " +
                  month + " " + day + " " + year + " " + 
                  userIntinput.value + ' ' + userScore + 'PTS'
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
    choiceOne.textContent = questions[i].choices[0];
    lineOne.appendChild(choiceTwo)
    choiceTwo.textContent = questions[i].choices[1];
    lineTwo.appendChild(choiceThree);
    choiceThree.textContent = questions[i].choices[2];
    lineTwo.appendChild(choiceFour);
    choiceFour.textContent = questions[i].choices[3];
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
      if (title.textContent === "What will the following code return: Boolean(10 > 9)") {
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
      choiceOne.textContent = questions[i].choices[0]; 
      choiceTwo.textContent = questions[i].choices[1];
      choiceThree.textContent = questions[i].choices[2];
      choiceFour.textContent = questions[i].choices[3];
      //WHEN I answer a question incorrectly
      } 
      else {
      //minus 10 seconds from timer
      countdown = countdown - 10;
      //present next question
      i++
      title.textContent = questions [i].question;
      choiceOne.textContent = questions[i].choices[0]; 
      choiceTwo.textContent = questions[i].choices[1];
      choiceThree.textContent = questions[i].choices[2];
      choiceFour.textContent = questions[i].choices[3]; 
      }
  } 
})

             

