function salario() {
    var horaTrabalhada = parseFloat(prompt("Informe quantas horas foram trabalhadas no mês:"));
    var salarioHora = parseFloat(prompt("Informe o valor da sua hora trabalhada:"));

    if (horaTrabalhada <= 160) {
        var salario_total = salarioHora * horaTrabalhada;
        alert("Você não possui horas extras. Seu salário total é: R$ " + salario_total + " reais");
    }
    else
        hr_extra = (horaTrabalhada - 160);
    valor_extra = hr_extra * salarioHora / 2;
    salario_total = salarioHora * horaTrabalhada + valor_extra;
    alert("Você possui " + hr_extra + " horas extras. Seu salário total é: R$ " + salario_total + " reais")
}