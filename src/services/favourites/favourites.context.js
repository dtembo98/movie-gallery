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

  const clearAllMovies = async () => {
    try {
      const jsonValue = JSON.stringify([]);
      await AsyncStorage.setItem("@favourutes", jsonValue);
      setFavouritesMovies([]);
    } catch (error) {
      console.log("error setting item");
    }
  };

  const addFavouriteMovie = (movie) => {
    setFavouritesMovies([...favouriteMovies, movie]);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteMovies = favouriteMovies.filter((m) => m.id !== movie.id);

    setFavouritesMovies(newFavouriteMovies);
  };

  return (
    <FavouriteMovieContext.Provider
      value={{
        favouriteMovies,
        addToFavouriteList: addFavouriteMovie,
        removeFromFavouriteList: removeFavouriteMovie,
        deleteAllMovies: clearAllMovies,
      }}>
      {children}
    </FavouriteMovieContext.Provider>
  );
};
