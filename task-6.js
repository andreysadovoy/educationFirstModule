// По результату выполнения вернуть все объекты массива, конкретное свойство ('make', 'model', 'year' и тд), которых равно второму параметру.

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
  return arr.filter(item =>(
    item.name === val
  ))

}





console.log(testFunction(collectionArr, "Ford"));




