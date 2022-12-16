function quadrado() {
    var valorA = parseFloat(prompt("Informe o primeiro valor:"));
    var valorB = parseFloat(prompt("Informe o segundo valor:"));
    var valorC = parseFloat(prompt("Informe o último valor:"));
    var quadrado = (valorA + valorB + valorC) ** 2;
    alert("O resultado final do quadrado da soma é: " + quadrado);
}