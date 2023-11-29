import { useCallback, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Button, Header, Layout, Meal, MealsStatus } from "@components/index";
import { type MealType } from "@components/Meal/MealCard";

import { MEALS } from "@storage/index";

import {
  GroupedByReducerState,
  groupByDayReducer,
  statementListParser,
} from "@utils/groupByDayRecuder";

import { MealsContainer, MealsText, NewMealContainer } from "./styles";

export type MealSectionType = {
  sectionDate: string;
  content: MealType[];
};

export function Home() {
  const [meals, setMeals] = useState<MealType[]>(MEALS);

  const navigation = useNavigation();

  const groupByDay = useCallback(
    (data: MealType[]) =>
      Object.entries(
        data.reduce(groupByDayReducer, {} as GroupedByReducerState)
      ).map(statementListParser),
    []
  );

  return (
    <Layout>
      <Header />

      <MealsContainer>
        <MealsStatus.Card hasIcon onPress={() => undefined}>
          <MealsStatus.Title percentage={90.86} />
        </MealsStatus.Card>

        <NewMealContainer>
          <MealsText>Meals</MealsText>
          <Button text="Add a meal" icon="add" onPress={() => undefined} />
        </NewMealContainer>

        <Meal.Sections meals={groupByDay(meals)} />
      </MealsContainer>
    </Layout>
  );
}
