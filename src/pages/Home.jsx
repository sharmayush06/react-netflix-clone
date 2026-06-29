import React, { useEffect, useState } from 'react'
import axios from "axios";
import MovieRow from '../components/MovieRow';
import HomeSkeleton from './HomeSkeleton';
import Hero from "../components/Hero";

function Home() {

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  const [movies, setMovies] = useState({
    popular: [],
    trending: [],
    topRated: [],
    nowPlaying: [],
    upcoming: []
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchMovies = async () => {
      try {

        const popular = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
        const topRated = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`);
        const upcoming = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`);
        const nowPlaying = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`);
        const trending = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);

        setMovies({
          popular: popular.data.results,
          topRated: topRated.data.results,
          upcoming: upcoming.data.results,
          nowPlaying: nowPlaying.data.results,
          trending: trending.data.results
        });
        setLoading(false)

      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();

  }, []);
  const heroMovie = movies.trending[0];
  if (loading) {
    return <HomeSkeleton/>
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <Hero movie={heroMovie} />
      <MovieRow title="Trending Movies" movies={movies.trending} />
      <MovieRow title="Popular Movies" movies={movies.popular} />
      <MovieRow title="Top Rated Movies" movies={movies.topRated} />
      <MovieRow title="Upcoming Movies" movies={movies.upcoming} />
      <MovieRow title="Now Playing" movies={movies.nowPlaying} />

    </div>
  )
}

export default Home