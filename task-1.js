// 3.1 Вернуть количество элементов массива.
let array = [5,7,9,11,13,15];

lengthFunction = (array) => {
  let count = 0;

  array.forEach((value, index) => {
  count = index +1;
  });


  return count;
}

const t = lengthFunction(array);
console.log(t);
