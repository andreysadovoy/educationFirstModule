// 3.2 Вывод всех элементов соответствующих значению/условию в массиве

let array = [10, 20, 130, 70, 80, 12];

let filtered = array.filter(
  function checkNumber( currentValue ) {
    return currentValue > 50;
  }
);

console.log( filtered );
