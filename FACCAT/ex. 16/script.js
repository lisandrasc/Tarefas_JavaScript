function valor() {
    var valorA = parseFloat(prompt("Digite o primeiro valor"));
    var valorB = parseFloat(prompt("Digite o segundo valor"));
    var valorC = parseFloat(prompt("Digite o terceiro valor"));

    if ((valorA > valorB) & (valorA > valorC))
        alert("Maior valor é: " + valorA);
    else
        if ((valorB > valorA) & (valorB > valorC)) //ERRADO
            alert("Maior valor é: " + valorB);
        else
            if ((valorC > valorA) & (valorC > valorB))
                alert("Maior valor é: " + valorC)
}