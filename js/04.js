// String o cadenas de texto

const producto = "Monitor de 20\""; // o '"Monitor de 20"'
//const producto2 = String('Monitor 30 Pulgadas'); No son tan comun
//const producto3 = new String('Monitor 50 Pulgadas'); No son tan comun
const producto2 = "Monitor HD";
const producto3 = "Aprendiendo Javascript con el curso de desarrollo web completo";
const email = 'correo@correo.com';

console.log(producto);
console.log(producto2);
console.log(producto3.length); // Numero de caracteres que contiene la cadena de texto

//console.log(producto2)
//console.log(producto3)

// IndexOf (retorna posición)
const tweet = "Aprendiendo Javascript con el curso de desarrollo web completo";

console.log(tweet.indexOf('Javascript'));
console.log(producto2.indexOf('Tablet'));
console.log(email.indexOf('@'));

// Includes (retorna true o false)
console.log(tweet.includes('Javascript'));
console.log(producto2.includes('Tablet'));
