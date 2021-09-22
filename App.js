import React from "react";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { MoviesContextProvider } from "./src/services/movies/movie.context";
import { FavouriteMovieContextProvider } from "./src/services/favourites/favourites.context";
import { Navigation } from "./src/infrastructure/navigation";
import { theme } from "./src/infrastructure/theme";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latodLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latodLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <MoviesContextProvider>
          <FavouriteMovieContextProvider>
            <Navigation />
          </FavouriteMovieContextProvider>
        </MoviesContextProvider>
      </ThemeProvider>
    </>
  );
}
