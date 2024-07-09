// Desafios finais

// 1. Exibir uma mensagem de boas-vindas
console.log("Bem-vindo ao nosso programa!");

// 2. Exibir "Olá, [seu nome]!" no console do navegador
let nome = "Aline";
console.log(`Olá, ${nome}!`);

// 3. Exibir "Olá, [seu nome]!" usando alert
alert(`Olá, ${nome}!`);

// 4. Armazenar resposta do usuário sobre a linguagem de programação favorita
let linguagemFavorita = prompt("Qual a linguagem de programação que você mais gosta?");
console.log(`A linguagem de programação favorita é ${linguagemFavorita}.`);

// 5. Realizar a soma de dois valores e mostrar no console
let valor1 = 10;
let valor2 = 5;
let resultadoSoma = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultadoSoma}.`);

// 6. Realizar a subtração de dois valores e mostrar no console
let resultadoSubtracao = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultadoSubtracao}.`);

// 7. Verificar se a pessoa é maior ou menor de idade
let idade = prompt("Por favor, informe sua idade:");
if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

// 8. Verificar se um número é positivo, negativo ou zero
let numero = prompt("Digite um número:");
if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

// 9. Usar um loop while para imprimir números de 1 a 10
let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}

// 10. Determinar se a nota é maior ou igual a 7 e exibir "Aprovado" ou "Reprovado"
let nota = 8;
if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

// 11. Gerar um número aleatório usando Math.random
let numeroAleatorio = Math.random();
console.log(`Número aleatório: ${numeroAleatorio}`);

// 12. Gerar um número inteiro entre 1 e 10 usando Math.random
let numeroInteiro = Math.floor(Math.random() * 10) + 1;
console.log(`Número inteiro entre 1 e 10: ${numeroInteiro}`);

// 13. Gerar um número inteiro entre 1 e 1000 usando Math.random
let numeroGrande = Math.floor(Math.random() * 1000) + 1;
console.log(`Número inteiro entre 1 e 1000: ${numeroGrande}`);