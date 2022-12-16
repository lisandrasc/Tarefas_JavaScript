function votacao() {
    var ano_atual = parseFloat(prompt("Informe o ano atual (ex. 2022):"));
    var ano_nasc = parseFloat(prompt("Informe o ano que você nasceu (ex. 1999):"));
    var resultado = ano_atual - ano_nasc;
    if (resultado >= 16)
        alert("Parabéns, você já pode votar!");
    else
        alert("Você ainda não pode votar!");
}