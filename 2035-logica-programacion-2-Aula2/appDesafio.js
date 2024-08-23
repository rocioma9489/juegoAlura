
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',"Acertaste el número en "+ intentos +((intentos===1) ? ' vez' : ' veces'));
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.get
    } else {
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    } 
    return;
}

function limpiarCaja(){
    valorCaja = document.querySelector('#valorUsuario').value = '';
}
function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Calculadora de IMC');
   // asignarTextoElemento('p',`Introduce`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
    
}

function reiniciarJuego(){
    // limpiar la caja
    limpiarCaja();
    //condicionales iniciales
    condicionesIniciales();
   
    document.querySelector("reiniciar").setAttribute('disabled','true');
 
   


}
condicionesIniciales();