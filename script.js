var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

dice = Math.floor(Math.random() *6 ) + 1;
console.log(dice)

document.querySelector('#current--' + activePlayer).textContent = dice;
// document.querySelector('#current--' + activePlayer).innerHTML = '<em>' + dice +'</em>';

// var x = document.querySelector('#score--0').textContent;
// console.log(x);

document.querySelector('.dice').style.display = 'none';