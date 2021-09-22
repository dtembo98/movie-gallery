import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const FavouriteMovieContext = createContext();

export const FavouriteMovieContextProvider = ({ children }) => {
  const [favouriteMovies, setFavouritesMovies] = useState([]);

  useEffect(() => {
    loadFavouriteMovies();
  }, []);
  useEffect(() => {
    saveFavouriteMovie(favouriteMovies);
  }, [favouriteMovies]);

  const saveFavouriteMovie = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@favourutes", jsonValue);
    } catch (error) {
      console.log("error setting item");
    }
  };

  const loadFavouriteMovies = async (movieId) => {
    try {
      const value = await AsyncStorage.getItem("@favourutes");
      if (value !== null) {
        setFavouritesMovies(JSON.parse(value));
      }
    } catch (err) {
      console.log("error loading ", err);
    }
  };

  const addFavouriteMovie = (movie) => {
    console.log("add movie   ", movie);
    setFavouritesMovies([...favouriteMovies, movie]);
  };

  const removeFavouriteMovie = (movieId) => {
    // console.log("remove movie with id of  ", movieId);
    const newFavouriteMovies = favouriteMovies.filter(
      (movie) => movie.id == movieId
    );
    console.log("removed ", newFavouriteMovies);
    setFavouritesMovies(newFavouriteMovies);
  };

  return (
    <FavouriteMovieContext.Provider
      value={{
        favouriteMovies,
        addToFavouriteList: addFavouriteMovie,
        removeFromFavouriteList: removeFavouriteMovie,
      }}>
      {children}
    </FavouriteMovieContext.Provider>
  );
};
