import React from "react";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import styled from "styled-components";

import { MoviesContextProvider } from "./src/services/movies/movie.context";
import { FavouriteMovieContextProvider } from "./src/services/favourites/favourites.context";
import { Navigation } from "./src/infrastructure/navigation";
import { theme } from "./src/infrastructure/theme";
import { useNetInfo } from "@react-native-community/netinfo";

export default function App() {
  const netinfo = useNetInfo();

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latodLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latodLoaded) {
    return null;
  }

  const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    color: black;
  `;

  const Text = styled.Text`
    color: black;
  `;

  return (
    <>
      <ThemeProvider theme={theme}>
        {netinfo.isInternetReachable ? (
          <MoviesContextProvider>
            <FavouriteMovieContextProvider>
              <Navigation />
            </FavouriteMovieContextProvider>
          </MoviesContextProvider>
        ) : (
          <Container>
            <Text>it seems you're offline</Text>
          </Container>
        )}
      </ThemeProvider>
    </>
  );
}
