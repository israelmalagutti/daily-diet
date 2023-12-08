import AsyncStorage from "@react-native-async-storage/async-storage";

import { type MealType } from "@components/Meal/MealCard";
import { type NewMealType } from "@screens/Meal/NewMeal";

import { MEAL_COLLECTION } from "@storage/storageConfig";

import { getAllMeals } from "./getAllMeals";

export const createMeal = async (newMeal: MealType) => {
  try {
    const storedMeals = await getAllMeals();

    await AsyncStorage.setItem(
      MEAL_COLLECTION,
      JSON.stringify([...storedMeals, newMeal])
    );
  } catch (error) {
    throw error;
  }
};
