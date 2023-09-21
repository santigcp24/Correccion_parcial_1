function primerPunto(){
    let frase = document.getElementById("frase_mayus").value;
    let resultado = "";
    for (let i = 0; i < frase.length; i++) {
        if (i % 2 !== 0) {
            resultado += frase[i].toUpperCase();
        } else {
            resultado += frase[i].toLowerCase();
        }
    }
    alert(resultado);
}

function segundoPunto(){
    var fecha_nac_str = document.getElementById("fechaNacimiento").value;
    var fecha_nac = new Date(fecha_nac_str); //acá se convierte de string a tipo date para poder operar sobre la fecha
    var fechaActual = new Date();
    
    var edad = fechaActual.getFullYear() - fecha_nac.getFullYear();
    var m = fechaActual.getMonth() - fecha_nac.getMonth();
    var d = fechaActual.getDay() - fecha_nac.getDay();
    if (d < 0) {
        m--;
        var ultimoDiaMesAnterior = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 0).getDate();
        d = ultimoDiaMesAnterior + d;
    }

    if (m < 0) {
        
        edad--;
        m = 12 + m;
    }

    document.getElementById("resultado").innerHTML = "Edad: " + edad + " años, " + m + " meses, " + d + " días";
}

function tercerPunto(){
    var x = document.getElementById("valor_fx").value;
    var numerador = (x-1)
    var denominador = (x+2)*(x-2)
    var funcion = numerador/denominador 

    alert(funcion)
    document.getElementById("resultado_funcion").innerHTML = "el resultado de la funcion es: " + funcion;

}

let numFilas;
let numColumnas;

function cuartoPunto(){
    numFilas = document.getElementById("numFilas").value;
    numColumnas = document.getElementById("numColumnas").value;

    if (numFilas <= 0 || numColumnas <= 0) {
        alert("Ingrese valores válidos para las filas y columnas.");
        return;
    }

    const matriz_gen = generarMatrizAleatoria(numFilas, numColumnas);
    mostrarMatriz(matriz_gen);

}

function mostrarMatriz(matriz) {
    const Resultado = document.getElementById("mb");
    Resultado.innerHTML = "";

    for (const fila of matriz) {
        let filaStr = "<pre>"; 
        for (const numero of fila) {
            filaStr += numero + '\t';
        }
        Resultado.innerHTML += filaStr.trim() + '\n</pre>';
    }
}

function generarMatrizAleatoria(numFilas, numColumnas) {
    const matriz = [];
    for (let i = 0; i < numFilas; i++) {
        const fila = [];
        for (let j = 0; j < numColumnas; j++) {
            fila.push(Math.floor(Math.random() * 10));
        }
        matriz.push(fila);
    }
    return matriz;
}

function obtenerTranspuesta(matriz) {
    const numFilas = matriz.length;
    const numColumnas = matriz[0].length;
    const transpuesta = [];

    for (let i = 0; i < numColumnas; i++) {
        transpuesta[i] = [];
        for (let j = 0; j < numFilas; j++) {
            transpuesta[i][j] = matriz[j][i];
        }
    }
    return transpuesta;
}

function mostrar_transpuesta(){
    const matriz_gen = generarMatrizAleatoria(numFilas, numColumnas);
    const matrizTranspuesta = obtenerTranspuesta(matriz_gen);
    mostrarMatriz(matrizTranspuesta);
}

function calcularMatrizInversa(matriz) {
    if (numFilas !== numColumnas) {
        return "La matriz no es cuadrada, no se puede calcular la inversa.";
    }

    try {
        const inversa = math.inv(matriz);
        return inversa.toArray(); 
    } catch (error) {
        return "No se pudo calcular la inversa de la matriz.";
    }
}

function mostrar_inversa(){
    if (numFilas === numColumnas) {
        const matriz_gen = generarMatrizAleatoria(numFilas, numColumnas);
        const matrizInversa = calcularMatrizInversa(matriz_gen);
        mostrarMatriz(matrizInversa);
    }
       
}
