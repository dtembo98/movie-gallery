import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { ImageBackground, FlatList, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  justify-content: space-between;
`;

export const MovieDetailsCard = styled.View`
  flex: 0.6;
  background-color: ${(props) => props.theme.colors.bg.tertiary};
`;
export const MovieDetailImageCover = styled(ImageBackground)`
  flex: 1;
  height: ${(props) => props.theme.sizes[3]};
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;

export const MovieDetailLinearGradient = styled(LinearGradient).attrs({
  start: { x: 0, y: 1 },
  end: { x: 1, y: 0 },
  colors: ["rgba(2,68,100, 0.8) 0%)", "transparent"],
})`
  flex: 1;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 100%;
`;

export const MovieDetailCardBlurView = styled(BlurView).attrs({
  intensity: 30,
  tint: "light",
})`
  position: absolute;
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`;

export const MovieTitle = styled.Text`
  color: ${(props) => props.theme.colors.ui.secondary};
  font-weight: bold;
  font-size: 36px;
`;
export const Overview = styled.Text`
  color: ${(props) => props.theme.colors.ui.secondary};
  margin-top: ${(props) => props.theme.sizes[1]};
  margin-bottom: ${(props) => props.theme.space[3]};
`;
export const Text = styled.Text`
  color: ${(props) => props.theme.colors.ui.secondary};
  margin-top: ${(props) => props.theme.sizes[1]};
`;

export const Crew = styled.View``;

export const TextContainer = styled.View`
  justify-content: flex-end;
  padding: 200px 30px 25px 25px;
`;

export const ActorsList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 10,
  },
})``;

export const ActorCardContainer = styled.View`
  flex: 0.4;
  background-color: ${(props) => props.theme.colors.ui.secondary};
  justify-content: space-between;
  align-items: center;
`;
export const ActorCard = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ActorCover = styled(Card.Cover)`
  background-color: gray;
  padding: 0px;
  width: 100px;
  height: 100px;
  margin: 5px;
`;

export const BoldTitle = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const ActorListTextHeader = styled.Text`
 color: black;
 margin: 10px;
 fontSize: 24px 
}`;

export const ActorText = styled.Text`
 color: black;
 fontSize: 16px 
}`;

export const ActorTextHeaderContain = styled.View`
  justify-content: flex-start;
  margin-bottom: 8px;
  padding-left: 8px;
`;
