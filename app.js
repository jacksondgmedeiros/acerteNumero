alert("Boas vindas ao jogo do número secreto!");

let numeroSecreto = 29;

let chute = prompt("Escolha um número entre 1 e 10");

if (numeroSecreto == chute) {
   alert(`Você descobriu o número secreto! ${numeroSecreto}`);
} else {
    alert("Você errou!");
}