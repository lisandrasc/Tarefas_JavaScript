function valor() {
    var valor1 = parseFloat(prompt("Digite um número:"));
    var valor2 = parseFloat(prompt("Digite outro número:"));
    if (valor1 > valor2)
        alert("O número maior é: " + valor1);
    else
        alert("O número maior é: " + valor2);
}