import React from "react";
import { Link } from "react-router-dom";

function Hero({ movie }) {

    if (!movie) return null;

    const background = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
    
    return (

    <div
        className="h-[80vh] bg-cover bg-center flex items-end"
        style={{ backgroundImage: `url(${background})` }}
    >

        <div className="bg-black w-full p-10">

        <h1 className="text-5xl font-bold mb-4">
            {movie.title}
        </h1>

        <p className="max-w-xl text-gray-300 mb-6">
            {movie.overview}
        </p>

        <div className="flex gap-4">

            <Link to={`/movie/${movie.id}`}>
            <button className="bg-white text-black px-6 py-2 rounded font-semibold">
                View Details
            </button>
            </Link>


        </div>

    </div>

    </div>

);
}

export default Hero;