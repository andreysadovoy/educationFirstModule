// 3.1 Вернуть количество элементов массива.
  let array = [5,7,9,11,13,15];

TestFunction = (arr, val) => {
  array.forEach((value, index) => {
    if(value === val){
      console.log(value)
    }
  });

}

const t = TestFunction(array,5);
