function valor() {
    var valorA = parseFloat(prompt("Informe o primeiro valor"));
    var valorB = parseFloat(prompt("Informe o segundo valor"));
    var valorC = parseFloat(prompt("Informe o terceiro valor"));

    if (valorA == valorB)
        alert("Números iguais")
    else
        if ((valorB < (valorA + valorC)) & (valorA < (valorB + valorC)) & (valorC < (valorA + valorB)) )
            alert("Forma-se um triângulo")
        else
            alert("Não é um triângulo")
}