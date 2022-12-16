function combustivel() {
    var tempo = parseFloat(prompt("Informe o tempo gasto:"));
    var velocidade = parseFloat(prompt("Informe a velocidade média durante a viagem:"));
    var distancia = tempo * velocidade;
    var litros_usados = distancia/12;

    alert("A quantidade de litros usados é: " + litros_usados + " litros")
}