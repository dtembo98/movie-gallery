import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components/native";
import { Card, Button } from "react-native-paper";
import { ImageBackground, FlatList } from "react-native";

import { SafeArea } from "../../components/utility/safe-area.component";
import { MovieCard } from "../components/MovieCard/moviecard.component";
import { FavouriteMovieContext } from "../../services/favourites/favourites.context";
import { MemoizedMovieCard } from "../components/MovieCard/moviecard.component";
const FavouriteMoviesList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 0,
  },
})`
  flex: 1;
`;

const MovieCover = styled(Card.Cover)`
  background-color: gray;
  padding: 0px;
  width: 100px;
  height: 100px;
  margin: 5px;
`;

export const FavouriteMoviesScreen = ({ navigation }) => {
  const { favouriteMovies } = useContext(FavouriteMovieContext);

  return (
    <SafeArea>
      <FavouriteMoviesList
        data={favouriteMovies}
        numColumns={4}
        keyExtractor={(item) => {
          return `${item.originalTitle}${item.id}`;
        }}
        renderItem={({ item }) => (
          <MemoizedMovieCard navigation={navigation} movie={item} />
        )}
      />
    </SafeArea>
  );
};
