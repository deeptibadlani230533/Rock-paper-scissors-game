let score = {
  win: 0,
  loss: 0,
  tie: 0,
};

function play(userChoice) {
  let randomNumber = Math.random() * 3;
  let computerChoice;
  if (randomNumber <= 1) {
    computerChoice = 'Paper';
  } else if (randomNumber <= 2) {
    computerChoice = 'Rock';
  } else {
    computerChoice = 'Scissors';
  }

  let resultMsg;
  if (userChoice === computerChoice) {
    score.tie++;
    resultMsg = "It's a tie 🤝";
  } else if (
    (userChoice === 'Paper' && computerChoice === 'Rock') ||
    (userChoice === 'Rock' && computerChoice === 'Scissors') ||
    (userChoice === 'Scissors' && computerChoice === 'Paper')
  ) {
    score.win++;
    resultMsg = "User wins 🎉";
  } else {
    score.loss++;
    resultMsg = "Computer wins 💻";
  }

  document.querySelector('#result').innerHTML = `You Chose <b>${userChoice}</b> <br>
    Computer chose <b>${computerChoice}</b> <br><br> 
    ${resultMsg}`;

    document.querySelector('#scoreboard').innerHTML=`<b> Scoreboard: </b> <br> Wins: ${score.win} <br>
    Losses: ${score.loss}<br>
    Ties: ${score.tie}`;
}
