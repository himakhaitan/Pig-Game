var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;


document.querySelector('.dice').style.display = 'none';

// Scores set to Zero
document.getElementById('current--0').textContent  = '0';
document.getElementById('score--0').textContent  = '0';
document.getElementById('current--1').textContent  = '0';
document.getElementById('score--1').textContent  = '0';


document.querySelector('.btn--roll').addEventListener('click', function () {
    // Random Number
    var dice = Math.floor(Math.random() *6 ) + 1;
    // Display the results
    var diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    // update the round scores if the number is NOT 1
     
    if (dice !== 1) {
        // Add Score
        roundScore += dice;
        document.querySelector('#current--' + activePlayer).textContent = roundScore;
    } else {
        // Next Player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        console.log(activePlayer)
    }
});



// document.querySelector('#current--' + activePlayer).textContent = dice;
// document.querySelector('#current--' + activePlayer).innerHTML = '<em>' + dice +'</em>';

// var x = document.querySelector('#score--0').textContent;
// console.log(x);