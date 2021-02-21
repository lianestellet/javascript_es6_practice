const array = [1, 2, 3, 4]

const sum = (acc, value) => {
    const result = acc + value
    console.log(acc, ' plus ', value, ' is ', result)
    return result
}

function sum_again (acc, value) {
    const result = acc + value
    console.log(acc, ' plus ', value, ' is ', result)
    return result
}

const sumOfArrayElements = array.reduce(sum_again, 0)