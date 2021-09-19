import React, { useState } from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";

import styled from "styled-components/native";
import { Card, Button } from "react-native-paper";
import { config } from "../../../services/config";
import { BlurView } from "expo-blur";

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
export const MovieCard = () => {
  const [isCardPressed, setIsCardPressed] = useState(false);
  return (
    <TouchableOpacity
      onPress={(event) => {
        setIsCardPressed(!isCardPressed);
      }}>
      <CardWrapper>
        <CardImageCover
          source={{
            uri:
              config.BASE_IMAGE_URL + "w1280/bZnOioDq1ldaxKfUoj3DenHU7mp.jpg",
          }}>
          {isCardPressed ? (
            <MovieCardActions>
              <MovieCardButton>Details</MovieCardButton>
              <MovieCardButton>+ Add</MovieCardButton>
            </MovieCardActions>
          ) : null}
          {/* <TitleContainer>
            <MovieTitle>movie card</MovieTitle>
          </TitleContainer> */}
        </CardImageCover>
      </CardWrapper>
    </TouchableOpacity>
  );
};
