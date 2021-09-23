import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const CloseButtonContainer = styled(TouchableOpacity)`
  margin: ${(props) => props.theme.space[1]};
  height: ${(props) => props.theme.sizes[4]};
  position: absolute;
  z-index: 9;
`;

export const CloseButton = ({ navigation }) => {
  const handleOnPress = () => {
    navigation.navigate("home");
  };
  return (
    <CloseButtonContainer onPress={handleOnPress}>
      <Ionicons name="ios-close-outline" size={50} color="white" />
    </CloseButtonContainer>
  );
};
