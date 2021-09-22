import { ImageBackground } from "react-native";
import styled from "styled-components/native";
import { Card, Button } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

export const HeaderWrapper = styled(Card)`
  flex: 0.5;
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
  padding: ${(props) => props.theme.space[3]};
`;
export const TextDetails = styled.View`
  flex-direction: row;
  margin-bottom: ${(props) => props.theme.space[0]};
  padding-left: ${(props) => props.theme.space[2]};
`;

export const HeaderButton = styled(Button).attrs({
  mode: "contained",
  color: "#fff",
})`
  width: ${(props) => props.theme.sizes[3]};
  padding-left: ${(props) => props.theme.space[0]};
  margin: ${(props) => props.theme.space[1]};
  height:30px
  justify-content: center;
  border: 1px #fff;
`;

export const HeaderButtonContainer = styled.View`
  width:20px
  flex-direction: row;
  margin: ${(props) => props.theme.space[1]};
`;

export const HeaderLinearGradient = styled(LinearGradient).attrs({
  colors: [
    "to left, rgba(2,68,100, 0.8) 0%, rgba(2,68,100, 0) 100%,)",
    "transparent",
  ],
})`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 300px;
`;
