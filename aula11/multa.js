

function calcular(){

    var txt1 = window.document.getElementById('txtvel')
    var vel = Number(txt1.value);
    var txt2 = document.querySelector('input#res')
    var text = document.querySelector('div#res')

    if(vel > 60){
        txt2.value = "Você está multado!"
    }else{
        txt2.value = "Você não está multado, go a head"
    }

}
