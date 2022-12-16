function estoque() {
    var atualEstoque = parseInt(prompt("Informe a quantidade atual presente em seu estoque"));
    var maxEstoque = parseFloat(prompt("Informe a quantidade máxima presente em seu estoque"));
    var minEstoque = parseFloat(prompt("Informe a quantidade mínima presente em seu estoque"));

    quantia_media = (maxEstoque + minEstoque) / 2;

    if (atualEstoque >= quantia_media)
        alert("Não efetuar compra!");
    else
        alert("Efetuar compra!")
}