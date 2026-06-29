import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {

    return (

    <Link to={`/movie/${movie.id}`}>

        <div className="min-w-44 bg-slate-800 rounded-lg hover:scale-105 transition duration-300">

        <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-64 object-cover"
        />

        <div className="p-3">
            <h3 className="text-sm font-semibold">{movie.title}</h3>
        </div>

        </div>

    </Link>

    );
}

export default MovieCard;