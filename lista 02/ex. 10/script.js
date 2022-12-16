function troca() {
    var valorA = parseFloat(prompt("Informe o primeiro número para guardar no bloco A:"));
    var valorB = parseFloat(prompt("Informe o primeiro número para guardar no bloco B:"));
    var valorC = valorA;
    var valorA = valorB;
    var valorB = valorC;

    alert("O número do bloco A é: " + valorA + " e o número do bloco B é: " + valorB)
}