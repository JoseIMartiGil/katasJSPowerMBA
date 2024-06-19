/*
Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función:
*/

function average(param) {
    if(param.length>0){
            let suma = 0;
        for(let number of param){
            suma +=number;
        }
        return suma/param.length;
    }
    return 0;
}
const numbers = [1, 2, 3, 5, 45, 37, 58];
console.log(average(numbers));
