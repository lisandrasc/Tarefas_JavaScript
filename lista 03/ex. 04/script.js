function conversao() {
    var cotacaoReal = parseFloat(prompt("Informe a cotação do real hoje:"));
    var quantiaReal = parseFloat(prompt("Informe a quantidade de reais que você possui:"));
    var conversao = cotacaoReal * quantiaReal;
    alert("O valor da conversão em dólar é: U$" + conversao);
}