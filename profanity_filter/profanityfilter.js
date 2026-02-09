const curseWords = [  
{    bad: "var",    good: "const"},  
{    bad: "float",    good: "grid"},
{    bad: "marquee",    good: "just don't"},
];


let hasTheButtonBeenClickedFlag = false;
let theText = document.querySelector("p");
const dialog = document.querySelector("dialog");

document.querySelector("button").addEventListener("click", klik);

function klik(){
    if(hasTheButtonBeenClickedFlag === true){
        // console.log("Knappen er allerede blevet klikket på");
        dialog.showModal();
    } else {
        // console.log("Knappen er IKKE blevet klikket på");
        hasTheButtonBeenClickedFlag = true;
        sfw();
    }
}

function sfw(){
    let newText = theText.textContent;
    curseWords.forEach(word => {
        newText = newText.replaceAll(word.bad, word.good);
    });
    theText.textContent = newText;
}