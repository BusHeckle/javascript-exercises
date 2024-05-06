const repeatString = function(word, times) {
    //create a variable of string that is empty
    let string = "";
    //create a loop that repeats as many times as the variable "times"
    for (let i = 0; i < times; i++) {
        // add the variable word to the string each time
        string += word; 
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
