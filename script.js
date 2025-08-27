
    function play(userChoice){
      let randomNumber = Math.random() * 3;
      let computerChoice;
      if(randomNumber <= 1){
        computerChoice = 'Paper';
      } else if(randomNumber <= 2){
        computerChoice = 'Stone';
      } else {
        computerChoice = 'Scissors';
      }

      let resultMsg;
      if(userChoice === computerChoice){
        resultMsg = "It's a tie 🤝";
      } else if(
        (userChoice === 'Paper' && computerChoice === 'Stone') ||
        (userChoice === 'Stone' && computerChoice === 'Scissors') ||
        (userChoice === 'Scissors' && computerChoice === 'Paper')
      ){
        resultMsg = "User wins 🎉";
      } else {
        resultMsg = "Computer wins 💻";
      }

      document.querySelector('#result').innerHTML=`You Chose <b>${userChoice}</b> <br>
      Computer chose <b>${computerChoice}</b> <br><br> 
     ${resultMsg}`;

      
      
    }
  