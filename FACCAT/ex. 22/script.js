function valor() {
    var combustivel = parseInt(prompt("Digite: 1 - Alcool ou 2 - Gasolina"));
    var litro = parseFloat(prompt("Informe a quantidade de litros: "));
    var total = 0

    switch (combustivel) {
        case "A":
            if (litro <= 20) {
                total = litro * (2.9 * 0.97)
                alert("O total é: R$" + total)
            } else {
                total = litro * (2.9 * 0.95)
                alert("O total é: R$" + total)
            }
            
        case "G":
            if (litro <= 20) {
                total = litro * (3.3 * 0.96)
                alert("O total é: R$" + total)
            } else {
                total = litro * (3.3 * 0.94)
                alert("O total é: R$" + total)
            }
    }
}