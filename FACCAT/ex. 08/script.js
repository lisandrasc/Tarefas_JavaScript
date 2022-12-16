function crescente() {
    var valor1 = parseFloat(prompt("Digite um número:"));
    var valor2 = parseFloat(prompt("Digite outro número:"));
    if (valor1 > valor2)
        alert("Os números em ordem crescente são: " + valor2 + ", " + valor1);
    else
        alert("Os números em ordem crescente são: " + valor1 + ", " + valor2);
}