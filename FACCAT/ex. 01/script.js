function notas() {
    var nota1 = parseFloat(prompt("Informe a primeira nota:"));
    var nota2 = parseFloat(prompt("Informe a segunda nota:"));
    var nota3 = parseFloat(prompt("Informe a terceira nota:"));
    var mediafinal = (nota1*2 + nota2*3 + nota3*5) / 10;
    alert("A média final do aluno é: "+ mediafinal);
}