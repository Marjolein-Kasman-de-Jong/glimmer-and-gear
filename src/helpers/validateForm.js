import checkForCapital from "./checkForCapital";
import checkForNumber from "./checkForNumber";

function validateForm({username, email, password, info}) {
    const errorMessages = {};
    // Validate username
    if (username.length < 8) {
        errorMessages['usernameError'] = 'Username must be at least 8 characters long.';
    }
    // Validate password
    const capital = checkForCapital(password);
    const number = checkForNumber(password);
    if (password.length < 8 || !capital || !number) {
        errorMessages['passwordError'] = 'Password must be at least 8 characters long, contain at least 1 capital and 1 number.';
    }
    
    return errorMessages;
}

export default validateForm;