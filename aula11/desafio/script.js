
function verify(){
  var txt1 = document.querySelector('#pais')
  var txt2 = document.querySelector('#now')
  var txt3 = document.querySelector('#sit')

  if(txt2.value != txt1.value){
     txt3.value = "Você é extrangeiro(a)!"
  }else{
    txt3.value = "Você é Brasileiro"
  }
}
