// LC 1518

const numWaterBottles = function(numBottles, numExchange) {
    let newBottles = numBottles //15
    let drank = numBottles 
    for(let i = 0; i <= numExchange; i++){
    if (newBottles >= numExchange){
        newBottles = newBottles / numExchange 
        drank = newBottles + drank
    }
    }
    return drank
    
};

console.log(numWaterBottles(15, 4))