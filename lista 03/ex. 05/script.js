function conversao() {
    var cotacaoDolar = parseFloat(prompt("Informe a cotação do dólar hoje:"));
    var quantiaDolar = parseFloat(prompt("Informe a quantidade de dólares que você possui:"));
    var conversao = cotacaoDolar * quantiaDolar;
    alert("O valor da conversão em reais é: R$" + conversao);
}