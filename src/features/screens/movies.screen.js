import React, { useContext, useState, useEffect } from "react";
import { SafeAreaView, SectionList, Text, FlatList } from "react-native";
import styled from "styled-components/native";

import { MoviesContext } from "../../services/movie.context";
import { Header } from "../components/header/header.component";
import { MovieCard } from "../components/MovieCard/moviecard.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;
const CardContainer = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const MoviesScreen = () => {
  const [movie, setMovie] = useState();
  const { movies } = useContext(MoviesContext);
  useEffect(() => {
    const singleMovie = movies[0];
    console.log(movies);
    if (singleMovie) {
      setMovie(singleMovie);
      console.log(movie);
    }
  }, []);

  return (
    <SafeArea>
      <Header />
      <CardContainer>
        <SectionList
          sections={movies}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => null}
          renderSectionHeader={(item) => {
            return (
              <>
                <Text>{item.section.title}</Text>
                <FlatList
                  data={item.section.data}
                  horizontal
                  renderItem={({ item }) => {
                    return <MovieCard />;
                  }}
                  keyExtractor={(item) => {
                    return `${item}`;
                  }}
                />
              </>
            );
          }}
        />
      </CardContainer>
    </SafeArea>
  );
};
