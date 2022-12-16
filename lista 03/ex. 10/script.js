function eleicao() {
    var candidatoA = parseFloat(prompt("Informe quantos votos tem o primeiro candidato: "));
    var candidatoB = parseFloat(prompt("Informe quantos votos tem o segundo candidato: "));
    var candidatoC = parseFloat(prompt("Informe quantos votos tem o terceiro candidato: "));
    var nulo = parseFloat(prompt("Informe a quantidade de votos nulos: "));
    var branco = parseFloat(prompt("Informe a quantidade de votos brancos: "));
    var total = candidatoA + candidatoB + candidatoC + nulo + branco
    alert("O total de eleitores são: " + total + '\n' + "Para saber a porcentagem, aperte ok");
    alert("A porcentagem de votos válidos é: " + (candidatoA + candidatoB + candidatoC) * 100 / total + "%" + '\n'
        + "A porcentagem de votos do primeiro candidato é: " + candidatoA * 100 / total + "%" + '\n'
        + "A porcentagem de votos do segundo candidato é: " + candidatoB * 100 / total + "%" + '\n'
        + "A porcentagem de votos do terceiro candidato é: " + candidatoC * 100 / total + "%" + '\n'
        + "A porcentagem de votos nulos é: " + nulo * 100 / total + "%" + '\n'
        + "A porcentagem de votos em branco é: " + branco * 100 / total + "%");
}