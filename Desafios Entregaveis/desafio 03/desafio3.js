let inserirNumero = parseInt(prompt("Digite o número de Olás que quer receber"))

for (let i = 0; i <= inserirNumero; i++) {
    
    if(inserirNumero > 50) {
        alert("Cuidado esse número é alto demais!")
        break;
    }
    alert("Olá " + i)
}
