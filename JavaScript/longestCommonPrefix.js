var lcp = function (strs) {
    const matchingLetters = [];
    // Loop through the letters of the first word
    const firstWord = strs[0];
    for (let i = 0; i <= firstWord.length; i++) {
        // Check if this character is present in the same position of every string, comparing every word to the first word.
        if (strs.every((string) => string[i] === firstWord[i])) {
            // If it is, add it to matchingLetters
            matchingLetters.push(firstWord[i]);
        }
    }

    // I get `undefined` as one of the letters, so im going to filter to only return valid letters
    return  matchingLetters.filter((letter) => letter);
};

console.log(lcp(['flowers', 'flow', 'flight', 'flock']))