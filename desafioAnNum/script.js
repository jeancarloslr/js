let num = document.querySelector('#impt')
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

function inLista(n, l){
  if(l.indexOf(Number(n)) != -1){
      return true;
  }else{
    return false;
  }
}

function adicionar(){
 if(isNumero(num.value) && !inLista(num.value, valores)) {
  console.log('tudo ok')
 }else{
    window.alert('Valor inválido ou já ncontrado na lista.')  
 }
}

/*var item = document.createElement('option')
item.text = `${number}`
select.appendChild(item);*/