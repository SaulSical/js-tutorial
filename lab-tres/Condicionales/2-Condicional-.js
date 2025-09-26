/***
 * 
 *      SAUL DE JESUS SICAL YOC - 2024422 - IN5CV
 * 
 *      LAB - TRES
 * 
 *      condicionales
 *      
 *      EJERCICIO 2
 */
//Ejercicio 2

function calcularEdad(edad){
    if (edad >= 18 && edad <= 100) {
        console.log("Eres mayor de edad")
    } else if (edad <= 18 && edad > 0) {
        console.log("Eres menor de edad")
    }  else if (edad <= 0) {    
        console.log("No puede ser posible esa edad  ")

    }else if (edad => 100){
        console.log("Eres demasiado grande")
    }
}
let edad = 101
let edadFinal = parseInt(edad)

calcularEdad(edadFinal)