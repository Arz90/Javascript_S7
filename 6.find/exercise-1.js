//Dado el siguiente array, usa .find() para econtrar el número 100.


const numbers = [32, 21, 63, 95, 100, 67, 43];

const wantedNumber = 100;

const number = numbers.find(valor => valor === wantedNumber);

console.log(`El valor que buscamos es: ${number}`);




