function soma() {
    var valorA = parseFloat(prompt("Digite o primeiro valor"));
    var valorB = parseFloat(prompt("Digite o segundo valor"));
    var valorC = parseFloat(prompt("Digite o terceiro valor"));

    if ((valorA > valorB) & (valorC > valorB))
        soma = (valorA + valorC)
    else
        if ((valorB > valorC) & (valorA > valorC))
            soma = (valorA + valorB)
        else
            if ((valorC > valorA) & (valorB > valorA))
                soma = (valorB + valorC)
    alert("A soma dos 2 maiores valores é: " + soma)
}
