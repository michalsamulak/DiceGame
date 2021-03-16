import '../scss/main.scss';


var scores, roundScore, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', () => {

    // 1. Ranom number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = `/public/img/dice-${dice}.png`;



    // 3. Update the round score IF the roller number was NOT a 1

    if (dice !== 1) {
        // Add score 
        roundScore += dice;
        document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
    } else {
        nextPlayer();
    }
});

document.querySelector('.btn-hold').addEventListener('click', () => {
    // Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;


    // Update the UI
    document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];

    // Check if player won the game
    if (scores[activePlayer] >= 10) {
        document.querySelector(`.player-${activePlayer}`).classList.add('player-winner');
        document.querySelector(`.player-${activePlayer}`).classList.remove('active');
        document.querySelector(`#name-${activePlayer}`).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';


    } else {
        // Next player
        nextPlayer();
    }


})

const nextPlayer = () => {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}