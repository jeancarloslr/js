
function adicionar() {

  var impt = window.document.getElementById("impt");
  var select = window.document.getElementById("numbers");

  if (impt.value.length == 0 || impt.value > 100) {

    alert("Insira um número de 0 a 100");
    impt.value = "";

  } else {

    var number = Number(impt.value);

    if(number == item.value){
      alert('Digite um valor diferente');
    }

    let item = document.createElement('option')
    item.text = `${number}`
    select.appendChild(item);

    let options = [];
    options.push(number);
    
    console.log(options.sort());

    impt.value = "";
    
  } 
}

function Finalizar(){


}

/**/