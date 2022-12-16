function prestacao() {
    var valor = parseFloat(prompt("Informe o valor da prestação:"));
    var taxa = parseFloat(prompt("Informe a taxa:"));
    var tempo = parseFloat(prompt("Informe o tempo:"));
    var prestacao = valor + (valor * taxa / 100) * tempo

    alert("O valor da sua prestação é: R$ "+ prestacao)
}