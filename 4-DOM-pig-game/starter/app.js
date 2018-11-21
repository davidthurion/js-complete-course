/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game


Exemple
document.querySelector("#current-" + activePlayer).textContent = dice;
document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>";
*/

let scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

// Set all score to 0 and hide dice image at the begining
document.querySelector(".dice").style.display = "none";
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

// Roll the dice event
document.querySelector(".btn-roll").addEventListener("click", function() {
  // random number
  let dice = Math.floor(Math.random() * 6) + 1;

  // display result
  const diceImage = document.querySelector(".dice");
  diceImage.src = "dice-" + dice + ".png";
  diceImage.style.display = "block";

  // update round score if the rolled was not 1
  if (dice !== 1) {
    roundScore += dice;
  } else {
    roundScore = 0;
  }
  document.querySelector("#current-" + activePlayer).textContent = roundScore;
});
