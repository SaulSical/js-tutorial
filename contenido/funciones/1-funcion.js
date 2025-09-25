/**
 * Funciones  --> js -----> tipos de datos
 */

//Como due;os de una empresa necesitamos el descuento de un producto 

function calcularDescuento(precio, procentajeDescuento){
    const descuento = (precio * procentajeDescuento)/100
    const precioConDescuento = precio-descuento;

    return precioConDescuento;
}

const precioOriginal = 1000;
const procentajeDescuento = 15;
const precioFinal = calcularDescuento(precioOriginal,procentajeDescuento);

console.log("Precio Original Q."+ precioOriginal)
console.log("Descuento "+procentajeDescuento+"%")
console.log("Precio con descuento Q."+precioFinal)