

function contar(){


    var inicio = document.getElementById('inicio').value
    var fim = document.getElementById('fim').value
    var passo = document.getElementById('passo').value
    var res = document.getElementById('res')

    var cont = 0;
    while(inicio <= fim){

        var linha = document.createElement('p')
        linha.textContent = `${cont}`
        res.appendChild(linha)

        cont = cont + passo
    }

}