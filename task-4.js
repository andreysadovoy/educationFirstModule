// По результату выполнения вернуть все номера элементов массива, которые меньше второго параметра.

let array = [10, 20, 130, 70, 80, 12];


const arraySearch = (arr, num) => {
  const indexArr = []
  arr.forEach((currentValue, index) => {
    if(currentValue < num) {
      indexArr.push(index)
    }
  })

  return indexArr
}

console.log( arraySearch(array, 50));

