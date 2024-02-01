
let Numerosecreto=0;
let intentos=1;
let listadenumerosecreto=[];
numeromaxximo=10
console.log(Numerosecreto);
function asignartectoelemntos (elemento,texto ){
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}
//botones
function verificarintento() {
    let numerodeusuario=parseInt(document.getElementById('valorusuario').value);
    
    if (numerodeusuario===Numerosecreto) {
        asignartectoelemntos('p', `Acertaste en ${intentos} ${(intentos===1) ? 'vez': 'veces'}` );
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numerodeusuario > Numerosecreto) {
            asignartectoelemntos('p','El número es menor');
        
        } else {
            asignartectoelemntos('p','El número es mayor');
        }
        intentos++;
        limpiarCaja();
    }
        return;
}

function limpiarCaja() {
    document.querySelector("#valorusuario").value= '';
    
}
function generarnumsecreto(){
    let numerogenerado = Math.floor(Math.random()*numeromaxximo)+1;
    //si ya se sorteo todos los numeros
    
    console.log(numerogenerado);
    console.log(listadenumerosecreto);
    //         ng enn la list?
    if (listadenumerosecreto.length == numeromaxximo){
    asignartectoelemntos('p','ya se sorteaaron todos los numeros');
    
    } else {
        if(listadenumerosecreto.includes(numerogenerado)) {
            return generarnumsecreto();

        } else{
            listadenumerosecreto.push(numerogenerado);
            return numerogenerado;
        
        }
    }

}


function condicionesinicales(){
    asignartectoelemntos('h1','Averigua el número secreto');
    asignartectoelemntos('p','Indica un número del 1 al 10');    
    Numerosecreto= generarnumsecreto();
    //desabilitar el numevo juego
    //iniciar el numero de intentos
    intentos=1;
    console.log(Numerosecreto);
}


function reiniciarjuego() {
    //limpiar caja
    limpiarCaja();  
    //msj de interv de numer
    condicionesinicales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesinicales();