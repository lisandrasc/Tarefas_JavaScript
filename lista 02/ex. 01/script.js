function idade() {
    var anos = parseFloat(prompt("Informe sua idade em anos:"));
    var meses = parseFloat(prompt("Informe quantos meses:"));
    var dias = parseFloat(prompt("Informe quantos dias:"));
    var total = total + dias;
    var total = total + (anos * 365);
    var total = total + (meses * 30);
    alert("A sua idade em dias é: " + total);
}