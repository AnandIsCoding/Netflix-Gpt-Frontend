import React, { useEffect, useState } from 'react';
import { API_OPTIONS } from '../utils/Constants';

function MainContainer({ title, description, id }) {
  const [trailerKey, setTrailerKey] = useState(null);

  const fetchTrailer = async () => {
    try {
      const raw = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_OPTIONS);
      const data = await raw.json();
      
      // Find the first trailer of type 'Trailer'
      const trailer = data.results?.find(video => video.type === 'Trailer' && video.site === 'YouTube');
      
      if (trailer) {
        setTrailerKey(trailer.key); // Set YouTube trailer key
      } else {
        console.error('Trailer not found');
      }
    } catch (error) {
      console.error('Error fetching trailer:', error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchTrailer();
    }
  }, [id]);

  return (
    <div className='text-black text-xl font-bold w-full relative h-[85%]'>
      <div className='px-10 z-10 '>
        <h1 className='text-[red] font-bold text-4xl mt-[50%] md:text-6xl md:mt-[13%] z-10 relative'>{title}</h1>
        <h1 className='w-[82%] font-semibold md:w-[50%] mt-3 mb-5 text-zinc-100 md:font-bold z-10 relative'>{description}</h1>
        <div className='flex gap-3 relative z-10'>
          <button className='bg-[red] text-white font-bold text-xl px-3 py-2 rounded-lg'>Play</button>
          <button className='bg-[white] text-[red] border-4 border-[red] font-bold text-xl px-3 py-2 rounded-lg'>More Info</button>
        </div>
      </div>

      {trailerKey && (
        <iframe
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&loop=1`} // Mute added for autoplay
          title="Movie Trailer"
          className="absolute  top-0 left-0 w-[100%] h-[100%] md:w-full md:h-full z-0 mt-[-39.5%] md:mt-[-13%] aspect-video opacity-60  "
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-black; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
}

export default MainContainer;
