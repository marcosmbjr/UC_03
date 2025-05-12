let nome = prompt("Digite o nome do vendedor:");
let salario = parseFloat(prompt("Digite o salário do vendedor (R$):"));
let vendas = parseFloat(prompt("Digite o valor total das vendas (R$):"));
let comissao = 0;

if (vendas >= 3000) {
  comissao = vendas * 0.15;
} else if (vendas >= 1500) {
  comissao = vendas * 0.10;
} else if (vendas < 1500) {
  comissao = vendas * 0.05;
}
let pagamento = salario + comissao;

let mensagem = `Vendedor: ${nome}
-------------------------
Valor das Vendas: R$ ${vendas.toFixed(2)}
Valor da Comissão: R$ ${comissao.toFixed(2)}
Valor do Salário: R$ ${salario.toFixed(2)}
Pagamento: R$ ${pagamento.toFixed(2)}`;

alert(mensagem);
console.log(mensagem);

