function queRetornaDatos(){
    let valor = 72;
    return 72;
}

function queNoRetornaDatos(){
    let valor = 72;
}

// En la función que invoca módulos visualizamos la diferencia entre funciones
// que retornan y que no retornan datos
function principal(){
    let atrapa1 = queRetornaDatos();
    alert('La función que retorna datos envio: '+atrapa1);

    let atrapa2 = queNoRetornaDatos();
    alert('La funcion que NO RETORNA datos envio: '+atrapa2);
}