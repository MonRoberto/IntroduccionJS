//"use strict"; // Correr JS en modo estricto
// Objetos

const producto = {
    nombreProducto: "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true,
}

Object.freeze(producto);
// Object.seal(producto); // Se puede modificar elementos

producto.imagen = 'imagen.jpg';
//producto.precio = 'NUEVO PRECIO';

console.log(Object.isFrozen(producto));
// delete producto.precio;
console.log(producto);