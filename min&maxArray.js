function max(array) {
    let highestNum = array[0]
    for (let i = 0; i < array.length; i++) {
        let currentNum = array[i] //
        if (currentNum > highestNum) {
            highestNum = currentNum
        }
    }

    return highestNum;
}
console.log(max([100, 42, 300, 425, 500]))

function min(array) {
    let lowestNum = array[0]
    for (let i = 0; i < array.length; i++) {
        let currentNum = array[i] //
        if (currentNum < lowestNum) {
            lowestNum = currentNum
        }
    }

    return lowestNum;
}
console.log(min([100, 42, 300, 425, 500]))