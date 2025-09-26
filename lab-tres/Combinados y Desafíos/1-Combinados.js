/***
 * 
 *      SAUL DE JESUS SICAL YOC - 2024422 - IN5CV
 * 
 *      LAB - TRES
 * 
 *      Combinados y Desafíos
 *      
 *      EJERCICIO 29
 */

//Ejercicio 1

let numeros = [5, 3, 8, 4, 2, 9, 1];
function OrdenarArreglo(numeros) {


console.log("Arreglo original:", numeros);

// Recorremos varias veces el arreglo
for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros.length - 1; j++) {
        // Si el número actual es mayor que el siguiente, los intercambiamos
        if (numeros[j] > numeros[j + 1]) {
            let temp = numeros[j];
            numeros[j] = numeros[j + 1];
            numeros[j + 1] = temp;
        }
    }
}
}

console.log(OrdenarArreglo(numeros));

console.log("Arreglo ordenado de menor a mayor:", numeros);
