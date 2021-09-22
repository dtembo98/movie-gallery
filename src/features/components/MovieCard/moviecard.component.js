import React, { useState, useContext, useEffect } from "react";
import { FavouriteMovieContext } from "../../../services/favourites/favourites.context";
import { ImageBackground, TouchableOpacity } from "react-native";
import { BlurView } from "expo-blur";
import styled from "styled-components/native";
import { Card, Button } from "react-native-paper";

import { config } from "../../../services/config";
import { FavouriteButton } from "../../../components/favourite-button/favourite-button.component";
import { DetailsButton } from "../../../components/details-button/details-button.component";

const CardWrapper = styled(Card)`
  background-color: #252250;
  height: 200px;
  width: 150px;
  margin: 10px;
  border: 1px #fff;
`;
export const CardImageCover = styled(ImageBackground)`
  flex: 1;
  height: 15px;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 50%;
  resize-mode: contain;
`;

const MovieCardActions = styled(BlurView).attrs({
  intensity: 90,
  tint: "dark",
})`
  position: absolute;
  flex: 1;
  width: 150px;
  height: 200px;
  justify-content: center;
  align-items: center;
`;

export function MovieCard({ movie = {}, navigation }) {
  const [isCardPressed, setIsCardPressed] = useState(false);
  const [isAddedToList, setIsAddedToList] = useState(false);

  const [cardMovie, setCardMovie] = useState(null);
  const { favouriteMovies, addToFavouriteList, removeFromFavouriteList } =
    useContext(FavouriteMovieContext);

  useEffect(() => {
    const isFavouriteMovie = favouriteMovies.find(
      (favouriteMovie) => favouriteMovie.id === movie.id
    );
    setIsAddedToList(isFavouriteMovie);
  }, []);

  const handlePress = () => {
    setIsCardPressed(!isCardPressed);
  };

  const image = {
    uri: cardMovie
      ? config.BASE_IMAGE_URL +
        `/${config.IMAGE_SIZE.MD}` +
        cardMovie.posterPath
      : config.NO_IMAGE,
  };
  useEffect(() => {
    if (movie) {
      setCardMovie(movie);
    }
  }, []);
  return (
    <TouchableOpacity onPress={handlePress}>
      <CardWrapper>
        <CardImageCover source={image}>
          {isCardPressed ? (
            <MovieCardActions>
              <DetailsButton movie={movie} navigation={navigation} />
              <FavouriteButton movie={movie} />
            </MovieCardActions>
          ) : null}
          {/* <TitleContainer>
            <MovieTitle>movie card</MovieTitle>
          </TitleContainer> */}
        </CardImageCover>
      </CardWrapper>
    </TouchableOpacity>
  );
}

export const MemoizedMovieCard = React.memo(MovieCard);
