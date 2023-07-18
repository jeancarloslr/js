let num = document.querySelector('#impt')
let list = window.document.getElementById('lista');
let result = window.document.getElementById('res');
let valores = []
let res = window.document.querySelector('#res');

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true;
    }else{
        return false;
    }
}

function inLista(n, l){
  if(l.indexOf(Number(n)) != -1){  //verifica se ta na lista ou não
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
  res.innerHTML = "";

 }else{ 

    window.alert('Valor inválido ou já encontrado na lista.')   
 }

 num.value = "";
 num.focus();

}

function Finalizar(){

  if(valores.length == 0){
    alert('Não valores para caucular.')
  }else{

     let tot = valores.length;
     let maior = valores[0];
     let menor = valores[0];
     let soma = 0;
     let media = 0;
  
     for(let pos in valores){
      soma += valores[pos]
      
      if(valores[pos] > maior)
          maior = valores[pos];
      if(valores[pos] < menor)
         menor = valores[pos];
     }

     media = (soma / tot);
     media = parseInt(media);


    res.innerHTML = ""
    res.innerHTML += `<p>Ao todo, foram ${tot} números cadastrados.</p>`; 
    res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`;
    res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`;
    res.innerHTML += `<p>A soma de todos os valores é ${soma}`;
    res.innerHTML += `<p>A média de todos os valores é ${media}`
     

  }
}
