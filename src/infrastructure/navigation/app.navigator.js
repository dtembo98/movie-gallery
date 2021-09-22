import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { HomeNavigator } from "./home.navigator";
import { FavouriteMoviesScreen } from "../../features/screens/favourite-movies.screen";

const Tab = createBottomTabNavigator();
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Settings") {
            iconName = focused ? "account" : "account";
          } else if (route.name === "My Movies") {
            iconName = focused ? "movie" : "movie";
          }

          // You can return any component that you like here!
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        headerShown: false,
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#172731",
        },
      })}>
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="My Movies" component={FavouriteMoviesScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);
