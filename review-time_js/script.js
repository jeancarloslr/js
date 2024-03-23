const timeNow = document.querySelector('.timerNow');
const timerContado = document.querySelector('.timerContado');

let ContagemRegressiva = 60;

const btnStop = document.querySelector('.btnStop');
const btnGo = document.querySelector('.btnGo');

btnStop.addEventListener('click', () =>{
    if(intervaloId){
        clearInterval(intervaloId)
        intervaloId = null;
    }
})

btnGo.addEventListener("click", () =>{
    intervaloId = setInterval(contar, 1000);
});
const timersy = new Date();
const hora = timersy.getHours();
const minutos = timersy.getMinutes();
const seconds = timersy.getSeconds();


const textoFormatado = `${hora}:${minutos}`;

timeNow.innerHTML = `${textoFormatado}`;

function contar(){
    timerContado.innerHTML = `${ContagemRegressiva}`;
    ContagemRegressiva -= 1;
}

let intervaloId = setInterval(contar, 1000);

