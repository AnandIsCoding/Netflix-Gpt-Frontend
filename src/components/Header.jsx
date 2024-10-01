import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../redux/userSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebaseSetup'; // Import auth correctly from your Firebase setup file

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful
        dispatch(removeUser());
        navigate('/');
      })
      .catch((error) => {
        // Handle any error
        console.error('Error during sign out:', error);
      });
  };

  return (
    <div className='w-full bg-[#000000f4] top-0 py-4 px-5 flex justify-between items-center'>
      <img 
        src='https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460' 
        alt='logo' 
        className='w-[30vw] md:w-[10vw]' 
      />
      <button onClick={handleSignOut} className='bg-red-500 rounded-lg text-white font-bold text-xl px-3 py-2'>
        Sign out
      </button>
    </div>
  );
}

export default Header;
