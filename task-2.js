// 3.2 Вывод всех элементов соответствующих значению/условию в массиве
  let array = [5,7,9,11,13,15];

TestFunction = (arr, val) => {
  array.forEach((value, index) => {
    if(value === val){
      console.log(value)
    }
  });

}

const t = TestFunction(array,5);
