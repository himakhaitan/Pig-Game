var scores, roundScore, activePlayer, gamePlaying;

init();

document.querySelector(".btn--roll").addEventListener("click", function () {

  if(gamePlaying) {
// Random Number
var dice = Math.floor(Math.random() * 6) + 1;
// Display the results
var diceDOM = document.querySelector(".dice");
diceDOM.style.display = "block";
diceDOM.src = "dice-" + dice + ".png";
// update the round scores if the number is NOT 1

if (dice !== 1) {
  // Add Score
  roundScore += dice;
  document.querySelector(
    "#current--" + activePlayer
  ).textContent = roundScore;
} else {
  // Next Player
  nextPlayer();
}
  }
  
});

document.querySelector(".btn--hold").addEventListener("click", function () {

  if (gamePlaying) {
     // add current score to global score
  scores[activePlayer] += roundScore;
  // update the UI
  document.querySelector("#score--" + activePlayer).textContent =
    scores[activePlayer];

  // check if the user won the game
  if (scores[activePlayer] >= 100) {
    gamePlaying = false;
    document.querySelector("#name--" + activePlayer).textContent = "Winner!";
    document.querySelector(".dice").style.display = "none";
    document
      .querySelector(".player--" + activePlayer)
      .classList.add("player--winner");
    document
      .querySelector(".player--" + activePlayer)
      .classList.remove("player--active");
  } else {
    // Next Player
    nextPlayer();
  }
  }
 
});

document.querySelector(".btn--new").addEventListener("click", init);

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.querySelector(".dice").style.display = "none";

  // Scores set to Zero
  document.getElementById("current--0").textContent = "0";
  document.getElementById("score--0").textContent = "0";
  document.getElementById("current--1").textContent = "0";
  document.getElementById("score--1").textContent = "0";

  document.querySelector("#name--0").textContent = "Player 1";
  document.querySelector("#name--1").textContent = "Player 2";

  document.querySelector(".player--0").classList.remove("player--winner");
  document.querySelector(".player--1").classList.remove("player--winner");
  document.querySelector(".player--0").classList.remove("player--active");
  document.querySelector(".player--1").classList.remove("player--active");
  document.querySelector(".player--0").classList.add("player--active");
}

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  document.getElementById("current--0").textContent = "0";
  document.getElementById("current--1").textContent = "0";

  // document.querySelector('.player--0').classList.remove('player--active');
  // document.querySelector('.player--1').classList.add('player--active');

  document.querySelector(".player--0").classList.toggle("player--active");
  document.querySelector(".player--1").classList.toggle("player--active");

  document.querySelector(".dice").style.display = "none";
}

// document.querySelector('#current--' + activePlayer).textContent = dice;
// document.querySelector('#current--' + activePlayer).innerHTML = '<em>' + dice +'</em>';

// var x = document.querySelector('#score--0').textContent;
// console.log(x);
