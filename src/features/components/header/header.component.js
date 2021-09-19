import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { config } from "../../../services/config";
import {
  HeaderWrapper,
  Title,
  ImageCover,
  Text,
  TextContainer,
  TextDetails,
  HeaderButton,
} from "./header.styles";

export const Header = () => {
  return (
    <HeaderWrapper>
      <ImageCover
        source={{
          uri: config.BASE_IMAGE_URL + "w1280/bZnOioDq1ldaxKfUoj3DenHU7mp.jpg",
        }}>
        <LinearGradient
          // Background Linear Gradient
          colors={[
            "to left, rgba(2,68,100, 0.8) 0%, rgba(2,68,100, 0) 100%,)",
            "transparent",
          ]}
          style={styles.background}
        />
        <TextContainer>
          <Title> The burnout</Title>
          <TextDetails>
            <Text>Action | Rated R | 2020</Text>
          </TextDetails>
          <HeaderButton>Details</HeaderButton>
        </TextContainer>
      </ImageCover>
    </HeaderWrapper>
  );
};
const styles = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
});
