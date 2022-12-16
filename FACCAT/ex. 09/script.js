function duracao() {
    var horaInicio = parseFloat(prompt("Digite o horário que a partida iniciou:"));
    var horaFim = parseFloat(prompt("Digite o horário que a partida encerrou:"));
    var duracao = horaFim - horaInicio;
    if (duracao > 0)
        alert("A duração da partida é de: " + duracao + " horas");
    else
        var duracao = duracao + 24
    alert("A duração da partida é de: " + duracao + " horas")
}