/*
Probando For: Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un console log el array. Puedes usar este array:
*/
let placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}];
let arrayLength=placesToTravel.length;
for (let i = 0; i < arrayLength; i++) {
    let place = placesToTravel[i];
    if (place.id == 11 || place.id == 40) {
        placesToTravel.splice(i,1);
        arrayLength -- 1;
    }
}
//He buscado como mostrar un objeto entero
console.log(JSON.stringify(placesToTravel, null, 4));