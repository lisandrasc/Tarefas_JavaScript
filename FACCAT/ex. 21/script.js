function valor() {
    var valorA = parseFloat(prompt("Informe o primeiro valor"));
    var valorB = parseFloat(prompt("Informe o segundo valor"));

    if (valorA == valorB)
        alert("Números iguais")
    else
        if (valorA > valorB)
            alert("Primeiro valor é maior")
        else
            alert("Segundo valor é maior")
}