function total() {
    var quantidade_fruta = parseInt(prompt("Informe o número de maçãs compradas:"));
    if (quantidade_fruta >= 12)
        var total = quantidade_fruta
    else
        var total = quantidade_fruta * 1.30
    alert("O valor total da compra é: R$" + total);
}