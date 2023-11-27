Content = document.querySelector('main');
var btnBlue = window.document.getElementById('btn-blue');
var btnGreen = window.document.getElementById('btn-green');
var btnDark = window.document.getElementById('dark')

btnBlue.addEventListener('click', () =>{
    Content.setAttribute('data-attribute', 'blue');
})

btnGreen.addEventListener('click', ()  =>{
    Content.setAttribute('data-attribute', 'green');
})

btnDark.addEventListener('click', () =>{
    Content.setAttribute('data-attribute', 'batman');
})
