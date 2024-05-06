const sumAll = function(startNumber, endNumber) {

    let total = 0; //- create a variable to hold the final sum

    //check if start and end numbers are positive and integers first:

    if (startNumber < 0 || endNumber < 0 || !Number.isInteger(startNumber) || !Number.isInteger(endNumber) ){
        return "ERROR";
    } else {
        
        function sumAllNumbersBetween(startNumberSum, endNumberSum){
            //loop through the given numbers, on each iteration adding the number to the total:
            for (let i=startNumberSum; i <= endNumberSum; i++){
                total += startNumberSum;
                startNumberSum ++;
           }
           return total;
        }
        //Check if startNumber is smaller than endNumber...
        if (startNumber < endNumber) {
            //... if so, sumAllNumbersBetween
            sumAllNumbersBetween(startNumber, endNumber);
            
        } else {

            //Otherwise, startNumber is bigger than endNumber, so reverse numbers:
            sumAllNumbersBetween(endNumber, startNumber);
        }
        //finally, return the total:
        return total;
    }

}
// Do not edit below this line
module.exports = sumAll;
