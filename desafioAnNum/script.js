
function adicionar() {

    var impt = window.document.getElementById("impt");
    var select = window.document.getElementById("numbers");
    
    
      if (impt.value.length == 0) {

       alert("Insira um número de 0 a 100");   

      }else{

        var number = Number(impt.value);
       /* tab.innerHTML = "";*/

        let item = document.createElement('option')
        item.text = `Número ${number} selecionado`
        select.appendChild(item)
        
        let options = [];
        options = item.text;
        console.log(options)
        
    }
}
    