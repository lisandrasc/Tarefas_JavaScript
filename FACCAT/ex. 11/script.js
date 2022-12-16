function peso() {
    var nome = (prompt("Escreva seu nome:"));
    var sexo = (prompt("Escreva seu sexo (M, para masculino ou F, para feminino):"));
    var altura = parseFloat(prompt("Escreva sua altura: (1.70)"));

    if (sexo = "M")
        pesoIdeal = (72.2 * altura) - 58;
    else
        (sexo = "F")
    pesoIdeal = (62.1 * altura) - 44.7;
    alert(nome + ", o seu peso ideal é: " + pesoIdeal)
}