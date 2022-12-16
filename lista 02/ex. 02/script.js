function total() {
    var votobranco = parseFloat(prompt("Digite o número total de Votos Brancos:"));
    var votonulo = parseFloat(prompt("Digite o número total de Votos Nulo:"));
    var votovalido = parseFloat(prompt("Digite o número total de Votos Validos:"));
    var total = votobranco + votonulo + votovalido
    alert("O numero de votos é: " + total + '\n'
        + ("Porcentagem de votos brancos: " + votobranco / total * 100 + "%") + '\n'
        + ("Porcentagem de votos nulo: " + votonulo / total * 100 + "%") + '\n'
        + ("Porcentagem de votos nulo: " + votovalido / total * 100 + "%"));
}