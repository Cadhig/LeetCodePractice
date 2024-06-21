function even(array) {
    let evenNum = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            evenNum.push(array[i])
        }
    }
    return evenNum
}


console.log(even([1, 3, 4, 18, 20, 11, 1232]))