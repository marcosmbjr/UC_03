function gerarTabuada() {
  let numero = document.getElementById("tabuada").value;
  let inicio = document.getElementById("inicio").value;
  let fim = document.getElementById("fim").value;
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

 
  if (numero === "" || inicio === "" || fim === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }

 
  numero = parseInt(numero);
  inicio = parseInt(inicio);
  fim = parseInt(fim);

  
  for (let i = inicio; i <= fim; i++) {
    let linha = "<tr>";
    linha += "<td>" + numero + "</td>";
    linha += "<td>x</td>";
    linha += "<td>" + i + "</td>";
    linha += "<td>=</td>";
    linha += "<td>" + (numero * i) + "</td>";
    linha += "</tr>";
    resultado.innerHTML += linha;
  }
}
