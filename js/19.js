// function sumar(n1, n2) {
//     return n1 + n2;
// }
// const resultado = sumar(2, 3);

// console.log(resultado);

let total = 0;

function agregaCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return 1.16 * total;
}

total = agregaCarrito(200);
total = agregaCarrito(400);
total = agregaCarrito(600);


console.log(total);

const totalAPagar = calcularImpuesto(total);

console.log(`El total a pagar con impuestos es de: $${totalAPagar}`);