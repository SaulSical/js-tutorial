/**
 * 
 * 
 * 
 *      Ciclos -> FOR
 */


    
let lista = ["comer", "dormir", "code", "repetir"]

for (let i = 0; i < lista.length; i++) {
  //  console.log(lista[i]);
    
}


//  For/Of ---------->
let canasta = ["manzanas", "naranjas", "Mangos", "Uvas"]

for (fruta of canasta) {
   /// console.log(fruta)
}

//  For/In
//  --> itera sobre las propedades de un objeto 

const canastaDeFrutas ={
    nombre : "manzana",
    precio : 5.0,
    tipo   : "verde",
    marca  : "Chanit`s apples"
}

for (fruta in canastaDeFrutas) {
    //console.log(fruta)

}

for (fruta in canastaDeFrutas) {
    console.log(`${fruta} : ${canastaDeFrutas[fruta]}`)
}

for(fruta of canastaDeFrutas){
    console.log(fruta)
}