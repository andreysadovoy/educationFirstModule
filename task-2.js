// 3.2 Вывод всех элементов соответствующих значению/условию в массиве

let array = [10, 20, 130, 70, 50, 80, 12];

const arraySearch = (arr, num) => {
  return arr.filter((currentValue, index) => currentValue === num)
}

console.log( arraySearch(array, 50));

