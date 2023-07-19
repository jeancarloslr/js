var impt = document.getElementById('impt')
var list = document.getElementById('list')
var res = document.getElementById('res');
var produtos = []

btn.addEventListener('click', adicionar)
btn2.addEventListener('click', finalizar)

function inLista(va, pro){

        if(pro.indexOf(va) != -1){
            return true;
        }

}

function adicionar(){

    if(impt.value.length >= 0 && impt.value.length <= 2){
        alert('Insira um produto válido');
    }else{

      if(!inLista(impt.value, produtos)){

         objeto = impt.value;
         produtos.push(objeto);
         
         var item = document.createElement('option');
         item.text = `${objeto} selecionado`;
         list.appendChild(item)

         res.innerHTML = "";


      }else{
        alert('Insira um valor diferente')
      }
 }    
}

function finalizar(){
   res.innerHTML = `Ao total, foram ${produtos.length} produtos comprados.`;
}
