//variables
var activePlayer, totalScore, scores, gamePlaying;

function init(){    
    activePlayer = 0;
    totalScore = 0;
    scores = [0,0];
    gamePlaying = true;
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelector('#player-0').textContent = 'Player 1';
    document.querySelector('#player-1').textContent = 'Player 2';
    document.querySelector('.dice').style.display  = 'none';
    document.querySelector('.player-0').classList.add('active');
    document.querySelector('.player-1').classList.remove('active')
}

init();

    function nextPlayer(){
    
    totalScore = 0;
    activePlayer === 0? activePlayer = 1 : activePlayer = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelector('.player-0').classList.toggle('active');
    document.querySelector('.player-1').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}

//START BUTTON
document.querySelector('#restart-button').addEventListener('click', init)


// document.getElementById('score-0').textContent = 0;
// document.getElementById('score-1').textContent = 0;
// document.getElementById('current-0').textContent = 0;
// document.getElementById('current-1').textContent = 0;

// document.querySelector('.dice').style.display  = 'none';

//ROLL BUTTON
document.querySelector('#roll-button').addEventListener('click', function(){
    //showing dice
    if (gamePlaying){
        var dice = Math.floor(Math.random()*6)+1;
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-'+ dice + '.png';
        
        //current score display
        
        console.log(scores[activePlayer],'current-'+activePlayer);
        
        if(dice!==1){
            totalScore = totalScore+dice;
            document.querySelector('#current-'+activePlayer).textContent = dice;
        }   
            
        else{
            nextPlayer();
        }
    }
})


//HOLD BUTTON
document.querySelector('#hold-button').addEventListener('click', function(){
    if(gamePlaying){
        scores[activePlayer]+=totalScore;
   
    document.getElementById('score-'+activePlayer).textContent =scores[activePlayer];
    if(scores[activePlayer]>=20){
        document.querySelector('#player-'+activePlayer).textContent = 'WINNER';
        document.querySelector('.dice').style.display = 'none';
        gamePlaying=false;
    }
    else{
        nextPlayer();   
    }
}
})
