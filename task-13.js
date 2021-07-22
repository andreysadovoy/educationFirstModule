// В функцию передаем два параметра: массив и название ключа.По результату выполнения вернуть массив значений по этому ключу всех объектов.

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
  const valuesArray = [];
  arr.filter(item => {
    valuesArray.push(item[val]);
    });
  return valuesArray

}

const t = (testFunction(collectionArr, "name"));
console.log(t)
