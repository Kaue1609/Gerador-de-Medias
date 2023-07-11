let numeroEscolhido = parseInt(prompt("Digite um número de 1 a 10 para ganhar o prêmio"));

if (numeroEscolhido === 7) {
    alert("Parabéns, você ganhou R$ 10,00.")
}
else if ((numeroEscolhido > 10) || (numeroEscolhido < 1)) {
    alert("Digite somente números de 1 a 10!")
}
else if((numeroEscolhido === 6) || (numeroEscolhido === 8)){
    alert("Quase! Você chegou muito perto de ganhar o prêmio.")
}
else {
    alert("Mais sorte da próxima vez  :/")
}