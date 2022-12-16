function valor() {
    var valorA = parseInt(prompt("Digite um valor"));

    if (valorA < 0)
        alert("NEGATIVO");
    else
        if (valorA > 0)
            alert("POSITIVO");
        else
            alert("ZERO")
}