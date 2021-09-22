import React, { useContext, useState, useEffect } from "react";
import { SafeAreaView, SectionList, Text, FlatList } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { MoviesContext } from "../../services/movie.context";
import { FavouriteMovieContext } from "../../services/favourites/favourites.context";
import { Header } from "../components/header/header.component";
import { MovieCard } from "../components/MovieCard/moviecard.component";
import { MemoizedMovieCard } from "../components/MovieCard/moviecard.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;
const CardContainer = styled.View`
  flex: 0.7;
  background-color: #fff;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;
const MyMovieListContainer = styled.View`
  flex: 0.3;
  padding:10px
  margin-bottom: 60px;
  
`;

const MovieText = styled.Text`
  margin-left:30%
  justify-content: center;
  align-items: center;
`;
const MyMovieHeader = styled.Text`
  justify-content: flex-start;
`;

const MyFavouriteMovies = styled(FlatList)``;
const HorizontalRender = ({ item, navigation }) => (
  <>
    <Text>{item.section.genre}</Text>
    <FlatList
      data={item.section.data}
      horizontal
      renderItem={({ item }) => {
        return <MemoizedMovieCard navigation={navigation} movie={item} />;
      }}
      keyExtractor={(item) => {
        return `${item.originalTitle}${item.id}`;
      }}
    />
  </>
);

export const MoviesScreen = ({ navigation }) => {
  const { movies, isLoading } = useContext(MoviesContext);
  const { favouriteMovies } = useContext(FavouriteMovieContext);
  console.log(favouriteMovies);

  return (
    <SafeArea>
      {isLoading ? (
        <LoadingContainer>
          <Loading size={100} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      ) : (
        <>
          <Header navigation={navigation} movies={movies} />

          <CardContainer>
            <MyMovieListContainer>
              <MyMovieHeader>My movies</MyMovieHeader>
              {favouriteMovies ? (
                <MyFavouriteMovies
                  data={favouriteMovies}
                  horizontal
                  keyExtractor={(item) => {
                    return `${item.originalTitle}${item.id}`;
                  }}
                  renderItem={({ item }) => {
                    return (
                      <MemoizedMovieCard navigation={navigation} movie={item} />
                    );
                  }}
                />
              ) : (
                <MovieText>No Movies added yet</MovieText>
              )}
            </MyMovieListContainer>
            <SectionList
              sections={movies}
              contentContainerStyle={{ paddingHorizontal: 10 }}
              keyExtractor={(item, index) => index}
              renderItem={({ item }) => <></>}
              renderSectionHeader={(item) => (
                <HorizontalRender navigation={navigation} item={item} />
              )}
            />
          </CardContainer>
        </>
      )}
    </SafeArea>
  );
};
