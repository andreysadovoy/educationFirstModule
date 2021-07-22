// В функцию передаем массив и значение. По результату выполнения вывести true, если в массиве объектов есть свойство, значение которого равное второму параметру.



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

const testFunction = (arr, val) => {
  let result = false;
  arr.forEach(value => {
    if (value.name === val) {
      result = true;
    }

  })
  return result
}

const t = testFunction(collectionArr,'Ford');
console.log(t);
