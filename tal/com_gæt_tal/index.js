const highBtn = document.querySelector("#high");
const lowBtn = document.querySelector("#low");
const correctBtn = document.querySelector("#correct");
const startBtn = document.querySelector("#start");
const guess = document.querySelector("#guess");
let guessNumber, min, max, attempts;


document.addEventListener("DOMContentLoaded", init)

// Slår knapperne fra
function init (){
    highBtn.disabled = true;
    lowBtn.disabled = true;
    correctBtn.disabled = true;
    guessNumber = 50;
    min = 0;
    max = 100;
    attempts = 1;
}

startBtn.addEventListener("click", startGame);

// Slår knapper til bortset fra start
function startGame(){
    highBtn.disabled = false;
    lowBtn.disabled = false;
    correctBtn.disabled = false;
    startBtn.disabled = true;
    guess.textContent = `is the number ${guessNumber}?`
}

// Tiljøjer funktion ved tryk på knap high, com gætter 1.5 på forrige gæt
highBtn.addEventListener("click", lowGuess);
function highGuess(){
    min = guessNumber + 1;
    let newGuess = Math.floor((min + max)/2);
    guessNumber = newGuess;
    attempts += 1;
    startGame();
}

// Tiljøjer funktion ved tryk på knap low, com gætter 0.5 på forrige gæt
lowBtn.addEventListener("click", highGuess);
function lowGuess(){
    max = guessNumber - 1;
    let newGuess = Math.floor((min + max)/2);
    guessNumber = newGuess;
    attempts += 1;
    startGame();
}

// Viser det korrekte gæt og fjerne high, low btn og aktiverer start
correctBtn.addEventListener("click", correctGuess);
function correctGuess(){
    guess.textContent = `woaw! the number was ${guessNumber}! i guessed it in ${attempts} attempts!`
    highBtn.disabled = true;
    lowBtn.disabled = true;
    startBtn.disabled = false;
    guessNumber = 50;
    attempts = 1
    min = 0;
    max = 100;
}


