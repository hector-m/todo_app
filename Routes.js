import React from "react";
import { View } from "react-native";
import Home from "./Home";
import { createStackNavigator } from "react-navigation";

const Routes = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Home: {
      screen: Home
    }
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      headerTitleStyle: {
        fontWeight: "bold",
        color: "#fff",
      },
      headerTintColor: "#fff"
    }
  }
);

export default Routes;
