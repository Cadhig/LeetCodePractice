function linearSearch(array, value){
    for(let i = 0; i < array.length; i++) {
      if (value === array[i]){
        return `your value was found in index ${i}`
      }
    }
    return 'Value not found'
  }
  console.log(linearSearch([1, 2, 3, 4], 3))