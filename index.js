/* função de botão para calcular a média trimestral*/
    let botaoDeCalcularMediaTrimestral = document.getElementById('calc-media-tri')
    botaoDeCalcularMediaTrimestral.addEventListener('click', () => {
        mediaTrimestral()
            /*Toastify*/
        Toastify({
            text: "Média gerada",
            duration: 1000,
            position: "right",
            gravity: "bottom",
        }).showToast()
    })

/* Função para calcular média Trimestral*/
function mediaTrimestral() {
    let notasDeAvaliacoes = document.getElementsByClassName("nota")
    console.log(notasDeAvaliacoes);
    let nota1 = notasDeAvaliacoes[0].value
    console.log(nota1)
    let nota2 = notasDeAvaliacoes[1].value
    console.log(nota2)
    const mediaTrimestral = parseInt( (parseFloat(nota1) + parseFloat(nota2)) / notasDeAvaliacoes.length)
    console.log(mediaTrimestral);
    let mediaTri = document.getElementById('media-tri')
    mediaTri.innerText = mediaTrimestral
    if(nota1 && nota2 === undefined || null) {
        return 0
    }
    return mediaTrimestral
}

/*Função para cirar novo input*/
 let botaoDeCriarInputs = document.getElementById('create')
 botaoDeCriarInputs.addEventListener('click', () => {
    criarInput()
 })

function criarInput() {
    let caixaDeNotas = document.getElementsByClassName("caixa-de-notas")
    let input = document.createElement("input")
    input.classList.add('in-put', 'nota')
    input.value = 0
    caixaDeNotas.appendChild(input)   
}
/**/
/**/
/**/


/* função de botão para calcular a média Anual*/
let botaoDeCalcularMediaAnual = document.getElementById('calc-media-anual')
botaoDeCalcularMediaAnual.addEventListener('click', () => {
    mediaAnual()
    /*Toastify*/
    Toastify({
        text: "Média gerada",
        duration: 1000,
        position: "right",
        gravity: "bottom",
    }).showToast()
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