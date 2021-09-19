import { SafeAreaView, StatusBar, ImageBackground } from "react-native";
import styled from "styled-components/native";
import { Card, Button } from "react-native-paper";

export const HeaderWrapper = styled(Card)`
  flex: 0.4;
  background-color: #252250;
`;
export const Title = styled.Text`
  font-size: 36px;
  color: #fff;
  font-weight: bold;
`;
export const ImageCover = styled(ImageBackground)`
  flex: 1;
`;
export const Text = styled.Text`
  font-size: 16px;
  color: #fff;
  flex-direction: row;
  padding-left: 16px;
`;
export const TextContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding: 24px;
`;
export const TextDetails = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
`;

export const HeaderButton = styled(Button).attrs({
  mode: "contained",
  color: "#fff",
})`
  width: 100px;
  padding-left: 10px;
`;
