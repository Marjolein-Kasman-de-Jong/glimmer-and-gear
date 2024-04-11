function checkForNumber(word) {
    for (let i = 0; i < word.length; i++) {
        if (!isNaN(parseInt(word[i]))) {
            return true;
        }
    }
    return false;
}

export default checkForNumber;