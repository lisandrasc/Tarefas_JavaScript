function volume() {
    var raio = parseFloat(prompt("Informe o valor do raio da lata de óleo:"));
    var altura = parseFloat(prompt("Informe a altura da lata de óleo:"));
    var volume = Math.PI*raio**2*altura

    alert("O valor do volume da lata de óleo é: " + volume)
}