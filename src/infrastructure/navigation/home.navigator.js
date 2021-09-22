import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { MoviesScreen } from "../../features/movies/screens/movies/movies.screen";
import { MovieDetailsScreen } from "../../features/movies/screens/movie-detail/movie-detail.screen";

const HomeStack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      }}>
      <HomeStack.Screen name="home" component={MoviesScreen} />
      <HomeStack.Screen name="MovieDetails" component={MovieDetailsScreen} />
    </HomeStack.Navigator>
  );
};
