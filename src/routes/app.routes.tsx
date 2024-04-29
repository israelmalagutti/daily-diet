import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { MealStatistics } from "@screens/MealStatistics";
import { NewMeal, FeedbackMeal, MealInfo, EditMeal } from "@screens/Meal";

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
      <Screen name="mealStatistics" component={MealStatistics} />

      <Screen name="newMeal" component={NewMeal} />
      <Screen name="feedbackMeal" component={FeedbackMeal} />

      <Screen name="mealInfo" component={MealInfo} />

      <Screen name="editMeal" component={EditMeal} />
    </Navigator>
  );
}
