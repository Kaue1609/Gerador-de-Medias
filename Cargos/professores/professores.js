/* função de botão para calcular a média trimestral*/
    let botaoDeCalcularMediaTrimestral = document.getElementById('calc-media-tri')
    botaoDeCalcularMediaTrimestral.addEventListener('click', () => {
        mediaTrimestral()
    })

/* Função para calcular média Trimestral*/
function mediaTrimestral() {
    let primeiraNota = document.getElementById("nota1").value
    let segundaNota = document.getElementById("nota2").value
    let terceiraNota = document.getElementById("nota3").value
    const mediaTrimestral = parseInt( ( parseFloat(primeiraNota) + parseFloat(segundaNota) + parseFloat(terceiraNota) ) / 3)
    console.log(mediaTrimestral);
    let mediaTri = document.getElementById('media-tri')
    mediaTri.innerText = mediaTrimestral
    return mediaTrimestral
}


/**/
/**/
/**/


/* função de botão para calcular a média Anual*/
let botaoDeCalcularMediaAnual = document.getElementById('calc-media-anual')
botaoDeCalcularMediaAnual.addEventListener('click', () => {
    mediaAnual()
})

/* Função para calcular média Anual*/
function mediaAnual() {
    let mediaDoPrimeiroTrimestre = document.getElementById("media1").value
    let mediaDoSegudoTrimestre = document.getElementById("media2").value
    let mediaDoTerceiroTrimestre = document.getElementById("media3").value
    const mediaAnual = parseInt( ( parseFloat(mediaDoPrimeiroTrimestre) + parseFloat(mediaDoSegudoTrimestre) + parseFloat(mediaDoTerceiroTrimestre) ) / 3)
    console.log(mediaAnual);
    let mediaAno = document.getElementById('media-ano')
    mediaAno.innerText = mediaAnual
    return mediaAnual
}