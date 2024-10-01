import React, { useState, useRef } from 'react';
import { validateSignInData, validateSignUpData } from '../utils/ValidateLogin';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebaseSetup';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [isSignIn, setIsSignIn] = useState(true);
  const email = useRef(null);
  const fullName = useRef(null);
  const password = useRef(null);
  const [validationErrorMessage, setValidationErrorMessage] = useState(null);

  const navigate= useNavigate();
 

  const signInsignUpToggle = () => {
    setIsSignIn(!isSignIn);
    setValidationErrorMessage(null); // Reset error message on toggle
  };

  const handleSignInSignUpSubmit = async (event) => {
    event.preventDefault();
    let validationError;

    if (isSignIn) {
      // Validate sign-in data
      validationError = validateSignInData(email.current.value, password.current.value);
      setValidationErrorMessage(validationError);
      

// Inside handleSignInSignUpSubmit for sign-up
if (!validationError) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email.current.value, password.current.value);
    const user = userCredential.user;

    // Set the display name after creating the user
    await user.updateProfile({
      displayName: fullName.current.value || User ,
    });

    // Optionally, navigate to the next page or handle other tasks
    navigate('/browse');
  } catch (error) {
    const errorMessage = error.message;
    setValidationErrorMessage(errorMessage); // Display error message
    console.error('Error during sign-up:', error);
  }
}

    } else {
      // Validate sign-up data
      validationError = validateSignUpData(fullName.current.value, email.current.value, password.current.value);
      setValidationErrorMessage(validationError);

      if (!validationError) {
        try {
          await createUserWithEmailAndPassword(auth, email.current.value, password.current.value);
          // Handle successful sign-up (e.g., redirect or show a success message)
         
        } catch (error) {
          const errorMessage = error.message;
          setValidationErrorMessage(errorMessage); // Display error message
          console.error('Error during sign-up:', error);
        }
      }
    }
  };

  return (
    <div className="min-w-screen min-h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_medium.jpg')] flex items-center justify-center relative mt-[-19vw] md:mt-[-5vw]">
      <div className='w-full h-full absolute bg-[#0000006f]'></div>

      <div className='w-full flex justify-center items-center'>
        <form onSubmit={handleSignInSignUpSubmit} className='pt-14 pb-5 px-2 bg-black opacity-80 w-[82%] md:w-[27%]'>
          <h1 className='px-5 text-3xl font-bold mb-5 text-white opacity-100'> {isSignIn ? 'Sign In' : 'Sign Up'} </h1>
          <div className='flex flex-col gap-4 px-5 opacity-100'>
            {!isSignIn && (
              <input 
                ref={fullName} 
                type='text' 
                placeholder='Full Name' 
                className='px-3 py-2 rounded-lg bg-cyan-100 text-xl font-semibold text-black' 
                required
              />
            )}
            <input 
              ref={email} 
              type='email' 
              placeholder='Email address' 
              className='px-3 py-2 rounded-lg bg-cyan-100 opacity-100 text-xl font-semibold text-black' 
              required
            />
            <input 
              ref={password} 
              type='password' 
              placeholder='Password' 
              required 
              className='px-3 py-2 rounded-lg opacity-100 text-xl font-semibold bg-cyan-100 text-black'
            />
            {validationErrorMessage && (
              <p className='px-5 opacity-100 text-white text-lg font-semibold'>{validationErrorMessage}</p>
            )}
            <button className='px-5 py-2 rounded-lg bg-[red] opacity-100 text-white hover:bg-[#ea11e2] text-2xl font-bold mt-2'>
              {isSignIn ? 'Sign In' : 'Sign Up'}
            </button>
          </div>
          <h1 className='px-5 text-xl font-bold mt-6 mb-5 text-white opacity-100'>
            {isSignIn ? 'New to Netflix?' : 'Already registered'}  
            <span onClick={signInsignUpToggle} className={`${isSignIn ? 'text-blue-200' : 'text-blue-400'} cursor-pointer`}>
              {!isSignIn ? ' Sign In now' : ' Sign Up now.'}
            </span>
          </h1>
        </form>
      </div>
    </div>
  );
}

export default Login;
