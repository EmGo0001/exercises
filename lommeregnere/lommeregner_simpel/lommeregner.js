document.getElementById("beregn").addEventListener("click", lommeregner);

function lommeregner(){
    const input1 = Number(document.getElementById("input1").value);
    const input2 = Number(document.getElementById("input2").value);
    const regneart = document.getElementById("regneart").value;
    let result;
    if(regneart === "+"){
        result = input1 + input2;
    }
    else if(regneart === "-"){
        result = input1 - input2;
    }
    else if(regneart === "*"){
        result = input1 * input2;
    }
    else if( regneart === "/"){
        result = input1 / input2;
    }
    document.getElementById("resultatInput").value = result;
}

