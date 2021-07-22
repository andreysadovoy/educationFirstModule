

let array = [5, 8, 10, 105, 118, 234, 567, 90, 771]

testFunction = (arr) => {
  let max = -1;
arr.forEach(value => {
  if (value > max) {
    max = value;
  }
})

  return max
}


const t = testFunction(array);
console.log(t)
