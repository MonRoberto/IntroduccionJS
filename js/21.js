// Arrow Functions

const sumar2 = (n1, n2) => console.log( n1 + n2);
sumar2(5, 10);

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`)

aprendiendo('JavaScript');

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

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

// Foreach

meses.forEach( mes => {
    console.log(mes);
});

meses.forEach(mes => {
    if(mes == 'Marzo') {
        console.log('Marzo si existe');
    }
});
// Otras formas de hacerlo
// meses.forEach(mes => {
//     console.log(mes);
// })

// for (i in meses) {
//     console.log(i)
//     console.log(meses[i]);
// }
let resultado;
// Some ideal para arreglo de objetos
resultado = carrito.some( producto => producto.nombre === 'Celular');

// Reduce
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

// Filter
resultado = carrito.filter(producto => producto.precio > 400);

resultado = carrito.filter(producto => producto.nombre !== 'Celular');
console.log(resultado);
