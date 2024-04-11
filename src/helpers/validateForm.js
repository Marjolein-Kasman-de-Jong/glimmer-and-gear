import checkForCapital from "./checkForCapital";
import checkForNumber from "./checkForNumber";
import checkForAtSign from "./checkForAtSign";
import checkForDot from "./checkForDot";

function validateForm({username, email, password}, form) {
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
    
    // Validate email (registration form only)
    const atSign = checkForAtSign(email);
    const dot = checkForDot(email);
    if (form === 'registration' && (!atSign || !dot)) {
        errorMessages['emailError'] = 'Email must contain an at sign and a dot.'
    }

    return errorMessages;
}

export default validateForm;