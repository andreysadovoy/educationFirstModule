// В функцию передаем коллекцию и 2 значения. По результату выполнения вернуть true, если хотя бы у одного объекта свойство 'name' равно второму параметру, а свойство 'year' равно третьему параметру.

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
  let result = false;
  arr.forEach(value => {
    if (value.name === val || value.year === val2) {
      result = true;
    }

  })
  return result
}

const t = testFunction(collectionArr,'Ford',1969);
console.log(t);
