//variaveis do Escopo Global
let primeiraNota = parseInt(document.getElementById("nota1"))
primeiraNota.addEventListener("imput", () => {
    console.log(primeiraNota.value);
})
let segundaNota = parseInt(document.getElementById(""))
let terceiraNota = parseInt(document.getElementById(""))

function mediaTrimestral() {
    let notaFinal = parseInt((primeiraNota + segundaNota + terceiraNota) / 3)
    console.log(notaFinal);
}

mediaTrimestral()

let mediaDoPrimeiroTrimestre
let mediaDoSegudoTrimestre
let mediadoTerceiroTrimestre

function mediaAnual() {
    const mediaAnual = parseInt((mediaDoPrimeiroTrimestre + mediaDoSegudoTrimestre + mediaDoSegudoTrimestre) / 3)
    console.log(mediaAnual)
}

mediaAnual()