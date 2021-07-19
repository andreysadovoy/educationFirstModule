// В функцию передаем массив и значение. По результату выполнения вернуть номер последнего элемента массива, который равен второму параметру.


let array = [4, 2, 7, 4, 2, 8, 2];


const arraySearch = (arr, num) => {
  let number = -1;
  arr.forEach((element, index) => {
    if(element === num) {
      number = index;
    }
  })

  return number
}

console.log( arraySearch(array, 4));

