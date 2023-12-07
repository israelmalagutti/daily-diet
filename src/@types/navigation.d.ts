import { DietStyleProps } from "@components/DietPicker/styles";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;

      newMeal: undefined;
      feedbackMeal: { diet: DietStyleProps };
    }
  }
}
