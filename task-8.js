// В функцию передаем коллекцию и 2 значения. По результату выполнения вернуть все объекты массива, у которых одно свойство ('name' )равно первому параметру или другое свойство ('year') равно второму параметру.

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
 return arr.filter(value => (value.name === val || value.year === val2));
}


const t = testFunction(collectionArr, "Ford",1990);
console.log(t);
