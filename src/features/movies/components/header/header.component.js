import React, { useState, useEffect } from "react";

import { config } from "../../../../services/config";
import { FavouriteButton } from "../../../../components/favourite-button/favourite-button.component";
import { DetailsButton } from "../../../../components/details-button/details-button.component";
import { Text } from "../../../../components/typography/text.component";
import {
  HeaderWrapper,
  Title,
  ImageCover,
  TextContainer,
  TextDetails,
  HeaderButtonContainer,
  HeaderLinearGradient,
} from "./header.styles";

export const Header = ({ movies = [], navigation }) => {
  const [movie, setMovie] = useState({});
  const [genre, setGenre] = useState();

  const loadData = () => {
    const { genre, data } = movies[0];
    const firstMovie = data[0];
    setMovie(firstMovie);
    setGenre(genre);
  };

  useEffect(() => {
    loadData();
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
              {genre ? genre : ""} | Rated {movie.adult ? "R " : "G "} |{" "}
              {movie
                ? movie.releaseDate
                  ? movie.releaseDate.split("-")[0]
                  : null
                : ""}
            </Text>
          </TextDetails>
          <HeaderButtonContainer>
            <DetailsButton movie={movie} navigation={navigation} />
            <FavouriteButton movie={movie} />
          </HeaderButtonContainer>
        </TextContainer>
      </ImageCover>
    </HeaderWrapper>
  );
};
