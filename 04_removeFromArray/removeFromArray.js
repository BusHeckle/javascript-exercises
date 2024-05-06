const removeFromArray = function(inputArray, ...argumentsToRemove) {
    return inputArray.filter(item => !argumentsToRemove.includes(item));

};

// Do not edit below this line
module.exports = removeFromArray;
