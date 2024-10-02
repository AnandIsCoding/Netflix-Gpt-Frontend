import React from 'react';
import MoviesPoster from './MoviesPoster';
import usePopularMovies from '/hooks/usePopularMovies';
import { useSelector } from 'react-redux';
import useUpcomingMovies from '/hooks/useUpcomingMovies';
import useTopRatedMovies from '../../hooks/useTopRatedMovies';

function SecondaryContainer({ moviesList }) {
  // Fetch popular and upcoming movies via hooks
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  
  // Get popular and upcoming movies from Redux store
  const popularMovies = useSelector(state => state.movies?.popularMovies);
  const upcomings = useSelector(state => state.movies?.upcomingMovies);
  const top_rated = useSelector(state => state.movies?.topRatedMovies);

  return (
    <div className="min-w-screen min-h-screen -z-50 mt-[-14%] opacity-100 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_medium.jpg')]">
      
      {/* Trending Movies */}
      {moviesList?.length > 0 && <MoviesPoster movies={moviesList} text={'Trending Movies'} />}
      
      {/* Popular Movies */}
      {popularMovies?.length > 0 && <MoviesPoster movies={popularMovies} text={'Popular Movies'} />}
      
      {/* Upcoming Movies */}
      {upcomings?.length > 0 && <MoviesPoster movies={upcomings} text={'Upcoming Movies'} />}

      {/*Top Rated Movies */}
      {top_rated?.length > 0 && <MoviesPoster movies={top_rated} text={'Top Rated'} />}
      
    </div>
  );
}

export default SecondaryContainer;
