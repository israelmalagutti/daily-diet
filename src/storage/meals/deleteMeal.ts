import AsyncStorage from "@react-native-async-storage/async-storage";

import { getAllMeals } from "./getAllMeals";

import { MEAL_COLLECTION } from "../storageConfig";

import { type MealType } from "@components/Meal/MealCard";

export const deleteMeal = async (deletedMeal: MealType) => {
  try {
    const storedMeals = await getAllMeals();
    console.log(JSON.stringify({ "BEFORE: ": storedMeals }));

    const meals = storedMeals.filter(meal => meal.id !== deletedMeal.id);
    console.log(JSON.stringify({ "AFTER: ": meals }));

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(meals));
  } catch (error) {
    throw error;
  }
};
