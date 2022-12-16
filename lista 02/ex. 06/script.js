function temperatura() {
    var fahrenheit = parseFloat(prompt("Qual a temperatura em °F? (Grau Fahrenheit)"));
    var celsius = (fahrenheit - 32) * 5/9;

    alert("A temperatura de "+ fahrenheit+ " °F, em celsius é: "+ celsius + "°C")
}