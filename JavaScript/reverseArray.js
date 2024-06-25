function reverse(array) {
    let reversedArray = []
    for (let i = array.length - 1; i >= 0; i--) {
        const currentNum = array[i]
        reversedArray.push(currentNum)
    }
    return reversedArray
}

console.log(reverse([11, 12, 13, 14]))