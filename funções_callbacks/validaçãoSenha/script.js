var inpt = window.document.getElementById('password');
var btn = window.document.getElementById('btn-tester');
var msg = window.document.getElementById('msg')
btn.addEventListener('click', validarSenha);
function validarSenha() {
    function autenticarSenha(sucessSenha, errorSenha) {
        var temMaiuscula = /[A-Z]/.test(inpt.value);
        var temMinuscula = /[a-z]/.test(inpt.value);
         /*var temNumero = /\d/.test(inpt.value);*/
        var numberEspecial = /^(?=.*\d)(?=.*[!@#$%^&*])/.test(inpt.value);

        if (inpt.value.length >= 8 && temMaiuscula && temMinuscula && numberEspecial) {
            sucessSenha('Boa');
            inpt.style = "border: 3px solid green;";
        } else {
            errorSenha('');
            inpt.style = "border: 1px solid red;";     
        }
    }
    var sucessSenha = function (mensagem) {
        msg.innerHTML = mensagem; 
        inpt.value = "";
    }
    var errorSenha = function (mensagemErro) {
        msg.innerHTML = mensagemErro;
        inpt.value = "";
    }
    autenticarSenha(sucessSenha, errorSenha);
}