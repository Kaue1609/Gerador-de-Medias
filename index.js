/* Evento de calcular Média*/
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
    let notasDeAvaliacoes = document.getElementsByClassName("nota");
    let soma = 0;
  
    for (let i = 0; i < notasDeAvaliacoes.length; i++) {
      soma += parseFloat(notasDeAvaliacoes[i].value) || 0;
    }
  
    const mediaTrimestral = (soma / notasDeAvaliacoes.length).toFixed(2);
  
    let mediaTri = document.getElementById('media-tri');
    mediaTri.innerText = mediaTrimestral;
  }

/*Evento de criar nova caixa de nota*/
let botaoDeCriarInputs = document.getElementById('create')
botaoDeCriarInputs.addEventListener('click', () => {
    criarInput()
        /*Toastify*/
        Toastify({
            text: "Caixa Criada!",
            duration: 2000,
            position: "right",
            gravity: "bottom",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
              },
        }).showToast()
})

function criarInput() {
    let notas = document.getElementsByClassName('nota')
    if (notas.length < 6) {
        let caixaDeInputs = document.getElementById("caixa-de-inputs")
        let input = document.createElement('input')
        input.value = 0
        input.classList.add('in-put', 'nota')
        caixaDeInputs.appendChild(input)
    }
}

/*Evento de excluir caixa de nota*/
let botaoDeExcluirInputs = document.getElementById('delete')
botaoDeExcluirInputs.addEventListener('click', () => {
    let InputDeNota = document.getElementsByClassName('nota')
    if (InputDeNota.length > 2) {
        InputDeNota[0].remove()
    }
        /*Toastify*/
        Toastify({
            text: "Caixa Excluida!",
            duration: 1000,
            position: "right",
            gravity: "bottom",
            style: {
                background: "linear-gradient(to right, #d1301b , #ff0000)"
              },
        }).showToast()
})

