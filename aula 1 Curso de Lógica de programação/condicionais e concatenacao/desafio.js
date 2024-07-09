// Perguntar ao usuário qual é o dia da semana
var diaDaSemana = prompt("Qual é o dia da semana?");

// Se a resposta for "Sábado" ou "Domingo", mostrar "Bom fim de semana!". Caso contrário, mostrar "Boa semana!"
if (diaDaSemana === "Sábado" || diaDaSemana === "Domingo") {
  alert("Bom fim de semana!");
} else {
  alert("Boa semana!");
}

// Verificar se um número digitado pelo usuário é positivo ou negativo e mostrar um alerta informando
var numero = prompt("Digite um número:");
if (numero >= 0) {
  alert("O número é positivo.");
} else {
  alert("O número é negativo.");
}

// Criar um sistema de pontuação para um jogo
var pontuacao = prompt("Digite sua pontuação no jogo:");
if (pontuacao >= 100) {
  alert("Parabéns, você venceu!");
} else {
  alert("Tente novamente para ganhar.");
}

// Criar uma mensagem que informa o usuário sobre o saldo da conta
var saldo = 500; // Exemplo de saldo
alert(`Seu saldo atual é: R$${saldo}`);

// Pedir ao usuário para inserir seu nome usando prompt e mostrar um alerta de boas-vindas usando esse nome
var nomeUsuario = prompt("Digite seu nome:");
alert(`Boas-vindas, ${nomeUsuario}!`);

/*
Desafios:
- Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
- Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
- Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
- Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
- Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
*/