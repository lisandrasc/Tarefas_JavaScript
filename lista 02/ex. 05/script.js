function temperatura() {
    var celsius = parseFloat(prompt("Qual a temperatura em Cº? (Grau Celsius)"));
    var fahrenheit = (9 * celsius + 160)/5;

    alert("A temperatura de "+ celsius+ " °C, em fahrenheit é: "+ fahrenheit + "°F")
}