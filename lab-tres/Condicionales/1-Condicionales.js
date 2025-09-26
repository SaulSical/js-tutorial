/***
 * 
 *      SAUL DE JESUS SICAL YOC - 2024422 - IN5CV
 * 
 *      LAB - TRES
 * 
 *      condicionales
 *      
 *      EJERCICIO 1 
 */

//Ejercicio 1

function calcularPositivoNegativo(USuarioNumero){

    if(USuarioNumero > 0){
        console.log("El numero es positivo")
    }else if(USuarioNumero < 0){
        console.log("El numero es negativo")
    }else{
        console.log("El numero es 0")
    }
}

let numero = -10000
let numeroFinal = parseInt(numero)

calcularPositivoNegativo(numeroFinal)


