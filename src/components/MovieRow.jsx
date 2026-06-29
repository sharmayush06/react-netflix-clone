import React from 'react'
import MovieCard from './MovieCard'

function MovieRow({ title, movies }) {
    return (
    <div className='mb-10'>
        <h2 className='text-2xl font-bold mb-4 px-6'>{title}</h2>

        <div className="flex gap-4 px-6 h-auto overflow-x-auto hide-scrollbar">
        {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
        ))}
        </div>

    </div>
    )
}

export default MovieRow