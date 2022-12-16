function saldo() {
    var numConta = parseInt(prompt("Informe o número da sua conta:"));
    var saldo = parseFloat(prompt("Informe seu saldo"));
    var debito = parseFloat(prompt("Informe o débito da sua conta:"));
    var credito = parseFloat(prompt("Informe o crédito pendente em sua conta:"));

    saldoAtual = saldo - debito + credito;

    if (saldoAtual >= 0)
        alert("Saldo positivo. Seu saldo é: R$ " + saldoAtual);
    else
        alert("Saldo negativo. Seu saldo é: R$ " + saldoAtual)
}