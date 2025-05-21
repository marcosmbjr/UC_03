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

    if (fim < inicio) {
    alert("O valor final deve ser maior que o valor inicial.");
    return;
  }
  
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
  limparCampos();
  
}

function limparCampos() {
  document.getElementById("tabuada").value = "";
  document.getElementById("inicio").value = "";
  document.getElementById("fim").value = "";
  }