function Verificar(){

  var data = new Date;
  var ano = data.getFullYear();//full year -> ano atual
  var formAno = window.document.getElementById('txtAno');
  var res = document.querySelector('div#res');

  if(formAno.value.length == 0 || formAno.value > ano){//length/0caracter
    alert('[ERRO] Verifique os dados e tente novamente');
  }else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(formAno.value);
    var genero = '';
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if(fsex[0].checked){
      genero = "Homem"
      if(idade >= 0 && idade < 10){
          // Criança
         
          img.setAttribute('src', 'foto-bebe-m.png')
      }else if(idade < 21){
         // Jovem

          img.setAttribute('src', 'foto-jovem-m.png')
      }else if(idade < 50){
        // Adulto

          img.setAttribute('src', 'foto-adulto-m.png')
      } else{
        // idoso

        img.setAttribute('src', 'foto-idoso-m.png')
      }
    }else if(fsex[1].checked){
      genero = "Mulher"

    if(idade >= 0 && idade < 10){
        // Criança

        img.setAttribute('src', 'foto-bebe-f.png')
        
    }else if(idade < 21){
       // Jovem

       img.setAttribute('src', 'foto-jovem-f.png')
    }else if(idade < 50){
      // Adulto

      img.setAttribute('src', 'foto-adulto-f.png')
    } else{
      // idoso

      img.setAttribute('src', 'foto-idoso-f.png')
    }
    }

    res.getElementsByClassName.textAlign = 'center';
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
    res.appendChild(img)  //adicionar um elemento que é o img
    img.style.marginTop = "15px";
        
  }
}
