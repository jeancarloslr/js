
function carregar(){
    
    var box = document.getElementsByTagName('section')[0]
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        img.src = 'img/fotomanha.png';
        document.body.style.background = "#F2D7B6"
        box.style.background = "#DEF0EE";

    }else if(hora >= 12 && hora < 18){
        img.src = 'img/fototarde.png';
        document.body.style.background = "#592C28"
        box.style.background = "#D97B59";
    }else{

        img.src = 'img/fotonoite.png';
        document.body.style.background = "#0D0D0D"
        box.style.background = "#161F30";
        msg.style.color = "#F27405"
    }

}





