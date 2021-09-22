import React, { useState, useEffect } from "react";

import { config } from "../../../../services/config";
import movieService from "../../../../services/movies/movie.service";
import { CloseButton } from "../../components/close-button/close-button.component";
import {
  SafeArea,
  MovieDetailsCard,
  MovieDetailImageCover,
  MovieDetailLinearGradient,
  MovieDetailCardBlurView,
  MovieTitle,
  Overview,
  Text,
  Crew,
  TextContainer,
  ActorsList,
  ActorCardContainer,
  ActorCard,
  ActorCover,
  BoldTitle,
  ActorListTextHeader,
  ActorText,
  ActorTextHeaderContain,
} from "./movie-detail.styles";

const formatTime = (time) => (time < 10 ? `0${time}hrs` : time + " min");

export const MovieDetailsScreen = ({ route, navigation }) => {
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
    <SafeArea>
      <MovieDetailsCard>
        <CloseButton navigation={navigation} />
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
                  <BoldTitle> Starring</BoldTitle> :{" "}
                  {movieCredits
                    ? movieCredits.cast.map((actor) => `${actor.name},`)
                    : null}
                </Text>
                <Text numberOfLines={1} ellipsizeMode="tail" t>
                  <BoldTitle>
                    {" "}
                    {movieCredits
                      ? directors.length > 1
                        ? "DIRECTORS"
                        : "DIRECTOR"
                      : null}
                    {"  "}
                  </BoldTitle>
                  : {"  "}
                  {movieCredits
                    ? directors.map((director) => `${director.name},`)
                    : null}
                </Text>
                <Text>
                  <BoldTitle> Release Date </BoldTitle>: {movie.releaseDate}
                </Text>
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
      <ActorCardContainer>
        <ActorTextHeaderContain>
          <ActorListTextHeader>Actors</ActorListTextHeader>
        </ActorTextHeaderContain>
        <ActorsList
          data={actors}
          numColumns={3}
          renderItem={({ item }) => {
            return (
              <ActorCard>
                <Actor actor={item} />
                <ActorText>{item.originalName}</ActorText>
              </ActorCard>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      </ActorCardContainer>
    </SafeArea>
  );
};
