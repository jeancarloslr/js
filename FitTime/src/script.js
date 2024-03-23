var tempoDecorrido = 60;
var tempo = document.querySelector('#timer');
var botao = document.getElementById('btn');
var text = document.querySelector('.content');
var intervaloId = null;
const music = new Audio('/assets/sons/luna-rise-part-one.mp3');
const startAudio = new Audio ('/assets/sons/play.wav')
const pauseAudio = new Audio ('/assets/sons/pause.mp3')
const endaudio = new Audio ('/assets/sons/beep.mp3');
const iconBtn = document.getElementById('icon');
music.loop = true;

function altMusica(){
 if(music.paused){
    music.play();
 }else{
    music.pause();
 }
}

botao.addEventListener('click', StartPause);

const contagemRegressiva = () =>{
   if(tempoDecorrido == 0){
       endaudio.play();
       zerar();
       return;
   }else{
      tempoDecorrido -= 1;
      mostrarTempo();
   }
}

function StartPause(){
   if(intervaloId){
      iconBtn.setAttribute('src', '../assets/img/play_arrow.png')
      pauseAudio.play();
      zerar();
      return;
   }
   startAudio.play();
   text.textContent = "Pausar";
   iconBtn.setAttribute('src', '../assets/img/pause.png')
   intervaloId = setInterval(contagemRegressiva, 1000);
}

function zerar(){
   clearInterval(intervaloId);
   intervaloId = null;
}

function mostrarTempo() {
   const time = new Date(tempoDecorrido * 1000)
   const tempoFormatado = time.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'})
   tempo.innerHTML = `${tempoFormatado}`
}

mostrarTempo()
