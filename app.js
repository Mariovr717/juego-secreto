// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'Indica un número del 1 al NUMERO MAXIMO';
let numeroSecreto=0;
//ambito o alcance global el deabajo el numero secreto es variable de bloque
let intentos =0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(Elemento,texto) {
    let elementoHTML = document.querySelector(Elemento);
    elementoHTML.innerHTML = texto;
    return; //retorno de la funcion este caso no retorna nada
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);// alert('Click desde el boton');
    // console.log(typeof(numeroDeUsuario));
    // console.log(numeroSecreto);
    // console.log(typeof(numeroSecreto));
    // console.log(numeroDeUsuario);
    // console.log(numeroDeUsuario===numeroSecreto);
    // los tres iguales en valor y igual en tipo sino retorna falso
    // console.log(numeroSecreto);

    //combinar nuevamente string template con operador ternario para poder ejecutar esa variable.
    console.log(intentos);
    if (numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos===1)? 'vez': 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto.
        if (numeroDeUsuario>numeroSecreto){
        asignarTextoElemento('p','El número secreto es menor');
        }else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;   //buena practica es comun que retorna nada es sugerencia 
}
function limpiarCaja(){
    let valorCaja= document.querySelector('#valorUsuario');
    valorCaja.value = '';
}
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'ya se sortearon todos los números posibles');

    }else{
        //si el numero generado esta incluido en la lista
    
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }
    
}
function condionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica el número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarCodigo(){
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    condionesIniciales();
    //Generar el número aleatorio
    //Inicializar el numero de intentos   
    //deshabilitar el boton de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled','true');  
}
condionesIniciales();
