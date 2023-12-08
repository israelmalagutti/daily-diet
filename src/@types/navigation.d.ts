import { DietStyleProps } from "@components/DietPicker/styles";
import { MealType } from "@components/Meal/MealCard";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;

      newMeal: undefined;
      feedbackMeal: { diet: DietStyleProps };

      mealInfo: { meal: MealType };

      editMeal: { meal: MealType };
    }
  }
}
