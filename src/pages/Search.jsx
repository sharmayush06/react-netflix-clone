import React, { useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import SearchSkeleton from "./SearchSkeleton";

function Search() {

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {

    e.preventDefault();

    setLoading(true);

    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    );

    setMovies(response.data.results);
    setLoading(false);
  };

  return (

    <div className="bg-black text-white min-h-screen p-10">

      <form onSubmit={handleSearch} className="mb-10">

        <input
          className="p-3 rounded bg-gray-800 w-full"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

      </form>

      {loading ? (
        <SearchSkeleton />
      ) : (

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}

        </div>

      )}

    </div>
  );
}

export default Search;