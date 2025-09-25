/***
 * 
 * CONVERSIONES  -> EXPLICITAS E IMPLICITAS
 * 
 * 
 * 
 */

//COnversion Explicit Type Casting 
const String = '54'
const integer = parseInt(String)

//console.log(typeof String)
//console.log(typeof integer)

const float = parseFloat("3.14")
//console.log(typeof float)

const binario = '1010'

const decimal = parseInt(binario, 2)
//console.log(decimal)

const hexa='CAFE'
const decimalhex = parseInt(hexa, 16)
//console.log(decimalhex)

//Conversiones Implicit Type casting 
const resultado ='5'+3
//console.log(typeof resultado)

const sumaConBoleano = '3' + true
//console.log(sumaConBoleano)

const sumaConNumero = 2+true
//console.log(sumaConNumero)

const valoString = '20'
const valorNumero = 10
const valorBolean = true
const String2 = "--------------"
console.log(valoString+valoString)
console.log(valoString+valorNumero)
console.log(valoString+valorBolean)
console.log(String2)
console.log(valorNumero+valorNumero)
console.log(valorNumero+valoString)
console.log(valorNumero+valorBolean)
console.log(String2)
console.log(valorBolean+valorBolean)
console.log(valorBolean+ valorNumero)
console.log(valorBolean+ valoString)