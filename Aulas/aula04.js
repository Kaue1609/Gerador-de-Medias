function saudacao() {
    console.log("Olá, camarada!");
}
saudacao()

//function solicitaNome() {
    //let nome = prompt('Qual é o seu nome?')
    // alert("Olá " + nome + ", seja bem-vindo(a)")
    //}
//solicitaNome()

function somar(num1, num2) {
    console.log(num1 + num2)
    return num1 + num2
}
const somaDoisNumeros = somar(2, 8)


somar(19, 63)
somar(7, 57)

function calculadora(primeiroNumero, segundoNumero, operacao) {
    switch (operacao) {
        case "+":
            return primeiroNumero + segundoNumero;
    }
}

function imprimirNomes(lista) {
    for (let i = 0; i < lista.length; i++) {
    console.log("O nome da pessoa é " + lista[i]);
}
}

imprimirNomes(['Alissom', 'Kauê', 'Jonas'])