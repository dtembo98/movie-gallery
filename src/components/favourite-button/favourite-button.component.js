import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Card, Button } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

import { FavouriteMovieContext } from "../../services/favourites/favourites.context";

const FavouriteButtonContainer = styled(TouchableOpacity)`

  background-color:${(props) => props.theme.colors.ui.secondary};
  width: ${(props) => props.theme.sizes[5]};
  padding-left: ${(props) => props.theme.space[0]};
  margin: ${(props) => props.theme.space[1]};
  height:${(props) => props.theme.sizes[4]};
  justify-content: center;
  align-items:center
  border: ${(props) => props.theme.sizes[0]} ${(props) =>
  props.theme.colors.ui.secondary};
  border-radius:${(props) => props.theme.sizes[1]};

`;

export const FavouriteButton = ({ movie }) => {
  const { favouriteMovies, addToFavouriteList, removeFromFavouriteList } =
    useContext(FavouriteMovieContext);
  const isFavouriteMovie = favouriteMovies.find((m) => m.id === movie.id);
  const handlePress = () => {
    if (!isFavouriteMovie) {
      addToFavouriteList(movie);
    } else {
      removeFromFavouriteList(movie);
    }
  };

  if (!movie) {
    return null;
  }

  return (
    <FavouriteButtonContainer onPress={handlePress}>
      <MaterialIcons
        name="favorite"
        size={24}
        color={isFavouriteMovie ? "red" : "black"}
      />
    </FavouriteButtonContainer>
  );
};
