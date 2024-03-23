const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const img = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const StartPauseBt = document.getElementById('start-pause');
const audio = document.getElementById('alternar-musica');
const musica = new Audio('sons/luna-rise-part-one.mp3');
const iniciarOuPausarBt = window.document.querySelector('#start-pause span');
const musicaInicio = new Audio('sons/play.wav');
const musicaPause = new Audio('sons/pause.mp3');
const musicaFinished = new Audio('sons/beep.mp3')
const IconBtn = document.querySelector('.app__card-primary-butto-icon');
const timer = document.getElementById('timer');
let tempoDecorridoEmSegundos = 1500;
let intervaloId = null;
musica.loop = true;
audio.addEventListener('change', function(){
    if(musica.paused){
        musica.play();
    }else{
        musica.pause();
    }
})
focoBt.addEventListener('click', () => {
   tempoDecorridoEmSegundos = 1500;
   Automatizar('foco');
   focoBt.classList.add("active");
})
curtoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 300;
   Automatizar('descanso-curto');
   curtoBt.classList.add("active")
})
longoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 900;
    Automatizar('descanso-longo')
    longoBt.classList.add('active');
})
function Automatizar(contexto){
    mostrarTempo();
    botoes.forEach(function(contexto){
        contexto.classList.remove('active');
    })
    html.setAttribute('data-contexto', contexto);
    img.setAttribute('src', `imagens/${contexto}.png`);
    switch (contexto) {
        case 'foco':
            titulo.innerHTML = ` Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`;
            break;
        case 'descanso-curto':
            titulo.innerHTML = `Que tal dar uma respirada?<br>
            <strong class="app__title-strong">Faça uma pausa curta.</strong> `;
            break;
        case 'descanso-longo':
            titulo.innerHTML = `Hora de voltar à superfície. <br>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>`;
            default:
                break;
    }
}
const contagemRegressiva = () =>{
    if(tempoDecorridoEmSegundos <= 0){
        musicaFinished.play();
        window.alert('tempo finalizado!')
        zerar();
        return;
    }
    tempoDecorridoEmSegundos -= 1;
    mostrarTempo();
}
StartPauseBt.addEventListener('click', iniciarOuPausar);
function iniciarOuPausar(){
    if(intervaloId){
        musicaPause.play();
        zerar();
        return;/*interrompe a função.*/ 
    }else{
        musicaInicio.play();
        intervaloId = setInterval(contagemRegressiva, 1000);
        iniciarOuPausarBt.textContent = "Pausar";
        IconBtn.setAttribute('src', 'imagens/pause.png')
    }  
}
function zerar(){
    clearInterval(intervaloId);
    iniciarOuPausarBt.textContent = "Começar"; 
        IconBtn.setAttribute('src', 'imagens/play_arrow.png');     
    intervaloId = null;
}

function mostrarTempo(){
    const tempo = new Date(tempoDecorridoEmSegundos * 1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'});
    timer.innerHTML = `${tempoFormatado}`;
}

mostrarTempo();