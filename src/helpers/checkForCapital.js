function checkForCapital(word) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) {
            return true;
        }
    }
    return false;
}

export default checkForCapital;