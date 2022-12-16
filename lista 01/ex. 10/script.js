function area() {
    var numero1 = parseFloat(prompt("Digite o valor da diagonal maior (D):"));
    var numero2 = parseFloat(prompt("Digite o valor da diagonal menor (d):"));
    var area = numero1 * numero2 / 2;
    alert("A área do losango é: " + area);
}