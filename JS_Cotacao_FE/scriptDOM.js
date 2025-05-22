
function Converter() {
    const valorConverter = document.getElementById("bloco_one");
    // const valorConverter = document.querySelector("#bloco_one");

    const opcaoMoeda = document.getElementById("form__money-option");
    const resultado = document.querySelector("#form__resultado");

    let cotacao;
    let simbolo;

    if (opcaoMoeda.value === "" || valorConverter.value === "") {
        alert("Escolha a moeda ou digite um valor válido!!!");
    } else {
        if (opcaoMoeda.value === "dolar") {
            cotacao = 5.61;
            simbolo = "$";
        } else {
            cotacao = 6.31;
            simbolo = "€"; // ou outro símbolo, dependendo da moeda
        }
        const valorConvertido = valorConverter.value / cotacao;

        resultado.style.fontWeight = "bold";
        resultado.style.fontSize = "30px";
        resultado.style.color="green";


        resultado.innerHTML = `${simbolo} ${valorConvertido.toFixed(2)}`;
    }
}