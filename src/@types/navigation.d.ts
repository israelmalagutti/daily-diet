import type { MealType, DietProps } from "@dtos/MealType";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      mealStatistics: { meals: MealType[] };

      newMeal: undefined;
      feedbackMeal: { diet: DietProps };

      mealInfo: { meal: MealType };

      editMeal: { meal: MealType };
    }
  }
}
