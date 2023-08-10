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
    if(primeiraNota = undefined) {
        return 0
    }
    return mediaTrimestral
}


/**/
/**/
/**/


/* função de botão para calcular a média Anual*/
let botaoDeCalcularMediaAnual = document.getElementById('calc-media-anual')
botaoDeCalcularMediaAnual.addEventListener('click', () => {
    mediaAnual()
    /*Sweet Alert*/
    Swal.fire({
        title: 'Média Feita!',
        imageUrl: 'https://i.fbcd.co/products/resized/resized-750-500/b8c6e8130e5374f4e5fdc903feaad917814bd58caef6a8d9a2c48f20b983bc33.webp',
        imageWidht: '200',
        imageHeight: '200',
    })
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