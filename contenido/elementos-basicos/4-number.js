/***
 * 
 * Tipo de Dato Numbre
 * 
 * 
 */

//Entero y decimal
const enter = 33
const decimal = 3.34
//notacion cientifica
const cientifica = 5e4
//infinito y Nan(No es un numero)
const infinito = Infinity
const noEsUnNumero = NaN
//Operaciones Aritmeticas
//Suma y Resta, multiplicacion y division
const suma = 5+6
const resta = 6-5
const multiplicacion = 3*5
const division = 16/4

//modulo y exponenciacion
const modulo = 16%8 //0
const exponenciacion = 2**4

//La presicion en JavaScript 
const resultado = 0.1 + 0.2 //0.3
//console.log(resultado)
//console.log(resultado.toFixed(1))
//console.log(resultado.toFixed(1) == 0.3)

//Operaciones avanzadas
const raizCuadrada =  Math.sqrt(16) //4
const valorAbsiluto = Math.abs(-7) //7
const aleatorio = Math.trunc(Math.random()*20+1) //Numero aleatorio entre 0 y 1 si no quiero cero solo se le suma +1, si no quiero decimal es Math.trunc(Math.random()*20+1)
//console.log(raizCuadrada)
//console.log(valorAbsiluto)
//console.log(aleatorio)

//Lenguajes de Programacion:

//Compilados: Java (JCM --> .java ---> .class --> .jar). C, C++

//Interpratdos: javaScrpit ---> lee  ---> ejecuta

const numero = 2
const boolean = true
//coNVERSION IMPLICIDAD
console.log(numero+boolean)