import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";

import { SafeArea } from "../../components/utility/safe-area.component";
import { Text } from "../../components/typography/text.component";
import { FavouriteMovieContext } from "../../services/favourites/favourites.context";
import { MemoizedMovieCard } from "../components/MovieCard/moviecard.component";

const MyMovieListContainer = styled.View`
  flex: 1;
  justify-content: center;
 padding-top:${(props) => props.theme.space[4]}
   padding-left:${(props) => props.theme.space[4]}
  background-color: ${(props) => props.theme.colors.ui.primary};
`;

const TextCover = styled.View`
flex:1
  justify-content: center;
  align-items: center;
`;

const FavouriteMoviesList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 0,
  },
})`
  flex: 1;
`;

export const FavouriteMoviesScreen = ({ navigation }) => {
  const { favouriteMovies } = useContext(FavouriteMovieContext);

  return (
    <SafeArea>
      <MyMovieListContainer>
        <Text variant="label"> My Movies </Text>
        {favouriteMovies.length > 0 ? (
          <FavouriteMoviesList
            data={favouriteMovies}
            numColumns={2}
            keyExtractor={(item) => {
              return `${item.originalTitle}${item.id}`;
            }}
            renderItem={({ item }) => (
              <MemoizedMovieCard navigation={navigation} movie={item} />
            )}
          />
        ) : (
          <TextCover>
            <Text variant="body">
              Use the + add button to add movies you want to keep track of.
              Things you add appear here.
            </Text>
          </TextCover>
        )}
      </MyMovieListContainer>
    </SafeArea>
  );
};
