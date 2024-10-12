// Declaración de Función

function sumar() {
    console.log(10 + 10);
}

sumar() // Si manda resultado si esta antes de la funcion

// Expresión de la Función

const sumar2 = function() {
    console.log( 3 + 3);
}

sumar2(); // No manda resultado si esta antes de la funcion

// IIFE
(function() {
    console.log('Esto es una función')
})();