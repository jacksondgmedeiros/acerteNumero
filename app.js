alert("Boas vindas ao jogo do número secreto!");
let numeroMaximo = 5000;

// cria um número aleatório usando a função do Math.ramdom() e transforma em um inteiro, depois multiplica pelo valor do numero maximo e usa o mais um para arredondar para cima
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    if (numeroSecreto == chute) {
       break;
    } else {
        if(chute > numeroSecreto){
            alert(`O número é menor que ${chute}`);
        } else{
            alert(`O número é maior que ${chute}`);
        }
    }
    tentativas++;
}
// operador ternario, primeiro é o verdadeiro e depois o falso
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
