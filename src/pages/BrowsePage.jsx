import React, { useEffect } from 'react';
import useNowPlayingMovies from '/hooks/useNowPlayingMovies';
import { useSelector } from 'react-redux';
import MainContainer from '../components/MainContainer';
import SecondaryContainer from '../components/SecondaryContainer';

function BrowsePage() {
    useNowPlayingMovies();

    // Correctly using useSelector to get nowPlayingMovies
    const nowPlayingMovies = useSelector(state => state.movies?.nowPlayingMovies);
    if(nowPlayingMovies === null ) return;
    const firstMovie = nowPlayingMovies[0];
    if(firstMovie === undefined) return;
    const {original_title, overview} = firstMovie;
    const movieId = firstMovie.id;
    // Log to verify the value
    console.log(firstMovie);

    return (
        <div className="min-w-screen min-h-screen mt-[-1px] ">
            <div className='w-full h-full absolute  text-white'>
                <MainContainer title={original_title} description={overview} id={movieId} />
                <SecondaryContainer moviesList={nowPlayingMovies} />
            </div>
        </div>
    );
}

export default BrowsePage;

//bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_medium.jpg')]

