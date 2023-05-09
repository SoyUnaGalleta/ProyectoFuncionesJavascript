function asignarEventos(){
    let elBoton = document.getElementById('operar');
    elBoton.addEventListener('click', principal);
}



// ENTRADA
function atraparDato1(){
    let laCaja1 = document.getElementById('dato1');
    let elDato1 = parseInt(laCaja1.value);
    return elDato1;
}

function atraparDato2(){
    let laCaja2 = document.getElementById('dato2');
    let elDato2 = parseInt(laCaja2.value);
    return elDato2;
}

// PROCESO
function realizarSuma(numero1, numero2){
    let suma= numero1+numero2;
    return suma;
}

// SALIDA
function mostrarResultado(resultado){
    let laCajaResultado = document.getElementById('resultado');
    laCajaResultado.value = resultado;
}

// procedimiento
function principal(){
    let numero1 =  atraparDato1();
    let numero2 = atraparDato2();
    let unResultado = realizarSuma(numero1, numero2);
    mostrarResultado(unResultado);
    // ES EL MISMO CÓDIGO ANTERIOR, PERO SIN USAR VARIABLES
    // mostrarResultado(realizarSuma(atraparDato1(), atraparDato2()));
 }