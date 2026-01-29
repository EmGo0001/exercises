"use strict";
const rock_btn = document.querySelector(".rock");
const paper_btn = document.querySelector(".paper");
const scissors_btn = document.querySelector(".scissors");
const player1 = document.querySelector("#player1")
const player2 = document.querySelector("#player2")
const win = document.querySelector("#win");
const lose = document.querySelector("#lose");
const draw = document.querySelector("#draw");
let userChoice;
let computerChoice;
document.addEventListener("DOMContentLoaded", init)

function init (){
    rock_btn.addEventListener("click", rockClick)
    paper_btn.addEventListener("click", paperClick)
    scissors_btn.addEventListener("click", scisssorsClick)
}

function rockClick(){
    player1.setAttribute("class", "player")
    player2.setAttribute("class", "player")
    win.classList.add("hidden")
    lose.classList.add("hidden")
    draw.classList.add("hidden")
    userChoice = "rock"
    player1.classList.add("rock");
    computerChooses()
}
function paperClick(){
    player1.setAttribute("class", "player")
    player2.setAttribute("class", "player")
    win.classList.add("hidden")
    lose.classList.add("hidden")
    draw.classList.add("hidden")
    userChoice = "paper"
    player1.classList.add("paper");
    computerChooses()
}

function scisssorsClick(){
    player1.setAttribute("class", "player")
    player2.setAttribute("class", "player")
    win.classList.add("hidden")
    lose.classList.add("hidden")
    draw.classList.add("hidden")
    userChoice = "scissors"
    player1.classList.add("scissors");
    computerChooses()
}

function computerChooses(){
    let randomPick = Math.floor(Math.random()*3)
    if(randomPick === 0){
        computerChoice = "rock"
        player2.classList.add("rock")
    } 
    else if(randomPick === 1){
        computerChoice = "paper"
        player2.classList.add("paper")
    }
    else{
        computerChoice = "scissors"
        player2.classList.add("scissors")
    }
    handShakeStart();
    gameResult();
}

function gameResult(){
    if(userChoice === computerChoice){
        setTimeout(userDraw, 3000)
    }
    else if(userChoice === "rock" && computerChoice === "scissors"){
        setTimeout(userWin, 3000)
    }
    else if(userChoice === "paper" && computerChoice ==="rock"){
        setTimeout(userWin, 3000)
    }
    else if(userChoice === "scissors" && computerChoice === "paper"){
        setTimeout(userWin, 3000)
    }
    else if(computerChoice === "rock" && userChoice === "scissors"){
        setTimeout(userLose, 3000)
    }
    else if(computerChoice === "paper" && userChoice === "rock"){
        setTimeout(userLose, 3000)
    }
    else if(computerChoice === "scissors" && userChoice === "paper"){
        setTimeout(userLose, 3000)

    }
}

function userWin(){
    win.classList.remove("hidden")
}
function userLose(){
    lose.classList.remove("hidden")
}
function userDraw(){
    draw.classList.remove("hidden")
}

function handShakeStart() {
  player1.classList.add("shake");
  player2.classList.add("shake");
  player1.addEventListener("animationend", handShakeStop)
}

function handShakeStop(){
    player1.classList.remove("shake");
    player2.classList.remove("shake");
}