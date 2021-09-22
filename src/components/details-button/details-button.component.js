import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const DetailsButtonContainer = styled(TouchableOpacity)`

  background-color:${(props) => props.theme.colors.ui.secondary};
  width: ${(props) => props.theme.sizes[5]};
  padding-left: ${(props) => props.theme.space[0]};
  margin: ${(props) => props.theme.space[1]};
  height:${(props) => props.theme.sizes[4]};
  justify-content: center;
  align-items:center
  border: ${(props) => props.theme.sizes[0]} ${(props) =>
  props.theme.colors.ui.secondary};
  border-radius:${(props) => props.theme.sizes[1]};

`;

export const DetailsButton = ({ navigation, movie }) => {
  const handleOnPress = () => {
    navigation.navigate("MovieDetails", { movie });
  };
  return (
    <DetailsButtonContainer onPress={handleOnPress}>
      <Ionicons name="information-circle-outline" size={24} color="red" />
    </DetailsButtonContainer>
  );
};
