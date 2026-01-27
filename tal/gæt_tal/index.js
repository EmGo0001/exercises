let randomNumber = Math.floor(Math.random() *100)+1;
let attempts = 0;
const maxAttempts = 10;

document.getElementById("submitBtn").addEventListener("click", function(){
    const userGuess = Number(document.getElementById("userGuess").value);
    const messageDiv = document.getElementById("message");

    attempts++;

    if(attempts > maxAttempts) {
        messageDiv.textContent = `Sorry, you have used all your attempts. The number was ${randomNumber}.`;
        messageDiv.style.color = "red";
        return;
    }

    if (userGuess === randomNumber) {
        messageDiv.textContent = `Congratulations! You guessed the right number: ${randomNumber} in ${attempts} attempts!`;
        messageDiv.style.color = "green";
    } else if (userGuess < randomNumber) {
        messageDiv.textContent = `You have guessed too low! You have ${
            maxAttempts - attempts
        } attempts left.`;
        messageDiv.style.color = "red";
    } else {
        messageDiv.textContent = `You have guessed too high! You have ${
            maxAttempts - attempts
        } attempts left.`;
        messageDiv.style.color = "red";
    }
});

const input = document.getElementById("userGuess");
const button = document.getElementById("submitBtn");

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        button.click();
    }
});