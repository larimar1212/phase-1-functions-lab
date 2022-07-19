function distanceFromHqInBlocks(blockNumber) {
    if (blockNumber > 42) {
        return blockNumber - 42;
    } else {
        return 42 - blockNumber;
    }
    }

    function distanceFromHqInFeet(blockNumber) {
        return distanceFromHqInBlocks(blockNumber) * 264;                                                         
    }

function distanceTravelledInFeet(start, destination) {
    if (start < destination) {
        return (destination - start) * 264;
    } else {
        return (start - destination) * 264
    }
}


function calculatesFarePrice (start, destination) {
    const distance = distanceTravelledInFeet(start.destination);

    if (distance <=400) { // distance first 400 ft are free
        return 0;
    } else if (distance > 400 && distance <= 2000) {// distanc
        return .02 * (distance -400) ; // returning price per foot .2
   } else if (distance > 2000 && distance < 2500) {
    return 25; 
   } else {
    return "cannot travel that far"
   }
}
    


// company wants me to write a function that takes
// return has to be the number of blocks from the 
// HQ on 42nd. ex 50 loxcation, return sould be 8


// 2nd , use the previous function's return value 
// to translate the number of blocks from Hq to feet
// make a functin
//  function variableName(parameter) {
    // return newvariableName(parameter) * 264;
    
    

// 3rd, write a function that takes the start
// and destination and returns the number of ft 
// travelled.
// function variableName(start, destination) {
    // return read the index.js

// 4th using the previous test's start and ending block
// aka use the entire variable name and parameters since
//thats what you will be defining as a new variable with 
// a short name

// if (distance > 2000 && distance < 2500)
// return 25;

