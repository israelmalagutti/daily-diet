import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { NewMeal, FeedbackMeal } from "@screens/Meal";

import theme from "@theme/index";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        navigationBarColor: theme.COLORS.GRAY_100,
      }}
    >
      <Screen name="home" component={Home} />
      <Screen name="newMeal" component={NewMeal} />
      <Screen name="feedbackMeal" component={FeedbackMeal} />
    </Navigator>
  );
}
