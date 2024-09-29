import React from 'react'
import Login from './components/Login'
import {Routes, Route} from 'react-router'

function App() {
  return (
    <div className=' min-w-full min-h-full  '>
     
      <Routes>
         
         <Route path="/login" element={<Login />} />
        
      </Routes>
    </div>
  )
}

export default App
