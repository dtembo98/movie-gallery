import React, { useContext, useEffect } from "react";
import { SectionList, FlatList, ScrollView } from "react-native";
import { Colors } from "react-native-paper";

import { MoviesContext } from "../../../../services/movies/movie.context";
import { FavouriteMovieContext } from "../../../../services/favourites/favourites.context";
import { Header } from "../../components/header/header.component";
import { MemoizedMovieCard } from "../../components/MovieCard/moviecard.component";
import { FadeInView } from "../../../../components/animation/fade.animation";
import {
  SafeArea,
  CardContainer,
  Loading,
  LoadingContainer,
  MyMovieListContainer,
  NoMovieText,
  MoviesHeaderText,
  GenreListHeadingContainer,
  GenreTextContainer,
  GenreText,
} from "./movie.styles";

const HorizontalRender = ({ item, navigation }) => (
  <>
    <GenreTextContainer>
      <GenreText>
        {item.section.genre}
        {`(${item.section.data.length})`}
      </GenreText>
    </GenreTextContainer>

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

  useEffect(() => {}, [favouriteMovies]);

  return (
    <SafeArea>
      {isLoading ? (
        <LoadingContainer>
          <Loading size={100} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      ) : (
        <>
          <Header navigation={navigation} movies={movies} />
          <GenreListHeadingContainer>
            <MoviesHeaderText>My Movies </MoviesHeaderText>
          </GenreListHeadingContainer>
          <MyMovieListContainer>
            {favouriteMovies.length > 0 ? (
              <ScrollView horizontal={true} scrollEventThrottle={16}>
                {favouriteMovies.map((item) => (
                  <MyMovieListContainer key={`${item.originalTitle}${item.id}`}>
                    <MemoizedMovieCard movie={item} navigation={navigation} />
                  </MyMovieListContainer>
                ))}
              </ScrollView>
            ) : (
              <NoMovieText>No Movies added yet</NoMovieText>
            )}
          </MyMovieListContainer>
          <GenreListHeadingContainer>
            <MoviesHeaderText>Movies by genre</MoviesHeaderText>
          </GenreListHeadingContainer>

          <CardContainer>
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
