"use strict"

const nextBtn = document.querySelector("#next");

let progress = 0;
const duration = 5000;
const setpTime = 50;

const interval = setInterval(() => {
    progress += 1;

    nextBtn.style.background = `linear-gradient(
    to right,
    white ${progress}%,
    #c2c3ce ${progress}%
)`;

if (progress >= 100){
    clearInterval(interval);
    window.location.href = "next_episode.html"
}
}, setpTime);

document.addEventListener("mousemove", fillButton);

function fillButton(){
    clearInterval(interval);
    nextBtn.style.background = "white";
}

// Knapperne skal vises på skærmen
// Next episode knap skal fyldes ud


