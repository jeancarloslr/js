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
  if(l.indexOf(Number(n)) != -1){     //verifica se ta na lista ou não
      return true;
  }else{
    return false;
  }
}

function adicionar(){

 if(isNumero(num.value) && !inLista(num.value, valores)) {
    
  let valor = num.value;
  valores.push(Number(valor))

  let item = document.createElement('option')
  item.text = `${valor} selecionado.`
  list.appendChild(item);

  
 }else{

    window.alert('Valor inválido ou já ncontrado na lista.')  
 }

 num.value = "";
 num.focus();
}
