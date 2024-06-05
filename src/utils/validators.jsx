
import  { isValidEmail, isValidUsername } from '6pp';

export const usernameValidator = (username) => {
    if (!isValidUsername(username))
    return { isValid: false, errorMessage: "No you can't do that here" }
};

export const emailValidator = (email) => {
    if (!isValidEmail(email))
    return { isValid: false, errorMessage: "Breath first, check and re-type your email" }
};

