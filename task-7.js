// В функцию передаем три параметра: массив и два значение.
//   По результату выполнения вернуть все элементы массива, которые равны второму или третьему параметру.

let array = [12,24,38,64,128,364,425,1028]
let collectionArr =[
  {
    name: "Ford",
    model: "Mustang",
    year: 1969
  },
  {
    name: "Ferrari",
    model: "Mustang",
    year: 1969
  },{
    name: "BMW",
    model: "Mustang",
    year: 1969
  },{
    name: "Ford",
    model: "Mustang",
    year: 1990
  }
];

const testFunction = (arr, val, val2) => {
  return arr.filter(value =>(value === val || value === val2));
}




const t = testFunction(array, 24,38);
console.log(t);
