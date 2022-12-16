function distributiva() {
    var valorA = parseFloat(prompt("Digite um número:"));
    var valorB = parseFloat(prompt("Digite outro número:"));
    var valorC = parseFloat(prompt("Mais um número+ por favor:"));
    var valorD = parseFloat(prompt("Agora o último:"));

    var AmB = valorA + valorB
    var AmC = valorA + valorC
    var AmD = valorA + valorD
    var BmC = valorB + valorC
    var BmD = valorB + valorD
    var CmD = valorC + valorD

    var AxB = valorA * valorB
    var AxC = valorA * valorC
    var AxD = valorA * valorD
    var BxC = valorB * valorC
    var BxD = valorB * valorD
    var CxD = valorC * valorD

    alert("Os números informados, sendo somados e multiplicados possuem os seguintes resultados:");
    alert("Os numeros somados são: " + '\n'
        + (valorA + "+" + valorB + "=" + AmB) + '\n' + (valorA + "+" + valorC + "=" + AmC) + '\n'
        + (valorA + "+" + valorD + "=" + AmD) + '\n' + (valorB + "+" + valorC + "=" + BmC) + '\n'
        + (valorB + "+" + valorD + "=" + BmD) + '\n' + (valorC + "+" + valorD + "=" + CmD));
    alert("Os números multiplicados são: " + '\n'
        + (valorA + "x" + valorB + "=" + AxB) + '\n' + (valorA + "x" + valorC + "=" + AxC) + '\n'
        + (valorA + "x" + valorD + "=" + AxD) + '\n' + (valorB + "x" + valorC + "=" + BxC) + '\n'
        + (valorB + "x" + valorD + "=" + BxD) + '\n' + (valorC + "x" + valorD + "=" + CxD));
}