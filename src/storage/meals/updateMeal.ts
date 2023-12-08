import AsyncStorage from "@react-native-async-storage/async-storage";

import { type MealType } from "@components/Meal/MealCard";

import { MEAL_COLLECTION } from "../storageConfig";
import { getAllMeals } from "./getAllMeals";

export const updateMeal = async (updatedMeal: MealType) => {
  try {
    const storedMeals = await getAllMeals();

    const updatedMeals = storedMeals.map(meal =>
      meal.id === updatedMeal.id ? updatedMeal : meal
    );

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(updatedMeals));
  } catch (error: any) {
    throw new Error(`Failed to update meal: ${error.message}`);
  }
};
