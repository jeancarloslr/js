function gerar(){

 var txtn = window.document.querySelector('#txtn')
 var tab = window.document.getElementById('seltab')
 
 if(txtn.value.length == 0){

    alert('Impossível gerar a tabuada sir')

}
else{
     
    var n = Number(txtn.value)

    tab.innerHTML = "";
    for(c = 1; c <= 10; c++){

        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
        
    }

  }

}