function multiply(array, num) {
    const multiplyArr = []
    for (const currentNum of array) {
        multiplyArr.push(num * currentNum)
    }
    return multiplyArr
}


console.log(multiply([2, 3, 5], 2))
