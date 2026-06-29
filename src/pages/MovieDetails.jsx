import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube"; // Don't forget to run: npm install react-youtube
import MovieDetailSkeleton from "./MovieDetialSkeleton";

function MovieDetail() {
  const { id } = useParams();
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  const [movie, setMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState(""); // State for the YouTube video ID

  useEffect(() => {
    const fetchMovieAndTrailer = async () => {
      try {
        // 1. Fetch the main movie details
        const movieResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
        );
        setMovie(movieResponse.data);

        // 2. Fetch the videos/trailers for this specific movie
        const videoResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`
        );

        // 3. Filter the results to find the official YouTube Trailer
        const trailer = videoResponse.data.results.find(
          (vid) => vid.site === "YouTube" && vid.type === "Trailer"
        );

        if (trailer) {
          setTrailerKey(trailer.key);
        }
      } catch (error) {
        console.error("Error fetching data from TMDB:", error);
      }
    };

    fetchMovieAndTrailer();
  }, [id, API_KEY]);

  // Settings for the YouTube player
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 0, // Set to 1 if you want it to play automatically
    },
  };

  if (!movie) {
    return <MovieDetailSkeleton />;
  }

  return (
    <div className="bg-black text-white min-h-screen p-10">
      {/* Changed to flex-col on small screens, flex-row on large screens (lg) */}
      <div className="flex flex-col lg:flex-row gap-10">
        
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className="w-80 rounded-lg shadow-lg"
          alt={movie.title} // Added alt text for accessibility
        />

        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
          
          {/* Formatted the rating to show 1 decimal place */}
          <p className="mb-3 text-yellow-400">
            ⭐ {movie.vote_average.toFixed(1)} / 10
          </p>
          
          <p className="text-gray-400 mb-4">
            Release Date: {movie.release_date}
          </p>
          
          <p className="max-w-xl text-lg leading-relaxed mb-8">
            {movie.overview}
          </p>

          {trailerKey ? (
            <div className="mt-8 max-w-2xl rounded-lg overflow-hidden border border-gray-800">
              <h2 className="text-2xl font-semibold mb-4">Watch Trailer</h2>
              <YouTube videoId={trailerKey} opts={opts} />
            </div>
          ) : (
            <p className="text-gray-500 italic mt-8">
              No official trailer available for this movie.
            </p>
          )}

        </div>
      </div>
    </div>
  );
}

export default MovieDetail;