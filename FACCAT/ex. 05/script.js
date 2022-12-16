function aprovacao() {
    var nota1 = parseFloat(prompt("Digite a primeira nota:"));
    var nota2 = parseFloat(prompt("Digite a segunda nota:"));
    var mediafinal = (nota1 + nota2) / 2;
    if (mediafinal >= 6)
        alert("A média do aluno é: " + mediafinal + ", portanto, o aluno foi APROVADO")
    else
        alert("A média do aluno é: " + mediafinal + ", portanto, o aluno foi REPROVADO");
}