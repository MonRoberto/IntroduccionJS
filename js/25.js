const carrito = [
    { nombre: 'Monitor 20 pulgadas', precio: 500},
    { nombre: 'Television 50 pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Boncinas', precio: 300},
    { nombre: 'Laptop', precio: 800}
];

// ForEach
carrito.forEach( producto => console.log(producto.nombre));

// map
const arreglo2 = carrito.map( producto => `${producto.nombre} - ${producto.precio}`);
console.log(arreglo2);