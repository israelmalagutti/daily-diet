import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";

import { NewMeal } from "@screens/Meal";

export type MainNavigationRoutes = {
  Home: undefined;

  NewMeal: undefined;
};

const Stack = createNativeStackNavigator<MainNavigationRoutes>();

export function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="NewMeal"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="NewMeal" component={NewMeal} />
    </Stack.Navigator>
  );
}
