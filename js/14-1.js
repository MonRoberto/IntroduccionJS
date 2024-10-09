// Arreglos o Arrays

const numeros = [10,20,30,40,50];

// const arreglo = ["Hola", 10, true, "si", null, {nombre: "Mon", trabajo: "Programador"}, [1,2,3]];
// console.log(arreglo);

// Acceder a los valores de un arreglo
// console.log(numeros[0]);
// console.log(numeros[1]);
// console.log(numeros[2]);
// console.log(numeros[3]);
// console.log(numeros[4]);

// Conocer la extensión de un arreglo
// console.log(meses.length);

// numero.forEach(function(numero) {
//     console.log(numero);
// })
// numeros[5] = 60; No tan común
// numeros[2] = 60;
numeros.push(60,70,80); // Al final del arreglo
numeros.unshift(-10,-20,-30); // Al inicio del arreglo

console.table(numeros);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
// meses.pop(); // ELimina el ultimo elemento
// meses.shift(); // Elimina el primer elemento

// meses.splice(2, 1);
// console.table(meses);

// Rest operator o Spread operator
const nuevoArreglo = [...meses, 'Junio']; // AL final
// const nuevoArreglo = ['Junio', ...meses]; // Al inicio
console.log(nuevoArreglo);