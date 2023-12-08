import { useNavigation } from "@react-navigation/native";
import { format } from "date-fns";

import { DietStyleProps } from "@components/DietPicker/styles";

import { Container, Name, Spacer, Status, Time } from "./styles";

export type MealType = {
  id: number;

  name: string;
  description?: string;

  createdAt: string;

  diet: DietStyleProps;
};

export function MealCard(meal: MealType) {
  const navigation = useNavigation();

  const date = new Date(meal.createdAt);

  const formattedTime = format(date, "HH:mm");

  const handleNavigateMeal = (meal: MealType) => {
    navigation.navigate("mealInfo", { meal });
  };

  return (
    <Container onPress={() => handleNavigateMeal(meal)}>
      <Time>{formattedTime.padStart(2, "0")}</Time>
      <Spacer />
      <Name>{meal.name}</Name>

      <Status type={meal.diet} />
    </Container>
  );
}
