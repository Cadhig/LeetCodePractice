function double(array) {
    const doubleArr = []
    for (const currentNum of array) {
        doubleArr.push(2 * currentNum)
    }
    return doubleArr
}

console.log(double([2, 3, 5]))
