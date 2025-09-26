/***
 * 
 *      SAUL DE JESUS SICAL YOC - 2024422 - IN5CV
 * 
 *      LAB - TRES
 * 
 *      condicionales
 *      
 *      EJERCICIO 30
 */
//Ejercicio 2
let numeros = [5, 3, 8, 4, 2, 9, 1];
let suma = 0;

function sumaAritmetica(numeros) {
    
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma;
}

console.log(sumaAritmetica(numeros));