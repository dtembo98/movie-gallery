import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { Card, Button } from "react-native-paper";

import { ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";

import { MovieCard } from "../components/MovieCard/moviecard.component";
import { SafeArea } from "../../components/utility/safe-area.component";
import { config } from "../../services/config";
import movieService from "../../services/movie.service";

const MovieDetailsCard = styled.View`
  flex: 0.7;
  background-color: blue;
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
  padding: 200px 30px 100px 25px;
`;

export const MovieDetailsScreen = ({ route }) => {
  const { movie } = route.params;
  const [movieDetails, setMovieDetails] = useState(null);
  const [movieCredits, setMovieCredits] = useState(null);
  const [directors, setDirectors] = useState([]);

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
        console.log("Directors sss", results.directors);
        const movieDirectors = results.crew.filter(
          (member) => member.job === "Director"
        );
        setMovieCredits(results);
        setDirectors(movieDirectors);
      }
    }
  };

  useEffect(() => {
    fetchMovieDetails();
    fetchMovieCredits();
  }, []);

  const image = {
    uri: movie
      ? config.BASE_IMAGE_URL + `/${config.IMAGE_SIZE.XL}` + movie.backdropPath
      : "https://lh3.googleusercontent.com/proxy/BOwUj6M_wMToA6jVxqt9ATQpbAk2uM50NmjLlXwpL9rmPOlXj6vcs05Qb5Laslx-MDIGSItnY0uqd5nlcJd1V-0if7VEE3yDX_ONZh3ZgISgIUojhmzxrjKa_kFGvVyl4lxJ583nVPdXroOuHLcS996vWvJk0LL9JIldrrLLKFBh4XXfcRHTQZVzJC8jo9o-waPtjQVsvkGU",
  };

  return (
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
          </TextContainer>
        </MovieDetailCardBlurView>
      </MovieDetailImageCover>
    </MovieDetailsCard>
  );
};
