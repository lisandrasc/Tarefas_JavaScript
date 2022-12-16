function total() {
    const porc_distribuidor = 28;
    const porc_imposto = 45;
    var custofabrica = parseFloat(prompt("Informe o valor do custo de fábrica"));
    var valor_distribuidor = porc_distribuidor * custofabrica / 100;
    var valor_imposto = porc_imposto * custofabrica / 100;
    var custo_consumidor = valor_distribuidor + custofabrica + valor_imposto;

    alert("O custo ao consumidor é: " + custo_consumidor)
}