import React from "react";

import { MoviesContextProvider } from "./src/services/movie.context";
import { Navigation } from "./src/infrastructure/navigation";

export default function App() {
  return (
    <>
      <MoviesContextProvider>
        <Navigation />
      </MoviesContextProvider>
    </>
  );
}
