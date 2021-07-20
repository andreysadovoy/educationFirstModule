// В функцию передаем два параметра: массив и значение. По результату выполнения вернуть все объекты массива, свойство 'year', которых не равно второму параметру.

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

const testFunction = (arr, val,) => {
  return arr.filter(value => !(value.year === val))};





const t = testFunction(collectionArr,1969);
console.log(t);
