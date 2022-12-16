function valor() {
var idadeH1 = parseInt(prompt("Informe a idade do 1° homem: "));
var idadeH2 = parseInt(prompt("Informe a idade do 2° homem: "));
var idadeM1 = parseInt(prompt("Informe a idade do 1ª mulher: "));
var idadeM2 = parseInt(prompt("Informe a idade do 2ª mulher: "));

if  (idadeH1 > idadeH2) {
    var homemV = idadeH1;
    var homemN = idadeH2;
}
else {
    var homemV = idadeH2;
    var homemN = idadeH1;
}
if (idadeM1 > idadeM2) {
    var mulherV = idadeM1;
    var mulherN = idadeM2;
}
else {
    var mulherV = idadeM2;
    var mulherN = idadeM1;
}

var soma = mulherV + homemN;
var produto = homemV * mulherN;

document.write("A soma da idade do homem mais velho com mulher mais nova é : " + soma + "</br>");
document.write("O produto da idade da mulher mais velha com homem mais novo é : " + produto);
}