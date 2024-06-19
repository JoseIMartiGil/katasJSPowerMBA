/*
Buscar la palabra más larga Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
Puedes usar este array para probar tu función:
*/
function findLongestWord(param) {
    return param.sort(function(a, b) {return b.length - a.length})[0];
}
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

console.log(findLongestWord(avengers));