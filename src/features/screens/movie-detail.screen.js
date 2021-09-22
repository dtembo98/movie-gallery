import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { Card, Button } from "react-native-paper";

import { ImageBackground, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";

import { MovieCard } from "../components/MovieCard/moviecard.component";

import { config } from "../../services/config";
import movieService from "../../services/movie.service";

const MovieDetailsCard = styled.View`
  flex: 0.6;
  background-color: grey;
`;
const MovieDetailImageCover = styled(ImageBackground)`
  flex: 1;
  height: 15px;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;

const MovieDetailLinearGradient = styled(LinearGradient).attrs({
  start: { x: 0, y: 1 },
  end: { x: 1, y: 0 },
  colors: ["rgba(2,68,100, 0.8) 0%)", "transparent"],
})`
  flex: 1;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 100%;
`;

const MovieDetailCardBlurView = styled(BlurView).attrs({
  intensity: 30,
  tint: "light",
})`
  position: absolute;
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`;

const MovieTitle = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 36px;
`;
const Overview = styled.Text`
  color: #fff;
  margin-top: 5px;
  margin-bottom: 20px;
`;
const Text = styled.Text`
  color: #fff;
  margin-top: 5px;
`;

const Crew = styled.View``;

const TextContainer = styled.View`
  justify-content: flex-end;
  padding: 200px 30px 25px 25px;
`;

const ActorsList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 0,
  },
})`
  flex: 0.3;
`;

const ActorCard = styled(Card)`
  margin-left: 5px;
  padding: 0;
`;

const ActorCover = styled(Card.Cover)`
  background-color: gray;
  padding: 0px;
  width: 100px;
  height: 100px;
  margin: 5px;
`;
const formatTime = (time) => (time < 10 ? `0${time}hrs` : time + " min");

export const MovieDetailsScreen = ({ route }) => {
  const { movie } = route.params;
  const [movieDetails, setMovieDetails] = useState(null);
  const [movieCredits, setMovieCredits] = useState(null);
  const [directors, setDirectors] = useState([]);
  const [actors, setActors] = useState([]);

  const fetchMovieDetails = async () => {
    if (movie) {
      const results = await movieService.geMovieDetails(movie.id);
      if (results) {
        setMovieDetails(results);
      }
    }
  };
  const fetchMovieCredits = async () => {
    if (movie) {
      const results = await movieService.geMovieCredits(movie.id);
      if (results) {
        const movieDirectors = results.crew.filter(
          (member) => member.job === "Director"
        );
        setMovieCredits(results);
        setDirectors(movieDirectors);
        setActors(results.cast);
      }
    }
  };

  const Actor = ({ actor = {} }) => {
    const image = {
      uri: actor.profilePath
        ? config.BASE_IMAGE_URL + `/${config.IMAGE_SIZE.SM}` + actor.profilePath
        : config.NO_IMAGE,
    };
    return <ActorCover source={image} />;
  };

  useEffect(() => {
    fetchMovieDetails();
    fetchMovieCredits();
  }, []);

  const image = {
    uri: movie
      ? config.BASE_IMAGE_URL + `/${config.IMAGE_SIZE.XL}` + movie.backdropPath
      : config.NO_IMAGE,
  };

  return (
    <>
      <MovieDetailsCard>
        <MovieDetailImageCover source={image}>
          <MovieDetailCardBlurView>
            <MovieDetailLinearGradient
            // Background Linear Gradient
            />
            <TextContainer>
              <MovieTitle>{movie.originalTitle}</MovieTitle>
              <Overview numberOfLines={4} ellipsizeMode="tail" t>
                {movie.overview}
              </Overview>
              <Crew>
                <Text numberOfLines={1} ellipsizeMode="tail" t>
                  Starring :{" "}
                  {movieCredits
                    ? movieCredits.cast.map((actor) => `${actor.name},`)
                    : null}
                </Text>
                <Text numberOfLines={1} ellipsizeMode="tail" t>
                  {movieCredits
                    ? directors.length > 1
                      ? "DIRECTORS"
                      : "DIRECTOR"
                    : null}
                  {"  "}: {"  "}
                  {movieCredits
                    ? directors.map((director) => `${director.name},`)
                    : null}
                </Text>
                <Text>Release Date: {movie.releaseDate}</Text>
              </Crew>
              <Text>
                Runtime {movieDetails ? formatTime(movieDetails.runtime) : null}{" "}
                | Rated {movie.adult ? "R" : "G"} |{" "}
                {movieDetails ? movieDetails.genres[0].name : null}
              </Text>
            </TextContainer>
          </MovieDetailCardBlurView>
        </MovieDetailImageCover>
      </MovieDetailsCard>
      <ActorsList
        numColumns={4}
        data={actors}
        ListHeaderComponent={
          <Text style={{ color: "black", margin: 10, fontSize: 24 }}>
            Actors
          </Text>
        }
        renderItem={({ item }) => {
          return <Actor actor={item} />;
        }}
        keyExtractor={(item) => item.name}
      />
    </>
  );
};
