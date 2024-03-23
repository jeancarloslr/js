var yessir = window.document.getElementById('yessir');
var dude = window.document.getElementById('dude');
var hp = window.document.getElementById('harry');
var botoes = window.document.querySelectorAll('.btns')

yessir.addEventListener('click', function(){
      mudaCor(yessir);
      yessir.classList.add('active');
      verify(yessir)
})

dude.addEventListener('click', function(){
     mudaCor(dude);
     dude.classList.add('active');
})

hp.addEventListener('click', function(){
    mudaCor(hp);
    hp.classList.add('active');
})

function mudaCor(contexto){
    botoes.forEach(function(contexto){
    contexto.classList.remove('active');
    })
}

