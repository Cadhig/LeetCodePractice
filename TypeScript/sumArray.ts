function sumArr(array: number[]) {
    let num = 0;
    for (let i = 0; i < array.length; i++) {
        num += array[i]
    }
    return num
}
console.log(sumArr([2, 3, 7, 2]))