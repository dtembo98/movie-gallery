import React, { useContext } from "react";
import { MaterialIcons } from "@expo/vector-icons";

import { SafeArea } from "../../../../components/utility/safe-area.component";
import { FavouriteMovieContext } from "../../../../services/favourites/favourites.context";
import { MemoizedMovieCard } from "../../components/MovieCard/moviecard.component";
import {
  MyMovieListContainer,
  TextCover,
  BodyText,
  HeaderText,
  FavouriteMoviesList,
} from "./favourite-movies.styles";

export const FavouriteMoviesScreen = ({ navigation }) => {
  const { favouriteMovies } = useContext(FavouriteMovieContext);

  return (
    <SafeArea>
      <MyMovieListContainer>
        <HeaderText> My Movies </HeaderText>
        {favouriteMovies.length > 0 ? (
          <FavouriteMoviesList
            data={favouriteMovies}
            numColumns={2}
            keyExtractor={(item) => {
              return `${item.originalTitle}${item.id}`;
            }}
            renderItem={({ item }) => (
              <MemoizedMovieCard navigation={navigation} movie={item} />
            )}
          />
        ) : (
          <TextCover>
            <BodyText>
              Use the <MaterialIcons name="favorite" size={16} color="#fff" />{" "}
              icon
              {"   "}
              to add movies you want to keep track of{"\n"}. Things that you add
              will appear here.
            </BodyText>
          </TextCover>
        )}
      </MyMovieListContainer>
    </SafeArea>
  );
};
