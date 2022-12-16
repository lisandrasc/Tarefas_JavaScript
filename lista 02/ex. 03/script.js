function salario() {
    var salario = parseFloat(prompt("Informe seu salario mensal atual"));
    var reajuste = parseInt(prompt("Informe o percentual de reajuste salarial:"));
    var desconto = (reajuste*salario)/100;
    var novosalario = salario + desconto;
    alert("O novo salário é de: R$"+ novosalario +" com "+ reajuste+ "% de reajuste");
}