const list = document.querySelector("ul");
const columnArray = [];

// const li = document.createElement("li");
// li.style.setProperty("--height", "10");
// list.appendChild(li);


setInterval(generateColums, 1000);

function generateColums(){
    columnArray.push(Math.round(Math.random()*100));
    list.innerHTML = "";

columnArray.forEach((height) => {
    const li = document.createElement("li");
    li.style.setProperty("--height", height);
    list.appendChild(li);
});
if(columnArray.length >= 21){
    list.firstChild.remove();
    columnArray.shift();
}
}









