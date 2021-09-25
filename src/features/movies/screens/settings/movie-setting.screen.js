import React, { useContext, useState, UseEffect } from "react";
import styled from "styled-components/native";
import { Button } from "react-native-paper";
import { TouchableOpacity } from "react-native";

import { SafeArea } from "../../../../components/utility/safe-area.component";
import { FavouriteMovieContext } from "../../../../services/favourites/favourites.context";

const Cover = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const SettingsButton = styled(Button)`
  color: red;
  background-color: #fff;
  width: 50%;
`;

export const MoviesSettingsScreen = ({ navigation }) => {
  const { favouriteMovies, deleteAllMovies } = useContext(
    FavouriteMovieContext
  );
  const handleOnPress = () => {
    deleteAllMovies();
  };

  return (
    <SafeArea>
      <Cover>
        <TouchableOpacity>
          <SettingsButton
            color="red"
            onPress={handleOnPress}
            disabled={favouriteMovies.length > 0 ? false : true}>
            Clear all my movies
          </SettingsButton>
        </TouchableOpacity>
      </Cover>
    </SafeArea>
  );
};
