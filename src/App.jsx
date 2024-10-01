import React, { useEffect } from 'react'
import Login from './components/Login'
import {Routes, Route} from 'react-router'
import BrowsePage from './pages/BrowsePage'
import Header from './components/Header'
import { useDispatch } from 'react-redux'
import {getAuth,  onAuthStateChanged } from "firebase/auth";
import { auth} from './utils/firebaseSetup';
import { addUser, removeUser } from '../redux/userSlice'
import { useNavigate } from 'react-router-dom'

function App() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=>{  
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addUser({
          userName: user.displayName || 'Unknown User', // Fallback to default if displayName is not set
          userEmail: user.email,
          useruid: user.uid,
        }));
        // Navigate to the browse page if user is logged in
        navigate('/browse');
      } else {
        // User is signed out
        navigate('/');
      }
    });
  }, [dispatch, navigate]);
  

  return (
    <div className=' min-w-full min-h-full  '>
      <Header/>
     
      <Routes>
         <Route path='/' element={<Login  />} />
         <Route path='/browse' element= { <BrowsePage/> } />
        
        
      </Routes>
    </div>
  )
}

export default App
