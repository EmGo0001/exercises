const bc = [
{ name: "Hvidevarer", link: "/hvidevarer" },
{ name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
{ name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];
const generateBtn = document.querySelector("#generate_btn");
const list = document.querySelector("#breadcrumbs");
let counter = 0;

function generateBreadcrumbs(){
    bc.forEach(element => {
        counter++;
        if(counter < 3){
            const li = document.createElement("li");
            list.appendChild(li);
            const a = document.createElement("a");
            a.textContent = element.name;
            a.href = element.link;
            li.appendChild(a);
        }
        else{
            const li = document.createElement("li");
            list.appendChild(li);
            const p = document.createElement("p");
            p.textContent = element.name;
            li.appendChild(p);

        }
    });
}

generateBtn.addEventListener("click", generateBreadcrumbs);