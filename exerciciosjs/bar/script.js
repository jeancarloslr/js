    
function caucular(){
    var name = window.document.getElementById('nome').value
    var bebida = window.document.getElementById('bebida').value
    var quantidade = window.document.getElementById('quantidade').value
    var res = document.getElementById('res')
    var apagar;


    if(quantidade <= 5){

        var apagar = (quantidade * 10);
        res.innerHTML = `Olá ${name}, o valor a pagar é ${apagar}`

    }else{

       apagar = (quantidade * 0.75);
       res.innerHTML = `Olá ${name}, o valor a pagar é ${apagar}, pois temos uma promoção que é: se você comprar mais de 5 bebidas ganha desconto de 25%.`

    }



}