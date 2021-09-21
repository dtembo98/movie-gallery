import React, { useState, createContext, useEffect } from "react";
import movieService from "./movie.service";

export const MoviesContext = createContext();
export const MoviesContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMovies = async () => {
    try {
      setIsLoading(true);
      const results = await movieService.getMoviesByGenre();
      if (results) {
        setMovies(results);
        setIsLoading(false);
      }
    } catch (err) {
      setError(err);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        isLoading,
        movies: movies,
        error: error,
      }}>
      {children}
    </MoviesContext.Provider>
  );
};
