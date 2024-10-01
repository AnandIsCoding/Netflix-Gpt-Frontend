import React from 'react'
import {API_OPTIONS} from '../src/utils/Constants'
import { useEffect } from 'react';
import { setNowPlayingMovies } from '../redux/NowPlayingMoviesSlice';
import { useDispatch } from 'react-redux';

function useNowPlayingMovies() {
  const dispatch = useDispatch();
    const fetchData = async() =>{
        try{
            const raw = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=&page=1', API_OPTIONS);
            const data = await raw.json();
            console.log(data.results)
            dispatch(setNowPlayingMovies(data.results));
            console.log(data.results)
        }catch(error){
          console.log(error + ' ' + ' ( error occurred in fetching data )')
        }
    }
  
    useEffect(() => {
      fetchData() // Fetch data on every page load
      
    },[])
}

export default useNowPlayingMovies;
