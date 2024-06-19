/*
Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:
pista (typeof)
*/
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
    if(param.length>0){
            let suma = 0;
        for(let element of param){
            if(typeof element=='number'){
                suma +=element;
            }else if(typeof element=='string'){
                suma +=element.length
            }
        }
        return suma/param.length;
    }
    return 0;
}
//console.log(typeof 1)
//console.log(typeof 'texto')
console.log(averageWord(mixedElements));