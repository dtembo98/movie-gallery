import React, { useState, createContext, useEffect } from "react";
import { moviesRequest, moviesTransform } from "./movie.service";

export const MoviesContext = createContext();
export const MoviesContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"],
    },
    {
      title: "Sides",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"],
    },
    {
      title: "Drinks",
      data: ["Water", "Coke", "Beer"],
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"],
    },
  ]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = async () => {
    const results = await moviesRequest();
    const transformedData = moviesTransform(results.data);

    //setMovies(transformedData.results);
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
