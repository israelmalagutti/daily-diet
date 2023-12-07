import { DietStyleProps } from "@components/DietPicker/styles";
import { MealType } from "@components/Meal/MealCard";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;

      mealInfo: { meal: MealType };

      newMeal: undefined;
      feedbackMeal: { diet: DietStyleProps };
    }
  }
}
