export const validateSignInData = (email, password) =>{
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if(!isEmailValid) return 'Email is not valid'
    if(!isPasswordValid) return 'Password is not valid'
    if(isEmailValid && isPasswordValid) return 'valid credentials'

}

export const validateSignUpData = (fullName, email, password) =>{
    const isfullNameValid = /^[A-Z][a-z]+( [A-Z][a-z]+)*$/.test(fullName);
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if(!isfullNameValid) return 'Full Name is not valid'
    if(!isEmailValid) return 'Email is not valid'
    if(!isPasswordValid) return 'Password is not valid'
    
    if(isEmailValid && isPasswordValid && isfullNameValid ) return 'valid credentials'

}