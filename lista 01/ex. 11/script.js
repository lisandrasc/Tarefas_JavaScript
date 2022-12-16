function area() {
    var numero1 = parseFloat(prompt("Digite o valor da base maior (B):"));
    var numero2 = parseFloat(prompt("Digite o valor da base menor (b):"));
    var altura = parseFloat(prompt("Digite o valor da altura (h):"));
    var area = (numero1 * numero2) * altura / 2;
    alert("A área do trapézio é: " + area);
}