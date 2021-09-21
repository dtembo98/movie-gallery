import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { config } from "../../../services/config";
import {
  HeaderWrapper,
  Title,
  ImageCover,
  Text,
  TextContainer,
  TextDetails,
  HeaderButton,
  HeaderButtonContainer,
  HeaderLinearGradient,
} from "./header.styles";

export const Header = ({ movies = [] }) => {
  const [movie, setMovie] = useState({});
  const [genre, setGenre] = useState();

  useEffect(() => {
    const { genre, data } = movies[0];
    const firstMovie = data[0];
    setMovie(firstMovie);
    setGenre(genre);
  }, []);

  const image = {
    uri: movie
      ? config.BASE_IMAGE_URL + `/${config.IMAGE_SIZE.LG}` + movie.posterPath
      : null,
  };

  return (
    <HeaderWrapper>
      <ImageCover source={image}>
        <HeaderLinearGradient
        // Background Linear Gradient
        />
        <TextContainer>
          <Title> {movie ? movie.originalTitle : ""}</Title>
          <TextDetails>
            <Text>
              {genre ? genre : ""} | Rated |
              {movie
                ? movie.releaseDate
                  ? movie.releaseDate.split("-")[0]
                  : null
                : ""}
            </Text>
          </TextDetails>
          <HeaderButtonContainer>
            <HeaderButton>Details</HeaderButton>
            <HeaderButton>Add +</HeaderButton>
          </HeaderButtonContainer>
        </TextContainer>
      </ImageCover>
    </HeaderWrapper>
  );
};
