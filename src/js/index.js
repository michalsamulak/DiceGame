import '../scss/main.scss';


var scores, roundScore, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 1;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '1';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '1';

document.querySelector('.btn-roll').addEventListener('click', () => {
   
    // 1. Ranom number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = `/public/img/dice-${dice}.png`;



    // 3. Update the round score IF the roller number was NOT a 1

})