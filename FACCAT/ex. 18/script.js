function valor() {
    var valorA = parseFloat(prompt("Informe o primeiro valor"));
    var valorB = parseFloat(prompt("Informe o segundo valor"));
    var valorC = parseFloat(prompt("Informe o terceiro valor"));

    if ((valorA > valorB) & (valorA > valorC) & (valorB > valorC))
        alert("Os valores em ordem crescente são: " + valorC + ", " + valorB + ", "+ valorA);
    else
        if ((valorB > valorA) & (valorB > valorC) & (valorA > valorC))
            alert("Os valores em ordem crescente são: " + valorC + ", " + valorA + ", " + valorB);
        else
            if ((valorB > valorC) & (valorB > valorA) & (valorC > valorA))
                alert("Os valores em ordem crescente são: " + valorA + ", " + valorC + ", " + valorB);
            else
                if ((valorC > valorA) & (valorC > valorB) & (valorA > valorB))
                    alert("Os valores em ordem crescente são: " + valorB + ", " + valorA + ", " + valorC);
                else
                    if ((valorC > valorA) & (valorC > valorB) & (valorB > valorA))
                    alert("Os valores em ordem crescente são: " + valorA + ", " + valorB + ", " + valorC)
}