var inpt = window.document.getElementById('password');
var btn = window.document.getElementById('btn-tester');
var msg = window.document.getElementById('msg')

btn.addEventListener('click', validarSenha);

function validarSenha() {
    function autenticarSenha(sucessSenha, errorSenha) {
        var temMaiuscula = /[A-Z]/.test(inpt.value);
        var temMinuscula = /[a-z]/.test(inpt.value);


        if (inpt.value.length >= 8 && temMaiuscula && temMinuscula) {
            sucessSenha('Boa');
        } else {
            errorSenha('Erro');
            inpt.style = "border: 1px solid red;";     
            inpt.value = "";       
        }
    }


    var sucessSenha = function (mensagem) {
        msg.innerHTML = mensagem; 
        inpt.value = "";
    }

    var errorSenha = function (mensagemErro) {
        console.log(mensagemErro);
    }

    autenticarSenha(sucessSenha, errorSenha);
}

