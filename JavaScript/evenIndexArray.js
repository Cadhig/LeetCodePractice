function evenIndex(array) {
    let evenIndexArr = []
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            evenIndexArr.push(array[i])
        }
    }
    return evenIndexArr
}

console.log(evenIndex([1, 9, 2, 4, 16, 3]))