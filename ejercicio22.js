/*
Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. 
Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.
*/
function randint(min, max) {
  return Math.round((Math.random() * Math.abs(max - min)) + min);
}
const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];
for (let i = 0; i < foodSchedule.length; i++) {
    if(!foodSchedule[i].isVegan){
      fruit_index=randint(0,(fruits.length-1));
      foodSchedule[i].name= fruits[fruit_index];
      foodSchedule[i].isVegan =true;
      fruits.splice(fruit_index,1);
  }
}

console.log(JSON.stringify(foodSchedule, null, 4));
console.log(JSON.stringify(fruits, null, 4));
