function checkForAtSign(word) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] === '@') {
            return true;
        }
    }
    return false;
}

export default checkForAtSign;