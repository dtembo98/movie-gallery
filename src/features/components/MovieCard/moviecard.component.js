import React, { useState } from "react";
import { ImageBackground, TouchableOpacity } from "react-native";

import styled from "styled-components/native";
import { Card, Button } from "react-native-paper";
import { config } from "../../../services/config";
import { BlurView } from "expo-blur";
import { useEffect } from "react/cjs/react.development";

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

const MovieTitle = styled.Text`
  color: #fff;
  font-weight: bold;
`;

const TitleContainer = styled.View`
  background-color: #013c5b;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 30px;
  padding: 6px;
  opacity: 0.7;
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
const MovieCardButton = styled(Button).attrs({
  mode: "outlined",
  color: "#fff",
})`
  width: 100px;
  padding-left: 10px;
  opacity: 1;
  margin: 4px;
  border: #fff 1px;
`;
export function MovieCard({ movie = {}, navigation }) {
  const [isCardPressed, setIsCardPressed] = useState(false);
  const [cardMovie, setCardMovie] = useState(null);
  const handlePress = () => {
    setIsCardPressed(!isCardPressed);
  };
  const handleDetails = () => {
    return navigation.navigate("MovieDetails", { movie });
  };
  const handleAdd = () => {
    console.log("Add");
  };

  const image = {
    uri: cardMovie
      ? config.BASE_IMAGE_URL +
        `/${config.IMAGE_SIZE.MD}` +
        cardMovie.posterPath
      : "https://lh3.googleusercontent.com/proxy/BOwUj6M_wMToA6jVxqt9ATQpbAk2uM50NmjLlXwpL9rmPOlXj6vcs05Qb5Laslx-MDIGSItnY0uqd5nlcJd1V-0if7VEE3yDX_ONZh3ZgISgIUojhmzxrjKa_kFGvVyl4lxJ583nVPdXroOuHLcS996vWvJk0LL9JIldrrLLKFBh4XXfcRHTQZVzJC8jo9o-waPtjQVsvkGU",
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
              <MovieCardButton onPress={handleDetails}>Details</MovieCardButton>
              <MovieCardButton onPress={handleAdd}>+ Add</MovieCardButton>
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
