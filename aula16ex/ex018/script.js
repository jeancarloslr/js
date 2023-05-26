
function contar(){

    var cont = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var res = document.getElementById('res')


    while(cont <= fim){

        var linha = document.createElement('p');
        linha.textContent = `${cont}`;
        res.appendChild(linha);
        cont += passo;
        
    }

}