function volume() {
    var comprimento = parseFloat(prompt("Informe o comprimento da caixa:"));
    var largura = parseFloat(prompt("Informe a largura da caixa:"));
    var altura = parseFloat(prompt("Informe a altura da caixa:"));
    var volume = comprimento * largura * altura;
    alert("O volume da caixa retangular é: " + volume + "m³ (metros cúbicos)");
}