let num = window.document.getElementById('impt');
let list = window.document.getElementById('lista');
let result = window.document.getElementById('res');
let valores = []

function isNumero(n){

    if(Number(n) >= 1 && Number(n) <= 100){

        return true;
      
  }else{
    
    return false;

  }
}

function inLista(n, L){

}


function adicionar(){

 if(isNumero(num.value) && !inLista(num.value, valores)){



 }else{
    window.alert('Valor inválido ou já encontrado na lista')
 }

}

/*var item = document.createElement('option')
item.text = `${number}`
select.appendChild(item);*/