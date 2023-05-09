// una función y un procedimiento en esencia son lo mismo
// una porción de código empaquetado para realizar un trabajo

// esto es procedimiento
function laSumaCompleta(){
    let dato1String = prompt('ingrese el dato 1');
    let dato1Int = parseInt(dato1String);
    let dato2String = prompt('ingrese el dato 2');
    let dato2Int= parseInt(dato2String);

    let resultado = dato1Int + dato2Int;

    alert('El resultado de la suma es '+resultado);

}



// PROGRAMACIÓN MODULAR
// ENTRADA
function atraparDatos(){
    let datoString = prompt('Ingrese un valor numerico');
    let datoInt = parseInt(datoString);
    return datoInt;
}

// cuando le proporcionamos datos -parámetros- en los paréntesis, ahí se llama funcion
// lo ideal es que la función pueda retornar datos
// PROCESO
function realizarSuma(numero1, numero2){
    let suma= numero1+numero2;
    return suma;
}

function realizarResta(numero1, numero2){
    let resta = numero1-numero2;
    return resta;
}

// SALIDA
function mostrarResultado(resultado){
    alert('El resultado de la operacion es: '+resultado);
}


// procedimiento
function principal(){
   // mostrarResultado (realizarSuma( atraparDatos(), atraparDatos() ) );
   mostrarResultado (realizarResta( atraparDatos(), atraparDatos() ) );
}