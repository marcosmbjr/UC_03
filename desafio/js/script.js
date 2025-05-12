let opcao;

while (opcao !== "1" && opcao !== "2") {
    opcao = prompt("Escolha a conversão:\n1 - Celsius para Fahrenheit\n2 - Fahrenheit para Celsius");
}

let entrada = Number(prompt("Digite a temperatura:"));

let temperatura = entrada;


if (opcao === "1") {
    let resultado = (temperatura * 1.8) + 32;
    alert(temperatura + "°C equivalem a " + resultado.toFixed(2) + "°F");
} else {
    let resultado = (temperatura - 32) * 5 / 9;
    alert(temperatura + "°F equivalem a " + resultado.toFixed(2) + "°C");
}