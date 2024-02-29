let numeroSecreto = 0;
let intentos = 0;
let listaDeNumerosSorteados = [];
let numeroMaximo = 10;
// console.log(numeroSecreto);

function asignarElementoTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarElementoTexto('p', `Acertaste! en ${intentos} ${(intentos === 1) ? 'oportunidad' : 'oportunidades'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // el usuario no acerto 
        if (numeroDeUsuario > numeroSecreto){
            asignarElementoTexto('p', 'El número secreto es menor!');
        } else {
            asignarElementoTexto('p', 'El número secreto es mayor!');
        }
        intentos++;
        limpiarCaja();
    }
    
 
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function GenerarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si el numero generado está incluido en la lista
    console.log(numeroGenerado);
    console.log(listaDeNumerosSorteados);
    
    // Si ya sorteamos todos los numeros
    if (listaDeNumerosSorteados.length == numeroMaximo) {
        asignarElementoTexto('p', 'Ya se sortearon todos los números posibles!');
    } else {

        if (listaDeNumerosSorteados.includes(numeroGenerado)){
            return GenerarNumeroSecreto();
        } else {
            listaDeNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}


function condicionesIniciales(){
    asignarElementoTexto('h1', 'Juego del número secreto');
    asignarElementoTexto('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = GenerarNumeroSecreto();
    intentos = 1;

}
function reiniciarJuego(){
    // limpiar caja
    limpiarCaja();
    // mensaje de inicio
    condicionesIniciales();
    // generar numero aleatorio
    // deahabilitart el boton de juego nuevo
    // rewiniciar el numero de intentos
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}
condicionesIniciales();
