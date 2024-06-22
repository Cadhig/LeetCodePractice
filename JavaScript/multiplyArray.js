function multiplyArray(array){
    let num = 1;
    for (let i = 0; i < array.length; i++){
      num = num * array[i]
    }
    return num
  }
  console.log(multiplyArray([2, 3]))