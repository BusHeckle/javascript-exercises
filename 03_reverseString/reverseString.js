const reverseString = function(phrase) {
    const splitPhrase = phrase.split(""); //create an array containing input phrase e.g. "hello" > ["h","e","l","l","o"] 
    const splitPhraseReversed = splitPhrase.reverse(); //reverse splitPhrase e.g. ["o","l","l", "e","h"]
    const joinSplitPhrase = splitPhraseReversed.join(""); // join splitPhraseReversed into string e.g. "olleh"
    return joinSplitPhrase; //return joinSplitPhrase as final output
};

// Do not edit below this line
module.exports = reverseString;
