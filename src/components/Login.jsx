import React, { useState, useRef } from 'react';
import {validateSignInData, validateSignUpData} from '../utils/ValidateLogin'

function Login() {

  const [isSignIn, setIsSignIn] = useState(true)
  const email = useRef(null);
  const fullName = useRef(null);
  const password = useRef(null)
  const [validationErrorMessage, setvalidationErrorMessage] = useState(null);


  const signInsignUpToggle = () =>{
    setIsSignIn(!isSignIn)
  }

  const handleSignInSignUpSubmit = (event) =>{
    event.preventDefault();
    if(isSignIn){
      console.log(email.current.value);
      console.log(password.current.value)
      setvalidationErrorMessage(validateSignInData(email.current.value, password.current.value))
    }else{
      console.log(fullName.current.value)
      console.log(email.current.value);
      console.log(password.current.value)
      setvalidationErrorMessage(validateSignUpData(fullName.current.value, email.current.value, password.current.value))
    }
    
    
  }

  return (
    <div className="min-w-screen min-h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_medium.jpg')] flex items-center justify-center relative">
      <div>
        
        <img 
          src='https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460' 
          alt='logo' 
          className='absolute top-0 left-1 w-[20vw]  md:w-[10vw] md:h-[4vw] shadow-black shadow-2xl border-b-[8px] border-[#8080809f]' 
        />
      </div>

      <div className='w-full flex justify-center items-center'>
          <form onSubmit={() => handleSignInSignUpSubmit(event)} className='pt-14 pb-5 px-2 bg-black opacity-80 w-[82%]  md:w-[27%]'>
              <h1 className='px-5 text-3xl font-bold mb-5 text-white opacity-100 '> {isSignIn ? 'SignIn' : 'SignUp'} </h1>
              <div className='flex flex-col gap-4 px-5 opacity-100 '>
                
                {
                  !isSignIn && <input ref={fullName} type='text' placeholder='Full Name' className='px-3 py-2 rounded-lg bg-cyan-100 text-xl font-semibold text-black ' required/>
                }

                <input ref={email} type='email' placeholder='Email address' className='px-3 py-2 rounded-lg bg-cyan-100 opacity-100 text-xl font-semibold text-black ' required/>
                <input ref={password} type='password' placeholder='Password' required className='px-3 py-2 rounded-lg opacity-100 text-xl font-semibold text-black'/> 
               {
               validationErrorMessage &&  <p className=' px-5 opacity-100 text-white text-lg font-semibold'> {validationErrorMessage} </p>
               }
                <button className='px-5 py-2 rounded-lg bg-[red] opacity-100 text-white hover:bg-[#ea11e2]  text-2xl font-bold mt-2 '> {isSignIn ? 'Sign In' : 'Sign Up'} </button>
              </div>
              <h1 className='px-5 text-xl font-bold mt-6 mb-5 text-white opacity-100 '> {isSignIn ? 'New to Netflix ?' : 'Already registered'}  <span onClick={signInsignUpToggle} className={`${isSignIn ? 'text-blue-200' : 'text-blue-400'} cursor-pointer `}> {!isSignIn ? 'Sign In now' : 'Sign Up now .'} </span> </h1>
          </form>
         
      </div>

    </div>
  );
}

export default Login;
