let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseInt(prompt("Digite o segundo número:"));

while (num1 >= num2) {
  alert("O primeiro número deve ser menor que o segundo.");
  num1 = parseInt(prompt("Digite o primeiro número:"));
  num2 = parseInt(prompt("Digite o segundo número:"));
}

let resultado = "";

for (let i = num1 + 1; i < num2; i++) {
  if (i % 2 === 0) {
    resultado += i + " – PAR\n";
  } else {
    resultado += i + " – ÍMPAR\n";
  }
}

console.log(resultado);
alert(resultado);



// function ImparPar(num1, num2) {
//   let resultado = "";

//   for (let i = num1 + 1; i < num2; i++) {
//     if (i % 2 === 0) {
//       resultado += i + " – PAR\n";
//     } else {
//       resultado += i + " – ÍMPAR\n";
//     }
//   }

//   return resultado;
// }


// function main() {

//   let num1 = parseInt(prompt("Digite o primeiro número:"));
//   let num2 = parseInt(prompt("Digite o segundo número:"));

//   while (num1 >= num2) {
//     alert("O primeiro número deve ser menor que o segundo.");
//     num1 = parseInt(prompt("Digite o primeiro número:"));
//     num2 = parseInt(prompt("Digite o segundo número:"));
//   }

//   let resultado = ImparPar(num1, num2);

//   console.log(resultado);
//   alert(resultado);
// }

// main();
