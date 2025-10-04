alert("Boas vindas ao jogo do número secreto!");

let numeroSecreto = 8;

let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt("Escolha um número entre 1 e 10");

    if (numeroSecreto == chute) {
        alert(`Você descobriu o número secreto! ${numeroSecreto} com ${tentativas} tentativas.`);
    } else {
        if(chute > numeroSecreto){
            alert(`O número é menor que ${chute}`);
        } else{
            alert(`O número é maior que ${chute}`);
        }
    }
    tentativas++;
}