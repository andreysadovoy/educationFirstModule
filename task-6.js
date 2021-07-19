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
  collectionArr.forEach(item =>{
    if (item.name === val) {
      console.log(item)
    }
  })
}




const t = testFunction(collectionArr, "Ford");
console.log(t);




