import React from 'react'

function MoviesPoster({movies, text}) {
  return (
    <div className='mt-[-70px]'>
       <h1 className="text-3xl font-bold absolute mt-10 left-10"> {text} </h1>

{/* Scrollable movies poster container */}
<div className=" z-50 bg-[#000000de] py-14 px-8">
  <div className="flex gap-4 overflow-x-auto w-full scrollbar-hide">
    {/* Movie cards */}
    {movies.map((item, index) => (
      <div key={item.id} className="w-[20vw] h-[12vw] bg-zinc-100 mt-12 flex-shrink-0 cursor-pointer hide-scrollbar  ">
        <img
          src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
          alt="movies_poster"
          className="w-full h-full object-cover "
        />
      </div>
    ))}
  </div>
</div>
    </div>
  )
}

export default MoviesPoster
