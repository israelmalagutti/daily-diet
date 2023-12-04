import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "../storageConfig";
import { MealType } from "@components/Meal/MealCard";

export const getAllMeals = async () => {
  try {
    const storedMeals = await AsyncStorage.getItem(MEAL_COLLECTION);

    const parsedMeals: MealType[] = storedMeals ? JSON.parse(storedMeals) : [];

    return parsedMeals;
  } catch (error) {
    throw error;
  }
};
