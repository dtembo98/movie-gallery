import styled from "styled-components/native";
import { FlatList } from "react-native";

export const MyMovieListContainer = styled.View`
  flex: 1;
  justify-content: center;
 padding-top:${(props) => props.theme.space[4]}
   padding-left:${(props) => props.theme.space[4]}
  background-color: ${(props) => props.theme.colors.ui.primary};
`;

export const TextCover = styled.View`
flex:1
  justify-content: center;
  align-items: center;

`;

export const BodyText = styled.Text`
  font-size: ${(props) => props.theme.sizes[3]};
  color: ${(props) => props.theme.colors.ui.secondary};
`;

export const HeaderText = styled.Text`
  font-size: ${(props) => props.theme.sizes[4]};
  color: ${(props) => props.theme.colors.ui.secondary};
`;
export const FavouriteMoviesList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 0,
  },
})`
  flex: 1;
`;
