
function contar(){

    let ini = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    let res = document.querySelector("#res")

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){

        res.innerHTML = "impossível contar"

    }else{

        res.innerHTML = "Contando: <br>"
        let i = Number(ini.value);
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1;
        }
       
        if(i < 10){
            //Contagem crescente
           for(let c = i; c<=f; c+=p){
           res.innerHTML += `\u{1F449} ${c} `
           }
        }
        else{
            //Contagem regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `\u{1F449} ${c} `
            }
        }

         res.innerHTML += `\u{1F3C1}`
    }
}
