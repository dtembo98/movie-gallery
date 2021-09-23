import React from "react";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native";
import LottieView from "lottie-react-native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  justify-content: space-between;
`;
const SplashViewContainer = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const SplashScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <SplashViewContainer>
        <LottieView
          source={require("../../../../../assets/pop_anim.json")}
          autoPlay
          loop
          speed={1}
          onAnimationFinish={() => {
            navigation.navigate("home");
          }}
        />
      </SplashViewContainer>
    </SafeArea>
  );
};
