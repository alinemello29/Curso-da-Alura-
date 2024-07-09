alert('Bem-vindo ao jogo do número secreto!');

const numeroMaximo = 10; // Limite máximo para o chute
let numeroSecreto = Math.floor(Math.random() * numeroMaximo + 1); // Gera um número aleatório entre 1 e 10
let tentativas = 0;
let chute;

console.log(numeroSecreto); // Mostra o número secreto no console para testes

// Enquanto o chute não for igual ao número secreto
while (chute !== numeroSecreto) {
    chute = parseInt(prompt(`Escolha um número entre 1 e ${numeroMaximo} (digite 0 para sair)`));

    // Verifica se o usuário digitou 0 para sair
    if (chute === 0) {
        alert('Você saiu do jogo.');
        break;
    }

    // Valida se o chute está dentro do intervalo permitido
    if (chute < 1 || chute > numeroMaximo || isNaN(chute)) {
        alert(`Por favor, escolha um número válido entre 1 e ${numeroMaximo}.`);
        continue; // Volta ao início do loop
    }

    // Verifica se o chute está correto
    if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}.`);
    } else if (chute < numeroSecreto) {
        alert(`O número secreto é maior que ${chute}.`);
    }

    tentativas++;
}

// Quando o chute for igual ao número secreto
if (chute === numeroSecreto) {
    alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa${tentativas !== 1 ? 's' : ''}.`);
}