function resultado() {
    var timeA = prompt("Informe o primeiro time");
    var golsA = parseInt(prompt("Informe o numero de gols do primeiro time:"));
    var timeB = prompt("Informe o segundo time");
    var golsB = parseInt(prompt("Informe o numero de gols do segundo time:"));

    if (golsA == golsB)
        alert("EMPATE")
    else
        if (golsA > golsB)
        alert("O time vencedor é: " + timeA + ". O placar ficou em " + golsA + " x " + golsB)
        else 
        alert ("O time vencedor é: " + timeB + ". O placar ficou em " + golsB + " x " + golsA)
}