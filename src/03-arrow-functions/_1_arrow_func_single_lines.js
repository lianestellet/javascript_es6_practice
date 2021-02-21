const array = [1, 22, 3, 4]

const biggestElement = array.reduce((acc, value) => value > acc ? acc = value : acc, 0)
console.log(biggestElement)