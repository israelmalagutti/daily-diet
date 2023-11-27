import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";

export type MainNavigationRoutes = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<MainNavigationRoutes>();

export function Routes() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
