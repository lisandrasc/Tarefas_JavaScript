function salario() {
    var salarioMensal = parseFloat(prompt("Informe seu salário mensal:"));
    var porc_reajuste = parseFloat(prompt("Informe o porcentual de reajuste do seu salário (%):"));
    var novo_salario = salarioMensal + (porc_reajuste / 100) * salarioMensal;
    alert("Seu novo salário é: R$" + novo_salario);
}