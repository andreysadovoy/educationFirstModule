// 3.3 Вывести количество элементов соответствующих условию
let array = [5,7,9,11,13,15,17,19]

TestFunction = (arr, val) => {
  let newArray = [];

  array.forEach((value, index) => {
    if(value > val) {
      newArray.push(value)}
  });
  return lengthFunction(newArray);
}

lengthFunction =(arr) => {
  let count = 0;

  array.forEach((value, index)=> {
    count = index + 1;
  });

  return count;
}

const t = TestFunction(array,5)
console.log(t)
