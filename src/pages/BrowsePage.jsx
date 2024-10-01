import React, { useEffect } from 'react'
import {API_OPTIONS} from '../utils/Constants'

function BrowsePage() {

  const fetchData = async() =>{
      try{
          const raw = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', API_OPTIONS);
          const data = await raw.json();
          console.log(data.results)
      }catch(error){
        console.log(error + ' ' + ' ( error occurred in fetching data )')
      }
  }

  useEffect(() => {
    fetchData() // Fetch data on every page load
  },[])

  return (
    <div className="min-w-screen  min-h-screen mt-[-1px] bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_medium.jpg')] " >

      <div className='w-full h-[100%] absolute bg-[#000000c9]'>

      </div>

    </div>
  )
}

export default BrowsePage
