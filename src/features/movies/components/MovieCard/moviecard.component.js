import React, { useState, useEffect } from "react";
import { ImageBackground, TouchableOpacity, Text } from "react-native";
import { BlurView } from "expo-blur";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

import { config } from "../../../../services/config";
import { FavouriteButton } from "../../../../components/favourite-button/favourite-button.component";
import { DetailsButton } from "../../../../components/details-button/details-button.component";

const CardWrapper = styled(Card)`
  background-color: #252250;
  height: 200px;
  width: 150px;
  margin: 10px;
  border: 1px #fff;
`;
const CardImageCover = styled(ImageBackground)`
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

export const MovieCard = ({ movie = {}, navigation }) => {
  const [isCardPressed, setIsCardPressed] = useState(false);
  const [cardMovie, setCardMovie] = useState(null);

  useEffect(() => {
    if (movie) {
      setCardMovie(movie);
    }
  }, [movie]);

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

  return (
    <>
      <TouchableOpacity onPress={handlePress}>
        <CardWrapper>
          <CardImageCover source={image}>
            {isCardPressed ? (
              <MovieCardActions>
                <DetailsButton movie={movie} navigation={navigation} />
                <FavouriteButton movie={movie} />
              </MovieCardActions>
            ) : null}
          </CardImageCover>
        </CardWrapper>
      </TouchableOpacity>
    </>
  );
};

export const MemoizedMovieCard = React.memo(MovieCard);
