function mediaDoJoao(nota1, nota2, nota3) {
    let primeiraNota = parseInt(prompt("Primeira nota de João"))
    let segundaNota = parseInt(prompt("Segunda nota de João"))
    let terceiraNota = parseInt(prompt("Terceira nota de João"))

    let notaFinal = parseInt((primeiraNota + segundaNota + terceiraNota) / 3)
    alert("Médio de João nesse trimentre foi " + notaFinal)

}

mediaDoJoao()