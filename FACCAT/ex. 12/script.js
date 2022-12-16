function salario() {
    var salarioFixo = parseFloat(prompt("Informe seu salário fixo:"));
    var venda = parseFloat(prompt("Informe o valor total de vendas:"));

    if (venda <= 1500) {
        salarioTotal = salarioFixo + venda * 3 / 100;
        alert("Seu salário total com comissão é : R$" + salarioTotal + " reais");
    }
    else
        horaExtra = venda - 1500;
    salarioTotal = (horaExtra * 5 / 100) + venda * 3 / 100 + salarioFixo;
    alert("Você vendeu R$ " + horaExtra + " a mais que a meta. Seu salário total é: R$" + salarioTotal + " reais")
}