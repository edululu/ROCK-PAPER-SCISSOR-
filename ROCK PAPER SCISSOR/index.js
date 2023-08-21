const text = document.getElementById('main');
const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');
const playerBtn = document.getElementById('playerBtn');
const computerBtn = document.getElementById('computerBtn');
const leftmoves = document.getElementById('leftmoves');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissors');
const restart = document.getElementById('restart');
const final = document.getElementById('final');
const parent = document.getElementById('parent');

let playerChoice, computerChoice;
let playerScore = 0,computerScore = 0;
let move = 10;

function computerMove(){
    let randomNum = Math.ceil(Math.random()*3);
    if(randomNum == 1){
        computerBtn.innerHTML = "Rock";
    }else if(randomNum == 2){
        computerBtn.innerHTML = "Paper";
    }else{
        computerBtn.innerHTML = "Scissor";
    }
    return randomNum;
}

function endGame(x){
    final.style.display = 'flex';
    final.style.color = 'violet';
    parent.style.display = 'none';
    if(x == 1){
        final.innerHTML = "Game Over! You Won <br>"+"Your Score is:- "+playerScore +"<br> And the Computer Score is:- "+computerScore;
    }else if(x == 0){
        final.innerHTML = "Game Over! Equal";
    }else{
        final.innerHTML = "Game Over! Computer Won <br>"+"Computer Score is:- "+computerScore+"<br> And Your Score is:- "+playerScore ;

    }
}

rock.addEventListener('click', function(){
    playerBtn.innerHTML = "Rock";
    playerChoice = 1;
    computerChoice = computerMove();
    if(move == 1){
        evaluate(playerChoice, computerChoice);
        if(playerScore > computerScore){
            endGame(1);
        }else if(playerScore < computerScore){
            endGame(2);
        }else{
            endGame(0);
        }
    }
    else{
        evaluate(playerChoice, computerChoice);
    }
})

paper.addEventListener('click', function(){
    playerBtn.innerHTML = "Paper";
    playerChoice = 2;
    computerChoice = computerMove();
    if(move == 1){
        evaluate(playerChoice, computerChoice);
        if(playerScore > computerScore){
            endGame(1);
        }else if(playerScore < computerScore){
            endGame(2);
        }else{
            endGame(0);
        }
    }
    else{
        evaluate(playerChoice, computerChoice);
    }
})

scissor.addEventListener('click', function(){
    playerBtn.innerHTML = "Scissor";
    playerChoice = 3;
    computerChoice = computerMove();
    if(move == 1){
        evaluate(playerChoice, computerChoice);
        if(playerScore > computerScore){
            endGame(1);
        }else if(playerScore < computerScore){
            endGame(2);
        }else{
            endGame(0);
        }
    }
    else{
        evaluate(playerChoice, computerChoice);
    }
})

function evaluate(playerBtn, computerBtn){
    if(playerBtn == 1 && computerBtn == 3 || playerBtn == 2 && computerBtn == 1 || playerBtn == 3 && computerBtn == 2){
        text.innerHTML = "You Won";
        text.style.color = "green";
        playerScore += 1;
        move -= 1;
        pScore.innerHTML = "Player: "+playerScore;
        leftmoves.innerHTML = "Move left: "+move;
    }else if(playerBtn == computerBtn){
        text.innerHTML = "Same Move";
        text.style.color = "yellow";
        move -= 1
        leftmoves.innerHTML = "Move left: "+move;
    }else{
        text.innerHTML = "You Loosed";
        text.style.color = "red";
        computerScore += 1;
        move -= 1;
        cScore.innerHTML = "Computer: "+computerScore;
        leftmoves.innerHTML = "Moves Left: "+move;
    }
}

restart.addEventListener('click',function(){
    location.reload();
})