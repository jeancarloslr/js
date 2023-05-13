function caucular(){

    var name = window.document.getElementById('nome').value
    var duration = window.document.getElementById('duracao').value
    var res = document.getElementById('res')

    var valorP = (duration*100)/60;

    res.innerHTML = (`Olá piloto ${name}, o valor a pagar é ${valorP}!`)




    
}