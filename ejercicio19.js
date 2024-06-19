/*
Mixed For e includes: 
Usa un bucle for para recorrer todos los juguetes y elimina los que incluyan la palabra gato. 
Recuerda que puedes usar la función .includes() para comprobarlo. Puedes usar este array:
*/
let toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'},
    {id: 40, name: 'El perro antonio'}
];
let arrayLength=toys.length;
for (let i = 0; i < arrayLength; i++) {
    let object = toys[i];
    if(object.name.includes('gato')){
        toys.splice(i,1);
        arrayLength --;
        i--;
    }
}
//Usado previamente en ejercicio18.js
console.log(JSON.stringify(toys, null, 4));