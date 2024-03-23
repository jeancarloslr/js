const timeNow = document.querySelector('.timerNow');
const timerContado = document.querySelector('.timerContado');

const timersy = new Date();
const hora = timersy.getHours();
const minutos = timersy.getMinutes();
const seconds = timersy.getSeconds();


const textoFormatado = `${hora}:${minutos}`;

timeNow.innerHTML = `${textoFormatado}`;




