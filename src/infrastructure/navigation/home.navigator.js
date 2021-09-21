import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { MoviesScreen } from "../../features/screens/movies.screen";
import { MovieDetailsScreen } from "../../features/screens/movie-detail.screen";

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
