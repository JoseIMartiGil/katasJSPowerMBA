/*
Usa includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.
*/
const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];
function includeText(param,value){
    let counter=0;
    for (const word of param) {
        if(word.includes(value)){
            counter++
        }
    }
    return counter;
}
console.log(includeText(products,'Camiseta'));